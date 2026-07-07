"use client";

import { useMemo, useState, type CSSProperties } from "react";

type MaterialBookProps = {
  pages: string[];
  compact?: boolean;
};

export function MaterialBook({ pages, compact = false }: MaterialBookProps) {
  const [turn, setTurn] = useState(0);
  const cover = pages[0];
  const innerPages = pages.slice(1);
  const visiblePages = useMemo(() => {
    const count = compact ? 3 : 5;

    if (innerPages.length <= count) return innerPages;

    return Array.from({ length: count }, (_, index) => {
      const offset = (turn * 2 + index * 3) % innerPages.length;
      return innerPages[offset];
    });
  }, [compact, innerPages, turn]);

  const rotate = () => setTurn((current) => current + 1);

  return (
    <button
      type="button"
      className={compact ? "book-preview compact" : "book-stage"}
      onClick={rotate}
      aria-label="Cambiar páginas de vista previa"
    >
      <span className="book-spread" aria-hidden="true">
        {visiblePages.map((page, index) => (
          <span
            key={`${page}-${turn}-${index}`}
            className="book-page"
            style={{
              backgroundImage: `url(${page})`,
              "--page-index": index + 1,
            } as CSSProperties}
          />
        ))}
        {cover ? (
          <span
            className="book-page cover"
            style={{
              backgroundImage: `url(${cover})`,
              "--page-index": 0,
            } as CSSProperties}
          />
        ) : null}
      </span>
      <span className="book-hint">{compact ? "Toca para hojear" : "Toca las páginas para hojear"}</span>
    </button>
  );
}
