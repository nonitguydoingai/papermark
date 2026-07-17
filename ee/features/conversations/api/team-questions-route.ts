import type { NextApiRequest, NextApiResponse } from "next";

// Self-hosted build: dataroom Q&A / conversations feature is not available.
export async function handleRoute(
  _req: NextApiRequest,
  res: NextApiResponse,
) {
  return res.status(404).json({ message: "Not available" });
}
