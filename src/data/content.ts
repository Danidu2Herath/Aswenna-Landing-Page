/* ==========================================================================
   ASWENNA — SITE CONTENT
   All copy for the landing page lives here so it can be edited in one place.
   ========================================================================== */

export const site = {
  name: "Aswenna",
  title: "Agricultural Intelligence Platform",
  tagline: "Smarter fields, greater future",
  promise: "Empowering Farmers, Growing Prosperity.",
  appUrl: "#platform",
};

/* Interface strings that are not part of any one section. */
export const ui = {
  getStarted: "Get started",
  openMenu: "Open menu",
  closeMenu: "Close menu",
  primaryNav: "Primary",
  language: "Language",
  chooseLanguage: "Choose a language",
};

export const nav = [
  { href: "#why", label: "Why Aswenna" },
  { href: "#engine", label: "How it works" },
  { href: "#features", label: "Features" },
  { href: "#install", label: "Hardware" },
  { href: "#pricing", label: "Pricing" },
  { href: "#faq", label: "FAQ" },
];

/* --- 01 Hero ------------------------------------------------------------- */
export const hero = {
  badge: "Agricultural Intelligence Platform",
  badgeTag: "Sri Lanka",
  title: ["Every Harvest Begins", "With a Smarter Beginning."],
  sub: "Discover a new way to understand your land, nurture your crops and grow with confidence through intelligent agricultural technology.",
  primaryCta: "Explore the platform",
  secondaryCta: "See how it works",
  cards: [
    { label: "Soil moisture", value: "Live node", note: "Measured on plot", tone: "measured" as const },
    { label: "Rainfall outlook", value: "Hyperlocal", note: "Station + regional feed", tone: "estimated" as const },
  ],
};

/* --- 02 Soil ------------------------------------------------------------- */
export const soil = {
  eyebrow: "Below the surface",
  title: "Healthy Harvests Begin Beneath the Surface.",
  sub: "Every plot has its own characteristics. Understanding soil moisture, temperature, pH and nutrient conditions helps farmers make better cultivation decisions.",
  capabilities: [
    { icon: "MapPin", title: "Geo-located soil profiling", text: "A soil profile is built for the exact plot a farmer marks on the map." },
    { icon: "Droplets", title: "Soil moisture monitoring", text: "Moisture in the root zone is tracked so watering follows the soil, not the calendar." },
    { icon: "Thermometer", title: "Soil temperature monitoring", text: "Temperature readings support sowing and germination decisions." },
    { icon: "Zap", title: "Electrical conductivity (EC)", text: "EC measurements indicate salinity and overall nutrient balance in the soil." },
    { icon: "FlaskConical", title: "pH and NPK profiling", text: "Collected through handheld probes shared across a farmer organization." },
  ],
  transparency: {
    title: "Two kinds of numbers. Always labelled.",
    text: "Aswenna clearly distinguishes between estimated soil values derived from regional databases and actual measurements collected by field devices. A farmer always knows which one they are reading.",
    rows: [
      { tone: "estimated" as const, label: "Estimated", text: "Derived from regional soil databases for the mapped location." },
      { tone: "measured" as const, label: "Measured", text: "Collected directly by a field device or handheld probe on the plot." },
    ],
  },
};

/* --- 03 Growth journey ---------------------------------------------------- */
export const journey = {
  eyebrow: "The growth journey",
  title: "From Seed to Harvest.",
  sub: "A crop passes through six recognisable stages. Aswenna's intelligent cultivation calendar adapts its recommendations at each one.",
  stages: [
    { n: "01", name: "Seed", text: "A seed placed within the soil." },
    { n: "02", name: "Germination", text: "The seed begins developing its first roots and shoot." },
    { n: "03", name: "Seedling", text: "The first leaves emerge above the soil." },
    { n: "04", name: "Young Plant", text: "The stem strengthens and the leaves develop." },
    { n: "05", name: "Growing Plant", text: "The plant develops more branches and a larger leaf structure." },
    { n: "06", name: "Mature Plant", text: "A fully developed crop ready for its next agricultural stage." },
  ],
  adapts: {
    title: "What the calendar adapts at every stage",
    items: [
      "Irrigation schedules",
      "Fertilizer application",
      "Crop maintenance",
      "Cultivation activities",
      "Weather-dependent adjustments",
    ],
  },
};

