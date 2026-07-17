export type DataroomBannerKind = "none" | "image" | "video" | "youtube";

type Classified = {
  kind: DataroomBannerKind;
  src?: string;
  youtubeId?: string;
};

const YOUTUBE_RE =
  /(?:youtube\.com\/(?:watch\?v=|embed\/)|youtu\.be\/)([a-zA-Z0-9_-]{6,})/;
const VIDEO_EXT_RE = /\.(mp4|webm|mov|m4v)(\?.*)?$/i;

export function classifyDataroomBanner(
  src: string | null | undefined,
): Classified {
  if (!src) return { kind: "none" };

  const youtubeMatch = src.match(YOUTUBE_RE);
  if (youtubeMatch) {
    return { kind: "youtube", src, youtubeId: youtubeMatch[1] };
  }

  if (VIDEO_EXT_RE.test(src)) {
    return { kind: "video", src };
  }

  return { kind: "image", src };
}
