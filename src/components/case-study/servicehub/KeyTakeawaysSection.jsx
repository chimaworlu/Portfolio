import { useLayoutEffect, useRef } from "react";
import { gsap } from "../../../lib/gsap.js";
import Container from "../../layout/Container.jsx";
import SectionEyebrow from "../SectionEyebrow.jsx";

const takeaways = [
  {
    lead: "Trust matters more than price",
    body: "52% of students feel uncertain despite needing services urgently.",
  },
  {
    lead: "Speed is non-negotiable",
    body: "60% prioritize availability over every other factor.",
  },
  {
    lead: "No platform has been built for student-specific needs",
    body: "so students default to word-of-mouth and hope for the best.",
  },
];

export default function KeyTakeawaysSection() {
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
          <SectionEyebrow>Research Impact</SectionEyebrow>
          <h2 className="mt-2 text-3xl font-bold text-ink dark:text-white">
            Key Takeaways
          </h2>

          <div className="mt-10 rounded-card border border-border p-8 dark:border-slate-700">
            <p className="text-secondary-text dark:text-slate-400">
              This research phase fundamentally shaped the design approach. I
              initially assumed price would be the primary concern but the
              data showed trust and speed drive decisions more than cost.
            </p>

            <div className="mt-6 space-y-5 border-t border-border pt-6 dark:border-slate-700">
              {takeaways.map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-brand-blue-tint text-xs font-bold text-brand-blue dark:bg-blue-500/15 dark:text-blue-300">
                    {i + 1}
                  </span>
                  <p className="text-ink dark:text-white">
                    <span className="font-semibold">{item.lead}</span> -{" "}
                    <span className="text-secondary-text dark:text-slate-400">
                      {item.body}
                    </span>
                  </p>
                </div>
              ))}
            </div>

            <p className="mt-6 italic text-secondary-text dark:text-slate-400">
              These insights shaped every feature decision that followed -
              addressing the trust gap, availability uncertainty, and
              information scarcity students face.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
