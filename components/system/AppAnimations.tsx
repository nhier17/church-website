"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { initRevealAnimations, getGSAP } from "@/lib/gsap";

export default function AppAnimations() {
  const pathname = usePathname();

  useEffect(() => {
    // Ensure plugin registered and set up reveal animations for current DOM
    getGSAP();
    const cleanup = initRevealAnimations(document);
    return () => cleanup?.();
  }, [pathname]);

  return null;
}
