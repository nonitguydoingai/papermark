type Assignment = {
  viewerId?: string | null;
  email?: string | null;
  linkId?: string | null;
  groupId?: string | null;
};

export function isViewerAssigned(
  assignments: Assignment[] | null | undefined,
  viewer: {
    viewerId?: string | null;
    email?: string | null;
    linkId?: string | null;
    groupIds?: Set<string>;
  },
): boolean {
  if (!assignments || assignments.length === 0) return false;

  return assignments.some((assignment) => {
    if (assignment.viewerId && assignment.viewerId === viewer.viewerId) {
      return true;
    }
    if (
      assignment.email &&
      viewer.email &&
      assignment.email.toLowerCase() === viewer.email.toLowerCase()
    ) {
      return true;
    }
    if (assignment.linkId && assignment.linkId === viewer.linkId) {
      return true;
    }
    if (
      assignment.groupId &&
      viewer.groupIds?.has(assignment.groupId)
    ) {
      return true;
    }
    return false;
  });
}
