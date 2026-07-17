type Props = {
  title?: React.ReactNode;
  children?: React.ReactNode;
  [key: string]: any;
};

// Self-hosted build: the collapsible wrapper is not available; renders
// children directly (always expanded) so the branding page still loads.
export function CollapsibleBrandingSection({ title, children }: Props) {
  return (
    <div>
      {title ? <div>{title}</div> : null}
      {children}
    </div>
  );
}
