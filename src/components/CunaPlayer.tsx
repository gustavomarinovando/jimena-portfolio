"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

type Take = { id: string; label: string; src: string };
type ScriptLine = { speaker: string; line: string; cue?: boolean };

type CunaPlayerProps = {
  takes: Take[];
  script: ScriptLine[];
};

export function CunaPlayer({ takes, script }: CunaPlayerProps) {
  const [activeTake, setActiveTake] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showScript, setShowScript] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (!showScript) return;
    document.body.style.overflow = "hidden";
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setShowScript(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [showScript]);

  function togglePlay() {
    const audio = audioRef.current;
    if (!audio) return;
    if (isPlaying) audio.pause();
    else audio.play();
  }

  function selectTake(index: number) {
    if (index === activeTake) return;
    setActiveTake(index);
    setIsPlaying(false);
  }

  const take = takes[activeTake];

  return (
    <div className="cuna-player">
      <audio
        key={take.id}
        ref={audioRef}
        src={take.src}
        preload="none"
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        onEnded={() => setIsPlaying(false)}
      />

      <div className="cuna-controls">
        <button
          type="button"
          className="cuna-play"
          onClick={togglePlay}
          aria-label={isPlaying ? "Pausar cuña" : "Reproducir cuña"}
        >
          {isPlaying ? (
            <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M7 5h4v14H7zM13 5h4v14h-4z" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M8 5v14l11-7z" />
            </svg>
          )}
        </button>
        <div className={`waveform ${isPlaying ? "is-playing" : ""}`} aria-hidden="true">
          {[22, 44, 30, 52, 26, 48, 34, 40].map((height, i) => (
            <span key={i} style={{ height, animationDelay: `${i * 90}ms` }} />
          ))}
        </div>
      </div>

      <div className="cuna-takes">
        {takes.map((t, i) => (
          <button
            key={t.id}
            type="button"
            className={`cuna-take-pill ${i === activeTake ? "is-active" : ""}`}
            aria-pressed={i === activeTake}
            onClick={() => selectTake(i)}
          >
            {t.label}
          </button>
        ))}
        <button
          type="button"
          className="cuna-take-pill cuna-script-toggle"
          onClick={() => setShowScript(true)}
        >
          Ver guion
        </button>
      </div>

      {showScript
        ? createPortal(
            <div className="cuna-modal-backdrop" onClick={() => setShowScript(false)}>
              <div
                className="cuna-modal"
                role="dialog"
                aria-modal="true"
                aria-label="Guion de la cuña radial"
                onClick={(event) => event.stopPropagation()}
              >
                <button
                  type="button"
                  className="cuna-modal-close"
                  onClick={() => setShowScript(false)}
                  aria-label="Cerrar guion"
                >
                  ×
                </button>
                <p className="eyebrow">Guion de producción</p>
                <ol className="cuna-script-list">
                  {script.map((entry, i) => (
                    <li key={i} className={entry.cue ? "is-cue" : ""}>
                      <span className="cuna-script-speaker">{entry.speaker}</span>
                      <span className="cuna-script-line">{entry.line}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </div>,
            document.body,
          )
        : null}
    </div>
  );
}
