"use client";

import { useEffect } from "react";

const selectors = [
  ".section-head",
  ".service",
  ".why-section",
  ".region-home-copy",
  ".region-map-card",
  ".capability-grid",
  ".business-box",
  ".contact-box",
  ".specialists-grid",
  ".feature-image-grid",
  ".area-grid",
  ".detail-intro",
  ".detail-grid",
  ".notice-box",
  ".mercedes-card",
  ".symptoms",
  ".process-line",
];

export default function ScrollReveal() {
  useEffect(() => {
    document.documentElement.classList.add("js");

    const targets = Array.from(
      new Set(
        selectors.flatMap((selector) =>
          Array.from(document.querySelectorAll<HTMLElement>(selector)),
        ),
      ),
    );

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      targets.forEach((element) => element.classList.add("reveal-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -8% 0px" },
    );

    targets.forEach((element) => {
      element.classList.add("reveal-target");
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return null;
}
