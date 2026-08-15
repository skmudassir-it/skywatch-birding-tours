export type Service = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  longDescription: string[];
  features: string[];
  icon: string;
  image: string;
  priceFrom: string;
};

export const services: Service[] = [
  {
    slug: "guided-birding-walks",
    name: "Guided Birding Walks",
    tagline: "Slow mornings, sharp eyes, unforgettable sightings.",
    description:
      "Two-hour guided walks through the region’s best habitats with an expert guide who knows every call, perch and flyway.",
    longDescription: [
      "Every walk is paced for looking, not distance. Your guide reads the habitat — the rustle in the reeds, the silhouette on the snag — and turns ordinary trails into a running commentary of identification tips, behaviour and local ecology.",
      "Groups are capped at ten guests so everyone gets the spotting scope, the answer to their question, and a clear view of every bird. Binoculars, scopes and field guides are provided at no extra cost.",
    ],
    features: [
      "Expert local guides, max 10 guests",
      "Binoculars and spotting scopes included",
      "Beginner-friendly, all paces welcome",
      "Seasonal hotspot itineraries",
      "Digital species list after every walk",
      "Rain-or-shine with covered viewing hides",
    ],
    icon: "Binoculars",
    image: "/images/service-guided-walks.jpg",
    priceFrom: "$45",
  },
  {
    slug: "dawn-chorus-tours",
    name: "Dawn Chorus Tours",
    tagline: "The forest’s best concert, before the world wakes up.",
    description:
      "Start before sunrise and listen as the woodland comes alive — warblers, thrushes and flycatchers singing from every branch.",
    longDescription: [
      "There is no better hour for birdsong. As the first light touches the canopy, resident birds greet the day in a layered chorus you will not hear anywhere else. We position ourselves before dawn so you catch the very first notes.",
      "Along the way your guide identifies each voice — pitch, pattern, rhythm — until you can name a dozen species by ear alone. Coffee, pastries and a portable blind are part of the experience.",
    ],
    features: [
      "Pre-dawn positioning for first light",
      "Birdsong identification by ear",
      "Warbler, thrush and flycatcher focus",
      "Hot coffee and pastries included",
      "Portable viewing blinds provided",
      "3-hour tour, ends with golden-hour light",
    ],
    icon: "Sunrise",
    image: "/images/service-dawn-chorus.jpg",
    priceFrom: "$35",
  },
  {
    slug: "migratory-bird-tours",
    name: "Migratory Bird Tours",
    tagline: "Follow the flyways at the most electric time of year.",
    description:
      "Seasonal tours timed to peak migration — thousands of shorebirds, waterfowl and raptors moving through our wetlands and coastlines.",
    longDescription: [
      "Twice a year, the sky fills. Our migration tours are timed to the exact weeks when shorebirds flood the mudflats, geese stage on the lakes and raptors ride the thermals south. We follow the daily forecasts to put you where the birds are.",
      "Expect spectacle and science: count protocols, banding demonstrations with permitted researchers, and identification practice for the lookalike species that define migration season.",
    ],
    features: [
      "Peak-season dates, forecast-driven routing",
      "Shorebird, waterfowl and raptor days",
      "Count protocols and banding demos",
      "Long-range scopes on tripods included",
      "Hot-spot itineraries updated daily",
      "Full-day tours with packed field lunch",
    ],
    icon: "Route",
    image: "/images/service-migration.jpg",
    priceFrom: "$95",
  },
  {
    slug: "photography-focused-birding",
    name: "Photography-Focused Birding",
    tagline: "Frame the shot the birds almost posed for.",
    description:
      "Small photography-first outings built around light, behaviour and composition — with a guide who shoots alongside you.",
    longDescription: [
      "These tours are for photographers of every level. We time every session to golden light, position hides and vehicles for eye-level angles, and wait out behaviour — preening, feeding, flight — instead of ticking species off a list.",
      "Your guide shares fieldcraft for sharp flight shots, back-button focus tricks and ethics that keep birds safe and shots legal. Post-processing pointers are included on request.",
    ],
    features: [
      "Golden-hour scheduling only",
      "Purpose-built hides and blind setups",
      "Flight, feeding and behaviour staging",
      "Gear advice for your exact camera",
      "Ethics-first, disturbance-free approach",
      "Max 6 photographers per outing",
    ],
    icon: "Camera",
    image: "/images/service-photography.jpg",
    priceFrom: "$140",
  },
  {
    slug: "private-small-group-tours",
    name: "Private & Small Group Tours",
    tagline: "Your own guide, your own pace, your own itinerary.",
    description:
      "A dedicated guide for couples, families and small groups — tailored routes, flexible timing and personal coaching.",
    longDescription: [
      "Sometimes you want the trip shaped around you: a family with young birders, a couple celebrating an anniversary, a group of colleagues on a retreat. We build the route, pace and focus together before you arrive.",
      "Your private guide stays with you the whole day, adjusts on the fly when something rare shows up, and makes sure every skill level in your group gets their moment with the scope.",
    ],
    features: [
      "Fully customisable routes and timing",
      "Dedicated guide for your group only",
      "Great for families and first-timers",
      "Pick-up from your accommodation",
      "Choice of habitat and species focus",
      "Flexible half-day or full-day formats",
    ],
    icon: "Users",
    image: "/images/service-private.jpg",
    priceFrom: "$250",
  },
  {
    slug: "birding-workshops-classes",
    name: "Birding Workshops & Classes",
    tagline: "Learn the skills that turn sightings into understanding.",
    description:
      "Hands-on classes in bird identification, birdsong, optics, field sketching and eBird — from beginner basics to advanced ID.",
    longDescription: [
      "Workshops combine short classroom sessions with long field sessions. Learn how to use binoculars and scopes properly, how to find birds by habitat and behaviour, and how to identify tricky species by the details that matter.",
      "Advanced tracks cover birdsong mnemonics, shorebird and gull ID, digiscoping and contributing to community science. Every workshop ends with skills you can use on your own tomorrow.",
    ],
    features: [
      "Beginner to advanced skill tracks",
      "Optics setup and technique coaching",
      "Birdsong, ID and digiscoping modules",
      "eBird and community science training",
      "Field sketching with an artist-instructor",
      "Class sizes capped at 12",
    ],
    icon: "GraduationCap",
    image: "/images/service-workshops.jpg",
    priceFrom: "$60",
  },
  {
    slug: "multi-day-birding-excursions",
    name: "Multi-Day Birding Excursions",
    tagline: "Four days, four habitats, four hundred species of wonder.",
    description:
      "Immersive multi-day expeditions across the region’s richest habitats, with lodging, transport and guiding fully arranged.",
    longDescription: [
      "Our signature expeditions link the coast, wetlands, forests and highlands into one seamless itinerary. Each day targets a different habitat at its best hour, with comfortable lodging, all transport and every meal arranged.",
      "Evenings are for lists and laughter: species tally, photography reviews and tomorrow’s game plan. Whether your target is a lifer or a life-changing week, these excursions deliver.",
    ],
    features: [
      "4-day / 3-night immersive itineraries",
      "Lodging, meals and transport included",
      "Coastal, wetland, forest and highland days",
      "Two guides on every expedition",
      "Night-owl and dawn sessions daily",
      "Custom expeditions for groups of 6+",
    ],
    icon: "TentTree",
    image: "/images/service-excursions.jpg",
    priceFrom: "$650",
  },
];

