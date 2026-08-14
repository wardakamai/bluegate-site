# Blue Gate Rebuild — Claude Code Workflow

This bundle is designed for **Claude Code** running inside VS Code. It splits the website rebuild into a project-wide context file plus sequential prompts you paste one at a time.

---

## How Claude Code uses these files

- **`CLAUDE.md`** — place this at the **root of your project folder**. Claude Code automatically reads it at the start of every session, so the full brand, design system, and acceptance criteria stay in context without you re-pasting them.
- **`prompts/00`–`12`** — paste these into the Claude Code chat **one at a time, in order**. Each prompt is a focused, single-responsibility task that produces a reviewable artifact (a scaffold, a component, a page, a deploy config).
- Between prompts, **review the diff Claude proposes, accept or refine, commit, then move to the next prompt**. Do not paste prompt 02 until prompt 01 is committed and working.

---

## Setup (one-time)

1. Install Claude Code: `npm install -g @anthropic-ai/claude-code` (or follow current install instructions at https://docs.claude.com).
2. Create an empty folder for the project, e.g. `bluegate-site/`.
3. Copy `CLAUDE.md` into that folder.
4. Open the folder in VS Code.
5. Open the Claude Code panel (`Cmd/Ctrl+Esc` or via the sidebar).
6. Verify Claude Code has read `CLAUDE.md` by asking: _"What project are we building and what is the design system?"_ — it should summarise from the file.

---

## Workflow per prompt

For each prompt file in `prompts/`:

1. **Read the prompt yourself first** so you know what's coming.
2. **Paste the entire prompt into Claude Code.**
3. Let it plan. If it proposes a plan first (it usually does for non-trivial work), review and tell it to proceed.
4. Review every file diff. Reject any file you don't want; ask for changes.
5. Run `npm run dev` and verify in the browser before moving on.
6. **Commit to git**: `git add . && git commit -m "Prompt 0X: <summary>"`.
7. Move to the next prompt.

---

## Prompt order

| #   | File                                   | What it does                                                                         |
| --- | -------------------------------------- | ------------------------------------------------------------------------------------ |
| 00  | `prompts/00-scaffold.md`               | Next.js + Tailwind + shadcn project scaffold and design tokens                       |
| 01  | `prompts/01-site-config.md`            | Central `site.ts` config (nav, brand, contact details)                               |
| 02  | `prompts/02-layout-and-nav.md`         | Root layout, top utility bar, main nav with mega-menu, footer                        |
| 03  | `prompts/03-home-page.md`              | Home page in full (hero, terminals, ticker, services, products, sustainability, CTA) |
| 04  | `prompts/04-market-ticker.md`          | Live market-price API route and `<MarketTicker />` component                         |
| 05  | `prompts/05-about-page.md`             | About page with timeline, mission/vision/values                                      |
| 06  | `prompts/06-services-pages.md`         | Services hub + 4 sub-pages (storage, inspection, lab, shipping)                      |
| 07  | `prompts/07-terminal-and-storage.md`   | Terminal and Storage Facility pages                                                  |
| 08  | `prompts/08-products.md`               | Products hub + 4 detail pages with spec tables & matching tanks                      |
| 09  | `prompts/09-markets-page.md`           | Markets page with extended ticker and commentary                                     |
| 10  | `prompts/10-sustainability-and-hse.md` | Sustainability and HSE pages                                                         |
| 11  | `prompts/11-contact-form.md`           | Contact page, form, serverless email handler                                         |
| 12  | `prompts/12-seo-and-deploy.md`         | Metadata, JSON-LD, sitemap, robots, deploy config                                    |

---

## Tips for working with Claude Code

- **Use `/clear` between major prompts** if context gets bloated. `CLAUDE.md` is re-read on each new session.
- **Ask Claude Code to read files before editing them**: it has direct filesystem access, so for non-trivial edits say _"read X first, then propose changes"_.
- **For images**, use placeholder URLs from `https://images.unsplash.com` during build, then swap to real assets later. Tell Claude Code which Unsplash IDs to use to keep things consistent.
- **For brand assets** (real logo, real photography), drop them in `public/` and reference by path in your prompts.
- **If Claude Code goes off-piste**, stop it, run `/clear`, and re-paste the current prompt with a one-line correction at the top: _"Previous attempt drifted — focus only on X."_
- **Confirm placeholders before deploy**. The `CLAUDE.md` file flags certifications and Houston/Singapore status as items to verify with the client.

---

## Done criteria

You're done when prompt 12 is committed, the staging URL passes Lighthouse ≥ 95 on mobile, and the client has signed off on copy and imagery.
