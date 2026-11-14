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
    servicesSubmenu: string;
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
    featuredTreatmentsEyebrow: string;
    featuredTreatmentsHeading: string;
    featuredTreatmentsSub: string;
    discover: string;
    contactEyebrow: string;
    contactHeading: string;
    contactSub: string;
    contactCta: string;
    bookCta: string;
  };
  category: {
    eyebrow: string;
    treatmentsCount: (n: number) => string;
    allServices: string;
    viewTreatment: string;
  };
  services: {
    eyebrow: string;
    heading: string;
    sub: string;
    viewAll: (n: number) => string;
  };
  coupons: {
    eyebrow: string;
    heading: string;
    sub: string;
    callCta: string;
    bookCta: string;
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
    closingEyebrow: string;
    closingHeading: string;
    prev: string;
    next: string;
    backToCategory: string;
  };
  ourSpace: {
    eyebrow: string;
    heading: string;
    cta: string;
    premiumHeading: string;
    premium: string;
    trustHeading: string;
    trustItems: { title: string; text: string }[];
    treatmentsHeading: string;
    treatmentsSub: string;
    signature: { title: string; text: string }[];
    ctaBandHeading: string;
    ctaBandCta: string;
  };
  contact: {
    hours: string;
    address: string;
    phone: string;
    email: string;
    follow: string;
    hoursValue: string[];
  };
  contactPage: {
    title: string;
    eyebrow: string;
    heading: string;
    sub: string;
    detailsHeading: string;
    formHeading: string;
    name: string;
    email: string;
    phone: string;
    interest: string;
    message: string;
    send: string;
    requiredNote: string;
    replyNote: string;
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
    announcement: "Buy a coupon for yourself or a friend — click here",
    dismiss: "Dismiss announcement",
    home: "Home",
    about: "Our Space",
    contact: "Contact",
    services: "Services",
    servicesSubmenu: "Toggle services submenu",
  },
  home: {
    eyebrow: "Aesthetics & Wellness Studio",
    heading: "Beauty begins with care.",
    sub: "Personalized facial and body treatments in a calm, considered space — designed around you.",
    primaryCta: "Book an appointment",
    secondaryCta: "Buy a coupon",
    aboutEyebrow: "About",
    aboutHeading: "Meet Zoi Kappou.",
    about: [
      "Zoi Kappou, owner and therapist at High Beauty Care, has over 20 years of experience in aesthetics and wellness. With a specialization in holistic treatments and continuous training in Greece and abroad, she brings top techniques from around the world to our space. Her love for personalized care and visible results has made her a point of reference — with more than 300 satisfied clients and 100+ five-star reviews confirming the quality of her services every day.",
    ],
    featuredEyebrow: "Signature treatment",
    featuredHeading: "Japanese Head Spa",
    featuredBody:
      "Traditional Japanese massage techniques meet modern scalp care. Deep relaxation for head, neck and shoulders — and healthier hair, from the root.",
    featuredCta: "Discover the treatment",
    featuredTreatmentsEyebrow: "Featured Treatments",
    featuredTreatmentsHeading: "The treatments our guests love most.",
    featuredTreatmentsSub:
      "From Japanese head spa to lymphatic body massage — every treatment starts with your personal diagnosis.",
    discover: "Discover",
    contactEyebrow: "Contact",
    contactHeading: "Book your visit.",
    contactSub:
      "Call us or send a message — we will find the right time and the right treatment for you.",
    contactCta: "Get in touch",
    bookCta: "Book an appointment",
  },
  category: {
    eyebrow: "Services",
    treatmentsCount: (n) => `${n} treatments`,
    allServices: "All services",
    viewTreatment: "View treatment",
  },
  services: {
    eyebrow: "Services",
    heading: "Every path to your best self.",
    sub: "Face, massage, body and hair removal — every treatment starts with your personal diagnosis.",
    viewAll: (n) => `View all treatments (${n})`,
  },
  coupons: {
    eyebrow: "Gift Coupons",
    heading: "Something beautiful is on its way.",
    sub: "We are preparing gift coupons you will be able to buy for yourself or a friend — redeemable for any treatment in our studio. Until then, call us to arrange yours or book your visit online.",
    callCta: "Call us",
    bookCta: "Book online",
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
    closingEyebrow: "Interested?",
    closingHeading: "Book your appointment",
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
  contactPage: {
    title: "Contact — High Beauty Care",
    eyebrow: "Contact",
    heading: "Book your <em>visit</em>.",
    sub: "Call us, send a message or visit the studio — together we'll find the right time and the right treatment for you.",
    detailsHeading: "Details",
    formHeading: "Send us a message",
    name: "Name",
    email: "Email",
    phone: "Phone",
    interest: "Treatment of interest",
    message: "Message",
    send: "Send message",
    requiredNote: "Fields marked with * are required.",
    replyNote: "We usually reply within one business day.",
  },
  ourSpace: {
    eyebrow: "Our Space",
    heading: "Discover the atmosphere, the aesthetics and the relaxation experience at High Beauty Care.",
    cta: "Book an appointment",
    premiumHeading: "A premium wellness space, designed for you.",
    premium:
      "In our space, every detail has been carefully considered to offer a sense of calm, privacy and genuine care. From the atmospheric lighting and the modern design of our treatment rooms to premium, certified cosmetology products, our goal is for you to leave the city's intense pace behind from the very first minute.",
    trustHeading: "Trusted by our guests",
    trustItems: [
      {
        title: "15+ Years in the field",
        text: "Long-standing presence, expertise and continuous training in modern and holistic aesthetics methods.",
      },
      {
        title: "100+ 5-Star Reviews",
        text: "Hundreds of satisfied guests praise our visible results, cleanliness and personal care.",
      },
      {
        title: "Personalized Diagnosis",
        text: "Every treatment starts with an analysis of your own needs — no standardized solutions.",
      },
      {
        title: "Absolute Privacy & Hygiene",
        text: "Strict sterilization protocols and a discreet, calm environment.",
      },
    ],
    treatmentsHeading: "The treatments that set us apart",
    treatmentsSub:
      "Among dozens of face and body treatments, our guests consistently choose us for three standout relaxation and detox experiences:",
    signature: [
      {
        title: "Japanese Head Spa",
        text: "The authentic Japanese ritual for the scalp, neck and shoulders that melts stress away and revitalizes the hair.",
      },
      {
        title: "Lymphatic Body Massage",
        text: "Specialized decongesting techniques that activate the lymph, reduce fluid retention and instantly bring a feeling of lightness.",
      },
      {
        title: "Relaxing Massage",
        text: "A holistic massage with essential oils that releases muscular tension and calms the mind.",
      },
    ],
    ctaBandHeading: "Your moment of calm awaits.",
    ctaBandCta: "Book your appointment today",
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
    announcement: "Αγοράστε κουπόνι για εσάς ή για έναν φίλο — κάντε κλικ εδώ",
    dismiss: "Απόκρυψη ανακοίνωσης",
    home: "Αρχική",
    about: "Ο χώρος μας",
    contact: "Επικοινωνία",
    services: "Υπηρεσίες",
    servicesSubmenu: "Εναλλαγή υπομενού υπηρεσιών",
  },
  home: {
    eyebrow: "Στούντιο Αισθητικής & Ευεξίας",
    heading: "Η ομορφιά ξεκινά από την περιποίηση.",
    sub: "Εξατομικευμένες θεραπείες προσώπου και σώματος σε έναν ήρεμο, προσεγμένο χώρο — σχεδιασμένες γύρω από εσάς.",
    primaryCta: "Κλείστε ραντεβού",
    secondaryCta: "Αγοράστε κουπόνι",
    aboutEyebrow: "Σχετικά",
    aboutHeading: "Γνωρίστε τη Ζωή Κάππου.",
    about: [
      "Η Ζωή Κάππου, ιδιοκτήτρια αλλά και θεραπεύτρια του High Beauty Care, διαθέτει πάνω από 20 χρόνια εμπειρίας στον χώρο της αισθητικής και της ευεξίας. Με εξειδίκευση στις ολιστικές θεραπείες και διαρκείς εκπαιδεύσεις σε Ελλάδα και εξωτερικό, φέρνει στον χώρο μας κορυφαίες τεχνικές από όλο τον κόσμο. Η αγάπη της για την εξατομικευμένη φροντίδα και τα ορατά αποτελέσματα την έχουν καταστήσει σημείο αναφοράς, με περισσότερους από 300 ευχαριστημένους πελάτες και 100+ αξιολογήσεις 5 αστέρων να επιβεβαιώνουν καθημερινά την ποιότητα των υπηρεσιών της.",
    ],
    featuredEyebrow: "Θεραπεία υπογραφή",
    featuredHeading: "Japanese Head Spa",
    featuredBody:
      "Παραδοσιακές ιαπωνικές τεχνικές μασάζ συναντούν τη σύγχρονη φροντίδα του τριχωτού. Βαθιά χαλάρωση για κεφάλι, λαιμό και ώμους — και πιο υγιή μαλλιά, από τη ρίζα.",
    featuredCta: "Ανακαλύψτε τη θεραπεία",
    featuredTreatmentsEyebrow: "Προτεινόμενες Θεραπείες",
    featuredTreatmentsHeading: "Οι πιο αγαπημένες μας θεραπείες.",
    featuredTreatmentsSub:
      "Από το Japanese Head Spa μέχρι το λεμφικό μασάζ σώματος — κάθε αγωγή ξεκινά με τη δική σας διάγνωση.",
    discover: "Ανακαλύψτε",
    contactEyebrow: "Επικοινωνία",
    contactHeading: "Κλείστε την επίσκεψή σας.",
    contactSub:
      "Καλέστε μας ή στείλτε μήνυμα — θα βρούμε τον κατάλληλο χρόνο και τη σωστή αγωγή για εσάς.",
    contactCta: "Επικοινωνήστε μαζί μας",
    bookCta: "Κλείστε ραντεβού",
  },
  category: {
    eyebrow: "Υπηρεσίες",
    treatmentsCount: (n) => `${n} θεραπείες`,
    allServices: "Όλες οι υπηρεσίες",
    viewTreatment: "Δείτε τη θεραπεία",
  },
  services: {
    eyebrow: "Υπηρεσίες",
    heading: "Κάθε δρόμος για τον καλύτερό σας εαυτό.",
    sub: "Πρόσωπο, μασάζ, σώμα και αποτρίχωση — κάθε αγωγή ξεκινά με τη δική σας διάγνωση.",
    viewAll: (n) => `Δείτε όλες τις θεραπείες (${n})`,
  },
  coupons: {
    eyebrow: "Κουπόνια Δώρου",
    heading: "Κάτι όμορφο έρχεται.",
    sub: "Ετοιμάζουμε κουπόνια δώρου που θα μπορείτε να αγοράσετε για εσάς ή για έναν αγαπημένο — με αξιοποίηση σε οποιαδήποτε θεραπεία του χώρου μας. Στο μεταξύ, καλέστε μας να τα κανονίσουμε ή κλείστε online την επίσκεψή σας.",
    callCta: "Καλέστε μας",
    bookCta: "Κλείστε online",
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
    closingEyebrow: "Ενδιαφέρεστε;",
    closingHeading: "Κλείστε το ραντεβού σας",
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
  contactPage: {
    title: "Επικοινωνία — High Beauty Care",
    eyebrow: "Επικοινωνία",
    heading: "Κλείστε την <em>επίσκεψή</em> σας.",
    sub: "Καλέστε μας, στείλτε μας μήνυμα ή επισκεφθείτε τον χώρο μας — μαζί θα βρούμε τον κατάλληλο χρόνο και τη σωστή αγωγή για εσάς.",
    detailsHeading: "Στοιχεία",
    formHeading: "Στείλτε μας μήνυμα",
    name: "Όνομα",
    email: "Email",
    phone: "Τηλέφωνο",
    interest: "Θεραπεία που σας ενδιαφέρει",
    message: "Μήνυμα",
    send: "Αποστολή μηνύματος",
    requiredNote: "Τα πεδία με * είναι υποχρεωτικά.",
    replyNote: "Συνήθως απαντάμε μέσα σε μία εργάσιμη ημέρα.",
  },
  ourSpace: {
    eyebrow: "Ο Χώρος μας",
    heading: "Ανακαλύψτε την ατμόσφαιρα, την αισθητική και την εμπειρία χαλάρωσης στο High Beauty Care.",
    cta: "Κλείστε Ραντεβού",
    premiumHeading: "Ένας premium χώρος ευεξίας, σχεδιασμένος για εσάς.",
    premium:
      "Στον χώρο μας, κάθε λεπτομέρεια έχει μελετηθεί για να προσφέρει αίσθηση ηρεμίας, ιδιαιτερότητας και ουσιαστικής φροντίδας. Από τον ατμοσφαιρικό φωτισμό και τη σύγχρονη αισθητική των καμπινών, μέχρι τα κορυφαία, πιστοποιημένα προϊόντα κοσμετολογίας, στόχος μας είναι να αφήνετε πίσω τους έντονους ρυθμούς της πόλης από το πρώτο λεπτό.",
    trustHeading: "Μας εμπιστεύονται",
    trustItems: [
      {
        title: "15+ Χρόνια στον χώρο",
        text: "Πολυετής παρουσία, εξειδίκευση και συνεχής εκπαίδευση στις σύγχρονες και ολιστικές μεθόδους αισθητικής.",
      },
      {
        title: "100+ Αξιολογήσεις 5 Αστέρων",
        text: "Εκατοντάδες ικανοποιημένοι επισκέπτες μάς επιβραβεύουν για τα ορατά αποτελέσματα, την καθαριότητα και την προσωπική φροντίδα.",
      },
      {
        title: "Εξατομικευμένη Διάγνωση",
        text: "Κάθε θεραπεία ξεκινά από την ανάλυση των δικών σας αναγκών, χωρίς τυποποιημένες λύσεις.",
      },
      {
        title: "Απόλυτη Ιδιαιτερότητα & Υγιεινή",
        text: "Αυστηρά πρωτόκολλα αποστείρωσης και διακριτικό, ήρεμο περιβάλλον.",
      },
    ],
    treatmentsHeading: "Οι θεραπείες που μάς έχουν κάνει να ξεχωρίσουμε",
    treatmentsSub:
      "Μεταξύ των δεκάδων αγωγών προσώπου και σώματος, οι επισκέπτες μας μάς επιλέγουν σταθερά για τρεις κορυφαίες εμπειρίες χαλάρωσης και αποτοξίνωσης:",
    signature: [
      {
        title: "Japanese Head Spa",
        text: "Η αυθεντική ιαπωνική τελετουργία φροντίδας του τριχωτού της κεφαλής, του αυχένα και των ώμων που απομακρύνει το στρες και αναζωογονεί τα μαλλιά.",
      },
      {
        title: "Λεμφικό Μασάζ Σώματος",
        text: "Εξειδικευμένες τεχνικές αποσυμφόρησης που ενεργοποιούν τη λέμφο, μειώνουν τις κατακρατήσεις και χαρίζουν άμεση αίσθηση ελαφρότητας.",
      },
      {
        title: "Χαλαρωτικό Μασάζ",
        text: "Ολιστική μάλαξη με αιθέρια έλαια που απελευθερώνει το σώμα από τη μυϊκή ένταση και ηρεμεί τον νου.",
      },
    ],
    ctaBandHeading: "Η στιγμή της χαλάρωσης σας περιμένει.",
    ctaBandCta: "Κλείστε το ραντεβού σας σήμερα",
  },
  footer: {
    rights: "Με επιφύλαξη παντός δικαιώματος.",
    services: "Υπηρεσίες",
    tagline: "Στούντιο Αισθητικής & Ευεξίας — Νέα Ιωνία, Αττική",
  },
};

export const ui: Record<"en" | "el", UIStrings> = { en, el };
