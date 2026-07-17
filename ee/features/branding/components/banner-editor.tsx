type Props = {
  value?: any;
  onChange?: (...args: any[]) => void;
  [key: string]: any;
};

// Self-hosted build: banner editor UI is not available; renders nothing so
// the branding page still loads.
export function BannerEditor(_props: Props) {
  return null;
}
