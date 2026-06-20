import { useEffect } from "react";

const REVEAL_SELECTORS = [
  "main section",
  "footer",
  "main section .grid > *",
  "main section .space-y-3 > *",
  "main section .space-y-4 > *",
  "main section .space-y-5 > *",
  "main section .space-y-6 > *",
  "main section form > *",
].join(",");

export default function ScrollReveal({ watchKey }) {
  useEffect(() => {
    if (typeof window === "undefined") return undefined;

    const revealElements = () => {
      const elements = Array.from(document.querySelectorAll(REVEAL_SELECTORS))
        .filter((element) => !element.closest(".loazzne-root"));

      elements.forEach((element, index) => {
        element.classList.add("scroll-fade-up");
        element.style.setProperty("--reveal-delay", `${Math.min(index % 8, 7) * 55}ms`);
      });

      if (!("IntersectionObserver" in window)) {
        elements.forEach((element) => element.classList.add("is-visible"));
        return undefined;
      }

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-visible");
              observer.unobserve(entry.target);
            }
          });
        },
        {
          root: null,
          rootMargin: "0px 0px -8% 0px",
          threshold: 0.12,
        }
      );

      elements.forEach((element) => observer.observe(element));
      return observer;
    };

    let observer;
    const frame = window.requestAnimationFrame(() => {
      observer = revealElements();
    });

    return () => {
      window.cancelAnimationFrame(frame);
      observer?.disconnect();
    };
  }, [watchKey]);

  return null;
}
