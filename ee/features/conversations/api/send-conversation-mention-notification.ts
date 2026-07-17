import type { NextApiRequest, NextApiResponse } from "next";

// Self-hosted build: conversation @mention email notifications are not
// available. No-op job handler.
export default async function handler(
  _req: NextApiRequest,
  res: NextApiResponse,
) {
  return res.status(200).json({ message: "ok" });
}
