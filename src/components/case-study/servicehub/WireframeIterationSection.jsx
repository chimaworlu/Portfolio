import { useLayoutEffect, useRef } from "react";
import { gsap } from "../../../lib/gsap.js";
import Container from "../../layout/Container.jsx";
import SectionEyebrow from "../SectionEyebrow.jsx";
import wireframeComparison from "../../../assets/servicehub/wireframe-iteration-comparison.png";

export default function WireframeIterationSection() {
  const contentRef = useRef(null);
  const columnsRef = useRef(null);

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

      gsap.from(gsap.utils.toArray(columnsRef.current.children), {
        opacity: 0,
        y: 24,
        duration: 0.6,
        ease: "power2.out",
        stagger: 0.15,
        scrollTrigger: { trigger: columnsRef.current, start: "top 85%" },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="mt-20 scroll-mt-20 sm:mt-section">
      <Container>
        <div ref={contentRef}>
          <SectionEyebrow color="#2563EB">Iteration</SectionEyebrow>
          <h2 className="mt-2 font-display text-2xl text-ink dark:text-white sm:text-3xl">
            Wireframe Iteration: Homepage
          </h2>

          <blockquote className="mt-8 max-w-xl border-l-2 border-brand-blue bg-slate-50 py-4 pl-6 dark:bg-slate-800">
            <p className="text-lg italic text-ink dark:text-white">
              &ldquo;After reviewing the initial homepage with potential
              users, feedback showed the horizontal category layout
              wasn&apos;t intuitive for quick scanning.&rdquo;
            </p>
            <cite className="mt-2 block text-sm not-italic text-secondary-text dark:text-slate-400">
              Peer feedback session
            </cite>
          </blockquote>
        </div>

        <div ref={columnsRef} className="mt-12 flex flex-col items-center">
          <img
            src={wireframeComparison}
            alt="Before and after: the homepage's horizontal scrolling category strip replaced with a single scannable grid"
            loading="lazy"
            className="h-auto w-full max-w-xl"
          />
          <p className="mt-6 max-w-xl text-center text-sm text-secondary-text dark:text-slate-400">
            The horizontal category strip forced side-scrolling and buried
            availability. A single scannable grid surfaces &ldquo;Available
            Now&rdquo; and all four categories at a glance.
          </p>
        </div>
      </Container>
    </section>
  );
}
