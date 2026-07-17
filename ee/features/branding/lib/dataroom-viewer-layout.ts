import { z } from "zod";

export type DataroomCardLayout = "LIST" | "GRID" | "COMPACT";

export type DataroomLayoutCardId =
  | "STANDARD"
  | "STRICT"
  | "MODERN"
  | "NOTION"
  | "CUSTOM";

export type DataroomViewerHeaderStyle = "DEFAULT" | "SPLIT" | "NOTION";

export const DataroomCardLayoutSchema = z.enum(["LIST", "GRID", "COMPACT"]);

export const DataroomViewerLayoutPresetSchema = z.enum([
  "STANDARD",
  "STRICT",
  "MODERN",
  "NOTION",
  "CUSTOM",
]);

export const DataroomViewerHeaderStyleSchema = z.enum([
  "DEFAULT",
  "SPLIT",
  "NOTION",
]);

export const CARD_LAYOUT_OPTIONS: {
  value: DataroomCardLayout;
  label: string;
}[] = [
  { value: "LIST", label: "List" },
  { value: "GRID", label: "Grid" },
  { value: "COMPACT", label: "Compact" },
];

const CARD_LAYOUT_VALUES: DataroomCardLayout[] = ["LIST", "GRID", "COMPACT"];
const HEADER_STYLE_VALUES: DataroomViewerHeaderStyle[] = [
  "DEFAULT",
  "SPLIT",
  "NOTION",
];

export function asDataroomCardLayout(value: unknown): DataroomCardLayout {
  return CARD_LAYOUT_VALUES.includes(value as DataroomCardLayout)
    ? (value as DataroomCardLayout)
    : "LIST";
}

export function asDataroomViewerHeaderStyle(
  value: unknown,
): DataroomViewerHeaderStyle {
  return HEADER_STYLE_VALUES.includes(value as DataroomViewerHeaderStyle)
    ? (value as DataroomViewerHeaderStyle)
    : "DEFAULT";
}

// Matches the combinations set by applyLayoutPreset() in pages/branding.tsx.
// Anything that doesn't match one of the 4 presets exactly is "CUSTOM".
export function inferDataroomViewerLayoutPreset(params: {
  cardLayout: DataroomCardLayout;
  showFolderTree: boolean;
  hideFolderIconsInMain: boolean;
  viewerHeaderStyle: DataroomViewerHeaderStyle;
}): DataroomLayoutCardId {
  const { cardLayout, showFolderTree, hideFolderIconsInMain, viewerHeaderStyle } =
    params;

  if (
    cardLayout === "LIST" &&
    showFolderTree === true &&
    viewerHeaderStyle === "DEFAULT" &&
    hideFolderIconsInMain === false
  ) {
    return "STANDARD";
  }
  if (
    cardLayout === "COMPACT" &&
    showFolderTree === false &&
    viewerHeaderStyle === "DEFAULT" &&
    hideFolderIconsInMain === true
  ) {
    return "STRICT";
  }
  if (
    cardLayout === "COMPACT" &&
    showFolderTree === false &&
    viewerHeaderStyle === "SPLIT" &&
    hideFolderIconsInMain === true
  ) {
    return "MODERN";
  }
  if (
    cardLayout === "GRID" &&
    showFolderTree === false &&
    viewerHeaderStyle === "NOTION" &&
    hideFolderIconsInMain === false
  ) {
    return "NOTION";
  }
  return "CUSTOM";
}
