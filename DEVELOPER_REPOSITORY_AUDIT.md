# Developer & Repository Audit

Read-only audit. No files were edited, deleted, restored, committed, or deployed as part of
this audit. All commands used were inspection-only (`git log`, `git show`, `grep`, `gh api`).

## 1. Executive summary

The repository's Git history contains direct, objective evidence that the "Refund Guarantee
Policy" PDF was not written from scratch for this business. The **first committed version**
of the document refers throughout its body text to a different company — **"En-Avant
Logistics B.V"** — while already carrying Blue Gate's logo, address, and contact emails, and
already being signed "Thomas Levi, Tank Operator, Blue Gate Shipping & Trade BV." Roughly 19
hours later, a second commit replaced the PDF with a version where the remaining "En-Avant
Logistics B.V" references were changed to "Blue Gate Shipping and Trade B.V." This is
consistent with a pre-existing document template being rebranded for this site, with the
rebrand completed in two passes.

No other instances of concerning functionality (identity-document collection, crypto/bank
payment instructions, hidden routes, exfiltration, hardcoded secrets) were found active in
the current repository. The one confirmed issue — the refund popup and PDF — has already been
removed from the repository (commit `e8ab85a`) and is pending redeployment.

## 2. Audit scope and limitations

- Scope: this Git repository (`wardakamai/bluegate-site`) only. I do not have access to
  cPanel, the domain registrar, DNS, email inbox, Resend/Plausible dashboards, or the actual
  live server filesystem beyond what has been deployed via the documented rsync process.
- Git author identity (`wardakamai <wardakconsultant@gmail.com>`) is the shared account used
  for all commits in the repository, including my own commits made earlier in this session.
  **Author metadata alone does not distinguish who physically typed any given change** — this
  is treated as evidence of what changed and when, not of a specific individual's actions,
  per your instruction.
- I cannot verify Clement Wilson's involvement, employment relationship, or intent from
  repository data alone. Nothing below should be read as a claim about a specific person.
- PDF binary content is not text-diffable by `git log -S`; the two versions were compared by
  extracting both blobs directly and reading them.

## 3. Developer-access timeline (as provided)

| Field                 | Value                                                                                 |
| --------------------- | ------------------------------------------------------------------------------------- |
| Name/company given    | Clement Wilson                                                                        |
| Email/GitHub identity | Not provided                                                                          |
| Access granted        | ~2026-03-03                                                                           |
| Access revoked        | ~2026-07-29                                                                           |
| Systems accessed      | GitHub, cPanel                                                                        |
| Current access        | Revoked (per owner statement; GitHub collaborator list below is consistent with this) |

Note: the repository's actual commit history only begins **2026-05-20** (project scaffold).
There is no repository activity corresponding to the first ~11 weeks of the stated access
window (2026-03-03 to 2026-05-20). I have no explanation for that gap from repository
evidence alone — it may mean work happened elsewhere (design, planning, a different repo) or
that access predates any project activity. Flagging it because it's a real gap, not resolving
it.

## 4. Relevant commit inventory (2026-05-20 to 2026-07-29, all under the shared account)

48 commits fall in this window. Full list available via `git log --since=2026-03-03
--until=2026-07-30`. Commits directly relevant to this audit's findings:

| Date                   | Commit              | Message                                                            |
| ---------------------- | ------------------- | ------------------------------------------------------------------ |
| 2026-05-22 00:38       | `7103510`           | feat: add Refund Policy popup on home page                         |
| 2026-05-22 00:42–01:20 | `4b803be`…`a4643e4` | six UI/animation iteration commits on the popup                    |
| 2026-05-22 19:30       | `3ce90de`           | chore: replace refund-policy.pdf with corrected document           |
| 2026-05-22 19:46       | `0856428`           | fix: rename PDF to bust CDN cache and set no-cache header for PDFs |
| 2026-05-22 (later)     | `f2c2e9c`           | chore: trigger Vercel redeploy after webhook reconnect             |

All of this activity happened within a single calendar day, with the document-content
correction and cache-busting work happening ~19 hours after the initial add — i.e., someone
came back to specifically fix the document's content and make sure the fixed version reached
visitors, rather than this being a one-off drop-in.

## 5. Current active findings

