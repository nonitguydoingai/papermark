type Props = {
  children?: React.ReactNode;
  [key: string]: any;
};

// Self-hosted build: the live-preview chrome around the branding form is not
// available; renders children directly (or nothing) so the branding page
// still loads.
export function BrandingPreviewChrome({ children }: Props) {
  return children ?? null;
}
