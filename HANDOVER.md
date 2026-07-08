# Handover: Jimena Ovando Portfolio

Project path: `C:\Users\marin\Documents\Programming\job-application\portfolio`

Repo: `https://github.com/gustavomarinovando/jimena-portfolio.git`

Branch: `main`

Current local URL: `http://localhost:3000/`

Last pushed commit at handover: `b93a1ef Fix truncated globals.css from previous commit`
(parent: `6511355 Refine hero entrance, contain hero background wash, hide unfinished routes`)

Date: 2026-07-08

Vercel build was previously failing on `6511355` due to a corrupted `globals.css` (see "Incident" section below). `b93a1ef` fixes it and has been pushed; the deploy should be green again — worth a quick check on Vercel before doing anything else.

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

Current focus (per user, 2026-07-08): **homepage only**. Other routes (`/casos/*`, `/trayectoria`, `/materiales`, `/enfoque`, `/girs`) still exist and still work, but are intentionally not linked from the homepage right now (see "Homepage-only scope" below). Don't re-link them unless the user asks.

## Current Repo State

Deployable app history through this handover:

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
- `920c047 Refine motion system and handover`
- `6511355 Refine hero entrance, contain hero background wash, hide unfinished routes`
- `b93a1ef Fix truncated globals.css from previous commit`

### What changed in `6511355` + `b93a1ef` (this session)

1. **Hero name has its own editorial reveal again.** Previously the whole hero stack (eyebrow, name, subtitle, CTA) faded in as one flat block via the shared `Reveal` component, so the name itself didn't read as animated. Now:
   - `.hero-stack.reveal-scope` cancels the generic block-level transition.
   - Each child (`.hero-eyebrow`, `.hero-accent`, `.hero-name-text`, `.hero-subtitle`, `.hero-cta`) has its own opacity/transform transition, staggered: eyebrow -> accent line -> name -> subtitle -> CTA.
   - The name (`Jimena Ovando`) is wrapped in `.hero-name-mask` (overflow hidden) with an inner `.hero-name-text` span that lifts up out of the mask (translateY 112% -> 0, slight scale) — a "curtain reveal" rather than a flat fade. Still block-level, **not** letter-by-letter (that constraint from the previous handover still applies).
   - Markup: `src/app/page.tsx` around the hero `<h1 className="hero-name">` — it now wraps the text in `<span className="hero-name-mask"><span className="hero-name-text">...</span></span>`.

2. **Scroll-reveal system got a subtle scale.** `.reveal-scope` / `.reveal-scope.is-visible` now animate `scale(0.98) -> scale(1)` in addition to the existing translateY + opacity (+ blur on desktop). Mobile media query updated to match (`scale(0.985)`, no blur, same as before). This is the "small animation on scroll" — intentionally restrained, not a new mechanism.

3. **Fixed the background "blank space / gradient spill" bug.** Root cause: the decorative warm/lavender wash lived on `body` as `radial-gradient(...)` positioned with percentages, which resolve against the **entire document height** — a value that grows every time a section, case, or photo is added. That made the glow (and the pink stop in the linear gradient) drift to an unpredictable point on the page, occasionally landing mid-heading (exactly the "Lo que aporto en campo" bug the user reported: title rendering half on flat cream, half where the gradient kicked in).
   - Fix: `body`'s background is now flat `var(--color-cream)`. The decorative radial wash moved to `header::before` (absolute, `z-index: 0`, behind the `z-10` hero content), sized against the header's own bounding box instead of the whole document. It's now permanently contained to the hero; every section below is a clean, flat background regardless of how much content gets added later.
   - If a similar "color banding in a weird spot" bug ever reappears, check for any background positioned with percentages against `body` or another very tall element — that's the pattern to avoid.

4. **Homepage-only scope.** Hid two links per user request (2026-07-08): the "Ver experiencia" button on each case card (was linking to `/casos/${study.id}`) and the "Trayectoria" link in the footer. The underlying routes/pages are untouched and still work if visited directly — they're just not linked from the homepage for now. Re-add the links when the user wants those routes back in the flow.

### Incident: truncated `globals.css` (resolved, but read this if odd file issues recur)

During this session, an intermediate cleanup step (stripping CRLF line endings that had crept into the file) resulted in `globals.css` silently getting **truncated mid-declaration** — the last ~160 lines (final keyframes, the `@media (max-width: 720px)` block, and the `@media (prefers-reduced-motion: reduce)` block) were dropped without any error. This got committed and pushed (`6511355`) and broke the Vercel build with a PostCSS parse error.

