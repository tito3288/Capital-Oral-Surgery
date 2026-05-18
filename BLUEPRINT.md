# Capital Oral Surgery — Design Blueprint

## Overall direction & vibe

The design conveys trust, professionalism, and clinical excellence through a sophisticated medical aesthetic. Deep teal (#06333b) paired with vibrant cyan (#00a9c0) creates a modern healthcare brand that balances authority with approachability. The warm off-white background (#f4f1eb) softens the overall palette, making the interface feel welcoming rather than sterile.

## Section-by-section breakdown

### Header
Fixed-height header with deep teal background (#06333b). Logo left-aligned, desktop navigation center-right with hover states transitioning to cyan, and a bordered CTA button on the far right. Mobile uses a details/summary dropdown menu. Logo scales from 56px mobile to 70px desktop. Navigation links are semibold, small (14px), with generous gap spacing. The CTA uses uppercase tracking, a 2px cyan border, and cyan text.

### Hero
Full-width section with minimum height of 690px. Background image covers the viewport with a gradient overlay transitioning from 75% opacity dark teal at top, 45% mid, to 85% at bottom. Content is vertically and horizontally centered. A glassmorphic card (backdrop-blur, 45% teal background, white/20 border) contains all hero content. Eyebrow text uses extreme letter-spacing (.32em), all-caps, cyan. Headline is serif, 4xl to 7xl responsive, white. Body copy is white with 90% opacity. Two CTAs stacked on mobile, side-by-side on tablet+: one solid cyan background with dark teal text, one bordered ghost button with white text.

### Info cards (below hero)
Three-column grid on desktop, stacked on mobile, with negative top margin (-2.5rem) to overlap hero. Cards alternate white and cyan backgrounds. Cyan card uses dark teal text. Each card has uppercase tracking label and semibold body content. Consistent padding (1.75rem) and shadow-lg.

### Services section
Centered eyebrow (uppercase, cyan, extreme tracking) and serif headline (4xl to 5xl). Grid of six service cards in 1/2/3 column responsive layout. Each card is white background, subtle shadow, 2rem padding. Serif headlines at 1.5rem, slate-600 body text with increased leading (1.75). Clean, minimal card design with no icons or embellishments.

### Patient confidence section
Full-width dark teal background. Two-column asymmetric grid (0.9fr / 1.1fr) on desktop. Left column has eyebrow (cyan) and large serif headline. Right column is a 2×2 grid of bordered boxes (white/15 opacity borders). Each box has cyan bold heading and white/80 body text. Generous padding throughout (5rem vertical).

### CTA section
Centered container with white background, heavy shadow (shadow-xl). Flexbox layout on desktop with content left, button right. Eyebrow is bold uppercase cyan. Serif headline at 2.25rem. Slate-600 description text. CTA button is dark teal background with white extrabold text.

### Footer
Dark teal background, four-column grid on desktop. Logo column spans two columns with muted tagline (white/70). Office and Call columns have cyan headings and white/75 text. Modest padding (2.5rem vertical). Small text throughout (0.875rem).

## Typography

**Heading font:** Georgia, Cambria, Times New Roman, serif — used for all major headlines (h1, h2, h3 in service cards). Applied via .serif utility class.

**Body font:** Inter, ui-sans-serif, system-ui, sans-serif — default for all UI text, navigation, buttons, body copy.

**Sizing:** Hero h1 scales 2.25rem (mobile) → 3.75rem (tablet) → 4.5rem (desktop). Section h2 uses 2.25rem → 3rem. Service h3 at 1.5rem. Body text primarily 1rem with some 0.875rem (footer, labels). Leading is generous on body copy (1.75–2).

**Weight:** Extrabold (800) on CTA buttons, bold (700) on navigation and labels, semibold (600) on info card content, black (900) on eyebrow text.

**Letter-spacing:** Extreme tracking on eyebrow text (.25em to .32em), uppercase labels use tracking-widest. Normal tracking elsewhere.

## Color palette

- **Primary (dark teal):** #06333b — header, footer, hero overlay, CTA buttons, main brand anchor
- **Secondary (cyan):** #00a9c0 — primary interactive color, info card background, labels, headings in dark sections
- **Accent (bright cyan):** #63e8f7 — eyebrow text, lighter accents in dark sections
- **Accent alt (electric cyan):** #00e0ff — CTA button text in header
- **Background (warm off-white):** #f4f1eb — body background, creates warmth
- **Surface (white):** #ffffff — card backgrounds, info cards, service cards, CTA section
- **Foreground (slate-900):** Default text on light backgrounds (Tailwind slate-900)
- **Muted text (slate-600):** #475569 — body copy in service cards and CTA section
- **White overlays:** white/90, white/80, white/75, white/70, white/40, white/30, white/20, white/15 — used extensively for transparency and glassmorphism

## Spacing & layout

**Container widths:** 
- max-w-7xl (80rem / 1280px) — header, services section, patient confidence, footer
- max-w-6xl (72rem / 1152px) — hero content inner, info cards, CTA section
- max-w-4xl (56rem / 896px) — hero glassmorphic card
- max-w-3xl (48rem / 768px) — section intro text
- max-w-2xl (42rem / 672px) — hero body copy, CTA description

**Horizontal padding:** px-5 default, lg:px-8 on larger breakpoints.

**Vertical rhythm:** Section padding alternates py-20 (5rem) and py-24 (6rem). Hero uses py-20. Cards use p-6, p-7, p-8 based on hierarchy.

**Grid gaps:** gap-6 (services), gap-5 (patient confidence boxes), gap-3 (CTA buttons on mobile), gap-7 (navigation), gap-8 (footer).

**Breakpoints:** md: (768px) for 2-column and navigation reveal, lg: (1024px) for 3-column and larger desktop layouts.

## Unique visual treatments

**Glassmorphism on hero card:** backdrop-blur-md combined with bg-[#06333b]/45 (45% opacity teal), white/20 border, and shadow-2xl creates a frosted-glass floating panel effect.

**Gradient overlay:** Linear gradient from top to bottom with three stops (from-[#06333b]/75 via-[#06333b]/45 to-[#06333b]/85) provides depth and ensures text legibility over hero image.

**Negative margin overlap:** The info cards grid uses -mt-10 to pull up over the hero, creating a layered, elevated feel.

**No border radius:** All elements use sharp, squared corners (rounded-none explicitly set on header CTA). This reinforces a clean, clinical, precise aesthetic.

**Shadow hierarchy:** shadow-sm (services cards), shadow-lg (info cards), shadow-xl (CTA section, mobile menu), shadow-2xl (hero card).

**Bordered boxes:** Patient confidence features use 1px borders at white/15 opacity for subtle structure without visual weight.

**Uppercase eyebrows:** Consistent pattern of small, bold, uppercase, extreme-tracking labels in cyan precede every major section headline.

**Color blocking:** Strategic use of full-width colored sections (dark teal patient confidence) breaks up white space and creates rhythm.

**Hover states:** Navigation links transition to cyan on hover, maintaining interactive affordance without underlining.

**Typography contrast:** Pairing geometric sans-serif (Inter) for UI with classic serif (Georgia) for editorial headlines creates sophisticated hierarchy and readability.