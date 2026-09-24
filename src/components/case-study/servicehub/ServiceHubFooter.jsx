import { useLayoutEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { gsap } from "../../../lib/gsap.js";
import Container from "../../layout/Container.jsx";

const FIGMA_URL =
  "https://www.figma.com/design/qenncamO8BWYaKMJDo8RvT/Home-Service-App?node-id=108-4&t=AP0MDwpCSSvJFdYi-1";

export default function ServiceHubFooter() {
  const contentRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(gsap.utils.toArray(contentRef.current.children), {
        opacity: 0,
        y: 24,
        duration: 0.6,
        ease: "power2.out",
        stagger: 0.1,
        scrollTrigger: { trigger: contentRef.current, start: "top 85%" },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="mt-section scroll-mt-20 pb-24 text-center">
      <Container>
        <div ref={contentRef}>
          <a
            href={FIGMA_URL}
            target="_blank"
            rel="noreferrer"
            className="text-base font-medium text-brand-blue hover:underline dark:text-blue-400"
          >
            View figma file
          </a>

          <div className="mt-16">
            <p className="text-xs font-medium uppercase tracking-wide text-secondary-text dark:text-slate-400">
              Next project
            </p>
            <Link
              to="/work/uxlens-ai"
              className="group mt-2 inline-flex items-center gap-2 text-3xl font-bold text-ink hover:text-brand-blue dark:text-white dark:hover:text-blue-400"
            >
              UXLens AI
              <span
                aria-hidden="true"
                className="inline-block transition-transform duration-300 ease-out group-hover:translate-x-1.5"
              >
                →
              </span>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
