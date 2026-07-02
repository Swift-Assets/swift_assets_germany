import * as React from "react";

/**
 * Returns whether the user has requested reduced motion.
 * Reactive to changes of the media query.
 */
export function usePrefersReducedMotion() {
  const [reduced, setReduced] = React.useState(false);

  React.useEffect(() => {
    const mql = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onChange = () => setReduced(mql.matches);
    onChange();
    mql.addEventListener("change", onChange);
    return () => mql.removeEventListener("change", onChange);
  }, []);

  return reduced;
}

/**
 * On-scroll reveal helper. Attach the returned ref to an element; `shown`
 * becomes true once the element scrolls into view (or immediately when the
 * user prefers reduced motion, so nothing stays hidden).
 */
export function useReveal<T extends HTMLElement = HTMLDivElement>(options?: {
  threshold?: number;
  rootMargin?: string;
}) {
  const ref = React.useRef<T | null>(null);
  const reduced = usePrefersReducedMotion();
  const [shown, setShown] = React.useState(false);

  React.useEffect(() => {
    if (reduced) {
      setShown(true);
      return;
    }
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      setShown(true);
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShown(true);
            observer.disconnect();
          }
        });
      },
      {
        threshold: options?.threshold ?? 0.15,
        rootMargin: options?.rootMargin ?? "0px 0px -10% 0px",
      },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [reduced, options?.threshold, options?.rootMargin]);

  return { ref, shown, reduced };
}
