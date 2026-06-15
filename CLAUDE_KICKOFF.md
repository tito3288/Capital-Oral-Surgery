# Build the Capital Oral Surgery Astro site — Phase 1 (Scaffold)

You are Claude Code running in a terminal. **This prompt only handles the project scaffold.** The homepage build happens later in a separate prompt (`BUILD_PROMPT.md`) once the design files are in the workspace.

## What to do

Scaffold a fresh Astro project in a new subfolder named `capital-oral-surgery` (relative to the current working directory). Use the Astro CLI **non-interactively** so the install does not stall on prompts:

```bash
npm create astro@latest capital-oral-surgery -- --template minimal --typescript strict --install --no-git --skip-houston --yes
```

Then initialize git (Astro skipped this because of `--no-git` above) and add the required integrations, also non-interactively:

```bash
cd capital-oral-surgery
git init -b main
npx astro add tailwind --yes
npx astro add mdx --yes
npx astro add cloudflare --yes
```

Stage everything and create a baseline commit so the user has a clean rollback point:

```bash
git add .
git commit -m "Initial Astro scaffold: TypeScript + Tailwind + MDX + Cloudflare"
```

Verify the dev server boots cleanly:

```bash
npm run dev
```

Stop the server after ~5 seconds. If anything errored, fix it and try again. Then report done.

## What NOT to do

- Do **NOT** build the homepage yet.
- Do **NOT** modify `tailwind.config.ts` beyond what `astro add tailwind` produces.
- Do **NOT** add additional dependencies.

## Hand-off back to the user

When the scaffold is verified, tell the user to:

1. Move `BLUEPRINT.md`, `theme.config.ts`, `design/`, and `BUILD_PROMPT.md` into the new `capital-oral-surgery/` folder (alongside `src/`, `public/`, etc.).
2. Open `capital-oral-surgery/` in Cursor.
3. Use the Claude Code extension and paste the contents of `BUILD_PROMPT.md` to continue with Phase 2.
