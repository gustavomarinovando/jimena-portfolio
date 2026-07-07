"use client";

import { useMemo, useState, type CSSProperties } from "react";

type MaterialBookProps = {
  pages: string[];
  compact?: boolean;
};

type Spread = [string | null, string | null];

export function MaterialBook({ pages, compact = false }: MaterialBookProps) {
  const [turn, setTurn] = useState(0);
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
  const isClosed = spreadIndex === 0;

  return (
    <button
      type="button"
      className={`${compact ? "book-preview compact" : "book-stage"} ${isClosed ? "closed" : "open"}`}
      onClick={() => setTurn((current) => current + 1)}
      aria-label="Cambiar páginas de vista previa"
    >
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
      <span className="book-hint">{isClosed ? "Toca para abrir" : "Toca para seguir hojeando"}</span>
    </button>
  );
}
