export const AUTO_FILL_NOT_FOUND_MESSAGE =
  "We couldn't automatically find brand assets for this domain.";

// Self-hosted build: automatic brand-asset detection (favicon/logo scraping)
// is not available.
export function autoFillHasBrandAssets(_result: any): boolean {
  return false;
}
