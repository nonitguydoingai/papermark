export const GRANULAR_SCOPES = [
  "documents:read",
  "documents:write",
  "links:read",
  "links:write",
  "datarooms:read",
  "datarooms:write",
] as const;

// Broader presets: "apis.all" grants full read/write access, "apis.read"
// grants read-only access. Mutually exclusive with granular scopes and
// with each other; "apis.all" takes precedence if both are present.
export const PRESET_SCOPES = ["apis.all", "apis.read"] as const;
