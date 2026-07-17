type Props = {
  isOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  [key: string]: any;
};

// Self-hosted build: viewer-facing request-list sheet is not available;
// renders nothing so the dataroom nav still loads.
export function RequestListSheet(_props: Props) {
  return null;
}
