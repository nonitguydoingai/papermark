import { DefaultPermissionStrategy } from "@prisma/client";

interface DataroomDocumentRef {
  id: string;
  folderId: string | null;
}

interface ApplyDataroomDocumentPermissionDefaultsParams {
  dataroomId: string;
  dataroomDocuments: DataroomDocumentRef[];
  groupStrategy: DefaultPermissionStrategy;
  groupRootItemAccess: boolean;
  linkStrategy: DefaultPermissionStrategy;
  linkRootItemAccess: boolean;
}

// Self-hosted build: dataroom group/link permission inheritance is not
// enforced, so applying defaults is a no-op. Kept async to match the
// call sites, which already `await` this and don't inspect a return value.
export async function applyDataroomDocumentPermissionDefaults(
  _params: ApplyDataroomDocumentPermissionDefaultsParams,
): Promise<void> {}

interface OnDataroomDocumentsAttachedParams {
  dataroomId: string;
  dataroomDocuments: DataroomDocumentRef[];
  schedule: (promise: Promise<unknown>) => void;
}

// Self-hosted build: no background permission-propagation task to schedule.
export async function onDataroomDocumentsAttached({
  schedule,
}: OnDataroomDocumentsAttachedParams): Promise<void> {
  schedule(Promise.resolve());
}
