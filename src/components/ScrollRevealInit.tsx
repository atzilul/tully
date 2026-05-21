"use client";
import { useEffect } from "react";

export default function ScrollRevealInit() {
  useEffect(() => {
    const bar = document.getElementById("scroll-progress");
    const onScroll = () => {
      if (!bar) return;
      const pct =
        (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
      bar.style.width = `${Math.min(pct, 100)}%`;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return null;
}
