# Content Review Report (internal — not linked from the site)

Generated during the 2026-08 repositioning pass. Summarizes what was removed, why,
and what still needs real information before it can be published.

## Company facts corrected

- Legal establishment year changed from a fabricated "1964" (later "2010") to **2025**,
  matching the KVK registration date found during earlier research in this project.
- Public brand corrected to **Blue Gate Tank Farm**; legal entity remains
  **Blue Gate Shipping and Trade B.V.** (KVK 98572695, Vestigingsnummer 000063726912).
- All "X years experience" / "over a decade" / "six decades" claims removed — the
  company has no operating history yet.

## Content removed (fabricated, no supporting evidence)

- **Terminal network**: the entire "five-terminal operator" narrative (Rotterdam,
  Fujairah, Houston, Jurong, Zhoushan) with specific nominal capacities (2.8M m³,
  1.4M m³, etc.), flagship/status badges, and per-terminal spec tables. No ownership,
  lease, or management agreement evidence exists for any of these.
- **Rotterdam facility infrastructure**: fabricated jetty counts, berth drafts, manifold
  counts, throughput rates, blending tolerances, site schematic — all `// TODO: confirm
with client` placeholders that were being rendered as fact.
- **Fictional tank inventory/register**: tank IDs, per-tank capacity, lease/availability
  status on the storage-facility page and per-product "matching storage" tables.
- **Fabricated certifications**: ISO 9001/14001/45001, OCIMF SIRE, ISGOTT, FETSA, SQAS
  badges displayed as held certifications (with only a small-print disclaimer that they
  were "indicative"). Removed entirely rather than published as pending.
- **Fabricated HSE data**: zero-spill / LTIF metrics, an invented "operating licence,"
  an invented mutual aid agreement with the Port of Rotterdam Authority fire brigade,
  and a fabricated on-site fire team.
- **Fabricated ESG data**: GRI/TCFD/CDP framework badges, an emissions table with
  invented baselines/targets (some literally marked "(TODO)" in the rendered UI).
- **Fabricated leadership team**: four named individuals with invented titles, bios and
  years of terminal experience. Replaced with a generic team statement.
- **Fabricated fleet/infrastructure in shipping content**: "our fleet," owned rail ISO
  tanks, a Rotterdam container terminal with "direct deep-water berth connection," live
  GPS tracking infrastructure, and marine terminal operation claims ("VLCC draft
  accommodated at the primary terminal"). Rewritten as coordination through named
  industry-standard compliance frameworks, without claiming owned assets.
- **Broken/placeholder links removed**: a footer "Refund Guarantee Policy (PDF)" link
  to a file that never existed; a 0-byte `hse-policy.pdf` link; a 0-byte `esg-report.pdf`
  CTA.

## Pages consolidated

- `/storage-facility` → redirected (301) to `/services/oil-storage`. Its entire content
  was the fictional tank inventory; once that's removed there's no distinct content
  left to justify a separate page.
- `/petroleum-storage-terminal` → defensive redirect (301) to `/terminal`, though this
  route was never found in the codebase — included only in case it exists outside this
  repo.
- `/terminal` repositioned from "our terminal network" to general, publicly-verifiable
  market information (Rotterdam/Houston/Singapore as energy hubs), explicitly
  disclaimed as not representing Blue Gate Tank Farm-owned capacity.

## Still requiring real information before stronger claims can be made

- Any specific storage/terminal ownership, co-ownership, lease, sublease, or
  terminal-management agreement — if real documentation exists, it should go through
  actual legal review, not be drafted as marketing copy.
- Real leadership names/photos/bios (or a decision to keep the team section generic).
- Real certifications actually held, with evidence, if any.
- Real product spec-sheet / SDS PDFs — the files at `/specs/*.pdf` are currently
  48-byte placeholder stubs, not usable documents.
- LinkedIn / social profile URL (currently empty).
- Whether Blue Gate Tank Farm has any real relationship to `toocrudeoil.com` or
  `bluegatebv.com` beyond design inspiration and shared hosting — flagged earlier in
  this project's history and never fully resolved.

## Explicitly NOT done in this pass (out of scope by instruction)

- No tank/terminal ownership claims, TSA/TSR issuance claims, or specific
  ownership-percentage claims were added, per repeated explicit instruction not to
  build unverified claims of this kind.
- Fujairah and Zhoushan are not represented anywhere as active markets — removed
  along with the rest of the fictional terminal network and not reinstated.
