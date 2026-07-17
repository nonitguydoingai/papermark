export type PremiumTeamEligibility = {
  isPremiumAdmin: boolean;
  canCreate: boolean;
};

// Self-hosted build: no billing plans are enforced, so no admin is
// considered a "datarooms-premium" admin and the team-count cap never
// applies.
export async function getPremiumTeamEligibility(
  _userId: string,
): Promise<PremiumTeamEligibility> {
  return { isPremiumAdmin: false, canCreate: true };
}
