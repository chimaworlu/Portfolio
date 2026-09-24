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
  const pillRef = useRef(null);
  const fillRef = useRef(null);
  const numberRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      animateCountUp(pillRef.current, percent, {
        onUpdate: (val) => {
          if (numberRef.current) numberRef.current.textContent = `${val}%`;
          if (fillRef.current) fillRef.current.style.height = `${val}%`;
        },
      });
    }, pillRef);

    return () => ctx.revert();
  }, [percent]);

  return (
    <div
      ref={pillRef}
      className="relative h-32 w-16 flex-shrink-0 overflow-hidden rounded-full bg-brand-blue-tint dark:bg-slate-800"
    >
      <div
        ref={fillRef}
        className="absolute inset-x-0 bottom-0 bg-brand-blue"
        style={{ height: "0%" }}
      />
      <span
        ref={numberRef}
        className="absolute inset-x-0 bottom-3 text-center text-sm font-bold text-white"
      >
        0%
      </span>
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
    <div ref={rowRef} className="mt-10 flex items-start gap-6">
      <div data-reveal>
        <PercentagePill percent={item.percent} />
      </div>
      <div data-reveal className="max-w-xl">
        <p className="text-ink dark:text-white">
          <span className="font-semibold">Insight:</span> {item.insight}
        </p>
        <p className="mt-3 rounded-md bg-brand-blue-tint px-4 py-3 text-sm text-brand-blue dark:bg-blue-500/10 dark:text-blue-300">
          <span className="font-semibold">Design Implication:</span>{" "}
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
    <section id="insights" className="mt-section scroll-mt-20">
      <Container>
        <div ref={headerRef}>
          <SectionEyebrow>Insights</SectionEyebrow>
          <h2 className="mt-2 text-3xl font-bold text-ink dark:text-white">
            Three Truths That Shaped the Design
          </h2>
          <p className="mt-3 max-w-2xl text-secondary-text dark:text-slate-400">
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
