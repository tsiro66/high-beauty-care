import { contact } from "./contact";

export type UIStrings = {
  nav: {
    menu: string;
    close: string;
    book: string;
    announcement: string;
    dismiss: string;
    home: string;
    about: string;
    contact: string;
    services: string;
  };
  home: {
    eyebrow: string;
    heading: string;
    sub: string;
    primaryCta: string;
    secondaryCta: string;
    aboutEyebrow: string;
    aboutHeading: string;
    about: string[];
    featuredEyebrow: string;
    featuredHeading: string;
    featuredBody: string;
    featuredCta: string;
    categoriesEyebrow: string;
    categoriesHeading: string;
    categoriesSub: string;
    discover: string;
    contactEyebrow: string;
    contactHeading: string;
    contactSub: string;
    bookCta: string;
  };
  category: {
    eyebrow: string;
    treatmentsCount: (n: number) => string;
    allServices: string;
    viewTreatment: string;
  };
  treatment: {
    eyebrow: string;
    benefits: string;
    ingredients: string;
    protocol: string;
    duration: string;
    contra: string;
    note: string;
    bookCta: string;
    prev: string;
    next: string;
    backToCategory: string;
  };
  contact: {
    hours: string;
    address: string;
    phone: string;
    email: string;
    follow: string;
    hoursValue: string[];
  };
  footer: {
    rights: string;
    services: string;
    tagline: string;
  };
};

const en: UIStrings = {
  nav: {
    menu: "Menu",
    close: "Close",
    book: "Book",
    announcement: "Now accepting new appointments — book your first visit",
    dismiss: "Dismiss announcement",
    home: "Home",
    about: "Our Space",
    contact: "Contact",
    services: "Services",
  },
  home: {
    eyebrow: "Aesthetics & Wellness Studio",
    heading: "Beauty begins with care.",
    sub: "Personalized facial and body treatments in a calm, considered space — designed around you.",
    primaryCta: "Book an appointment",
    secondaryCta: "Explore services",
    aboutEyebrow: "About",
    aboutHeading: "Wellness & Aesthetics, together.",
    about: [
      "In a beautiful, modern space we combine well-being and aesthetics. We offer facial treatments, holistic face and body therapies, as well as specialized programs against cellulite.",
      "Diagnosing your personal needs is our priority. We combine modern treatments and aesthetic methods with products bearing the seal of leading cosmetology houses.",
      "At High Beauty Care Center you will enjoy privacy and personal care. Our years of experience in the field of beauty guarantee the best results. In an age of intense rhythms, our goal is to offer you moments of relaxation and well-being — and to reveal, together, your best self.",
    ],
    featuredEyebrow: "Signature treatment",
    featuredHeading: "Japanese Head Spa",
    featuredBody:
      "Traditional Japanese massage techniques meet modern scalp care. Deep relaxation for head, neck and shoulders — and healthier hair, from the root.",
    featuredCta: "Discover the treatment",
    categoriesEyebrow: "Services",
    categoriesHeading: "Four paths to your best self.",
    categoriesSub:
      "From holistic face therapies to specialized body programs — every treatment starts with your personal diagnosis.",
    discover: "Discover",
    contactEyebrow: "Contact",
    contactHeading: "Book your visit.",
    contactSub:
      "Call us or send a message — we will find the right time and the right treatment for you.",
    bookCta: "Book an appointment",
  },
  category: {
    eyebrow: "Services",
    treatmentsCount: (n) => `${n} treatments`,
    allServices: "All services",
    viewTreatment: "View treatment",
  },
  treatment: {
    eyebrow: "Treatment",
    problems: "Which problem it solves",
    benefits: "Benefits",
    ingredients: "Active ingredients",
    protocol: "Protocol",
    duration: "Duration",
    contra: "Contraindications",
    note: "Note",
    bookCta: "Book this treatment",
    prev: "Previous",
    next: "Next",
    backToCategory: "Back to services",
  },
  contact: {
    hours: "Hours",
    address: "Address",
    phone: "Phone",
    email: "Email",
    follow: "Follow",
    hoursValue: ["Mon – Fri: 10:00 – 20:00", "Saturday: 10:00 – 15:00", "Sunday: closed"],
  },
  footer: {
    rights: "All rights reserved.",
    services: "Services",
    tagline: "Aesthetics & Wellness Studio — Nea Ionia, Attica",
  },
};

