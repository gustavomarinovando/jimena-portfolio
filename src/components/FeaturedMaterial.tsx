"use client";

import { useState } from "react";
import { MaterialBook } from "@/components/MaterialBook";

type FeaturedMaterialProps = {
  description: string;
  pdfPath: string;
  pages: string[];
};

export function FeaturedMaterial({ description, pdfPath, pages }: FeaturedMaterialProps) {
  const [turn, setTurn] = useState(0);
  const showTitle = turn > 0;

  return (
    <section className="material-feature" aria-labelledby="featured-material-title">
      <MaterialBook pages={pages} stacked onTurnChange={setTurn} />
      <div className="featured-copy">
        <p className="eyebrow">Publicación</p>
        <h2 id="featured-material-title" className={`section-title mt-3 featured-title ${showTitle ? "visible" : ""}`}>
          Incidencia política con enfoque de género
        </h2>
        <p className="lead mt-4 max-w-xl">{description}</p>
        <div className="mt-7 flex flex-col gap-3 sm:flex-row">
          <a className="button" href={pdfPath} target="_blank" rel="noreferrer">Abrir PDF</a>
          <a className="button secondary glass" href={pdfPath} download>Descargar</a>
        </div>
      </div>
    </section>
  );
}
