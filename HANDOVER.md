# Handover: Jimena Ovando Portfolio

Project path: `C:\Users\marin\Documents\Programming\job-application\portfolio`

Repo: `https://github.com/gustavomarinovando/jimena-portfolio.git`

Branch: `main`

Current local URL: `http://localhost:3000/`

Last pushed commit at handover: `7376282 Align cartilla as printed booklet spread`

Date: 2026-07-07

## Current Product Direction

This is a professional visual portfolio, not a single-vacancy/CETM application site and not a resume clone.

The intended direction is:

- visual proof first, short explanation second;
- authentic photographs and real materials over abstract claims;
- warm human copy, not AI/scaffolding language;
- first-person or candidate-centered language where appropriate;
- no fake metrics, fake photos, or invented candidate achievements;
- no "25+ years" positioning;
- no CETM-specific public framing unless the user explicitly asks to reintroduce it.

The design language is editorial, warm, pastel/plum, tactile and evidence-led. Avoid making it feel like a SaaS dashboard, official CETM microsite, or generic purple landing page.

## Current Repo State

The deployable app has been committed and pushed through:

- `8a9ce4e Refine professional portfolio homepage`
- `77cf8fb Polish public portfolio copy`
- `d322e38 Humanize portfolio copy`
- `c3e4b98 Add interactive cartilla preview`
- `69c6d0b Improve cartilla preview interaction and Spanish copy`
- `0b84c46 Refine cartilla booklet preview`
- `7376282 Align cartilla as printed booklet spread`

Expected untracked local files:

- `docs/CONTENT_TODO.md`
- `docs/DEPLOYMENT.md`
- `docs/JIMENA_LIVE_ANSWER_SHEET.md`
- `docs/JIMENA_LIVE_INTERVIEW_GAP_MAP.md`
- `docs/JIMENA_LIVE_INTERVIEW_GUIDE.md`
- `docs/JIMENA_TOP_20_QUESTIONS.md`
- `docs/MORNING_QUESTIONS.md`
- `docs/PHOTO_EVIDENCE_TEMPLATE.md`
- `docs/RESEARCH_INTEGRATION.md`
- `docs/VOICEOVER_FACT_CHECK.md`

Those docs are intentionally not pushed. They contain private/internal preparation notes and some older CETM/interview-specific language. Do not add them to public deployment unless the user explicitly asks.

## Important Recent Work

### Homepage

Key file: `src/app/page.tsx`

Recent changes:

- Removed CETM-specific public wording.
- Hero now uses the real territory/workshop photo from `public/photos/trabajo-territorio.jpg`.
- Hero image overlay was reduced to one small chip so the image can breathe.
- Copy was warmed up and shortened.
- Materials section now shows the real cartilla preview instead of a generic placeholder.

### Real Cartilla / PDF Material

Input source:

- `..\inputs\cartilla\incidencia-politica.pdf`

Public files:

- `public/materials/incidencia-politica.pdf`
- `public/materials/incidencia-politica/page-00.jpg` through `page-27.jpg`

Data:

- `src/data/materiales.json`

Component:

- `src/components/MaterialBook.tsx`

CSS:

- `src/app/globals.css`

Behavior as of last commit:

- The PDF has 28 pages.
- The preview is treated like a printed booklet.
- Closed state shows the actual back cover on the left (`page-27.jpg`) and actual front cover on the right (`page-00.jpg`), aligned as a two-page spread.
- On click/tap it advances through spreads:
  - closed: last + first
  - then page 2 + page 3
  - then page 4 + page 5
  - continues through the internal spreads.
- The full PDF remains available through `Abrir PDF` and `Descargar`.

The user specifically asked for the pages to be next to each other, aligned like an open book. Do not revert to angled/random stacked pages.

### Spanish Copy / Accents

A Spanish accent pass was done across visible app copy and rendered data, including terms like:

- `acompañar`
- `jóvenes`
- `guías`
- `educación`
- `participación`
- `comunicación`
- `política`
- `género`

Note: Windows PowerShell may display UTF-8 text as mojibake, for example `guÃ­as`. Do not assume the file is broken just because the terminal renders accents badly. Check in browser/build before "fixing" UTF-8.

### Case Pages

Reusable layout:

- `src/app/casos/CaseReport.tsx`

Routes:

- `/casos/cipca-2021-2023/`
- `/casos/indicep-2013-2015/`
- `/casos/indicerp-2013-2015/` legacy typo redirect-style page
- `/casos/cipca-2015-2016/`
- `/casos/constructora-mendieta-2019-2020/`

Mendieta was added from the updated CV as a real case route/data file.

## Key Files

- `src/app/page.tsx` - homepage.
- `src/app/globals.css` - global visual system, responsive rules, book spread styling.
- `src/components/MaterialBook.tsx` - interactive cartilla/booklet preview.
- `src/app/materiales/page.tsx` - materials page.
- `src/app/casos/CaseReport.tsx` - reusable case layout.
- `src/data/materiales.json` - materials data and PDF preview page list.
- `src/data/media.json` - photo slot architecture.
- `src/data/video.json` - future video state/model.
- `src/data/trayectoria.json` - visible trajectory data.
- `src/data/case-studies/*.json` - case-study source data.

## Commands

From `C:\Users\marin\Documents\Programming\job-application\portfolio`:

```powershell
corepack pnpm run lint
corepack pnpm run build
```

The user has been running the dev server at:

```text
http://localhost:3000/
```

If starting fresh:

```powershell
corepack pnpm install
corepack pnpm run dev
```

Helper scripts also exist:

```powershell
.\dev.ps1
.\build-local.ps1
```

## Last Verification

Before this handover, the following were passing:

- `corepack pnpm run lint`
- `corepack pnpm run build`

Visual QA done with headless Chrome:

- `/materiales/` desktop around `1440x1100`
- `/materiales/` mobile around `390x1100`

Latest important visual expectation:

- On `/materiales/`, the cartilla preview should show the back cover on the left and front cover on the right, aligned edge-to-edge like the user's reference image.

## What The User Still Wants / Likely Next Work

1. Continue improving visual design and responsiveness, especially where mobile captures show right-edge clipping.
2. Add more real photos as the user prepares them.
3. Integrate more real materials: banners, booklets, audio/radio, guides, scans.
4. Keep public copy warm and human, not "AI generated" or "instructional".
5. Avoid redundant titles when a visual asset already has the title on the cover.
6. Keep checking actual rendered desktop/mobile screenshots; successful build is not enough.
7. Consider a richer booklet interaction later, but keep it lightweight unless the user explicitly asks for a full PDF.js/book-reader style viewer.

## Remaining Human Inputs

- Additional authentic photos with permission.
- Captions and metadata for photos: organization, year, location, role, privacy status.
- More real material covers/spreads/files.
- Final CV PDF.
- References with permission.
- Video asset, poster, captions and transcript if/when available.
- Verified numbers where appropriate: workshops, participants, communities, families, materials.

## Cautions For Next Agent

- Do not invent Jimena's experience.
- Do not add fake documentary or AI-generated "evidence" photos.
- Do not reintroduce CETM/vacancy-specific framing unless the user asks.
- Do not commit the untracked private `docs/*.md` files unless explicitly requested.
- Prefer JSON data edits over hardcoded candidate facts where possible.
- Use `apply_patch` for manual edits.
- Run lint/build and visually inspect important responsive changes.
