type Props = {
  [key: string]: any;
};

// Self-hosted build: layout preset picker cards are not available; renders
// nothing so the branding page still loads (card layout can still be set
// via the CARD_LAYOUT_OPTIONS radio group elsewhere on the page).
export function DataroomLayoutPresetCards(_props: Props) {
  return null;
}