**None.** The refund popup component (`components/layout/TopBarPopup.tsx`) and PDF
(`public/docs/refund-policy-v2.pdf`) were removed in commit `e8ab85a` (this session, prior to
this audit). Verified via full-tree search (see §6) — no references, routes, imports, or
build-manifest entries remain. This fix has been pushed to GitHub `main`. **It still needs to
be deployed to the live server** via the standard rebuild/restart process — until that
happens, the removal exists in the repository but the live site at bluegou.com may still be
serving the old build depending on when it was last redeployed.

## 6. Historical-only findings

### Finding H-1: Refund popup and PDF (REMOVED)

- **Severity**: High (identity/financial-document collection mechanism, no legal basis cited)
- **Status**: Historical — removed from working tree and pushed to `main`
- **Files (as they existed)**: `components/layout/TopBarPopup.tsx`,
  `public/docs/refund-policy-v2.pdf` (formerly `refund-policy.pdf`)
- **Introducing commit**: `7103510` (2026-05-22)
- **Objective evidence**: Document required government ID + proof-of-address for refund
  processing; referenced Tank Storage Receipt (TSR) issuance and a document-endorsement fee
  list (TTTIA, TTVIA, IPA, NOR, CI, DTA, ATV, IAL, ATI); cited no law or regulation.
- **Recommended action**: Already done — keep removed. Redeploy to production.

### Finding H-2: Original document referenced a different company name

- **Severity**: High (evidentiary — indicates template reuse, not original drafting)
- **Status**: Historical — only recoverable via `git show 7103510:public/docs/refund-policy.pdf`
- **Objective evidence**: The first committed version of the PDF refers to "En-Avant
  Logistics B.V" nine times in its body text (identity verification clause, refund
  conditions, TSR issuance clause, signature block context), while the letterhead logo,
  address, contact emails, and the signature line already said "Blue Gate Shipping & Trade
  BV." Commit `3ce90de`, ~19 hours later, replaced the PDF with a version where all body
  references read "Blue Gate Shipping and Trade B.V." instead.
- **Recommended action**: None required (source file already removed). Documented here
  because it's the single most load-bearing piece of evidence in this audit — worth keeping
  in mind for any conversation with Clement Wilson or any other party who may have supplied
  this template. Consider whether "En-Avant Logistics B.V" is a name worth independently
  looking into, entirely outside of this repository.

## 7. Forms and collected data

Single form, `components/forms/ContactForm.tsx`, submitting to `POST /api/contact`
(`app/api/contact/route.ts`).

| Field                                | Required | Notes                                          |
| ------------------------------------ | -------- | ---------------------------------------------- |
| name, company, email, phone, country | Yes      | Standard contact fields                        |
| companyWebsite                       | No       | Text, no fetch/validation performed against it |
| product, productSpec                 | Yes / No | Enum + free text                               |
| quantity, unit                       | No       | Numeric + enum                                 |
| preferredPort                        | Yes      | Enum: Rotterdam/Houston/Jurong-Singapore/Other |
| startDate, periodMonths              | No       | Date / numeric                                 |
| vesselStatus, vesselEta              | No       | Enum / date                                    |
| transferRequirements                 | No       | Free text, capped 500 chars                    |
| message                              | Yes      | Free text, min 20 chars                        |
| consent                              | Yes      | Checkbox, must be `true` to submit             |
| website                              | N/A      | Honeypot field, must stay empty (bot filter)   |

- **No file upload capability exists anywhere in the codebase** — no `<input type="file">`,
  no multipart handling in the API route.
- **No passport, government ID, bank statement, or financial-document field exists.**
- **Destination**: emailed via Resend to `process.env.CONTACT_EMAIL` (falls back to
  `storage@bluegou.com` if unset) — a real, previously-established address on this domain,
  not an unfamiliar external address.
- **Server-side validation**: Zod schema (`contact-schema.ts`) mirrors client validation;
  honeypot field silently accepted-but-dropped if filled; in-memory rate limit (5
  requests/15 min/IP).
- **Retention**: no database; email-only. No visible retention/storage beyond the recipient
  inbox.
- **Third-party form service**: none — self-hosted via Resend's transactional email API only.

## 8. External services and endpoints