export const serviceBySlug = (slug: string) =>
  services.find((s) => s.slug === slug);

export type Project = {
  slug: string;
  title: string;
  location: string;
  category: string;
  summary: string;
  details: string[];
  image: string;
  stats: { label: string; value: string }[];
};

export const projects: Project[] = [
  {
    slug: "willow-bend-wetlands",
    title: "Willow Bend Wetlands — Restoration & Bird Count",
    location: "Willow Bend Preserve",
    category: "Conservation",
    summary:
      "A two-year partnership to restore 40 acres of drained marsh — and the waterbird numbers that came flooding back.",
    details: [
      "Advised on water-level management that re-flooded 40 acres of historic marsh.",
      "Led quarterly community bird counts, logging 214 species over two years.",
      "Rare species returned: Sandhill Cranes, Least Bitterns and a state-first Yellow Rail.",
    ],
    image: "/images/project-wetlands.jpg",
    stats: [
      { label: "Species logged", value: "214" },
      { label: "Acres restored", value: "40" },
      { label: "Years", value: "2" },
    ],
  },
  {
    slug: "cape-cormorant-count",
    title: "Cape Cormorant — Seabird Colony Monitoring",
    location: "North Cape Cliffs",
    category: "Research",
    summary:
      "Three seasons of cliff-top monitoring for one of the region’s largest seabird colonies, with volunteers from six states.",
    details: [
      "Coordinated 18 volunteer days with licensed researchers at the colony.",
      "Documented 12,000+ breeding pairs of cormorants, murres and gulls.",
      "Built a photo-ID library now used by the university’s ornithology lab.",
    ],
    image: "/images/project-coast.jpg",
    stats: [
      { label: "Breeding pairs", value: "12,000+" },
      { label: "Volunteer days", value: "18" },
      { label: "Seasons", value: "3" },
    ],
  },
  {
    slug: "old-growth-canopy",
    title: "Old-Growth Canopy — Warbler Migration Study",
    location: "Fern Hollow Reserve",
    category: "Expedition",
    summary:
      "A dawn-to-dusk expedition series tracking neotropical warblers through a remnant old-growth forest.",
    details: [
      "Ran 30 dawn-chorus expeditions over two migration seasons.",
      "Clients logged 27 warbler species, including Cerulean and Golden-winged.",
      "Sightings data now feeds the state’s breeding-bird atlas.",
    ],
    image: "/images/project-forest.jpg",
    stats: [
      { label: "Warbler species", value: "27" },
      { label: "Expeditions", value: "30" },
      { label: "Data feeds", value: "State atlas" },
    ],
  },
];

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  rating: number;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "Our guide found a Yellow Rail on the second morning — a bird I had chased for fifteen years. The patience and skill of this team is off the charts.",
    name: "Helen M.",
    role: "Birder for 20+ years",
    rating: 5,
  },
  {
    quote:
      "I came in knowing nothing and left able to identify forty species by sound alone. The dawn chorus tour changed how I hear the world.",
    name: "Priya K.",
    role: "First-time birder",
    rating: 5,
  },
  {
    quote:
      "As a photographer I am picky about light and ethics. SkyWatch timed everything to golden hour and never pushed a bird. Best frames of my year.",
    name: "Dan R.",
    role: "Wildlife photographer",
    rating: 5,
  },
  {
    quote:
      "They arranged a private tour for our family of five, kids aged 7 to 13. Everyone had their own scope moment. We are already booked again.",
    name: "The Okafor Family",
    role: "Private tour guests",
    rating: 5,
  },
  {
    quote:
      "The multi-day expedition was flawlessly organised — lodging, meals, logistics, two brilliant guides. We tallied 189 species in four days.",
    name: "Carol & Jim W.",
    role: "Multi-day expedition guests",
    rating: 5,
  },
];