/* --- 04 Field scanning ---------------------------------------------------- */
export const field = {
  eyebrow: "Field scanning",
  title: "Intelligence Across the Land.",
  sub: "Beyond a single sensor point, Aswenna reads the whole plot — its boundaries, its canopy, its weather and its risks.",
  items: [
    {
      icon: "Map",
      title: "Geo-Located Land Mapping",
      text: "Farmers identify their plots on a map and receive a personalized soil profile for that location.",
      photo: "/images/photos/field-land-mapping.webp",
      alt: "A satellite map view of farmland with place labels",
    },
    {
      icon: "Satellite",
      title: "Satellite Crop-Health Monitoring",
      text: "Satellite imagery is converted into vegetation-index (NDVI) maps to identify stressed crop areas.",
      photo: "/images/photos/field-crop-health.webp",
      alt: "Aerial view of circular irrigated crop fields",
    },
    {
      icon: "CloudRain",
      title: "Hyperlocal Weather Intelligence",
      text: "Monitors rainfall, temperature, humidity, wind, and leaf wetness using weather stations and regional weather services.",
      photo: "/images/placeholders/panel-weather.svg",
      alt: "Placeholder panel for hyperlocal weather readings",
    },
    {
      icon: "Bug",
      title: "Pest and Disease Detection",
      text: "Identifies potential pest outbreaks and disease risks through monitoring, environmental conditions, and AI-assisted diagnosis.",
      photo: "/images/photos/field-pest-detection.webp",
      alt: "Close-up of a leaf showing disease spots",
    },
  ],
};

/* --- 05 Intelligence engine ----------------------------------------------- */
export const engine = {
  eyebrow: "The intelligence engine",
  title: "How Aswenna Works.",
  sub: "A closed loop of five stages. Data leaves the field, becomes understanding, and returns to the farmer as an action.",
  stages: [
    { icon: "Radar", name: "Sense", text: "Field nodes, weather stations, pest traps, satellites, and farmer photographs produce agricultural data." },
    { icon: "RadioTower", name: "Connect", text: "LoRaWAN technology connects field devices to village gateways, while mobile connectivity transfers data to the cloud." },
    { icon: "Layers", name: "Understand", text: "The cloud combines sensor readings, soil maps, weather forecasts, and market prices into a live profile for each plot." },
    { icon: "BrainCircuit", name: "Decide", text: "Rules and machine-learning models generate recommendations, cultivation-calendar updates, irrigation commands, and warnings." },
    { icon: "Sprout", name: "Act", text: "Farmers receive advice via the app, SMS, or voice calls, while connected irrigation valves and pumps can operate automatically." },
  ],
};

/* --- 06 Smart farming ----------------------------------------------------- */
export const smart = {
  eyebrow: "Smart farming",
  title: "From Insight to Action.",
  sub: "Six capabilities that turn a plot's live profile into decisions a farmer can act on today.",
  features: [
    { icon: "Wheat", title: "Crop Recommendation", text: "Analyses soil conditions, weather forecasts, available water, historical prices, and nearby planting patterns to recommend suitable and profitable crops." },
    { icon: "CalendarRange", title: "Dynamic Cultivation Calendar", text: "Builds personalized cultivation schedules that automatically adapt when rainfall, soil conditions, or forecasts change." },
    { icon: "Waves", title: "Smart Irrigation", text: "Automatically activates irrigation when measured soil moisture drops below the set threshold, stops when moisture recovers, and allows manual farmer overrides." },
    { icon: "ScanSearch", title: "AI-Powered Pest & Disease Diagnosis", text: "Lets farmers photograph affected leaves or pests to receive AI-assisted diagnosis and mitigation advice." },
    { icon: "TrendingUp", title: "Market Trend Analytics", text: "Analyses wholesale prices from economic centres such as Dambulla and Piliyandala alongside anonymized planting data to forecast supply conditions." },
    { icon: "PackageCheck", title: "Post-Harvest Monitoring", text: "Monitors storage temperature and humidity and provides QR-based harvest traceability." },
  ],
};

