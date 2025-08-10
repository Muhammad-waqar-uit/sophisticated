"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { usePathname } from "next/navigation";

interface ActiveSectionContextType {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

const ActiveSectionContext = createContext<ActiveSectionContextType | undefined>(undefined);

export const ActiveSectionProvider = ({ children }: { children: ReactNode }) => {
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    if (!pathname) return;
    if (pathname === "/") {
      setActiveSection("home");
    } else if (pathname.startsWith("/blogs") || pathname.startsWith("/blog")) {
      setActiveSection("blogs");
    } else if (pathname.startsWith("/careers")) {
      setActiveSection("careers");
    } else if (pathname.startsWith("/services")) {
      setActiveSection("services");
    } else {
      setActiveSection("home");
    }
  }, [pathname]);

  return (
    <ActiveSectionContext.Provider value={{ activeSection, setActiveSection }}>
      {children}
    </ActiveSectionContext.Provider>
  );
};

export const useActiveSection = () => {
  const context = useContext(ActiveSectionContext);
  if (!context) {
    throw new Error("useActiveSection must be used within an ActiveSectionProvider");
  }
  return context;
};