| Service                                             | Purpose                                                                  | Assessment                                                  |
| --------------------------------------------------- | ------------------------------------------------------------------------ | ----------------------------------------------------------- |
| `resend.com`                                        | Transactional email for contact form                                     | Legitimate, documented, requires your own API key           |
| `plausible.io`                                      | Optional analytics (only loads if `NEXT_PUBLIC_PLAUSIBLE_DOMAIN` is set) | Legitimate, privacy-focused analytics provider              |
| `finance.yahoo.com` / `query1.finance.yahoo.com`    | Live commodity price ticker (via `yahoo-finance2` package)               | Public market data, read-only, no credentials involved      |
| `maps.google.com`                                   | Embedded map on contact page                                             | Standard iframe embed                                       |
| `wa.me`                                             | WhatsApp click-to-chat link                                              | Standard                                                    |
| No webhooks currently registered on the GitHub repo | —                                                                        | Consistent with the earlier Vercel→cPanel hosting migration |

No wallet addresses, no payment-processor integrations, no unfamiliar third-party domains
found anywhere in the codebase.

## 9. Security findings

- **No hardcoded credentials, API keys, or tokens** found in tracked source files.
- **`.env.example`** contains only placeholder values (`re_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx`)
  — real secrets are expected to live in server-side environment variables, not the repo.
  No `.env`, `.env.local`, or similar file is tracked in Git.
- **No `eval`, `new Function`, `exec`, or `child_process` usage** anywhere in the app code.
- **No GitHub Actions workflows** exist, so no CI-based remote-execution risk.
- **No post-install/build scripts** beyond standard `next dev`/`build`/`start`.
- **No deploy keys or webhooks** currently registered on the repository.
- **Only one GitHub collaborator** currently has access: `wardakamai` (owner, admin). No
  second account is listed as a collaborator — consistent with the account being shared
  rather than a separate developer account being added and removed.
- **`main` branch has no branch-protection rules configured** — not a compromise indicator,
  but worth turning on (require PR review, or at minimum block force-push) now that this is a
  single-owner-only repo, as basic hygiene going forward.

## 10. Public claims requiring evidence

This session's earlier content-repositioning work (see `CONTENT_REVIEW_REPORT.md`) already
removed or neutralized the large majority of unsupported claims that existed as of
2026-05-20–2026-05-21 (fabricated certifications, fabricated HSE/ESG data, a fabricated
five-terminal network, a fabricated leadership team, an invented founding date). I won't
re-list all of those here since that report already covers them in detail with commit
references. As of the current working tree, no ownership, TSA/TSR-issuance, or
guaranteed-capacity claims remain in the public-facing site — this was verified again in §6's
full-tree search.

## 11. GitHub and hosting access checklist (for manual review)

I could check GitHub programmatically (§9). I do **not** have access to cPanel, DNS, the
domain registrar, or Resend/Plausible dashboards. Please review manually:

- [ ] cPanel: **Users/Contacts** or **Manage Shell Access** — confirm no other SSH/FTP users exist beyond your own.
- [ ] cPanel: **Password & Security** — confirm the password was rotated after revoking Clement Wilson's access (not just "access removed" via some secondary mechanism).
- [ ] cPanel: **SSH Access → Manage SSH Keys** — confirm no unrecognized public keys are authorized.
- [ ] Domain registrar (wherever `bluegou.com` is registered): confirm registrant/admin contact and nameservers haven't been altered, and that account recovery email/phone are yours alone.
- [ ] Resend dashboard: confirm the API key in use was rotated if Clement Wilson ever had it directly (rather than only via env vars you controlled).
- [ ] Plausible (if used): confirm no other team members have dashboard access.
- [ ] GitHub: **Settings → Password and authentication** — confirm 2FA is enabled and the password has been changed since access was shared.
- [ ] GitHub: **Settings → Sessions** — review and revoke any unrecognized active sessions/authorized devices.

## 12. Recommended cleanup plan

1. Redeploy the current `main` branch to production (the popup/PDF removal is not live yet as
   far as I can confirm from the repository alone).
2. Work through the checklist in §11 — the repository-side evidence is clean, but I can't see
   hosting/registrar/email-service access from here.
3. Consider enabling branch protection on `main` (§9) now that this is single-owner.
4. If you're able to identify what "En-Avant Logistics B.V" is, that's the most direct lead
   this audit produced — it's the name that was in the document before it was rebranded for
   this site.

## 13. Final classification

**Requires remediation** (hosting/access side, per §11) — **clean on the repository side** as
of this audit, with one high-severity historical finding (H-1/H-2) already remediated in-repo
but not yet confirmed live.

I'm treating H-2 (the "En-Avant Logistics B.V" original document) as verified repository
evidence, not inference — I extracted and read both PDF versions directly. Everything else
in this report follows the same standard: what's stated as a finding is something I directly
observed in the repository or via the GitHub API, not something inferred about intent.