/* --- 07 IoT ecosystem ----------------------------------------------------- */
export const hardware = {
  eyebrow: "Field technology",
  title: "The IoT Ecosystem.",
  sub: "Hardware built for village conditions — solar powered, long range, and shareable across a farmer organization.",
  components: [
    { icon: "Cpu", name: "ESP32-based soil monitoring nodes" },
    { icon: "Droplet", name: "Soil moisture sensors" },
    { icon: "TestTube", name: "Handheld pH and NPK soil probes" },
    { icon: "CloudSun", name: "Micro weather stations" },
    { icon: "Bug", name: "Smart pest traps" },
    { icon: "Gauge", name: "Irrigation controllers & water flow meters" },
    { icon: "RadioTower", name: "Village LoRaWAN gateways" },
    { icon: "SunMedium", name: "Solar-powered field power units" },
  ],
};

/* --- 08 Platform ---------------------------------------------------------- */
export const platform = {
  eyebrow: "Connected agriculture",
  title: "The Aswenna Platform.",
  sub: "Proposed interfaces for farmers, their organizations and the extension officers who support them.",
  screens: [
    { name: "Farmer dashboard", text: "Today's plot status, alerts and the next action." },
    { name: "Land registration & mapping", text: "Draw a plot boundary and receive its soil profile." },
    { name: "Soil integrity & monitoring", text: "Moisture, temperature, EC, pH and NPK over time." },
    { name: "Crop recommendations", text: "Suitable and profitable crops for this plot and season." },
    { name: "Cultivation calendar", text: "A schedule that rewrites itself when conditions change." },
    { name: "Pests and alerts", text: "Outbreak risks, warnings and mitigation advice." },
    { name: "Market analytics", text: "Wholesale price trends and supply forecasts." },
    { name: "Device monitoring", text: "Node battery, signal and last-reported readings." },
    { name: "Smart irrigation", text: "Thresholds, valve state and manual override." },
    { name: "Extension officer area dashboard", text: "An area-wide view for officers supporting many farms." },
  ],
};

/* --- 09 Roadmap ----------------------------------------------------------- */
export const roadmap = {
  eyebrow: "Strategic implementation",
  title: "The Roadmap.",
  sub: "Phases 01–03 define the project scope. Phase 04 collects future extensions. All phases describe planned capabilities, not deployed commercial operations.",
  scopeLabel: "Project scope",
  futureLabel: "Future work",
  phases: [
    {
      n: "Phase 01",
      name: "Software Core",
      status: "Planned" as const,
      scope: true,
      items: ["Soil profiling", "Crop recommendations", "Cultivation calendar", "Alerts", "Market analytics", "Satellite crop-health maps", "SMS / voice alerts", "Offline-first application"],
    },
    {
      n: "Phase 02",
      name: "Sensing Pilot",
      status: "Planned" as const,
      scope: true,
      items: ["Village gateway", "Shared weather station", "Handheld soil probe", "Soil nodes on selected pilot plots"],
    },
    {
      n: "Phase 03",
      name: "Automation",
      status: "Planned" as const,
      scope: true,
      items: ["Automated irrigation controllers", "Adaptive cultivation calendars", "Planting-data supply forecasts", "Digital twins", "Organization dashboards"],
    },
    {
      n: "Phase 04",
      name: "Future Extensions",
      status: "Proposed" as const,
      scope: false,
      items: ["Smart pest traps", "Post-harvest storage monitoring", "QR traceability", "Drone services", "Elephant-intrusion warnings"],
    },
  ],
};

/* --- 10 CTA + footer ------------------------------------------------------ */
export const cta = {
  title: "Grow Smarter. Harvest Better. Prosper Together.",
  sub: "With Aswenna, every decision begins with understanding the land. Bringing together farmers, intelligent technology and agricultural data to build a more resilient future for Sri Lankan agriculture.",
  primary: "Explore the platform",
  secondary: "Talk to the team",
};

