# Handover: Jimena Ovando Portfolio

Project path: `C:\Users\marin\Documents\Programming\job-application\portfolio`

Repository target: `https://github.com/gustavomarinovando/jimena-portfolio.git`

Status: buildable, visually refactored, safe for Jimena/internal review. Do not publish to recruiters until real photos, final materials and candidate fact confirmations are complete.

## Current Product Direction

The current direction is no longer a resume website. It is a visual evidence portfolio:

- show first, explain second;
- use authentic photos, document previews and concise captions;
- avoid invented documentary imagery, fake metrics or unverified achievements;
- keep GIRS positioning as a bridge from existing education/community capability, not a claim of direct waste-management experience;
- do not use the "25+ years" seniority angle in public-facing copy.

## What Changed In This Pass

- Rebuilt the homepage around an editorial visual hero, proof strip, coming-soon video feature, evidence mosaic, selected stories, materials-as-objects and compact methodology.
- Replaced the generic dark/card-heavy visual language with semantic plum/violet/lilac/yellow/cream tokens and restrained glass surfaces.
- Added CSS-only microinteractions with reduced-motion fallback.
- Refactored case pages into short visual field reports using `src/app/casos/CaseReport.tsx`.
- Refactored `/materiales`, `/girs`, `/enfoque` and `/trayectoria` to reduce copy density and avoid resume duplication.
- Added media and video data architecture for incremental asset integration.
- Removed the visible pre-2013 pending trajectory node and public seniority framing.

## Key Files

- `src/app/page.tsx` - homepage structure.
- `src/app/globals.css` - visual system, tokens, glass, motion and responsive rules.
- `src/app/casos/CaseReport.tsx` - reusable case report layout.
- `src/data/media.json` - photo slot metadata model.
- `src/data/video.json` - future video state/model.
- `docs/PHOTO_INTEGRATION_GUIDE.md` - how to add photos safely.
- `../strategy/07-visual-density-audit.md` - old-site visual critique.
- `../strategy/08-content-compression-plan.md` - copy compression plan.
- `../strategy/09-visual-refactor-review.md` - before/after review and remaining weakness.

## Routes

- `/`
- `/casos/cipca-2021-2023/`
- `/casos/indicep-2013-2015/`
- `/casos/indicerp-2013-2015/` legacy typo route
- `/casos/cipca-2015-2016/`
- `/materiales/`
- `/enfoque/`
- `/girs/`
- `/trayectoria/`

## Local Commands

The user confirmed the dev site works at `http://localhost:3000/`.

```powershell
cd C:\Users\marin\Documents\Programming\job-application\portfolio
npm run dev
npm run build
node node_modules\eslint\bin\eslint.js .
node node_modules\typescript\bin\tsc --noEmit
```

Helper scripts also exist:

```powershell
.\dev.ps1
.\build-local.ps1
```

## Last Verification

Completed on 2026-07-06:

- ESLint passed.
- TypeScript passed.
- `next build` passed.
- Static export generated 11 `index.html` route files.
- Public `src`/`out` search found no remaining "25+ years" or pre-2013 public trajectory wording.
- CDP visual smoke at 390px confirmed no horizontal overflow on home or the CIPCA case page.
- Final review screenshots were saved to:
  - `C:\tmp\jimena-final-home-390.png`
  - `C:\tmp\jimena-final-case-390.png`

## Remaining Human Inputs

1. Real hero/workshop photograph with permission.
2. Five to eight homepage evidence photos with metadata.
3. Two to four photos per selected case, where available.
4. Video MP4, poster image, captions and transcript.
5. Real covers/spreads for cartillas, manuals, triptychs, posters and audio/radio assets.
6. Verified organization names, years, locations, roles and captions.
7. Confirmation of INDICEP environmental topics.
8. Confirmation of any direct GIRS/residuos/compostaje/reciclaje/separacion en fuente experience.
9. Confirmation of school/curriculum/OTB experience, if any.
10. Final CV PDF and references with permission.

## Next Agent Guidance

- Read the three strategy docs listed above before changing layout or content.
- Do not replace placeholders with fake documentary photos.
- Keep captions short and evidence-based.
- Prefer updating JSON data over hardcoding candidate facts into pages.
- Keep the portfolio visually sympathetic to CETM's purple/yellow world, but do not make it look like an official CETM microsite.
- Run real mobile visual QA after adding photos; image aspect ratios may change the rhythm.
- Do not deploy publicly without explicit user instruction.
