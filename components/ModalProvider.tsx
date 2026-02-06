"use client";

import { createContext, useContext, useMemo, useState, useEffect } from "react";
import { LeadFormModal } from "@/components/LeadFormModal";
import { ChatModal } from "@/components/ChatModal";
import { FloatingChatButton } from "@/components/FloatingChatButton";

type ModalContextValue = {
  openQuote: () => void;
  openChat: () => void;
  closeAll: () => void;
};

const ModalContext = createContext<ModalContextValue | undefined>(undefined);

export function ModalProvider({ children }: { children: React.ReactNode }) {
  const [quoteOpen, setQuoteOpen] = useState(false);
  const [chatOpen, setChatOpen] = useState(false);

  // Auto-open the Get Started modal on page load (only once per session)
  useEffect(() => {
    const hasSeenModal = sessionStorage.getItem("hasSeenGetStartedModal");
    if (!hasSeenModal) {
      const timer = setTimeout(() => {
        setQuoteOpen(true);
        sessionStorage.setItem("hasSeenGetStartedModal", "true");
      }, 800); // Quick 0.8s delay
      return () => clearTimeout(timer);
    }
  }, []);

  const value = useMemo(
    () => ({
      openQuote: () => setQuoteOpen(true),
      openChat: () => setChatOpen(true),
      closeAll: () => {
        setQuoteOpen(false);
        setChatOpen(false);
      }
    }),
    []
  );

  return (
    <ModalContext.Provider value={value}>
      {children}
      <LeadFormModal open={quoteOpen} onClose={() => setQuoteOpen(false)} />
      <ChatModal open={chatOpen} onClose={() => setChatOpen(false)} />
      <FloatingChatButton onClick={() => setChatOpen(true)} />
    </ModalContext.Provider>
  );
}

export function useModal() {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("useModal must be used within ModalProvider");
  }
  return context;
}