export const footer = {
  blurb: "An IoT-enabled precision farming platform for Sri Lankan agriculture — soil intelligence, hyperlocal weather, AI recommendations, smart irrigation, crop-health monitoring and market intelligence.",
  columns: [
    {
      title: "Platform",
      links: [
        { label: "Why Aswenna", href: "#why" },
        { label: "Soil intelligence", href: "#soil" },
        { label: "Across Maha & Yala", href: "#seasons" },
        { label: "Field scanning", href: "#field" },
        { label: "The Aswenna platform", href: "#platform" },
      ],
    },
    {
      title: "Technology",
      links: [
        { label: "How it works", href: "#engine" },
        { label: "Features & capabilities", href: "#features" },
        { label: "IoT ecosystem", href: "#hardware" },
        { label: "Field installation", href: "#install" },
        { label: "Roadmap", href: "#roadmap" },
      ],
    },
    {
      title: "Get in touch",
      links: [
        { label: "Participation tiers", href: "#pricing" },
        { label: "Frequently asked questions", href: "#faq" },
        { label: "Farmer organizations", href: "#contact" },
        { label: "Contact us", href: "#contact" },
      ],
    },
  ],
  note: "Roadmap phases describe planned and proposed capabilities. Aswenna is an academic and agricultural research initiative, not a deployed commercial service.",
};

/* ==========================================================================
   ADDITIONAL SECTIONS
   Structure and headings taken from the Aswenna reference design.
   Body copy written from the project brief — see README "Copy provenance".
   ========================================================================== */

/* --- Trust strip (under the hero) ---------------------------------------- */
export const trustBar = {
  label: "Built for Sri Lankan smallholdings",
  items: [
    { icon: "Languages", text: "Sinhala, Tamil and English" },
    { icon: "WifiOff", text: "Offline-first, built for low coverage" },
    { icon: "MessageSquare", text: "SMS and voice alerts" },
    { icon: "ShieldCheck", text: "Farmers own their field data" },
  ],
};

/* --- Problems ------------------------------------------------------------- */
export const problems = {
  eyebrow: "Why this matters",
  title: "Farming Shouldn't Be",
  accent: "a Gamble",
  sub: "Season after season, the same decisions are made without the information needed to make them well.",
  items: [
    {
      tag: "Soil",
      title: "Soil Mismanagement",
      text: "Fertilizer is applied on a schedule rather than on what the soil actually needs, because the nutrient status of a particular plot is rarely known.",
      photo: "/images/photos/problem-soil.webp",
      alt: "Seedlings growing through dry, cracked soil",
    },
    {
      tag: "Climate",
      title: "Climate Vulnerability",
      text: "Rainfall arrives earlier or later than the cultivation plan assumed, and a schedule fixed at sowing cannot respond to it.",
      photo: "/images/photos/problem-climate.webp",
      alt: "A single seedling in parched, cracked ground",
    },
    {
      tag: "Market",
      title: "Market Risk",
      text: "Many farmers plant the same crop in the same season, and the price at harvest reflects a supply nobody could see coming.",
      photo: "/images/photos/problem-market.webp",
      alt: "Vegetables for sale in bowls at a market stall",
    },
    {
      tag: "Pests",
      title: "Pest and Disease Pressure",
      text: "Outbreaks are noticed once damage is visible, by which point the window for a cheaper, lighter intervention has usually closed.",
      photo: "/images/photos/problem-pests.webp",
      alt: "A dense crop of cabbages in the field",
    },
    {
      tag: "Water",
      title: "Water Uncertainty",
      text: "Irrigation is judged by eye and by habit. Too little stresses the crop; too much wastes water that the next cultivation will need.",
      photo: "/images/photos/problem-water.webp",
      alt: "Sprinklers irrigating long rows of a field",
    },
    {
      tag: "Post-harvest",
      title: "Post-Harvest Loss",
      text: "Produce that survived the whole season is lost in storage or sold in a hurry, because storage conditions and buyers are both unknowns.",
      photo: "/images/photos/problem-postharvest.webp",
      alt: "A worker beside a large pile of discarded vegetables",
    },
  ],
  gap: {
    tag: "The gap",
    title: "The Connectivity Gap",
    text: "Advice that exists in a research station, a district office or a smartphone app does not reach the plot where the decision is made. Aswenna is built the other way around: it assumes patchy coverage, shared devices and a farmer who needs an answer in their own language.",
    note: "Offline-first, SMS and voice delivery, and hardware shared across a farmer organization.",
    photo: "/images/photos/connectivity-gap.webp",
    alt: "Paddy fields and coconut palms in rural Sri Lanka",
  },
};

