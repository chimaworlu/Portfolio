import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

const HEADER_OFFSET = 80;

export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useLayoutEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
      return;
    }

    function scrollToHash() {
      const target = document.querySelector(hash);
      if (!target) {
        window.scrollTo(0, 0);
        return;
      }
      const targetY = target.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET;
      window.scrollTo(0, Math.max(targetY, 0));
    }

    scrollToHash();
    document.fonts?.ready.then(scrollToHash);
  }, [pathname, hash]);

  return null;
}
