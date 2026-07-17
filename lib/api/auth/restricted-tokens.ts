import { z } from "zod";

import prisma from "@/lib/prisma";

export const RestrictedTokenSubjectTypeSchema = z.enum(["user", "machine"]);

export type RestrictedTokenSubjectType = z.infer<
  typeof RestrictedTokenSubjectTypeSchema
>;

export function parseRestrictedTokenSubjectType(
  value: string | null | undefined,
): RestrictedTokenSubjectType {
  const parsed = RestrictedTokenSubjectTypeSchema.safeParse(value);
  return parsed.success ? parsed.data : "user";
}

// "user"-subject tokens are revoked when their owner loses team access;
// "machine"-subject tokens stay team-scoped and survive teammate removal.
export async function revokeUserBoundTeamTokens(
  userId: string,
  teamId: string,
): Promise<void> {
  await prisma.restrictedToken.deleteMany({
    where: {
      userId,
      teamId,
      subjectType: "user",
    },
  });
}
