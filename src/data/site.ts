import { categories as en } from "./treatments/en";
import { categories as el } from "./treatments/el";
import type { Category, Treatment } from "./types";

export type Locale = "en" | "el";
export const locales: Locale[] = ["en", "el"];

export function getCategories(locale: Locale): Category[] {
  return locale === "el" ? el : en;
}

export function getCategory(locale: Locale, slug: string): Category | undefined {
  return getCategories(locale).find((c) => c.slug === slug);
}

export function getTreatment(
  locale: Locale,
  categorySlug: string,
  treatmentSlug: string,
): { category: Category; treatment: Treatment } | undefined {
  const category = getCategory(locale, categorySlug);
  const treatment = category?.treatments.find((t) => t.slug === treatmentSlug);
  if (!category || !treatment) return undefined;
  return { category, treatment };
}

/** Treatments featured on the homepage, in display order */
const featuredTreatmentSlugs = [
  "japanese-head-spa",
  "lymphatic-body-massage",
  "relaxing-massage",
];

export function getFeaturedTreatments(
  locale: Locale,
): { category: Category; treatment: Treatment }[] {
  return featuredTreatmentSlugs
    .map((slug) => {
      for (const category of getCategories(locale)) {
        const treatment = category.treatments.find((t) => t.slug === slug);
        if (treatment) return { category, treatment };
      }
      return undefined;
    })
    .filter(
      (item): item is { category: Category; treatment: Treatment } =>
        item !== undefined,
    );
}

/** Previous / next treatment within the same category */
export function getTreatmentNeighbours(
  locale: Locale,
  categorySlug: string,
  treatmentSlug: string,
): { prev?: Treatment; next?: Treatment } {
  const category = getCategory(locale, categorySlug);
  if (!category) return {};
  const i = category.treatments.findIndex((t) => t.slug === treatmentSlug);
  if (i === -1) return {};
  return {
    prev: category.treatments[i - 1],
    next: category.treatments[i + 1],
  };
}
