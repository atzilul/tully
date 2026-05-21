"use client";
import { useEffect, useRef, useState } from "react";

export function useInView(threshold = 0.05) {
  const ref = useRef<HTMLElement>(null);
  // Start as true so content is always visible; animation plays on scroll-into-view
  const [inView] = useState(true);
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animated) {
          setAnimated(true);
          observer.disconnect();
        }
      },
      { threshold, rootMargin: "0px 0px 50px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, animated]);

  return { ref, inView, animated };
}