/* --- Season guide --------------------------------------------------------- */
export const seasons = {
  eyebrow: "Across the cultivation year",
  title: "How Aswenna Protects You",
  accent: "Across Maha & Yala",
  sub: "Both seasons move through the same stages. At each one there is a decision that data can inform.",
  stages: [
    {
      icon: "Sprout",
      stage: "Stage 01",
      when: "Land preparation",
      title: "Land Prep & Nursery",
      text: "Before anything is sown, the plot is mapped and profiled, so the season starts from the soil that is actually there rather than from last year's assumptions.",
      callout: {
        label: "What Aswenna does",
        text: "Builds a geo-located soil profile for the plot and recommends crops suited to its conditions, the water available and recent price behaviour.",
      },
      link: "Soil intelligence",
      href: "#soil",
    },
    {
      icon: "Leaf",
      stage: "Stage 02",
      when: "Vegetative growth",
      title: "Vegetative & Top-Dressing",
      text: "The crop is establishing and demand for nutrients and water rises. This is where a schedule fixed weeks earlier starts to drift away from the field.",
      callout: {
        label: "What Aswenna does",
        text: "Adjusts the cultivation calendar when rainfall or soil moisture changes, and triggers irrigation from measured moisture rather than from the date.",
      },
      link: "Cultivation calendar",
      href: "#features",
    },
    {
      icon: "Bug",
      stage: "Stage 03",
      when: "Flowering",
      title: "Panicle & Soil Nutrition",
      text: "Humidity and leaf wetness climb, and so does the risk of an outbreak. Nutrient deficiencies that show now are expensive to correct later.",
      callout: {
        label: "What Aswenna does",
        text: "Watches the conditions that precede an outbreak and lets a farmer photograph an affected leaf for AI-assisted diagnosis and mitigation advice.",
      },
      link: "Pest and disease",
      href: "#field",
    },
    {
      icon: "Wheat",
      stage: "Stage 04",
      when: "Harvest",
      title: "Harvest & Market Timing",
      text: "The crop is ready, but when and where it is sold decides what the season was worth. Storage conditions decide how much of it survives the wait.",
      callout: {
        label: "What Aswenna does",
        text: "Tracks wholesale prices from economic centres such as Dambulla and Piliyandala, and monitors storage temperature and humidity after harvest.",
      },
      link: "Market analytics",
      href: "#features",
    },
  ],
};

/* --- Guesswork vs measurement -------------------------------------------- */
export const comparison = {
  eyebrow: "The Aswenna approach",
  title: "Replacing Guesswork",
  accent: "with Measurement",
  sub: "The same decisions, made from what the plot reports rather than from what the season usually does.",
  withoutLabel: "Without Aswenna",
  withLabel: "With Aswenna",
  rows: [
    { without: "Fertilizer applied to a fixed schedule.", with: "Applied against the plot's own soil profile and growth stage." },
    { without: "Irrigation judged by eye.", with: "Triggered when measured soil moisture crosses a set threshold." },
    { without: "A cultivation plan fixed at sowing.", with: "A calendar that rewrites itself when the forecast changes." },
    { without: "Pests found once damage is visible.", with: "Risk flagged from conditions, and diagnosis from a photograph." },
    { without: "Crop choice follows the neighbours.", with: "Choice weighed against soil, water, forecast and price history." },
    { without: "Price discovered on the day of sale.", with: "Wholesale trends and supply forecasts followed through the season." },
    { without: "Advice that needs a smartphone and coverage.", with: "Advice by app, SMS or voice call, in Sinhala, Tamil or English." },
    { without: "Field data held by whoever collected it.", with: "Field data owned by the farmer, exportable at any time." },
  ],
};

