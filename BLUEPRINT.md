# Capital Oral Surgery - Current Design Blueprint

This file is the design source of truth for future homepage edits and new pages. The current direction is the calm, editorial oral-surgery layout now implemented in `src/pages/index.astro`. Do not return to the older generated concept with glass panels, gradient image overlays, overlapping info cards, or the old "Patient Confidence" section.

## Overall Direction

The site should feel specialized, steady, and clinically polished. Use generous whitespace, restrained borders, serif editorial headlines, and calm teal/aqua color blocking. Pages should look like they belong to a focused surgical practice, not a marketing landing page.

Use the live homepage as the primary visual reference:

- Dark midnight header and hero
- Large serif headlines with cyan emphasis
- Approved hero photography with remaining future image placeholders preserving their aspect ratios
- Thin cyan offset borders around image frames
- White and pale-aqua section bands
- Minimal cards, subtle shadows, and consistent rounded corners
- Full-width teal testimonial band
- Pale-aqua appointment form section

## Canonical Sections

### Header

Use `src/components/Header.astro`.

- Background: `bg-midnight`
- Logo left, desktop nav centered/right, and two CTAs on the far right
- Nav anchors: `#about`, `#procedures`, `#team`, `#appointment`
- Mobile/tablet uses the existing `details` menu until the `lg` breakpoint; the opened menu is a full-height panel below the 76px header using `100dvh`
- CTAs: solid `Request Appointment` button to `#appointment`; bordered `Referring Doctors` button to `/referring-doctors`

### Hero

Use `src/components/Hero.astro`.

- Background: `bg-midnight`
- Minimum height: `calc(100dvh - 76px)` so the hero fills the visible screen below the header before the next section appears
- The hero section vertically centers the content grid inside that height
- Two-column layout on desktop
- Left column: small uppercase location eyebrow, large serif headline, supporting copy, stats, CTAs
- Right column: approved office photo at `/images/hero.jpg` inside an `aspect-[4/5]` frame, rounded corners, and a thin cyan border frame
- Floating review card overlaps the image area on desktop
- Primary copy:
  - "Surgical expertise, delivered with calm."
  - "From wisdom teeth to dental implants and corrective jaw surgery, our three specialists guide you through every step with clarity and care."

### Specialized Care

Use `src/components/SpecializedCare.astro`.

- Section id: `about`
- White background
- Two-column desktop layout
- Left image uses `/images/specialized-care.jpg` and keeps `aspect-[4/3]`
- Cyan offset border behind the image area
- Right text column uses eyebrow, serif heading, paragraphs, and compact check-list rows

### Meet The Team

Use `src/components/MeetTeam.astro`.

- Section id: `team`
- White background
- Centered eyebrow and serif heading
- Three doctor portrait blocks in a desktop grid
- Portrait frames keep `aspect-[20/19]`
- Dr. Patrick Lucaci uses `/images/doctor-patrick-lucaci.jpg`
- Dr. Owen Lonergan uses `/images/doctor-owen-lonergan.jpg`
- Dr. Emily Eickhoff uses `/images/doctor-emily-eickhoff.jpeg`
- Use initials placeholders only for doctors whose final headshots have not been supplied

### Procedures

Use `src/components/Procedures.astro`.

- Section id: `procedures`
- Background: `bg-aqua-soft`
- Centered eyebrow and heading
- Six white cards in a 3x2 desktop grid
- Cards use numbered pale-aqua circular badges
- Desktop card size should stay close to 413px wide by 180px tall at the 1900px reference viewport

### Testimonial

Use `src/components/Testimonial.astro`.

- Full-width `bg-secondary` band
- No card or container outline
- Centered quote mark, serif testimonial, and small uppercase attribution
- Keep content compact and horizontally centered

### Appointment Form

Use `src/components/CallToAction.astro`.

- Section id: `appointment`
- Background: `bg-aqua-soft`
- Two-column desktop layout
- Left column has request eyebrow, serif heading, short body copy, and address/phone/hours details
- Right column has a white form panel with first/last name, email, phone, reason select, message, and a full-width teal submit button
- The form is currently static with `action="#"`; wire it to a backend endpoint only when one is provided

### Footer

Use `src/components/Footer.astro`.

- Background: `bg-midnight`
- Keep simple: logo, short tagline, office details, and phone
- Current phone number: `(785) 272-0444`

## Design Tokens

Tokens live in `src/lib/theme.config.ts` and are mirrored in `src/styles/global.css` through Tailwind v4's `@theme` block. Components should use semantic Tailwind classes instead of raw hex values.

Key colors:

- `midnight`: dark header/hero/footer background
- `secondary`: active teal for buttons, labels, testimonials, badges, and borders
- `surface`: white panels and cards
- `aqua-soft`: pale blue section background
- `aqua-pale`: pale numbered-badge background
- `foreground`: main text
- `muted`: supporting text
- `line`: form input borders
- `placeholder`: form placeholder text

## Typography

- Body font: Inter
- Heading font: Georgia/Cambria/Times New Roman via the `.serif` utility
- Use serif for major headings, doctor names, procedure card titles, and testimonial copy
- Eyebrows are small, uppercase, bold, and widely tracked, usually `tracking-[.34em]`
- Do not use negative letter spacing or viewport-width font sizing

## Layout Rules

- Default horizontal padding: `px-5`
- Main desktop content width: `max-w-7xl` or the explicit width already used by the section
- Cards, buttons, inputs, panels, and image frames should use rounded corners with `rounded-md` or `rounded-lg` and subtle shadows where appropriate
- Do not nest cards inside cards
- Do not use decorative gradient blobs, bokeh, glassmorphism, or large marketing hero cards
- Keep fixed-format visual areas stable with `aspect-*` classes until real images are added
- Preserve a responsive mobile stack for every section
- Use the global `data-reveal` in-view animation for section content and repeated cards; keep it subtle and respect `prefers-reduced-motion`

## When Adding Future Pages

Start with the existing `Layout`, `Header`, and `Footer`. Reuse the same colors, type scale, spacing, and section patterns from the homepage. New pages should feel like continuations of this calm surgical website, not separate templates.

Before shipping future visual changes, run:

- `npx astro check`
- `npx astro build`

Also inspect desktop and mobile views in the browser when the change affects layout.
