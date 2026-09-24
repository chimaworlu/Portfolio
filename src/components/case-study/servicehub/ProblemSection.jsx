import { useLayoutEffect, useRef } from "react";
import { gsap } from "../../../lib/gsap.js";
import Container from "../../layout/Container.jsx";
import SectionEyebrow from "../SectionEyebrow.jsx";

export default function ProblemSection() {
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
    }, contentRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="mt-section scroll-mt-20">
      <Container>
        <div ref={contentRef}>
          <SectionEyebrow>The Problem</SectionEyebrow>
          <h2 className="mt-2 max-w-2xl text-3xl font-bold text-ink dark:text-white">
            Students lack a reliable way to find trusted help when something
            breaks.
          </h2>

          <blockquote className="mt-10 max-w-xl border-l-2 border-brand-blue bg-slate-50 py-4 pl-6 dark:bg-slate-800">
            <p className="text-lg italic text-ink dark:text-white">
              &ldquo;It took us weeks before we found someone reliable.&rdquo;
            </p>
            <cite className="mt-2 block text-sm not-italic text-secondary-text dark:text-slate-400">
              Survey respondent, home service hiring experience
            </cite>
          </blockquote>
        </div>
      </Container>
    </section>
  );
}
