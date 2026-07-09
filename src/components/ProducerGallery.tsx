"use client";

import { useRef, useState } from "react";

type ProducerGroup = {
  slug: string;
  name: string;
  caption: string;
};

type ProducerGalleryProps = {
  groups: ProducerGroup[];
};

export function ProducerGallery({ groups }: ProducerGalleryProps) {
  const [isScrolling, setIsScrolling] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  function handleScroll() {
    setIsScrolling(true);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => setIsScrolling(false), 500);
  }

  return (
    <div className={`producer-gallery ${isScrolling ? "is-scrolling" : ""}`} onScroll={handleScroll}>
      {groups.map((group) => (
        <figure key={group.slug} className="producer-photo">
          <img src={`/photos/productores/${group.slug}.jpg`} alt={`Grupo productivo ${group.name}`} loading="lazy" />
          <figcaption>{group.caption}</figcaption>
        </figure>
      ))}
    </div>
  );
}
