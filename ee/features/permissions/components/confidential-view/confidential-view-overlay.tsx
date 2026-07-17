type Props = {
  [key: string]: any;
};

// Self-hosted build: the confidential-view (screenshot-block) overlay is
// not available; renders nothing so document viewers still load.
export function ConfidentialViewOverlay(_props: Props) {
  return null;
}
