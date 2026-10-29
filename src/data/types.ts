export type Ingredient = {
  name: string;
  text: string;
};

export type Treatment = {
  slug: string;
  /** Short display title (cards, nav lists) */
  title: string;
  /** Full SEO-style page title ("Τίτλος Σελίδας") */
  pageTitle: string;
  /** Italic tagline — used as card one-liner and detail page subtitle */
  tagline: string;
  /** Full description ("Τι είναι;") */
  description: string;
  /** "Ποιο Πρόβλημα Λύνει;" bullets */
  problems?: string[];
  /** "Τα Οφέλη" bullets */
  benefits?: string[];
  ingredients?: Ingredient[];
  /** Contraindications */
  contra?: string;
  /** Treatment protocol */
  protocol?: string;
  /** Duration */
  duration?: string;
  /** Any extra note (suitable-for, approvals, etc.) */
  note?: string;
};

export type Category = {
  slug: string;
  title: string;
  /** Short one-liner used on category cards */
  short: string;
  /** Intro paragraph shown at the top of the category page */
  lead?: string;
  treatments: Treatment[];
};
