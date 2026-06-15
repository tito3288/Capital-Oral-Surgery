# Capital Oral Surgery

Astro homepage for Capital Oral Surgery & Dental Implants.

## Design Source Of Truth

The approved current design is documented in:

- `BLUEPRINT.md`
- `BUILD_PROMPT.md`
- `src/lib/theme.config.ts`
- `src/styles/global.css`
- the live homepage components in `src/components/`

Use the current homepage style for future pages and edits: calm surgical editorial layout, midnight/teal/aqua palette, serif headings, stable image aspect-ratio placeholders, restrained cards, and simple full-width section bands.

Avoid reviving the older generated concept with glassmorphism, gradient hero overlays, overlapping info cards, or the old patient-confidence/CTA blocks.

## Local Development

```sh
npm install
npm run dev
```

## Verification

```sh
npx astro check
npx astro build
```

Use browser checks at desktop and mobile widths after layout changes.