/* --- Feature groups ------------------------------------------------------- */
export const featureGroups = {
  eyebrow: "Everything in one platform",
  title: "Features &",
  accent: "Capabilities",
  sub: "Start with no hardware at all, and add sensing and automation to the same account when it earns its place.",
  groups: [
    {
      id: "core",
      icon: "LayoutGrid",
      label: "Group 01 · No hardware required",
      title: "The Core Platform",
      note: "Everything in this group runs on regional data, satellite imagery and what the farmer tells the app. No device needs to be bought or installed.",
      items: [
        { icon: "MapPin", title: "Geo-located soil profiling", text: "Mark a plot on the map and receive a soil profile for that location, with every value labelled estimated or measured." },
        { icon: "Wheat", title: "Crop recommendation", text: "Soil conditions, weather forecasts, available water, historical prices and nearby planting patterns weighed together." },
        { icon: "CalendarRange", title: "Dynamic cultivation calendar", text: "A personalized schedule that adapts automatically when rainfall, soil conditions or forecasts change." },
        { icon: "Satellite", title: "Satellite crop-health maps", text: "Satellite imagery converted into vegetation-index (NDVI) maps that show which parts of a plot are under stress." },
        { icon: "TrendingUp", title: "Market trend analytics", text: "Wholesale prices from economic centres read alongside anonymized planting data to forecast supply conditions." },
        { icon: "ScanSearch", title: "AI-assisted diagnosis", text: "Photograph an affected leaf or pest and receive a probable match with mitigation advice to confirm with an officer." },
      ],
    },
    {
      id: "iot",
      icon: "Cpu",
      label: "Group 02 · Precision field automation",
      title: "IoT & Devices",
      note: "Devices are optional and can be shared across a farmer organization. Readings they produce are marked as measured, so they are never confused with regional estimates.",
      items: [
        { icon: "Droplet", title: "Live soil monitoring", text: "ESP32-based nodes report soil moisture, temperature and electrical conductivity from the root zone of the plot." },
        { icon: "Waves", title: "Smart irrigation", text: "Valves and pumps open when measured moisture drops below the lower threshold and close when it recovers." },
        { icon: "CloudSun", title: "Hyperlocal weather", text: "Micro weather stations add rainfall, temperature, humidity, wind and leaf wetness for the village itself." },
        { icon: "TestTube", title: "Handheld pH and NPK probes", text: "Shared probes let an organization collect real nutrient readings without every farmer buying an instrument." },
        { icon: "RadioTower", title: "Village LoRaWAN gateways", text: "Long-range, low-power links carry readings from field devices to a village gateway and on to the cloud." },
        { icon: "Gauge", title: "Device monitoring", text: "Battery level, signal strength and last-reported reading for every node, so a silent sensor is noticed." },
      ],
    },
    {
      id: "access",
      icon: "Users",
      label: "Group 03 · Access and ownership",
      title: "Universal Access & Farmer Data Ownership",
      note: "A farmer without a smartphone, without coverage, or without a shared device still receives the advice their plot generates.",
      items: [
        { icon: "MessageSquare", title: "SMS and voice delivery", text: "Alerts and recommendations reach a basic handset by text message or voice call when the app cannot be opened." },
        { icon: "WifiOff", title: "Offline-first application", text: "The app works without a connection and synchronises when one returns, rather than failing in the field." },
        { icon: "Languages", title: "Sinhala, Tamil and English", text: "The interface and the alerts are written in the language the farmer actually reads." },
        { icon: "Database", title: "The farmer owns the data", text: "Plot boundaries, readings and history belong to the farmer and can be exported at any time." },
        { icon: "Users", title: "Organization dashboards", text: "Farmer organizations and extension officers see an area-wide view built from data their members chose to share." },
      ],
    },
  ],
};

