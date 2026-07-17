// Self-hosted build: no billing plans are enforced, so new teams never get
// the "datarooms-unlimited" plan grant automatically.
export async function canCreateUnlimitedTeam(
  _userId: string,
): Promise<boolean> {
  return false;
}
