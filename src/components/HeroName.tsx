"use client";

import { useState } from "react";

// Temporary: click-to-cycle font picker so Jimena can compare options
// live. Remove this component and hardcode the winning font directly
// in the markup once she's picked one.
const FONT_OPTIONS = [
  { name: "Arial (actual)", family: "var(--font-sans)" },
  { name: "Fraunces (serif editorial)", family: "var(--font-fraunces)" },
  { name: "Space Grotesk (geometrico)", family: "var(--font-space-grotesk)" },
  { name: "Bricolage Grotesque (display)", family: "var(--font-bricolage)" },
];

export function HeroName() {
  const [fontIndex, setFontIndex] = useState(0);
  const current = FONT_OPTIONS[fontIndex];

  function handleClick() {
    const nextIndex = (fontIndex + 1) % FONT_OPTIONS.length;
    setFontIndex(nextIndex);
    console.log(`[hero-font] ${FONT_OPTIONS[nextIndex].name}`);
  }

  return (
    <>
      <h1
        className="display hero-name"
        aria-label="Jimena Ovando"
        style={{ fontFamily: current.family, cursor: "pointer" }}
        onClick={handleClick}
        title="Clic para probar otra tipografía"
      >
        <span className="hero-name-mask">
          <span className="hero-name-text">Jimena Ovando</span>
        </span>
      </h1>
      <p className="hero-font-label">Fuente: {current.name} · clic en el nombre para cambiar</p>
    </>
  );
}
