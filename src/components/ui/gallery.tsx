"use client";

import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import Captions from "yet-another-react-lightbox/plugins/captions";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/captions.css";
import { Expand } from "lucide-react";
import { cn } from "@/lib/utils";
import type { PhotoSource } from "@/components/brand/Photo";

export type GalleryItem = PhotoSource & { caption?: string };

/** Masonry photo wall; every tile opens a full-screen lightbox with captions. */
export function Gallery({ items, className, columns = "columns-2 md:columns-3 lg:columns-4", openLabel = "Open photo" }: { items: GalleryItem[]; className?: string; columns?: string; openLabel?: string }) {
  const [index, setIndex] = useState(-1);
  return (
    <>
      <ul className={cn(columns, "gap-3 [&>li]:mb-3", className)}>
        {items.map((item, i) => (
          <li key={item.src} className="break-inside-avoid">
            <button
              type="button"
              onClick={() => setIndex(i)}
              className="group relative block w-full overflow-hidden rounded-lg"
              aria-label={`${openLabel}: ${item.caption ?? item.alt}`}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={item.small ?? item.src}
                alt=""
                width={item.width}
                height={item.height}
                loading="lazy"
                decoding="async"
                className="h-auto w-full transition-transform duration-700 ease-out group-hover:scale-[1.04]"
              />
              <span className="absolute inset-0 bg-gradient-to-t from-midnight-deep/85 via-midnight-deep/0 to-transparent opacity-80 transition-opacity group-hover:opacity-100" />
              {item.caption && <span className="absolute bottom-2.5 left-3 right-9 text-left text-xs font-medium text-white">{item.caption}</span>}
              <Expand className="absolute bottom-2.5 right-2.5 size-4 text-white/80" aria-hidden />
            </button>
          </li>
        ))}
      </ul>
      <Lightbox
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        plugins={[Captions]}
        slides={items.map((s) => ({ src: s.src, alt: s.alt, width: s.width, height: s.height, description: s.caption ?? s.alt }))}
        styles={{ container: { backgroundColor: "rgba(19, 50, 86, 0.96)" } }}
      />
    </>
  );
}
