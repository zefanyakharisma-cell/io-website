/**
 * Video slots. The deck links 14 videos on Google Drive that are not in the
 * repository yet. To add one: transcode it (see README, "Adding videos"), put
 * the files in public/video/, and fill in the slot below. Until then each slot
 * shows its photo poster with a slow Ken Burns zoom.
 */
type VideoSource = { mp4: string; webm?: string } | undefined;

export const videos: Record<"homeHero" | "inboundHero" | "ipdmReel" | "labsHero", VideoSource> = {
  homeHero: undefined,
  inboundHero: undefined,
  ipdmReel: undefined,
  labsHero: undefined,
};

/**
 * Optional YouTube embeds (video ids only). Leave empty to hide the block.
 * Example: { id: "dQw4w9WgXcQ", title: "Petra campus tour" }
 */
export const youtube: { id: string; title: string }[] = [];
