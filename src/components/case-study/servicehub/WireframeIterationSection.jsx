import { useLayoutEffect, useRef } from "react";
import { gsap } from "../../../lib/gsap.js";
import Container from "../../layout/Container.jsx";
import SectionEyebrow from "../SectionEyebrow.jsx";
import wireframeBefore from "../../../assets/servicehub/wireframe-before.png";
import wireframeAfter from "../../../assets/servicehub/wireframe-after.png";

const versions = [
  {
    label: "Before",
    badgeClass:
      "bg-slate-200 text-secondary-text dark:bg-slate-700 dark:text-slate-300",
    src: wireframeBefore,
    alt: "Before: homepage with a horizontal scrolling category strip",
    caption:
      "Horizontal category strip forced side-scrolling; availability unclear.",
  },
  {
    label: "After",
    badgeClass: "bg-brand-blue text-white",
    src: wireframeAfter,
    alt: "After: homepage with categories in a single scannable row",
    caption:
      "Grid categories scan at a glance; 'Available Now' surfaced to the top.",
  },
];

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
    <section className="mt-section scroll-mt-20">
      <Container>
        <div ref={contentRef}>
          <SectionEyebrow>Iteration</SectionEyebrow>
          <h2 className="mt-2 text-3xl font-bold text-ink dark:text-white">
            Wireframe Iteration: Homepage
          </h2>

          <blockquote className="mt-10 max-w-xl border-l-2 border-brand-blue bg-slate-50 py-4 pl-6 dark:bg-slate-800">
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

        <div
          ref={columnsRef}
          className="mt-12 grid grid-cols-1 gap-10 sm:grid-cols-2"
        >
          {versions.map((version) => (
            <div key={version.label} className="flex flex-col items-center">
              <span
                className={`rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-wide ${version.badgeClass}`}
              >
                {version.label}
              </span>
              <img
                src={version.src}
                alt={version.alt}
                loading="lazy"
                className="mt-6 h-auto w-full max-w-[280px]"
              />
              <p className="mt-4 max-w-[280px] text-center text-sm text-secondary-text dark:text-slate-400">
                {version.caption}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