/* --- Field-first design --------------------------------------------------- */
export const fieldFirst = {
  eyebrow: "Designed for real conditions",
  title: "Designed for the Field,",
  accent: "Not an Office",
  sub: "The constraints of a Sri Lankan smallholding are the starting point, not an edge case handled later.",
  items: [
    {
      icon: "MessageCircle",
      title: "Plain, field-ready language",
      text: "Recommendations are written as an instruction a farmer can act on — what to do, on which plot, and by when — not as a dashboard metric to interpret.",
    },
    {
      icon: "SignalLow",
      title: "Low-data, low-coverage by default",
      text: "Screens are built to load on a weak connection, and the application keeps working through the gaps rather than waiting for a signal.",
    },
    {
      icon: "PhoneCall",
      title: "One-tap agronomy helpline",
      text: "When a recommendation needs a human, the app places the farmer in touch with their extension officer with the plot's context already attached.",
    },
  ],
  screen: "/images/screens/phone-dashboard.svg",
};

/* --- Hardware installation ------------------------------------------------ */
export const install = {
  eyebrow: "Hardware in the field",
  title: "How Field Hardware Installs",
  accent: "on Your Land",
  sub: "Three devices cover a plot. All are solar powered, and none requires a wired connection or mains electricity.",
  devices: [
    {
      icon: "Cpu",
      label: "Device 01",
      title: "Solar-Powered Soil Node",
      text: "Placed in the root zone of the plot. It reports soil moisture, temperature and electrical conductivity over a long-range radio link, and runs from a small solar panel.",
      points: ["Sits in the root zone of the crop", "Solar powered, no mains supply", "Reports over LoRaWAN to the village gateway"],
      link: "Readings appear as measured values",
    },
    {
      icon: "RadioTower",
      label: "Device 02",
      title: "Long-Range LoRa Gateway",
      text: "Mounted once for the whole village, usually by the farmer organization. It collects readings from every node in range and forwards them over mobile connectivity to the cloud.",
      points: ["One gateway serves many plots", "Shared across a farmer organization", "Bridges field devices to mobile data"],
      link: "Shared at the village level",
    },
    {
      icon: "Plug",
      label: "Device 03",
      title: "Pump Controller with Manual Switch",
      text: "Fitted to an existing pump or valve. It opens when measured soil moisture falls below the threshold and closes when moisture recovers — and the farmer can always override it by hand.",
      points: ["Works with the pump already installed", "Automatic start and stop from soil moisture", "Manual override at the switch, always"],
      link: "Farmer override is never removed",
    },
  ],
};

/* --- Pricing -------------------------------------------------------------- */
export const pricing = {
  eyebrow: "Participation tiers",
  title: "Choose What Fits",
  accent: "Your Farm",
  sub: "No hardware is required to begin. Hardware is added only when a farmer or an organization wants it.",
  note: "Indicative hardware costs for the proposed pilot. Aswenna is a research and development project, not a commercial service, and these figures are not a sales offer.",
  tiers: [
    {
      tag: "Tier 0",
      name: "Software Only",
      price: "LKR 0",
      unit: "no hardware",
      text: "The full platform on regional and satellite data.",
      items: [
        "Geo-located soil profiling",
        "Crop recommendations",
        "Dynamic cultivation calendar",
        "Alerts, SMS and voice delivery",
        "Market analytics and NDVI maps",
      ],
      cta: "Start here",
      featured: false,
    },
    {
      tag: "Tier 1",
      name: "Shared Village Station",
      price: "LKR 49,950",
      unit: "per village, indicative",
      text: "Shared by a farmer organization across a community.",
      items: [
        "Everything in Tier 0",
        "Micro weather station",
        "Village LoRaWAN gateway",
        "Handheld pH and NPK probe",
        "Community-level readings",
      ],
      cta: "Enquire for a village",
      featured: false,
    },
    {
      tag: "Tier 2",
      name: "Plot Automation",
      price: "LKR 26,990",
      unit: "per plot, indicative",
      text: "Dedicated sensing and automated watering on your own plot.",
      items: [
        "Everything in Tier 0",
        "Dedicated soil monitoring node",
        "Irrigation controller and flow meter",
        "Live plot monitoring",
        "Automated watering with manual override",
      ],
      cta: "Enquire about a plot",
      featured: true,
    },
  ],
};

