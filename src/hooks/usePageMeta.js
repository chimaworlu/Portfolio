import { useEffect } from "react";
import { pageSeo } from "../data/seo.js";

export function usePageMeta(route) {
  const meta = pageSeo[route] ?? pageSeo["/"];

  useEffect(() => {
    const previousTitle = document.title;
    document.title = meta.title;

    const descriptionTag = document.querySelector('meta[name="description"]');
    const previousDescription = descriptionTag?.getAttribute("content");
    descriptionTag?.setAttribute("content", meta.description);

    return () => {
      document.title = previousTitle;
      if (previousDescription !== undefined) {
        descriptionTag?.setAttribute("content", previousDescription);
      }
    };
  }, [meta.title, meta.description]);
}
