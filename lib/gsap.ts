"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Centralized GSAP/ScrollTrigger registration to avoid duplicate registrations
let registered = false;
export function getGSAP() {
  if (typeof window === "undefined") return { gsap, ScrollTrigger: undefined as unknown as typeof ScrollTrigger };
  if (!registered) {
    gsap.registerPlugin(ScrollTrigger);
    registered = true;
  }
  return { gsap, ScrollTrigger };
}

// Helper to create reveal-on-scroll animations for elements with data-animate attribute
export function initRevealAnimations(root?: Element | Document) {
  if (typeof window === "undefined") return () => {};
  const { gsap } = getGSAP();
  const scope = (root ?? document) as Element | Document;
  const items = scope.querySelectorAll<HTMLElement>("[data-animate]");
  items.forEach((el) => {
    const type = el.dataset.animate || "fade-up";
    const delay = parseFloat(el.dataset.delay || "0");
    const duration = parseFloat(el.dataset.duration || "0.8");
    const once = (el.dataset.once ?? "true") !== "false"; // default true

    const from: gsap.TweenVars = { opacity: 0 };
    if (type === "fade-up") from.y = 40;
    if (type === "fade-down") from.y = -40;
    if (type === "fade-left") from.x = -40;
    if (type === "fade-right") from.x = 40;
    if (type === "zoom-in") Object.assign(from, { scale: 0.95 });

    gsap.from(el, {
      ...from,
      duration,
      delay,
      ease: "power3.out",
      clearProps: "all",
      scrollTrigger: {
        trigger: el,
        start: "top 85%",
        end: "bottom 20%",
        toggleActions: once ? "play none none none" : "play reverse play reverse",
      },
    });
  });

  return () => {
    // kill all ScrollTriggers created for [data-animate] in this call
    // not strictly necessary since components unmount, but good hygiene
    // we can't easily scope per element, but we can refresh to detach if DOM removed
    try {
      // @ts-expect-error: ScrollTrigger is attached to window by gsap plugin at runtime
      if (window.ScrollTrigger) window.ScrollTrigger.refresh();
    } catch {}
  };
}
