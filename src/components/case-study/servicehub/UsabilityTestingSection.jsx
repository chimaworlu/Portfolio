import { useLayoutEffect, useRef } from "react";
import { gsap } from "../../../lib/gsap.js";
import Container from "../../layout/Container.jsx";
import SectionEyebrow from "../SectionEyebrow.jsx";
import refiningBefore from "../../../assets/servicehub/flow-refining-before.png";
import refiningAfter from "../../../assets/servicehub/flow-refining-after.png";

const versions = [
  {
    label: "Before",
    badgeClass:
      "bg-slate-200 text-secondary-text dark:bg-slate-700 dark:text-slate-300",
    src: refiningBefore,
    alt: "Before: provider cards with distance and rating but no online status",
    caption:
      "Distance and rating shown, but no signal of who's actually reachable now.",
  },
  {
    label: "After",
    badgeClass: "bg-brand-blue text-white",
    src: refiningAfter,
    alt: "After: provider cards with a green Online badge",
    caption:
      "Green 'Online' badge added to provider cards, availability visible at a glance.",
  },
];

export default function UsabilityTestingSection() {
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
          <SectionEyebrow>Usability Testing</SectionEyebrow>
          <h2 className="mt-2 text-3xl font-bold text-ink dark:text-white">
            Refining the Experience
          </h2>
          <p className="mt-3 max-w-2xl text-secondary-text dark:text-slate-400">
            A prototype only earns its place once it's tested against real
            behavior.
          </p>

          <blockquote className="mt-10 max-w-xl border-l-2 border-brand-blue bg-slate-50 py-4 pl-6 dark:bg-slate-800">
            <p className="text-lg italic text-ink dark:text-white">
              &ldquo;I don&apos;t just want to know how far they are, I need
              to know if they&apos;re actually working right now, so I
              don&apos;t waste time messaging someone who won&apos;t reply
              until tomorrow.&rdquo;
            </p>
            <cite className="mt-2 block text-sm not-italic text-secondary-text dark:text-slate-400">
              Usability test participant
            </cite>
          </blockquote>

          <p className="mt-4 text-sm font-semibold text-brand-blue dark:text-blue-400">
            Goal: reduce time-to-help with real-time availability indicators.
          </p>
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
