type Props = {
  [key: string]: any;
};

// Self-hosted build: read-only social preview card is not available;
// renders nothing so the dataroom branding page still loads.
export function BrandingSocialPreviewReadonly(_props: Props) {
  return null;
}
