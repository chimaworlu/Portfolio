import { useLayoutEffect, useRef } from "react";
import { gsap } from "../../../lib/gsap.js";
import Container from "../../layout/Container.jsx";
import SectionEyebrow from "../SectionEyebrow.jsx";

const questions = [
  [
    "How might we help students ",
    { text: "verify quality", highlight: true },
    " and create trust so they can make confident decisions?",
  ],
  [
    "How might we help students quickly identify ",
    { text: "available providers", highlight: true },
    " for urgent needs?",
  ],
  [
    "How might we create a digital solution that feels ",
    { text: "as trustworthy as a personal recommendation", highlight: true },
    "?",
  ],
];

export default function HowMightWeSection() {
  const headerRef = useRef(null);
  const listRef = useRef(null);

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

      gsap.from(gsap.utils.toArray(listRef.current.children), {
        opacity: 0,
        y: 24,
        duration: 0.6,
        ease: "power2.out",
        stagger: 0.12,
        scrollTrigger: { trigger: listRef.current, start: "top 85%" },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="mt-section scroll-mt-20">
      <Container>
        <div ref={headerRef}>
          <SectionEyebrow>Reframing the Problem</SectionEyebrow>
          <h2 className="mt-2 text-3xl font-bold text-ink dark:text-white">
            How Might We&hellip;
          </h2>
          <p className="mt-3 max-w-2xl text-secondary-text dark:text-slate-400">
            Turning research findings into design questions.
          </p>
        </div>

        <div ref={listRef} className="mt-10 space-y-8">
          {questions.map((segments, i) => (
            <p
              key={i}
              className="max-w-3xl text-2xl font-semibold leading-snug text-ink dark:text-white sm:text-3xl"
            >
              {segments.map((segment, j) =>
                typeof segment === "string" ? (
                  segment
                ) : (
                  <span key={j} className="text-brand-blue dark:text-blue-400">
                    {segment.text}
                  </span>
                )
              )}
            </p>
          ))}
        </div>
      </Container>
    </section>
  );
}
