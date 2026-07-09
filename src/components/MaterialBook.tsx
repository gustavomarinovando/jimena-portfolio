"use client";

import { useEffect, useMemo, useState, type CSSProperties, type MouseEvent } from "react";

type MaterialBookProps = {
  pages: string[];
  compact?: boolean;
  stacked?: boolean;
  onTurnChange?: (turn: number) => void;
};

type Spread = [string | null, string | null];
type Flip = { dir: "forward" | "backward"; nextTurn: number };

export function MaterialBook({ pages, compact = false, stacked = false, onTurnChange }: MaterialBookProps) {
  const [turn, setTurn] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [flip, setFlip] = useState<Flip | null>(null);

  useEffect(() => {
    const media = window.matchMedia("(max-width: 720px)");
    const update = () => setIsMobile(media.matches);

    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    const preload = [...new Set(pages)].map((src) => {
      const image = new Image();
      image.src = src;
      return image;
    });

    return () => {
      preload.length = 0;
    };
  }, [pages]);

  const spreads = useMemo<Spread[]>(() => {
    if (pages.length === 0) return [];
    if (pages.length === 1) return [[null, pages[0]]];

    const lastIndex = pages.length - 1;
    const bookletSpreads: Spread[] = [[pages[lastIndex], pages[0]]];

    for (let index = 1; index <= lastIndex - 1; index += 2) {
      bookletSpreads.push([pages[index], pages[index + 1] ?? null]);
    }

    return bookletSpreads;
  }, [pages]);

  const spreadIndex = spreads.length > 0 ? turn % spreads.length : 0;
  const [leftPage, rightPage] = spreads[spreadIndex] ?? [null, null];
  const mobilePage = pages.length > 0 ? pages[Math.min(turn, pages.length - 1)] : null;

  const nextSpreadIndex = flip && spreads.length > 0 ? flip.nextTurn % spreads.length : null;
  const [nextLeftPage, nextRightPage] = nextSpreadIndex !== null ? (spreads[nextSpreadIndex] ?? [null, null]) : [null, null];
  const nextMobilePage = flip && pages.length > 0 ? pages[Math.min(flip.nextTurn, pages.length - 1)] : null;

  function handleActivate(event: MouseEvent<HTMLButtonElement>) {
    if (flip) return;

    const rect = event.currentTarget.getBoundingClientRect();
    const moveForward = event.clientX >= rect.left + rect.width / 2;

    const nextTurn = isMobile
      ? moveForward
        ? Math.min(turn + 1, pages.length - 1)
        : Math.max(turn - 1, 0)
      : moveForward
        ? turn + 1
        : turn > 0
          ? turn - 1
          : 0;

    if (nextTurn === turn) return;
    setFlip({ dir: moveForward ? "forward" : "backward", nextTurn });
  }

  function commitFlip() {
    if (!flip) return;
    setTurn(flip.nextTurn);
    onTurnChange?.(flip.nextTurn);
    setFlip(null);
  }

  return (
    <button
      type="button"
      className={`${stacked ? "book-stage stacked" : compact ? "book-preview compact" : "book-stage"} ${isMobile ? "mobile-single" : ""}`}
      onClick={handleActivate}
      aria-label="Cambiar páginas de vista previa"
    >
      {isMobile ? (
        <span className="book-single" aria-hidden="true">
          {flip ? (
            <span
              key={`slide-${flip.nextTurn}`}
              className={`book-page single-page slide-page slide-${flip.dir}`}
              style={{ backgroundImage: nextMobilePage ? `url(${nextMobilePage})` : undefined }}
              onAnimationEnd={commitFlip}
            />
          ) : mobilePage ? (
            <span className="book-page single-page" style={{ backgroundImage: `url(${mobilePage})` }} />
          ) : null}
        </span>
      ) : (
        <span className="book-spread" aria-hidden="true">
          {flip?.dir === "backward" ? (
            <span
              key={`flip-left-${flip.nextTurn}`}
              className="book-page left-page flip-page flip-left-backward"
              onAnimationEnd={commitFlip}
            >
              {leftPage ? <span className="page-face front" style={{ backgroundImage: `url(${leftPage})` }} /> : null}
              {nextLeftPage ? <span className="page-face back" style={{ backgroundImage: `url(${nextLeftPage})` }} /> : null}
            </span>
          ) : leftPage ? (
            <span
              className="book-page left-page"
              style={{ backgroundImage: `url(${leftPage})`, "--page-index": 0 } as CSSProperties}
            />
          ) : null}

          {flip?.dir === "forward" ? (
            <span
              key={`flip-right-${flip.nextTurn}`}
              className="book-page right-page flip-page flip-right-forward"
              onAnimationEnd={commitFlip}
            >
              {rightPage ? <span className="page-face front" style={{ backgroundImage: `url(${rightPage})` }} /> : null}
              {nextRightPage ? <span className="page-face back" style={{ backgroundImage: `url(${nextRightPage})` }} /> : null}
            </span>
          ) : rightPage ? (
            <span
              className="book-page right-page"
              style={{ backgroundImage: `url(${rightPage})`, "--page-index": 1 } as CSSProperties}
            />
          ) : null}
        </span>
      )}
      <span className="book-nav-hint prev" aria-hidden="true">‹</span>
      <span className="book-nav-hint next" aria-hidden="true">›</span>
      <span className="sr-only">
        {mobilePage ?? leftPage ?? rightPage ?? ""}
      </span>
    </button>
  );
}
