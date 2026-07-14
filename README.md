# Interior Design Landing Page

A single-page, hand-built landing page. No WordPress, no page builder, no database —
just three files and a folder of images. That is why it loads almost instantly and scores
well on SEO.

Live demo: https://anirudhatalmale6-alt.github.io/interior-design-landing/

---

## The only file you need to edit

**`js/content.js`**

Every word, phone number, email address, service and image path on the page is set in that
one file. Open it in any text editor (Notepad, TextEdit, VS Code), change the text between
the `'quotes'`, save, upload. That's it. You cannot break the design by editing it — it is
just words.

### Common edits

**Change your phone number / email**

```js
contact: {
  phoneDisplay: "+44 20 7946 0812",   // what visitors SEE
  phoneDial:    "+442079460812",      // what the phone DIALS (no spaces)
  email:        "hello@studiovireo.com",
}
```

**Edit the Services Offered section** — add, remove or rewrite any block:

```js
services: [
  {
    title: "Design Consultation",
    duration: "90 minutes",
    body: "A focused, on-site or virtual session...",
  },
  // copy/paste a block to add a service, delete a block to remove one
],
```

**Swap a photo** — drop your image into `assets/` and point to it:

```js
work: [
  { img: "assets/work-01.webp", title: "Glasshouse, Surrey", meta: "Full design — 2025" },
]
```

The hero photo is `assets/hero.webp` — replace that file (keep the same name) and the hero
changes. Portrait shape (roughly 3:4) works best. Web-sized images please — around
1,600px on the long edge, not straight off the camera.

---

## Connecting your Google Calendar booking widget

1. Open Google Calendar → **Create** → **Appointment schedule**.
2. Set your availability, session length (e.g. 30 min) and buffer time.
3. Click **Share** → the **Embed** tab → copy the URL you find inside `src="..."`.
4. Paste it into `js/content.js`:

```js
booking: {
  googleCalendarEmbed: "https://calendar.google.com/calendar/appointments/schedules/...",
}
```

Save, upload, refresh. The booking panel becomes a live slot-picker.

If you leave it blank, the panel gracefully shows a "call or email the studio" card instead —
so the page never looks broken while you are setting the calendar up.

### Getting notified on your phone the moment someone books

- **Push (instant, free):** install the Google Calendar app, sign in, and turn on
  notifications. A booking hits your calendar and your phone buzzes immediately.
- **SMS:** Google removed native calendar SMS. If you want a real text message, we wire the
  booking to a small automation (Zapier / Make / a tiny script) that sends an SMS on every
  new appointment. Tell me and I'll set it up.

---

## Publishing to your own domain

Upload the whole folder (`index.html`, `css/`, `js/`, `assets/`) to your web host — cPanel
File Manager, FTP, Netlify drag-and-drop, or GitHub Pages. There is nothing to install and
no server-side code, so it works on any host.

---

## Files

```
index.html        the page structure (rarely needs touching)
css/style.css     the design
js/content.js     ← YOUR TEXT, PHONE, EMAIL, SERVICES, IMAGES
js/main.js        renders content.js into the page (leave alone)
assets/           images
```

## Notes

- Photography in this demo is placeholder imagery (freely licensed architectural interiors),
  graded to match the palette. Swap in your own project photos before going live.
- Fonts: Instrument Serif + Jost, loaded from Google Fonts.
- Works on every modern browser; respects `prefers-reduced-motion`.
