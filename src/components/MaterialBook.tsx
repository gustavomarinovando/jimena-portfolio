"use client";

import { useEffect, useMemo, useState, type CSSProperties, type MouseEvent } from "react";

type MaterialBookProps = {
  pages: string[];
  compact?: boolean;
  stacked?: boolean;
  onTurnChange?: (turn: number) => void;
};

type Spread = [string | null, string | null];

export function MaterialBook({ pages, compact = false, stacked = false, onTurnChange }: MaterialBookProps) {
  const [turn, setTurn] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

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

  function handleActivate(event: MouseEvent<HTMLButtonElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    const moveForward = event.clientX >= rect.left + rect.width / 2;

    setTurn((current) => {
      const nextTurn = isMobile
        ? moveForward
          ? Math.min(current + 1, pages.length - 1)
          : Math.max(current - 1, 0)
        : moveForward
          ? current + 1
          : current > 0
            ? current - 1
            : 0;

      onTurnChange?.(nextTurn);
      return nextTurn;
    });
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
          {mobilePage ? (
            <span
              className="book-page single-page"
              style={{
                backgroundImage: `url(${mobilePage})`,
                "--page-index": 0,
              } as CSSProperties}
            />
          ) : null}
        </span>
      ) : (
        <span className="book-spread" aria-hidden="true">
          {leftPage ? (
            <span
              className="book-page left-page"
              style={{
                backgroundImage: `url(${leftPage})`,
                "--page-index": 0,
              } as CSSProperties}
            />
          ) : null}
          {rightPage ? (
            <span
              className="book-page right-page"
              style={{
                backgroundImage: `url(${rightPage})`,
                "--page-index": 1,
              } as CSSProperties}
            />
          ) : null}
        </span>
      )}
      <span className="sr-only">
        {mobilePage ?? leftPage ?? rightPage ?? ""}
      </span>
    </button>
  );
}
