"use client";

import { useState } from "react";

type TimelineOrgToggleProps = {
  organization: string;
  description: string;
};

export function TimelineOrgToggle({ organization, description }: TimelineOrgToggleProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="timeline-org-toggle">
      <button
        type="button"
        className="timeline-org-trigger"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
      >
        {open ? "Ocultar organización" : `Sobre ${organization}`}
      </button>
      <div className={`timeline-org-bubble ${open ? "is-open" : ""}`}>
        <p>{description}</p>
      </div>
    </div>
  );
}
