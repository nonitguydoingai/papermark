// Self-hosted build: dataroom trial reminder/expiry emails are not scheduled.
// These are no-ops so the trial API route still imports cleanly.
export async function sendDataroomTrial24hReminderEmailTask(
  ..._args: any[]
): Promise<void> {}

export async function sendDataroomTrialExpiredEmailTask(
  ..._args: any[]
): Promise<void> {}

export async function sendDataroomTrialInfoEmailTask(
  ..._args: any[]
): Promise<void> {}
