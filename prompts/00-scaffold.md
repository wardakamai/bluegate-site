# Prompt 00 — Project Scaffold

**Paste this entire prompt into Claude Code as your first message.**

---

Read `CLAUDE.md` in the project root before doing anything else. Confirm you understand the project, tech stack, design tokens, and folder conventions.

Then scaffold the Next.js project in the current working directory:

## Tasks

1. Initialise a Next.js 14+ project with TypeScript strict mode, App Router, Tailwind CSS, ESLint, and the `src/` directory disabled (use root-level `app/`). Use `pnpm` as the package manager.

2. Install these dependencies:
   - `framer-motion`
   - `lucide-react`
   - `react-hook-form`
   - `zod`
   - `@hookform/resolvers`
   - `clsx`
   - `tailwind-merge`
   - `class-variance-authority`
   - `yahoo-finance2`
   - `resend`

3. Install dev dependencies:
   - `@types/node`
   - `prettier`
   - `prettier-plugin-tailwindcss`
   - `eslint-config-prettier`

4. Initialise shadcn/ui (`pnpm dlx shadcn@latest init`) with these choices: style `default`, base color `neutral`, CSS variables enabled. Add these components: `button`, `card`, `sheet`, `tabs`, `accordion`, `input`, `textarea`, `select`, `label`, `form`, `dialog`.

5. Create the folder structure exactly as described in `CLAUDE.md` §8. Use empty `.gitkeep` files where folders are empty.

6. Configure `app/globals.css` with the design tokens from `CLAUDE.md` §4.1. Set the `--background` and `--foreground` shadcn variables to map to `--bg-cream` and `--ink` respectively. Apply `background-color: var(--bg-cream)` and the default body font (Inter) to the `body` element.

7. Configure `tailwind.config.ts` to expose semantic colour names (`bg`, `ink`, `brand`, `brand-steel`, `accent`, `ok`, `alert`, `border-soft`) that reference the CSS variables. Add the three font families (`font-serif` → Fraunces, `font-sans` → Inter, `font-mono` → JetBrains Mono).

8. In `app/layout.tsx`, load all three Google Fonts via `next/font/google` with appropriate subsets and weight ranges (Fraunces: variable with italic, Inter: 400–700, JetBrains Mono: 400–500). Set CSS variables `--font-serif`, `--font-sans`, `--font-mono` on the `<html>` element. Set HTML `lang="en"`.

9. Create `.env.example` with placeholders:

   ```
   RESEND_API_KEY=
   CONTACT_EMAIL=storage@bluegou.com
   NEXT_PUBLIC_SITE_URL=https://bluegou.com
   NEXT_PUBLIC_PLAUSIBLE_DOMAIN=bluegou.com
   ```

10. Create a `.prettierrc` with Tailwind plugin enabled and `singleQuote: true`, `semi: true`, `trailingComma: 'all'`, `printWidth: 100`.

11. Initialise git and make the first commit `chore: project scaffold`.

12. Replace the default `app/page.tsx` with a simple placeholder showing `Blue Gate — coming soon` styled with the new tokens, so we can verify fonts and colours render correctly.

## Verification checklist

After completing, run `pnpm dev` and confirm:

- [ ] The placeholder page renders on `http://localhost:3000`
- [ ] Background is cream (`#FAF8F4`)
- [ ] Text is dark ink (`#0B1220`)
- [ ] The serif font (Fraunces) is loaded and visible
- [ ] No console errors
- [ ] `pnpm lint` passes

Report any issues, then await prompt 01.
