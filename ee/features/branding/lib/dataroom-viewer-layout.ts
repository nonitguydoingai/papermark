export type DataroomCardLayout = "LIST" | "GRID" | "COMPACT";

export type DataroomLayoutCardId = "list" | "grid" | "compact";

export type DataroomViewerHeaderStyle = "DEFAULT" | "MINIMAL";

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
  "MINIMAL",
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

export function inferDataroomViewerLayoutPreset(
  cardLayout: DataroomCardLayout,
): DataroomLayoutCardId {
  return cardLayout.toLowerCase() as DataroomLayoutCardId;
}
