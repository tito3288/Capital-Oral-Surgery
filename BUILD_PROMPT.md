# Capital Oral Surgery - Future Build Prompt

You are working in the Astro project for Capital Oral Surgery. The current homepage design has been rebuilt from approved screenshots and is the visual source of truth for future pages and edits.

## Read First

Before making design or page changes, read:

- `BLUEPRINT.md` - current design direction and section patterns
- `src/lib/theme.config.ts` - canonical theme tokens
- `src/styles/global.css` - Tailwind v4 token mirror and global utilities
- Existing components in `src/components/` - especially `Header`, `Hero`, `SpecializedCare`, `MeetTeam`, `Procedures`, `Testimonial`, `CallToAction`, and `Footer`

Do not use `design/index.html` as an old generated mockup. It is only a compact current-design reference now.

## Design Rules

- Keep the calm, specialized oral-surgery aesthetic from the current homepage.
- Use semantic token classes such as `bg-midnight`, `bg-secondary`, `bg-aqua-soft`, `text-foreground`, `text-muted`, `border-line`, and `placeholder:text-placeholder`.
- Do not add raw hex colors inside components. Add a token first if a new reusable color is truly needed.
- Use `.serif` for major editorial headings and patient-facing quote text.
- Use small uppercase, widely tracked eyebrows for section labels.
- Preserve stable image aspect ratios with `aspect-*` placeholders until final images are provided.
- Prefer simple full-width bands, two-column sections, and restrained cards. Avoid glassmorphism, gradient overlays, overlapping info-card blocks, decorative blobs, or heavy marketing-style layouts.
- Make every new section responsive from mobile through desktop.

## Current Homepage Order

The homepage is:

1. `Header`
2. `Hero`
3. `SpecializedCare`
4. `MeetTeam`
5. `Procedures`
6. `Testimonial`
7. `CallToAction`
8. `Footer`

New pages should reuse `Layout`, `Header`, and `Footer`, then build content with the same typography, color palette, spacing, and section rhythm.

## Anchors

The main homepage anchors are:

- `#about`
- `#team`
- `#procedures`
- `#testimonial`
- `#appointment`

Header navigation and appointment CTAs should keep pointing to these unless the site gets dedicated pages later.

## Verification

After code changes, run:

- `npx astro check`
- `npx astro build`

For layout changes, inspect desktop and mobile browser views before handing work back.
