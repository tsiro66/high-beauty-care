import fs from "node:fs";
import path from "node:path";
import type { Locale } from "./site";

export type GoogleReview = {
  author: string;
  authorUri?: string;
  authorPhoto?: string;
  rating: number;
  relativeTime: string;
  text: string;
};

export type GoogleReviews = {
  rating: number;
  total: number;
  reviews: GoogleReview[];
};

/** Refetch at most once a day (covers repeated dev-server requests too). */
const CACHE_MAX_AGE_MS = 24 * 60 * 60 * 1000;

// Anchor on the project root — import.meta.url is unstable inside the
// bundled build output (it points at a temp dir that gets cleaned up).
const CACHE_PATH = (locale: Locale) =>
  path.resolve(process.cwd(), "src", "data", `google-reviews.${locale}.json`);

function readCache(locale: Locale): GoogleReviews | null {
  try {
    return JSON.parse(fs.readFileSync(CACHE_PATH(locale), "utf8")) as GoogleReviews;
  } catch {
    return null;
  }
}

function isCacheFresh(locale: Locale): boolean {
  try {
    const age = Date.now() - fs.statSync(CACHE_PATH(locale)).mtimeMs;
    return age < CACHE_MAX_AGE_MS;
  } catch {
    return false;
  }
}

/**
 * Google reviews for the business listing, fetched at build time via the
 * Places API (New) Text Search — one request per locale per 24h window.
 *
 * Setup:
 *   1. console.cloud.google.com → enable "Places API (New)"
 *   2. Create an API key, restrict it to the "Places API (New)" API only
 *   3. Put it in .env as GOOGLE_PLACES_API_KEY=...
 *
 * Without a key (or if the API fails) the latest cached snapshot is used;
 * with no cache at all the section renders nothing — the site still builds.
 */
export async function getGoogleReviews(locale: Locale): Promise<GoogleReviews | null> {
  if (isCacheFresh(locale)) return readCache(locale);

  const key = import.meta.env.GOOGLE_PLACES_API_KEY as string | undefined;
  if (!key) return readCache(locale);

  try {
    const res = await fetch("https://places.googleapis.com/v1/places:searchText", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Goog-Api-Key": key,
        "X-Goog-FieldMask":
          "places.displayName,places.rating,places.userRatingCount,places.reviews",
      },
      body: JSON.stringify({
        textQuery: "High Beauty Care, Λεωφ. Ηρακλείου 187, Νέα Ιωνία",
        languageCode: locale === "el" ? "el" : "en",
      }),
    });

    if (!res.ok) {
      throw new Error(`Places API responded with ${res.status}`);
    }

    const data = await res.json();
    const place =
      data.places?.find(
        (p: { displayName?: { text?: string } }) =>
          p.displayName?.text?.includes("High Beauty Care"),
      ) ?? data.places?.[0];

    if (!place || typeof place.rating !== "number" || !place.reviews?.length) {
      throw new Error("Listing not found or no reviews returned");
    }

    const payload: GoogleReviews = {
      rating: place.rating,
      total: place.userRatingCount ?? place.reviews.length,
      reviews: place.reviews.map(
        (r: {
          authorAttribution?: { displayName?: string; uri?: string; photoUri?: string };
          rating?: number;
          relativePublishTimeDescription?: string;
          text?: { text?: string };
          originalText?: { text?: string };
        }) => ({
          author: r.authorAttribution?.displayName ?? "Google user",
          authorUri: r.authorAttribution?.uri,
          authorPhoto: r.authorAttribution?.photoUri,
          rating: r.rating ?? 5,
          relativeTime: r.relativePublishTimeDescription ?? "",
          // Keep the authentic review language (original, not auto-translated).
          text: r.originalText?.text ?? r.text?.text ?? "",
        }),
      ),
    };

    fs.writeFileSync(CACHE_PATH(locale), JSON.stringify(payload, null, 2) + "\n");
    return payload;
  } catch (err) {
    console.warn("[reviews] fetch failed, using cached data:", err);
    return readCache(locale);
  }
}