const el: UIStrings = {
  nav: {
    menu: "Μενού",
    close: "Κλείσιμο",
    book: "Ραντεβού",
    announcement: "Δεχόμαστε νέα ραντεβού — κλείστε την πρώτη σας επίσκεψη",
    dismiss: "Απόκρυψη ανακοίνωσης",
    home: "Αρχική",
    about: "Ο χώρος μας",
    contact: "Επικοινωνία",
    services: "Υπηρεσίες",
  },
  home: {
    eyebrow: "Στούντιο Αισθητικής & Ευεξίας",
    heading: "Η ομορφιά ξεκινά από την περιποίηση.",
    sub: "Εξατομικευμένες θεραπείες προσώπου και σώματος σε έναν ήρεμο, προσεγμένο χώρο — σχεδιασμένες γύρω από εσάς.",
    primaryCta: "Κλείστε ραντεβού",
    secondaryCta: "Δείτε τις υπηρεσίες",
    aboutEyebrow: "Σχετικά",
    aboutHeading: "Ευεξία και Αισθητική, μαζί.",
    about: [
      "Σε έναν όμορφο και μοντέρνο χώρο συνδυάζουμε την Ευεξία και την Αισθητική. Προσφέρουμε περιποιήσεις προσώπου, ολιστικές θεραπείες προσώπου και σώματος, καθώς και εξειδικευμένες αγωγές κατά της κυτταρίτιδας.",
      "Η διάγνωση των προσωπικών σας αναγκών είναι για μας προτεραιότητα. Συνδυάζουμε σύγχρονες αγωγές και μεθόδους αισθητικής με προϊόντα που φέρουν τη σφραγίδα κορυφαίων εταιρειών στον τομέα της κοσμετολογίας.",
      "Στον χώρο του High Beauty Care Center θα απολαύσετε ιδιωτικότητα και προσωπική φροντίδα. Η πολυετής εμπειρία μας στον χώρο της ομορφιάς εγγυάται τα καλύτερα αποτελέσματα. Στόχος μας είναι, σε μια εποχή με έντονους ρυθμούς, να σας προσφέρουμε στιγμές χαλάρωσης και ευεξίας — και να αναδείξουμε μαζί τον καλύτερό σας εαυτό.",
    ],
    featuredEyebrow: "Θεραπεία υπογραφή",
    featuredHeading: "Japanese Head Spa",
    featuredBody:
      "Παραδοσιακές ιαπωνικές τεχνικές μασάζ συναντούν τη σύγχρονη φροντίδα του τριχωτού. Βαθιά χαλάρωση για κεφάλι, λαιμό και ώμους — και πιο υγιή μαλλιά, από τη ρίζα.",
    featuredCta: "Ανακαλύψτε τη θεραπεία",
    categoriesEyebrow: "Υπηρεσίες",
    categoriesHeading: "Τέσσερις δρόμοι για τον καλύτερο εαυτό σας.",
    categoriesSub:
      "Από τις ολιστικές θεραπείες προσώπου ως τα εξειδικευμένα προγράμματα σώματος — κάθε αγωγή ξεκινά με τη δική σας διάγνωση.",
    discover: "Ανακαλύψτε",
    contactEyebrow: "Επικοινωνία",
    contactHeading: "Κλείστε την επίσκεψή σας.",
    contactSub:
      "Καλέστε μας ή στείλτε μήνυμα — θα βρούμε τον κατάλληλο χρόνο και τη σωστή αγωγή για εσάς.",
    bookCta: "Κλείστε ραντεβού",
  },
  category: {
    eyebrow: "Υπηρεσίες",
    treatmentsCount: (n) => `${n} θεραπείες`,
    allServices: "Όλες οι υπηρεσίες",
    viewTreatment: "Δείτε τη θεραπεία",
  },
  treatment: {
    eyebrow: "Θεραπεία",
    problems: "Ποιο Πρόβλημα Λύνει",
    benefits: "Οφέλη",
    ingredients: "Δραστικά συστατικά",
    protocol: "Πρωτόκολλο",
    duration: "Διάρκεια",
    contra: "Αντενδείξεις",
    note: "Σημείωση",
    bookCta: "Κλείστε αυτή τη θεραπεία",
    prev: "Προηγούμενη",
    next: "Επόμενη",
    backToCategory: "Πίσω στις υπηρεσίες",
  },
  contact: {
    hours: "Ωράριο",
    address: "Διεύθυνση",
    phone: "Τηλέφωνο",
    email: "Email",
    follow: "Follow",
    hoursValue: ["Δευτ. – Παρ.: 10:00 – 20:00", "Σάββατο: 10:00 – 15:00", "Κυριακή: κλειστά"],
  },
  footer: {
    rights: "Με επιφύλαξη παντός δικαιώματος.",
    services: "Υπηρεσίες",
    tagline: "Στούντιο Αισθητικής & Ευεξίας — Νέα Ιωνία, Αττική",
  },
};

export const ui: Record<"en" | "el", UIStrings> = { en, el };
