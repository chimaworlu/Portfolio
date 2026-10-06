import { useLayoutEffect, useRef } from "react";
import { gsap } from "../../../lib/gsap.js";
import { animateCountUp } from "../../../lib/countUp.js";
import Container from "../../layout/Container.jsx";
import SectionEyebrow from "../SectionEyebrow.jsx";

const insights = [
  {
    percent: 52,
    insight:
      "52% of students felt neutral confidence when hiring, essentially taking a leap of faith.",
    implication:
      "Built trust through verification badges, student-only peer reviews, and transparent provider profiles.",
  },
  {
    percent: 60,
    insight:
      "60% prioritized availability over price. When your toilet is overflowing, you can't wait three days.",
    implication:
      'Designed real-time "Active Now" badges, response-time estimates, and an urgent booking option.',
  },
  {
    percent: 4,
    insight:
      "Only 4% of students use Google to find providers; 60% rely on personal recommendations instead.",
    implication:
      "Built a peer verification system so university-verified students can leave reviews, digitizing the trust of a recommendation.",
  },
];

function PercentagePill({ percent }) {
  const containerRef = useRef(null);
  const mobileNumberRef = useRef(null);
  const mobileFillRef = useRef(null);
  const desktopNumberRef = useRef(null);
  const desktopFillRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      animateCountUp(containerRef.current, percent, {
        onUpdate: (val) => {
          if (mobileNumberRef.current) mobileNumberRef.current.textContent = `${val}%`;
          if (mobileFillRef.current) mobileFillRef.current.style.width = `${val}%`;
          if (desktopNumberRef.current) desktopNumberRef.current.textContent = `${val}%`;
          if (desktopFillRef.current) desktopFillRef.current.style.height = `${val}%`;
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, [percent]);

  return (
    <div ref={containerRef} className="flex-shrink-0">
      {/* Mobile: horizontal bar, number beside it, fills left to right */}
      <div className="flex max-w-xl items-center gap-4 sm:hidden">
        <span
          ref={mobileNumberRef}
          className="w-14 flex-shrink-0 text-xl font-bold text-ink dark:text-white"
        >
          0%
        </span>
        <div className="relative h-4 flex-1 overflow-hidden rounded-full bg-brand-blue-tint dark:bg-slate-800">
          <div
            ref={mobileFillRef}
            className="absolute inset-y-0 left-0 rounded-full bg-brand-blue"
            style={{ width: "0%" }}
          />
        </div>
      </div>

      {/* Desktop: vertical pill, number above it, fills bottom to top */}
      <div className="hidden flex-col items-center gap-3 sm:flex">
        <span
          ref={desktopNumberRef}
          className="text-xl font-bold text-ink dark:text-white"
        >
          0%
        </span>
        <div className="relative h-20 w-16 overflow-hidden rounded-full bg-brand-blue-tint dark:bg-slate-800">
          <div
            ref={desktopFillRef}
            className="absolute inset-x-0 bottom-0 bg-brand-blue"
            style={{ height: "0%" }}
          />
        </div>
      </div>
    </div>
  );
}

function InsightRow({ item }) {
  const rowRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(rowRef.current.querySelectorAll("[data-reveal]"), {
        opacity: 0,
        y: 24,
        duration: 0.6,
        ease: "power2.out",
        stagger: 0.1,
        scrollTrigger: { trigger: rowRef.current, start: "top 85%" },
      });
    }, rowRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={rowRef}
      className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-start sm:gap-6"
    >
      <div data-reveal className="sm:flex-shrink-0">
        <PercentagePill percent={item.percent} />
      </div>
      <div data-reveal className="max-w-xl">
        <p className="text-ink dark:text-white">
          <span className="font-semibold">Insight:</span> {item.insight}
        </p>
        <p className="mt-3 rounded-md bg-brand-blue-tint px-4 py-3 text-sm text-ink dark:bg-blue-500/10 dark:text-white">
          <span className="font-semibold text-brand-blue dark:text-blue-300">
            Design Implication:
          </span>{" "}
          {item.implication}
        </p>
      </div>
    </div>
  );
}

export default function InsightsSection() {
  const headerRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(gsap.utils.toArray(headerRef.current.children), {
        opacity: 0,
        y: 24,
        duration: 0.6,
        ease: "power2.out",
        stagger: 0.1,
        scrollTrigger: { trigger: headerRef.current, start: "top 85%" },
      });
    }, headerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="insights" className="mt-20 scroll-mt-20 sm:mt-section">
      <Container>
        <div ref={headerRef}>
          <SectionEyebrow color="#2563EB">Insights</SectionEyebrow>
          <h2 className="mt-2 font-display text-2xl text-ink dark:text-white sm:text-3xl">
            Three Truths That Shaped the Design
          </h2>
          <p className="mt-6 max-w-2xl text-secondary-text dark:text-slate-400">
            I initially assumed price would be the primary concern. The data
            said otherwise: trust and speed drive decisions more than cost.
          </p>
        </div>

        {insights.map((item) => (
          <InsightRow key={item.percent} item={item} />
        ))}
      </Container>
    </section>
  );
}
