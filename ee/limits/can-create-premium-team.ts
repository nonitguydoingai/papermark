export type PremiumTeamEligibility = {
  isPremiumAdmin: boolean;
  canCreate: boolean;
};

// Self-hosted build: no billing plans are enforced, so this cap is never
// actually reached (getPremiumTeamEligibility always returns canCreate: true).
// Kept as a real number since it's interpolated into an error message.
export const PREMIUM_TEAM_LIMIT = 1;

// Self-hosted build: no billing plans are enforced, so no admin is
// considered a "datarooms-premium" admin and the team-count cap never
// applies.
export async function getPremiumTeamEligibility(
  _userId: string,
): Promise<PremiumTeamEligibility> {
  return { isPremiumAdmin: false, canCreate: true };
}
