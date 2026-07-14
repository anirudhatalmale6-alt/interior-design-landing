/* ==========================================================================
   content.js — THE ONLY FILE YOU NEED TO EDIT
   --------------------------------------------------------------------------
   Everything on the page (text, phone, email, services, images) is set here.
   Change the text between the 'quotes', save the file, upload it, refresh.
   Nothing here can break the design — it is just words.
   ========================================================================== */

const CONTENT = {

  /* ---- 1. WHO YOU ARE ------------------------------------------------- */
  brand: {
    name: "Studio Vireo",              // shows top-left and in the footer
    tagline: "Interior Design Consultancy",
    location: "London — by appointment",
  },

  /* ---- 2. HOW PEOPLE REACH YOU ---------------------------------------- */
  contact: {
    phoneDisplay: "+44 20 7946 0812",   // what visitors SEE
    phoneDial:    "+442079460812",      // what the phone DIALS (no spaces)
    email:        "hello@studiovireo.com",
    emailSubject: "Consultation enquiry",
    instagram:    "https://instagram.com/",   // leave "" to hide
  },

  /* ---- 3. HERO (the first thing people see) --------------------------- */
  hero: {
    eyebrow: "Residential & considered spaces",
    // Each line below is one line of the big headline.
    headline: ["Rooms that", "breathe, and", "<em>quietly</em> hold you."],
    intro:
      "A small consultancy shaping calm, light-filled interiors for people who want their home to feel finished — not decorated.",
    imageCaption: "Private residence — Notting Hill, 2025",
  },

  /* ---- 4. THE STATEMENT LINE ------------------------------------------ */
  statement:
    "Good design is not the objects in a room. It is the light between them, the pause before you sit down, the way a doorway asks you to slow.",

  /* ---- 5. SERVICES OFFERED  (add / remove / rewrite freely) ----------- */
  servicesIntro:
    "Four ways to work together. Every project begins with a single conversation — no obligation, no pitch deck.",

  services: [
    {
      title: "Design Consultation",
      duration: "90 minutes",
      body: "A focused, on-site or virtual session. We walk the space together, unpick what isn't working, and leave you with a clear, prioritised direction you could act on yourself.",
    },
    {
      title: "Full Interior Design",
      duration: "12–20 weeks",
      body: "End-to-end: concept, spatial planning, materials, lighting design, joinery drawings, furniture specification and installation. You approve; we handle the rest.",
    },
    {
      title: "Styling & Finishing",
      duration: "2–4 weeks",
      body: "For a home that is nearly there. Art, textiles, ceramics, the last three metres of a bookshelf — the layer that turns a well-built room into somewhere you want to be.",
    },
    {
      title: "Colour & Material Study",
      duration: "1–2 weeks",
      body: "A resolved palette for a room or a whole house: paints, timbers, stone, plaster and fabric, sampled and tested in your own light before a single tin is opened.",
    },
  ],

  /* ---- 6. SELECTED WORK (swap the image files in /assets) ------------- */
  workIntro: "Selected work",
  work: [
    { img: "assets/work-01.webp", title: "Glasshouse, Surrey",        meta: "Full design — 2025" },
    { img: "assets/work-02.webp", title: "Riverside Apartment",       meta: "Styling — 2025" },
    { img: "assets/work-03.webp", title: "Kitchen, Hampstead",        meta: "Joinery & colour — 2024" },
    { img: "assets/work-04.webp", title: "Villa Study, Brno",         meta: "Consultation — 2024" },
  ],

  /* ---- 7. HOW YOU WORK ------------------------------------------------ */
  process: [
    { step: "01", title: "The conversation", body: "Thirty minutes, free. You tell me about the space and what is bothering you about it." },
    { step: "02", title: "The direction",    body: "A written brief, a palette and a plan — so you know exactly what we are making before we make it." },
    { step: "03", title: "The making",       body: "Drawings, trades, deliveries, installation. I hold the details so you don't have to." },
  ],

  /* ---- 8. BOOKING ----------------------------------------------------- */
  booking: {
    heading: ["Book a", "consultation"],
    body: "Pick a slot that suits you. You will get an instant confirmation, and I will be notified the moment it lands.",
    note: "Free 30-minute introductory call · No obligation",

    /* PASTE YOUR GOOGLE CALENDAR APPOINTMENT-SCHEDULE LINK HERE.
       Google Calendar → Create → Appointment schedule → Share → "Embed" tab
       → copy the URL inside src="..." and paste it below.
       Leave it as "" and the page shows a graceful "call me instead" panel. */
    googleCalendarEmbed: "",
  },

  /* ---- 9. SEO (what Google shows) ------------------------------------- */
  seo: {
    title: "Studio Vireo — Interior Design Consultancy",
    description:
      "A small interior design consultancy shaping calm, light-filled homes. Book a free 30-minute consultation.",
    url: "https://example.com/",
  },
};