Contributing factor: in the Cowork/sandbox setup used for this session, the shell (bash) and the direct file-editing tool did **not** always show the same content for the same file — edits made through one channel weren't reliably visible through the other, and vice-versa. That's how the truncation slipped past verification: one channel showed the file as complete, the other (the one used for `git add`/commit) saw a stale, truncated copy. The same inconsistency reappeared once more later in the session (this time on this very file, HANDOVER.md) — resolved by writing directly through the shell instead of the file-editing tool, since shell-authored writes proved to be the reliable, git-consistent source of truth in that environment.

This class of bug is specific to that sandboxed environment and should not apply in a normal local Claude Code session (single filesystem, no cross-VM mount), but worth knowing about if anything like it ever recurs:

- If a file that was just edited looks suspiciously short, or a build fails with a parse error right after an edit, **recount lines and check brace/bracket balance** before trusting the file.
- For CSS specifically, a cheap sanity check: `node -e "require('postcss').parse(require('fs').readFileSync('src/app/globals.css','utf8'))"` — throws immediately on any malformed CSS, same parser Vercel's build uses.
- Fixed in `b93a1ef`, verified by parsing the exact committed blob (`git show HEAD:src/app/globals.css`) with PostCSS before pushing.

### Note on stale git lock files

Also encountered during this session, likely specific to the Cowork sandbox's file-mount: `.git/index.lock`, `.git/HEAD.lock`, and `.git/refs/heads/main.lock` became orphaned (0-byte leftover files from an interrupted process) and blocked further `git add`/`commit`/`status` until manually deleted from Windows Explorer. If `git status` or `git commit` ever complains about "another git process running" / "unable to create lock file", check for and delete those three files in `.git\`. Should be rare/non-existent in a normal local Claude Code session.

## Motion System

Core files:

- `src/components/Reveal.tsx`
- `src/app/page.tsx`
- `src/app/globals.css`

Current motion language:

- editorial text reveals with `opacity`, `translateY`, and a subtle `scale`;
- the hero name gets its own curtain-mask reveal, decoupled from the rest of the hero stack (see above);
- quiet documentary photo reveals;
- restrained stagger;
- soft glass microinteractions;
- no gratuitous continuous motion.

Hero motion:

- the main name is a single editorial line: `Jimena Ovando`, wrapped in a mask for the curtain reveal;
- it is revealed as a block (translateY out of its mask + slight scale), not letter-by-letter;
- the hero stack now staggers: eyebrow -> accent line -> name -> subtitle -> CTA, each with its own transition-delay (see `.hero-stack` rules in `globals.css`);
- the hero photo gets a very subtle one-time settle on desktop only;
- mobile motion is reduced and should stay lightweight — this is the primary focus per the user (2026-07-08: "for now we're mostly focused on mobile").

Section motion:

- section headings use a small accent line that expands;
- content fades/scales in once when it enters the viewport;
- photo mosaics use restrained stagger, not dramatic zoom;
- cards get soft hover/tap feedback only.

Reduced motion:

- content must remain visible immediately;
- translation and scale should be removed;
- opacity changes should be minimal or disabled if needed;
- the hero's new per-child classes (`.hero-eyebrow`, `.hero-subtitle`, `.hero-cta`, `.hero-name-text`) are included in the `prefers-reduced-motion` override — if you add more staggered hero elements, add them there too.

Important rule:

- Do not reintroduce letter-by-letter typography animation for the hero.
- Do not add continuous parallax or looping motion.
- Keep everything transform/opacity-based and mobile-friendly.
- Do not position decorative background gradients with percentages against `body` or any unbounded-height element — scope them to a fixed-size container (see the header/body fix above).

## Homepage

Key file: `src/app/page.tsx`

Recent changes (this session):

- Hero name markup restructured for the curtain-mask reveal (see above).
- Case cards no longer link to `/casos/${study.id}` (button removed, cards now end after the summary line).
- Footer no longer links to `/trayectoria` (Contacto button only).
- No other content/copy changes this session — the "deep analysis of all homepage text, UI/UX, animation, layout" pass the user mentioned wanting next has **not** been started yet.

Earlier state (still true):

- The hero uses the real territory/workshop photo from `public/photos/trabajo-territorio.jpg`.
- Section headings and content blocks use the reusable `Reveal` wrapper.
- Case cards, capability tiles, and the mosaic enter with restrained stagger.
- The materials section shows the real cartilla preview instead of a generic placeholder.

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