/* --- Testimonials --------------------------------------------------------- */
export const testimonials = {
  eyebrow: "From the field",
  title: "Trusted by Farmers",
  accent: "Across Sri Lanka",
  sub: "This section is reserved for real farmer feedback once the pilot is running.",
  placeholderNote:
    "Placeholder cards. Aswenna has not yet run a pilot, so there are no farmer quotes to publish — replace these with real, attributed feedback before the site goes live.",
  items: [
    { role: "Paddy farmer", place: "Pilot district", quote: "Quote placeholder — a farmer's own words about the cultivation calendar go here." },
    { role: "Farmer organization", place: "Pilot village", quote: "Quote placeholder — an organization's words about the shared village station go here." },
    { role: "Extension officer", place: "Pilot area", quote: "Quote placeholder — an officer's words about the area dashboard go here." },
  ],
};

/* --- FAQ ------------------------------------------------------------------ */
export const faq = {
  eyebrow: "Questions",
  title: "Frequently Asked",
  accent: "Questions",
  sub: "What farmers and farmer organizations ask most often about the project.",
  items: [
    {
      q: "Do I need to buy sensors or hardware?",
      a: "No. Tier 0 is the whole software platform with no hardware at all — soil profiling, crop recommendations, the cultivation calendar, alerts, market analytics and satellite crop-health maps. Hardware only adds measured readings from your own plot on top of that.",
    },
    {
      q: "What if I do not have a smartphone or a signal?",
      a: "Alerts and recommendations can be delivered by SMS or by voice call to a basic handset, and the application itself is offline-first: it keeps working without a connection and synchronises when one returns.",
    },
    {
      q: "How accurate are the soil values?",
      a: "It depends on where they come from, and Aswenna always tells you which. Estimated values are derived from regional soil databases for your mapped location. Measured values come from a field device or a handheld probe on your plot. The two are never mixed or presented as the same thing.",
    },
    {
      q: "Who owns the data from my land?",
      a: "You do. Plot boundaries, readings and history belong to the farmer, and can be exported at any time. Data shared with a farmer organization or an extension officer is anonymized where it feeds area-wide analysis.",
    },
    {
      q: "Is Aswenna available in Sinhala and Tamil?",
      a: "Yes. The interface and the alerts are planned in Sinhala, Tamil and English, because advice that cannot be read is not advice.",
    },
    {
      q: "Is this available to use today?",
      a: "Not yet. Aswenna is an academic and agricultural research initiative. Phases 01 to 03 describe the planned project scope and Phase 04 collects proposed future extensions — none of it describes a deployed commercial service.",
    },
  ],
};

/* --- Contact -------------------------------------------------------------- */
export const contact = {
  eyebrow: "Contact us",
  title: "Let's grow something together.",
  text: "Tell us about yourself and your land. If you are part of a farmer organization interested in a shared village station, mention it and we will come back to you.",
  note: "We usually reply within a few working days.",
  fields: {
    firstName: { label: "First name", placeholder: "Enter your first name" },
    lastName: { label: "Last name", placeholder: "Enter your last name" },
    phone: { label: "Phone number", placeholder: "e.g. 071 234 5678" },
    district: { label: "District", placeholder: "e.g. Anuradhapura" },
    email: { label: "Email", placeholder: "you@example.com" },
    location: { label: "Land location", placeholder: "Village, nearest town" },
    size: { label: "Land size", placeholder: "e.g. 2.4" },
    message: { label: "Message", placeholder: "Tell us about your plot, your crops and what you need." },
  },
  consent: "By submitting you agree to be contacted about the Aswenna project.",
  submit: "Submit enquiry",
  success: "Thank you — your enquiry has been noted.",
};

/* --- Closing band --------------------------------------------------------- */
export const closing = {
  title: "Ready to farm with confidence?",
  sub: "Join the Aswenna pilot with your farmer organization.",
};

/* ==========================================================================
   The whole content tree in one object.
   The i18n layer merges a locale's overrides on top of this, so anything a
   translation has not covered falls back to the English above.
   ========================================================================== */
export const content = {
  site, ui, nav, hero, soil, journey, field, engine, smart, hardware, platform,
  roadmap, cta, footer, trustBar, problems, seasons, comparison, featureGroups,
  fieldFirst, install, pricing, testimonials, faq, contact, closing,
};

export type Content = typeof content;
