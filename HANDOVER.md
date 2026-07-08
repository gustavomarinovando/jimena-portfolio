# Handover: Jimena Ovando Portfolio

Project path: `C:\Users\marin\Documents\Programming\job-application\portfolio`

Repo: `https://github.com/gustavomarinovando/jimena-portfolio.git`

Branch: `main`

Current local URL: `http://localhost:3000/`

Last pushed commit at handover: `439f252 Enlarge hero name and slow reveal`

Date: 2026-07-08

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

The design language is editorial, warm, pastel/plum, tactile and evidence-led. It should feel premium, documentary, and human, not like a SaaS landing page.

## Current Repo State

The deployable app has been committed and pushed through:

- `8a9ce4e Refine professional portfolio homepage`
- `77cf8fb Polish public portfolio copy`
- `d322e38 Humanize portfolio copy`
- `c3e4b98 Add interactive cartilla preview`
- `69c6d0b Improve cartilla preview interaction and Spanish copy`
- `0b84c46 Refine cartilla booklet preview`
- `7376282 Align cartilla as printed booklet spread`
- `9f70e58 Refine booklet interaction and mobile layout`
- `a546df1 Polish materials hero and animated name`
- `5319fc4 Stabilize cartilla transitions and hero name`
- `ae6df48 Restore hero spacing and preload cartilla pages`
- `439f252 Enlarge hero name and slow reveal`

Current working-tree work is a motion-system refresh that should be treated as the active direction for the next chat:

- reusable viewport reveals;
- editorial hero entrance;
- subtle one-time hero image settle on desktop;
- restrained photo and card stagger;
- softer hover/tap feedback;
- reduced-motion support;
- cartilla page preloading to reduce flicker.

## Motion System

Core files:

- `src/components/Reveal.tsx`
- `src/app/page.tsx`
- `src/app/globals.css`

Current motion language:

- editorial text reveals with `opacity` and `translateY`;
- quiet documentary photo reveals;
- restrained stagger;
- soft glass microinteractions;
- no gratuitous continuous motion.

Hero motion:

- the main name is now a single editorial line: `Jimena Ovando`;
- it is revealed as a block, not letter-by-letter;
- the hero stack uses one-time reveal timing with eyebrow first, then title, then subtitle, then CTA;
- the hero photo gets a very subtle one-time settle on desktop only;
- mobile motion is reduced and should stay lightweight.

Section motion:

- section headings use a small accent line that expands;
- content fades in once when it enters the viewport;
- photo mosaics use restrained stagger, not dramatic zoom;
- cards get soft hover/tap feedback only.

Reduced motion:

- content must remain visible immediately;
- translation and scale should be removed;
- opacity changes should be minimal or disabled if needed.

Important rule:

- Do not reintroduce letter-by-letter typography animation for the hero.
- Do not add continuous parallax or looping motion.
- Keep everything transform/opacity-based and mobile-friendly.

## Homepage

Key file: `src/app/page.tsx`

Recent changes:

- Rebuilt the homepage around the new editorial motion system.
- The hero now uses the real territory/workshop photo from `public/photos/trabajo-territorio.jpg`.
- The hero sequence is now the main name, subtitle, CTA, and then the hero image settle.
- Section headings and content blocks now use the reusable `Reveal` wrapper.
- Case cards, capability tiles, and the mosaic now enter with restrained stagger.
- The materials section still shows the real cartilla preview instead of a generic placeholder.

## Real Cartilla / PDF Material

Input source:

- `..\inputs\cartilla\incidencia-politica.pdf`

Public files:

- `public/materials/incidencia-politica.pdf`
- `public/materials/incidencia-politica/page-00.jpg` through `page-27.jpg`

Data:

- `src/data/materiales.json`

Components:

- `src/components/MaterialBook.tsx`
- `src/components/FeaturedMaterial.tsx`

CSS:

- `src/app/globals.css`

Behavior as of last commit:

- The PDF has 28 pages.
- The preview is treated like a printed booklet.
- Closed state shows the actual back cover on the left (`page-27.jpg`) and actual front cover on the right (`page-00.jpg`), aligned as a two-page spread.
- On click/tap, the left side goes backward and the right side goes forward.
- On mobile, the preview switches to a single-page display to use more of the screen.
- The component preloads images to reduce blank frames and flicker.
- The full PDF remains available through `Abrir cartilla` and `Descargar`.
- Keep the preview aligned edge-to-edge like an open book. Do not revert to angled/random stacked pages.

## Spanish Copy / Accents

A Spanish accent pass was done across visible app copy and rendered data, including terms like:

- `acompaÃ±ar`
- `jÃ³venes`
- `guÃ­as`
- `educaciÃ³n`
- `participaciÃ³n`
- `comunicaciÃ³n`
- `polÃ­tica`
- `gÃ©nero`

Note: Windows PowerShell may display UTF-8 text as mojibake, for example `guÃƒÂ­as`. Do not assume the file is broken just because the terminal renders accents badly. Check in browser/build before "fixing" UTF-8.

## Case Pages

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
- `src/app/globals.css` - global visual system, responsive rules, reveal system, hero motion, book spread styling.
- `src/components/Reveal.tsx` - reusable viewport reveal wrapper.
- `src/components/MaterialBook.tsx` - interactive cartilla/booklet preview.
- `src/components/FeaturedMaterial.tsx` - featured materials block with title reveal control.
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

Latest important visual expectation:

- The hero name should stay readable immediately, remain on one line, and use the available width better.
- Motion should feel editorial and documentary, not like a SaaS landing page.
- The cartilla preview should remain stable, readable, and not blink or blank when switching pages.

## What The User Still Wants / Likely Next Work

1. Final visual review of motion on mobile and desktop:
   - check `320px`, `360px`, `390px`, tablet, and `1440px`;
   - confirm the hero feels premium but not over-animated;
   - confirm scroll reveals trigger once and do not replay.
2. Keep refining the motion system if anything feels too strong:
   - lower reveal distance;
   - lower image settle amount;
   - reduce stagger if it feels busy.
3. Add more real photos as the user prepares them.
4. Integrate more real materials: banners, booklets, audio/radio, guides, scans.
5. Keep public copy warm and human, not "AI generated" or "instructional".
6. Avoid redundant titles when a visual asset already has the title on the cover.
7. Keep checking actual rendered desktop/mobile screenshots; successful build is not enough.
8. Consider a richer booklet interaction later, but keep it lightweight unless the user explicitly asks for a fuller PDF.js/book-reader style viewer.

## How To Continue Later

When the next chat starts:

1. Open `src/app/page.tsx`, `src/app/globals.css`, and `src/components/Reveal.tsx` first.
2. Keep the motion language consistent:
   - opacity + translateY;
   - subtle scale only where needed;
   - one-time reveals;
   - no continuous motion.
3. Check the hero on mobile first.
4. Then check the materials/cartilla interaction.
5. If something needs to be softened, reduce timing before adding new effects.
6. If you need the exact current head after syncing, run `git log --oneline -1`.

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
- Keep motion restrained: opacity, translateY, small scale, one-time reveals, no continuous loops.
