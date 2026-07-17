import { createContext, useContext, useMemo, useState } from "react";

type ConversationSidebarContextValue = {
  isOpen: boolean;
  open: () => void;
  close: () => void;
  toggle: () => void;
};

const ConversationSidebarContext =
  createContext<ConversationSidebarContextValue | null>(null);

export function ConversationSidebarProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);

  const value = useMemo(
    () => ({
      isOpen,
      open: () => setIsOpen(true),
      close: () => setIsOpen(false),
      toggle: () => setIsOpen((prev) => !prev),
    }),
    [isOpen],
  );

  return (
    <ConversationSidebarContext.Provider value={value}>
      {children}
    </ConversationSidebarContext.Provider>
  );
}

// Safe to call outside any provider — returns null instead of throwing, so
// callers use optional chaining (e.g. `conversationSidebar?.isOpen`).
export function useConversationSidebarSafe(): ConversationSidebarContextValue | null {
  return useContext(ConversationSidebarContext);
}
