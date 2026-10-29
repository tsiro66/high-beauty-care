import type { Category } from "../types";

export const categories: Category[] = [
  {
    slug: "face",
    title: "Face (Holistic & Aesthetic Treatments)",
    short:
      "Holistic and aesthetic facial treatments — from natural lifting to deep cleansing.",
    lead:
      "Holistic and specialized treatments combining traditional techniques with premium cosmetology products. From Rejuvance natural lifting to deep cleansing, every treatment starts with a diagnosis of your skin's needs.",
    treatments: [
      {
        slug: "rejuvance",
        title: "Rejuvance (Natural Lifting)",
        pageTitle: "Rejuvance — Natural Holistic Face Lifting",
        tagline:
          "Unlock your skin's natural collagen production and rejuvenate your face.",
        description:
          "Rejuvance is a pioneering, holistic and non-invasive rejuvenation method. It is a specialized massage that releases the body's own collagen and elastin. It activates the muscles, connective tissue and energy channels of the face, neck and head, while offering deep relaxation throughout the body.",
        problems: [
          "Muscle Tension & Stress: Releases tight muscles in the skull, neck and shoulders.",
          "Sagging & Deep Wrinkles: Restores elasticity and smooths expression lines.",
          "Headaches & Jaw Pain: Relieves migraines and tension.",
        ],
        benefits: [
          "Instantly luminous, smooth and rested face from the very first session.",
          "Intense hydration and reduction of dark circles and under-eye bags.",
          "Smoothing of deep wrinkles and disappearance of fine lines.",
          "Holistic sense of calm and reduced anxiety.",
        ],
        protocol:
          "Ideally applied as a series of 6 sessions, or as a standalone radiance treatment before special occasions.",
        note: "Suitable for women and men of all ages.",
      },
      {
        slug: "gua-sha",
        title: "Gua Sha",
        pageTitle: "Gua Sha — Traditional Facial Rejuvenation & Detox",
        tagline:
          "The ancient Chinese technique for a sculpted oval and flawless skin.",
        description:
          "With roots in Traditional Chinese Medicine, Gua Sha is a painless scraping technique using special “boards” made of jade, agate or bone. It focuses on the face, neck and décolleté, aiming to rejuvenate the connective tissue and eliminate toxins.",
        problems: [
          "Retention & Puffiness: Drains the lymph and reduces swelling.",
          "Loss of Firmness: Firms the contour (oval) of the face.",
        ],
        benefits: [
          "Smoothing of wrinkles and improvement of dark circles.",
          "Stimulation of blood circulation and deep detoxification.",
          "Better penetration and absorption of skincare products.",
        ],
        note: "Sensation: extremely pleasant, painless and relaxing.",
      },
      {
        slug: "facial-acupuncture",
        title: "Facial (Cosmetic) Acupuncture",
        pageTitle:
          "Facial Acupuncture — Natural Lifting & Cellular Regeneration",
        tagline:
          "The power of traditional medicine for deep firming and radiance.",
        description:
          "A non-invasive, completely safe and painless method applied on specific meridian points of the face. Using thin, sterile needles, it stimulates the deeper tissues and muscles, increasing blood circulation and the production of collagen and elastin.",
        problems: [
          "Deep Sagging & Muscle Weakness: Acts on the deep facial muscles.",
          "Acne & Discolorations: Improves the overall quality and health of the skin.",
        ],
        benefits: [
          "Long-term firmness and lifting results.",
          "Reduction of wrinkles, disappearance of fine lines and reduced dark circles.",
          "Increased elasticity of the facial muscles.",
        ],
      },
      {
        slug: "facial-cupping",
        title: "Facial Cupping",
        pageTitle: "Facial Cupping — Intradermal Massage with Silicone Cups",
        tagline:
          "Rejuvenation, lymphatic drainage and natural “filling” of wrinkles.",
        description:
          "Based on ancient Chinese and Egyptian medicine, it uses the technique of gentle vacuum pressure with small silicone cups. Applied on the face, eyes, neck and décolleté, offering an instant lifting effect.",
        problems: [
          "Double Chin & Puffiness: Improves lymph flow and firmness.",
          "Scars & Fine Lines: Stimulates the regeneration of the skin layers.",
        ],
        benefits: [
          "Activation of collagen and elastin production.",
          "“Filling in” of wrinkles and relief of muscle tension.",
          "Increased absorption of cosmetic serums.",
        ],
      },
      {
        slug: "facial-drainage",
        title: "Facial Lymphatic Drainage Massage",
        pageTitle: "Facial Lymphatic Drainage — Detox & Decongestion",
        tagline:
          "Strengthen your skin's natural defenses and eliminate puffiness.",
        description:
          "Specialized massage techniques that decongest the facial lymph nodes and improve lymph flow, removing toxins.",
        benefits: [
          "Elimination of fluid retention and reduction of eye puffiness.",
          "Helps address mild acne and leaves the skin smooth and elastic.",
          "Relieves migraines and boosts the immune system.",
        ],
      },
      {
        slug: "silk-therapy",
        title: "Silk Facial Therapy with Zen Products",
        pageTitle: "Silk Facial Therapy — Organic Radiance Treatment",
        tagline:
          "The natural protein sericin for silky, firm skin.",
        description:
          "An organic treatment using natural silkworm cocoons. It offers gentle physical exfoliation while nourishing the skin with the protein sericin, which protects collagen and elastin.",
        benefits: [
          "Removes dead cells and excess oil.",
          "Soothes redness, irritation and sun marks.",
          "Helps address acne and offers instant silky radiance.",
        ],
      },
      {
        slug: "face-taping",
        title: "Beauty Face Taping",
        pageTitle:
          "Beauty Face Taping — Non-Invasive Lifting with Kinesiology Tapes",
        tagline:
          "Prevent and fight wrinkles with the power of kinesiotherapy.",
        description:
          "A modern technique in which special kinesiology tapes are applied on targeted points of the face to lift the tissues and relax the muscles.",
        benefits: [
          "Instant lifting effect and smoothing of lines.",
          "Prevents the formation of new expression lines.",
        ],
      },
      {
        slug: "japanese-head-spa",
        title: "Japanese Head Spa",
        pageTitle: "Japanese Head Spa — Holistic Head & Scalp Care",
        tagline: "Revitalization, detoxification and deep relaxation.",
        description:
          "An authentic Japanese treatment combining specialized massage of the head, neck and shoulders with special cleansing and hydrating products for the scalp.",
        benefits: [
          "Boosts blood circulation and promotes healthy hair growth.",
          "Reduces hair loss and improves hair structure.",
          "Relieves stress, fatigue and mental tension.",
        ],
      },
      {
        slug: "deep-cleansing",
        title: "Deep Facial Cleansing",
        pageTitle:
          "Deep Facial Cleansing — The Foundation of Healthy Skin",
        tagline: "Free your skin from pollutants and excess sebum.",
        description:
          "The most essential aesthetic treatment: it decongests the skin from dust, exhaust fumes and trapped sebum. It opens the pores, removes dead cells and lets the skin breathe.",
        benefits: [
          "Revives dull and tired skin.",
          "Maximizes the absorption and effectiveness of all following treatments.",
        ],
      },
      {
        slug: "hydra-4ha",
        title: "Intensive Hydra 4Ha Hydration Treatment (Sothys)",
        pageTitle: "Hydra 4Ha by Sothys — 6-Step Intensive Hydration",
        tagline: "The ultimate source of moisture for plump, youthful skin.",
        description:
          "A high-tech treatment combining 4 sources of hyaluronic acid with 2 patented active ingredients (organic rowan berry peptides & 1055 Boletus extract).",
        benefits: [
          "“Quenches” the skin and restores its volume.",
          "Revives the skin's youthfulness.",
        ],
        protocol: "A series of 3 treatments is recommended.",
      },
      {
        slug: "deep-hydration-nourishing",
        title: "Deep Hydration & Nourishing Treatment",
        pageTitle: "Deep Hydration & Nourishing Treatment",
        tagline:
          "Protection from atmospheric conditions and restoration of elasticity.",
        description:
          "A treatment that pairs ideally with facial cleansing. It detoxifies the skin and makes it receptive to beneficial nutrients.",
        benefits: [
          "Offers instant radiance, health and elasticity.",
          "Protects against irritations and environmental dryness.",
        ],
      },
      {
        slug: "cryo-eye",
        title: "Cryo Eye Professional Treatment",
        pageTitle:
          "Cryo Eye Treatment — Specialized Eye Care with Porcelain Applicators",
        tagline: "A rested gaze without dark circles and bags.",
        description:
          "An eye treatment (45 minutes) combining special porcelain applicators dipped in ice for an instant decongesting effect of freshness.",
        duration: "45 min",
        benefits: [
          "“Erases” the signs of fatigue.",
          "Smoothes fine lines, reduces dark circles and puffiness.",
        ],
      },
      {
        slug: "gold-energy",
        title: "Gold Energy Anti-Pollution Treatment",
        pageTitle: "Gold Energy Anti-Pollution — Antioxidant Shield of Protection",
        tagline:
          "Protection from pollution, heavy metals and ultraviolet radiation.",
        description:
          "A highly effective anti-aging treatment. It fights environmental stress, UV radiation and dehydration, using resveratrol nanoparticles (Smart Crystals® Resveratrol).",
        note: "Free from silicones, mineral oils, EO/PEG emulsifiers, EDTA.",
        ingredients: [
          {
            name: "UV Caps",
            text: "Stable filters forming a protective membrane against free radicals.",
          },
          {
            name: "Hydractin",
            text: "Stimulates cellular metabolism and offers gentle enzymatic exfoliation with papaya.",
          },
          {
            name: "Glycolift",
            text: "Creates a “second skin” that neutralizes heavy metals.",
          },
        ],
      },
      {
        slug: "mature-skin-detox",
        title: "Detoxifying & Balancing Treatment for Mature Skin",
        pageTitle: "Detoxifying Treatment for Mature Skin",
        tagline:
          "A specialized restart for skin burdened by stress and time.",
        description:
          "A treatment designed exclusively for mature skin that has accumulated toxins from smoking, alcohol, sun and hormonal imbalances.",
        contra: "Recent burns, open scars.",
        note: "Free from allergens, fragrance/mineral oils, silicones.",
        ingredients: [
          {
            name: "Zinc Salts & Iris Extract",
            text: "Mechanical UVA/UVB filter & collagen protection.",
          },
          {
            name: "Vitamin A & Oleuropein",
            text: "Cellular regeneration, smoothing of deep wrinkles & powerful antioxidant action.",
          },
          {
            name: "Lavender & Jojoba Essential Oils",
            text: "Sebum regulation, deep nourishment and fight against dryness.",
          },
          {
            name: "Allantoin & Kaolin",
            text: "Enhanced regeneration and gentle decongestion from white clay.",
          },
        ],
      },
      {
        slug: "q10-lifting",
        title: "Anti-Aging & Firming with Coenzyme Q10",
        pageTitle: "Anti-Aging & Firming with Coenzyme Q10",
        tagline: "Energizing the cells for instant regeneration.",
        description:
          "A treatment that gives the skin the energy it needs for cellular restoration, combined with an intradermal facial massage.",
        ingredients: [
          {
            name: "Nano-Lipid Carriers with Q10",
            text: "Maximum absorption for instant regeneration.",
          },
          {
            name: "Sunflower Extract & Cotton Peptides",
            text: "Protection of DNA from the sun and activation of the cells' self-repair.",
          },
          {
            name: "Magnolia, Ginger & Fucose Extract",
            text: "Anti-inflammatory action, circulation stimulation and smoothing of wrinkles.",
          },
        ],
      },
      {
        slug: "vitamin-c",
        title: "Professional Vitamin C Treatment",
        pageTitle:
          "Professional Vitamin C — Intensive Radiance & Detox Treatment",
        tagline:
          "The ultimate vitamin treatment for even tone and firmness.",
        description:
          "A multifunctional treatment harnessing Vitamin C. Applied in combination with warm silk herb pouches and a specialized facial massage.",
        contra: "Burns, scars.",
        note: "Free from allergens, parabens, silicones, glycerin.",
        ingredients: [
          {
            name: "Vitamin Complex (C, A, E, F)",
            text: "Brightening, collagen boost and repair of dry skin.",
          },
          {
            name: "Hyaluronic Acid, Retinol & Plant Squalene",
            text: "Moisture stabilization, hyperpigmentation regulation and protection from dehydration.",
          },
        ],
      },
      {
        slug: "zensation",
        title: "Professional Zensation Treatment",
        pageTitle:
          "Professional Zensation — Hydrolipidic Film Reconstruction Treatment",
        tagline:
          "Instant relief from irritations, inflammations and environmental stress.",
        description:
          "A targeted treatment for sensitive or stressed skin that needs restoration of its protective barrier.",
        ingredients: [
          {
            name: "MG Relax, Lotus Extract & Neutrazen",
            text: "Neuropeptides and magnesium for instant reduction of inflammations.",
          },
          {
            name: "Biofolia, Bodyfensine & Kudzu",
            text: "Strengthening of the natural flora, boosting the skin's immune system and antihistamine action.",
          },
        ],
      },
      {
        slug: "neck-decollete",
        title: "Lifting, Firming & Anti-Aging Treatment for Neck & Décolleté",
        pageTitle: "Specialized Neck & Décolleté Care",
        tagline: "Targeted anti-wrinkle action for a delicate area.",
        description:
          "A specialized treatment for the mature, sagging or stressed skin of the neck and chest area.",
        ingredients: [
          {
            name: "Marine Micromolecular Collagen & Lipid Nanospheres",
            text: "Increase elasticity and firm the skin.",
          },
          {
            name: "Shea Butter, Allantoin, Beeswax & Aloe Vera",
            text: "Deep nourishment, antiseptic protection and collagen boost.",
          },
        ],
      },
    ],
  },
  {
    slug: "massage",
    title: "Massage (Holistic & Therapeutic)",
    short: "Holistic and therapeutic massages for relaxation, relief and well-being.",
    lead:
      "From classic Swedish massage to specialized techniques for pregnancy and chronic pain, every massage is adapted to your needs and combined with natural and essential oils.",
    treatments: [
      {
        slug: "swedish-massage",
        title: "Swedish (Classic) Massage",
        pageTitle: "Swedish Massage — The Classic European Relaxation Therapy",
        tagline:
          "Releasing muscle tension and boosting blood circulation.",
        description:
          "Massage with gentle movements and light pressures combined with essential oils, covering the whole body from feet to head.",
        benefits: [
          "Reduces muscle toxins and increases oxygen circulation.",
          "Activates the lymph and strengthens the immune system.",
        ],
      },
      {
        slug: "hot-stones",
        title: "Hot Stones Massage",
        pageTitle: "Hot Stones Massage — Thermal Therapy with Volcanic Stones",
        tagline: "Balancing energy flow and deep muscle relaxation.",
        description:
          "A massage with warm, smooth volcanic stones (basalts) placed on selected energy zones of the body together with essential oils.",
        benefits: [
          "Relief from back and neck pain and premenstrual syndrome.",
          "Improved circulation, toxin removal and fight against insomnia.",
        ],
      },
      {
        slug: "deep-tissue",
        title: "Deep Tissue Massage",
        pageTitle: "Deep Tissue Massage — Deep Therapeutic Massage",
        tagline: "Get rid of chronic pain and knots.",
        description:
          "A dynamic treatment using fingers, palms and elbows to reach the deeper muscle fibers of the lower back, back and neck.",
        benefits: [
          "Oxygenates the muscles and removes persistent tension “knots”.",
        ],
      },
      {
        slug: "relaxing-massage",
        title: "Relaxing Massage",
        pageTitle: "Relaxing Body Massage — Releasing Everyday Stress",
        tagline: "Calm for body and soul.",
        description:
          "A revitalizing massage with essential oils that fights fatigue and energy blockages.",
        benefits: [
          "Restores heart rate to normal levels.",
          "Relieves cramps and migraines.",
        ],
      },
      {
        slug: "release-relax-motion",
        title: "Release and Relax Motion Massage",
        pageTitle: "Release & Relax Motion — Holistic Kinesiotherapy & Massage",
        tagline: "Restoring the body's natural range of motion.",
        description:
          "A specialized method combining therapeutic massage with 28 different manipulations of pressure, stretching and movement.",
        benefits: [
          "Ideal for injuries, athletes and problems caused by poor posture.",
        ],
      },
      {
        slug: "pregnancy-massage",
        title: "Pregnancy Massage",
        pageTitle:
          "Pregnancy Massage — Care & Relief for the Expecting Mother",
        tagline: "Gentle techniques for rest and reduced swelling.",
        description:
          "A specialized technique of gentle strokes that reduces stress hormones and improves lymph circulation.",
        contra: "Hypertension, anemia, cardiac disorders.",
        note: "A gynecologist's approval is required.",
        benefits: [
          "Relieves muscle cramps, stiffness and headaches.",
        ],
      },
      {
        slug: "body-cupping",
        title: "Body Cupping Massage",
        pageTitle: "Body Cupping Massage — Therapeutic Silicone Cups",
        tagline:
          "Releasing adhesions and activating peripheral circulation.",
        description:
          "An intradermal massage with silicone cups that uses suction to improve blood flow.",
        benefits: [
          "Tones the nervous system and releases adhesions in the connective tissue.",
          "Activates lymphatic decongestion.",
        ],
      },
      {
        slug: "shell-massage",
        title: "Shell Massage",
        pageTitle: "Warm Pacific Shell Massage",
        tagline: "An ancient ritual experience of relaxation.",
        description:
          "Application of natural warmed shells in combination with essential oils and special massage manipulations.",
        benefits: [
          "Reduced musculoskeletal pain, detoxification and deep relaxation.",
        ],
      },
      {
        slug: "craniosacral",
        title: "Craniosacral Therapy",
        pageTitle:
          "Craniosacral Therapy — Gentle Regulation of the Nervous System",
        tagline: "Strengthen the body's self-correction capacity.",
        description:
          "A gentle therapeutic approach with extremely delicate manipulations that restore the functionality of the central nervous system.",
        benefits: [
          "Fights migraines, neck syndrome, chronic fatigue and insomnia.",
        ],
      },
    ],
  },
  {
    slug: "body",
    title: "Body (Cellulite, Lipolysis & Firming Treatments)",
    short:
      "Cellulite, lipolysis and firming treatments — natural methods and technology.",
    lead:
      "A complete body-sculpting program: lymphatic massages, natural tool-based techniques and state-of-the-art devices that activate the lymph and microcirculation.",
    treatments: [
      {
        slug: "lymphatic-body-massage",
        title: "Lymphatic Body Massage",
        pageTitle: "Lymphatic Body Massage — Activating the Lymph up to 20 Times",
        tagline:
          "Instant decongestion, detoxification and fight against cellulite.",
        description:
          "Specialized massage techniques that stimulate the lymphatic system, helping eliminate toxins and excess fluids.",
        benefits: [
          "Dramatic reduction of fluid retention and the feeling of swollen limbs.",
          "Instant feeling of lightness, activated metabolism and edema absorption.",
        ],
      },
      {
        slug: "anti-cellulite-massage",
        title: "Anti-Cellulite Massage",
        pageTitle: "Anti-Cellulite Massage & Localized Fat Treatment",
        tagline:
          "Natural body sculpting and elimination of the orange-peel appearance.",
        description:
          "A dynamic massage with upward techniques, plant/essential oils and specialized lipolytic creams.",
        benefits: [
          "Acts against fat accumulation, stimulates circulation and offers loss of centimetres.",
        ],
      },
      {
        slug: "body-scrub",
        title: "Body Scrub — Exfoliation & Hydration",
        pageTitle: "Body Scrub — Exfoliation, Revitalization & Body Hydration",
        tagline: "With marine algae, caffeine and red algae.",
        description:
          "A treatment that activates peripheral circulation and collagen production.",
        contra: "Pregnancy, diabetes, phlebitis.",
        note: "Free from iodine, allergens, silicones.",
        ingredients: [
          {
            name: "Algae & Caffeine",
            text: "Powerful lipolytic action that shrinks fat cells.",
          },
          {
            name: "Red Algae & Guarana Extract",
            text: "Activation of fat metabolism and cellular renewal.",
          },
        ],
      },
      {
        slug: "madero-therapy",
        title: "Madero Therapy",
        pageTitle: "Madero Therapy — Natural Sculpting with Anatomical Wooden Tools",
        tagline:
          "A holistic technique for lymphatic drainage and improved definition.",
        description:
          "A 100% natural, non-invasive method using special wooden tools for targeted pressure on thighs, buttocks and abdomen.",
        benefits: [
          "Breaks down fat cells, fights cellulite and causes no allergies.",
        ],
      },
      {
        slug: "spm-digital",
        title: "S.P.M. Digital (Suction-Pump Massage)",
        pageTitle: "S.P.M. Digital — Mechanical Body “Liposculpture”",
        tagline:
          "Vacuum suction for fat burning, firming and smoothing of stretch marks.",
        description:
          "A revolutionary method using a vacuum-pressure device (suction + massage) to break down fat reserves.",
        benefits: [
          "Increases the burning of fat cells and strengthens the connective tissue.",
          "Offers firming on sagging areas (breasts, abdomen, inner thighs) and smooths stretch marks.",
        ],
      },
      {
        slug: "body-cupping-body",
        title: "Body Cupping Massage (Body)",
        pageTitle: "Body Cupping — Intradermal Cellulite Treatment",
        tagline: "Suction without tissue compression for lipolysis and detox.",
        description:
          "Placement of special silicone cups on the buttocks, thighs and abdomen, creating negative pressure.",
        benefits: [
          "Breaks down accumulated fat, reduces fluid retention and creates new connective tissue.",
        ],
      },
      {
        slug: "skin-tightening-hammer",
        title: "Skin Sagging Treatment with Acupuncture Hammer",
        pageTitle: "Firming Treatment with Acupuncture Hammer (Isabelle Lancray)",
        tagline: "A pioneering method of instant skin regeneration.",
        description:
          "A specialized skin-activation technique with an acupuncture hammer, combined with therapeutic products by Isabelle Lancray Paris.",
        benefits: [
          "Triggers instant collagen/elastin production and firming on sagging areas.",
        ],
      },
      {
        slug: "vacustyler",
        title: "Vacustyler",
        pageTitle: "Vacustyler — Negative Pressure Technology for Total Detox",
        tagline:
          "Lymph activation and volume reduction in hips, buttocks and calves.",
        description:
          "A medical-technology device operating with alternating negative pressure and decompression on the lower body, removing metabolic waste from swollen fat cells.",
        benefits: [
          "Dramatic results in pain reduction and cellulite from the very first session.",
        ],
      },
      {
        slug: "thalasso",
        title: "Thalassotherapy Treatment",
        pageTitle: "Body Thalassotherapy — Detox & Oxygenation with Algae",
        tagline:
          "The beneficial power of seawater and mineral elements.",
        description:
          "Application of algae, sea salt and trace elements on legs, buttocks, abdomen and arms.",
        benefits: [
          "Deep exfoliation, hydration, increased elastin production and smooth skin.",
        ],
      },
      {
        slug: "body-wrap",
        title: "Body Wrap",
        pageTitle: "Body Wrap — Cosmetic Compression & Sculpting Treatment",
        tagline: "Activating lipolysis with a special wrapping membrane.",
        description:
          "A membrane-wrapping technique with targeted pressure on buttocks, legs and abdomen.",
        benefits: [
          "Stimulates lymphatic circulation, activates metabolism and improves the orange-peel appearance.",
        ],
      },
      {
        slug: "body-taping",
        title: "Body Cosmetic Taping",
        pageTitle: "Body Cosmetic Taping — Body Kinesio Taping",
        tagline: "Keeping lymph flow open 24/7.",
        description:
          "Application of kinesiology tapes on the body that work like lymphatic massage all day long.",
        benefits: [
          "Subsiding of edemas and muscle relaxation (pairs ideally with lymphatic massage).",
        ],
      },
    ],
  },
  {
    slug: "hair-removal",
    title: "Hair Removal (Wax & Halawa)",
    short: "Wax and halawa hair removal — results that last 4–6 weeks.",
    lead:
      "Classic wax hair removal and natural halawa hair removal, for clean and velvety skin that lasts.",
    treatments: [
      {
        slug: "waxing-halawa",
        title: "Wax & Halawa Hair Removal",
        pageTitle: "Wax & Halawa Hair Removal — Velvety Skin",
        tagline:
          "Semi-permanent hair removal for body and sensitive areas.",
        description:
          "With wax: the classic method for legs, arms, underarms and bikini. With regular application, the follicle weakens. With halawa: a 100% natural, gentle method made of sugar, ideal for extremely sensitive skin (underarms, bikini).",
        benefits: [
          "Results that last 4 to 6 weeks.",
          "Leaves the skin perfectly soft, while hair gradually thins and weakens.",
        ],
        protocol: "Results last 4–6 weeks.",
      },
    ],
  },
];
