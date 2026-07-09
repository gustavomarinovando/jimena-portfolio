"use client";

import { useState } from "react";

// Temporary: click-to-cycle font picker so Jimena can compare options
// live. Remove this component and hardcode the winning font directly
// in the markup once she's picked one.
// Each font gets its own explicit weight matching the heaviest cut
// actually loaded via next/font in layout.tsx - the .display class
// asks for 900 by default, and requesting a weight a font doesn't
// have loaded makes the browser fake it with synthetic/faux bold
// (often looks mushy) instead of using the font's real boldest face.
const FONT_OPTIONS = [
  { name: "Arial (actual)", family: "var(--font-sans)", weight: 900 },
  { name: "Fraunces Black (serif editorial)", family: "var(--font-fraunces)", weight: 900 },
  { name: "Space Grotesk Bold (geometrico)", family: "var(--font-space-grotesk)", weight: 700 },
  { name: "Bricolage Grotesque ExtraBold (display)", family: "var(--font-bricolage)", weight: 800 },
];

export function HeroName() {
  const [fontIndex, setFontIndex] = useState(0);
  const current = FONT_OPTIONS[fontIndex];

  function handleClick() {
    setFontIndex((prevIndex) => {
      const nextIndex = (prevIndex + 1) % FONT_OPTIONS.length;
      console.log(`[hero-font] ${FONT_OPTIONS[nextIndex].name}`);
      return nextIndex;
    });
  }

  return (
    <>
      <h1
        className="display hero-name"
        aria-label="Jimena Ovando"
        style={{ fontFamily: current.family, fontWeight: current.weight, cursor: "pointer" }}
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
