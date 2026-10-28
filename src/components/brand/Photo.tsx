import { cn } from "@/lib/utils";

export type PhotoSource = { src: string; small?: string; alt: string; width?: number; height?: number };

/** Deck photo with a responsive small source. Images are pre-sized WebP from scripts/build-media.mjs. */
export function Photo({
  image,
  className,
  sizes = "(min-width: 1024px) 50vw, 100vw",
  priority,
  alt,
}: {
  image: PhotoSource;
  className?: string;
  sizes?: string;
  priority?: boolean;
  alt?: string;
}) {
  const srcSet = image.small && image.small !== image.src && image.width
    ? `${image.small} ${Math.min(800, image.width)}w, ${image.src} ${image.width}w`
    : undefined;
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={image.src}
      srcSet={srcSet}
      sizes={srcSet ? sizes : undefined}
      alt={alt ?? image.alt}
      width={image.width}
      height={image.height}
      loading={priority ? "eager" : "lazy"}
      fetchPriority={priority ? "high" : undefined}
      decoding="async"
      className={cn("h-full w-full object-cover", className)}
    />
  );
}