export type Faq = { question: string; answer: string };

export const faqs: Faq[] = [
  {
    question: "I am a complete beginner — are your tours suitable?",
    answer:
      "Absolutely. Over half our guests are first-time birders. We provide binoculars, show you how to use them, and pace every tour around questions. You will leave knowing more than you ever expected.",
  },
  {
    question: "What should I bring on a tour?",
    answer:
      "Comfortable walking shoes, layers for changing weather, a water bottle and sunscreen. We supply binoculars, spotting scopes, field guides and rain ponchos. In winter, add a hat and gloves — we stay out in all conditions.",
  },
  {
    question: "What is the best season for birding here?",
    answer:
      "Spring and fall migration are spectacular, with hundreds of species moving through. Summer is superb for breeding birds and chicks, and winter brings waterfowl and owls. Honestly, every month has its stars — that is why we run tours year-round.",
  },
  {
    question: "How big are the groups?",
    answer:
      "Public walks are capped at 10 guests with one guide, and our photography outings at 6. Private tours are just your group. Small numbers mean better views, more questions answered and less disturbance to the birds.",
  },
  {
    question: "Can children join the tours?",
    answer:
      "Yes — we love young birders! Kids 12 and under join public walks free with a paying adult, and we run dedicated family sessions with junior binoculars and games. Private tours are the best fit for very young children.",
  },
  {
    question: "What is your cancellation policy?",
    answer:
      "Life happens. Cancel up to 48 hours before your tour for a full refund, or reschedule at no charge anytime. If we cancel due to unsafe weather, you get a full refund or priority rebooking — your choice.",
  },
];