Behavior as of last commit (unchanged this session):

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

- `acompañar`
- `jóvenes`
- `guías`
- `educación`
- `participación`
- `comunicación`
- `política`
- `género`

Note: Windows PowerShell may display UTF-8 text as mojibake. Do not assume the file is broken just because the terminal renders accents badly. Check in browser/build before "fixing" UTF-8.

## Case Pages

Reusable layout:

- `src/app/casos/CaseReport.tsx`

Routes (still live, just not linked from the homepage right now — see "Homepage-only scope"):

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
- `src/app/materiales/page.tsx` - materials page (not linked from homepage nav right now, still live).
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

- `eslint src` — clean, no errors (checked this session).
- `next build` — **not** verified locally/in-sandbox this session (the sandboxed environment used couldn't complete a production build — unrelated native/mmap crash, not a code issue). PostCSS parse of the committed `globals.css` was verified directly and is clean, and the user confirmed the Vercel build issue is fixed after pushing `b93a1ef`. Still worth running `corepack pnpm run build` locally at least once to fully confirm end-to-end.
- No live visual/browser check was done this session (no working browser connection available). The hero animation, scroll scale, and background fix are implemented and code-reviewed carefully, but haven't been eyeballed on a real device yet — do that first.

Latest important visual expectation:

- The hero name should feel animated again (curtain reveal), stay readable immediately after, remain on one line, and use the available width better.
- Motion should feel editorial and documentary, not like a SaaS landing page.
- The cartilla preview should remain stable, readable, and not blink or blank when switching pages.
- No section heading should ever straddle a visible color/gradient boundary — should be moot now that the wash is contained to the header, but worth confirming visually.

## What The User Still Wants / Likely Next Work

1. **Visually verify this session's changes first** (nobody has eyeballed them yet):
   - hero name curtain reveal on mobile (`320px`, `360px`, `390px` primarily — mobile is the current focus) and desktop;
   - confirm the section-boundary background bug is actually gone;
   - confirm case cards and footer look right without their removed links.
2. Confirm the Vercel deploy is green on `b93a1ef` (user reported the build fix worked as of 2026-07-08).
3. **Deep pass on homepage text, UI/UX, animation, and layout** — user explicitly flagged this as the next big piece of work, not yet started. No specifics given yet on scope; ask before diving in broadly.
4. Keep refining the motion system if anything feels too strong on mobile: lower reveal distance, lower image settle amount, reduce stagger/scale if busy.
5. Add more real photos as the user prepares them (user is currently picking photos/media with Jimena).
6. Integrate more real materials: banners, booklets, audio/radio, guides, scans.
7. Keep public copy warm and human, not "AI generated" or "instructional".
8. Avoid redundant titles when a visual asset already has the title on the cover.
9. Keep checking actual rendered desktop/mobile screenshots; a successful build is not enough.
10. Consider a richer booklet interaction later, but keep it lightweight unless the user explicitly asks for a fuller PDF.js/book-reader style viewer.
11. When ready, re-link `/casos/*` and `/trayectoria` from the homepage (or decide they should stay unlinked longer-term).

## How To Continue Later

When the next session starts:

1. Run `git log --oneline -5` and `git status` first to confirm you're at `b93a1ef` (or later) with a clean tree.
2. Open `src/app/page.tsx`, `src/app/globals.css`, and `src/components/Reveal.tsx` first.
3. Keep the motion language consistent:
   - opacity + translateY + subtle scale;
   - one-time reveals;
   - no continuous motion;
   - no letter-by-letter hero typography.
4. Check the hero on mobile first (current focus).
5. Then check the materials/cartilla interaction.
6. If something needs to be softened, reduce timing/scale before adding new effects.
7. Run `corepack pnpm run build` locally to confirm before pushing anything.

## Remaining Human Inputs

- Additional authentic photos with permission (in progress — user picking these with Jimena).
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
- Do not re-link `/casos/*` or `/trayectoria` from the homepage unless the user asks — currently intentionally hidden to keep focus on the homepage.
- Prefer JSON data edits over hardcoded candidate facts where possible.
- Run lint/build and visually inspect important responsive changes — a clean build is not sufficient proof a CSS file is intact (see the truncation incident above); spot-check line counts or parse the file directly for anything non-trivial.
- Keep motion restrained: opacity, translateY, small scale, one-time reveals, no continuous loops.
- Never position decorative/background gradients with percentages against `body` or another element whose height grows with content — scope them to a fixed-size container instead.
