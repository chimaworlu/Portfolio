import { useLayoutEffect, useRef } from "react";
import { gsap } from "../../../lib/gsap.js";
import Container from "../../layout/Container.jsx";
import SectionEyebrow from "../SectionEyebrow.jsx";

const cardColors = {
  green:
    "bg-green-100 text-green-900 dark:bg-green-500/15 dark:text-green-200",
  purple:
    "bg-purple-100 text-purple-900 dark:bg-purple-500/15 dark:text-purple-200",
  coral: "bg-red-100 text-red-900 dark:bg-red-500/15 dark:text-red-200",
  blue: "bg-blue-100 text-blue-900 dark:bg-blue-500/15 dark:text-blue-200",
  yellow:
    "bg-yellow-100 text-yellow-900 dark:bg-yellow-500/15 dark:text-yellow-200",
  teal: "bg-teal-100 text-teal-900 dark:bg-teal-500/15 dark:text-teal-200",
  pink: "bg-pink-100 text-pink-900 dark:bg-pink-500/15 dark:text-pink-200",
};

const groups = [
  {
    title: "Trust & Confidence",
    cards: [
      { color: "green", text: "52% feel only neutral confidence when hiring (Quantitative Data)" },
      { color: "purple", text: "“Finding honest and competent people”" },
      { color: "coral", text: "“Fear of bad treatment as students” (Qualitative Data)" },
      { color: "blue", text: "Want quality/competence verification" },
      { color: "yellow", text: "“Fear of being scammed”" },
    ],
  },
  {
    title: "Speed & Availability",
    cards: [
      { color: "yellow", text: "60% prioritize speed when choosing providers (Quantitative Data)" },
      { color: "blue", text: "22% frustrated by delays" },
      { color: "green", text: "“They took so much time to arrive”" },
      { color: "pink", text: "Want clear estimated time of arrival (ETA) information" },
    ],
  },
  {
    title: "Discovery & Access",
    cards: [
      { color: "yellow", text: "Only 4% use Google/digital search (Quantitative Data)" },
      { color: "teal", text: "60% rely on personal recommendations" },
      { color: "coral", text: "“It took weeks to find someone reliable”" },
      { color: "pink", text: "“No site to look for services”" },
    ],
  },
  {
    title: "Reviews & Social Proof",
    cards: [
      { color: "yellow", text: "Currently only 12% value reviews" },
      { color: "blue", text: "All 3 interviewees want reviews" },
      { color: "coral", text: "Need student-specific, trustworthy reviews" },
      { color: "green", text: "Reviews should show behavior, not just ratings" },
    ],
  },
];

function AffinityGroup({ group }) {
  const groupRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(groupRef.current.querySelectorAll("[data-reveal]"), {
        opacity: 0,
        y: 24,
        duration: 0.6,
        ease: "power2.out",
        stagger: 0.06,
        scrollTrigger: { trigger: groupRef.current, start: "top 85%" },
      });
    }, groupRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={groupRef}>
      <span
        data-reveal
        className="inline-flex w-fit items-center rounded-full border-2 border-brand-blue px-5 py-2 text-sm font-bold uppercase tracking-wide text-brand-blue dark:border-blue-400 dark:text-blue-300"
      >
        {group.title}
      </span>

      <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3">
        {group.cards.map((card, i) => (
          <div
            key={i}
            data-reveal
            className={`rounded-lg p-4 text-sm ${cardColors[card.color]}`}
          >
            {card.text}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function ResearchMethodsSection() {
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
    <section className="mt-section scroll-mt-20">
      <Container>
        <div ref={headerRef}>
          <SectionEyebrow>Affinity Map</SectionEyebrow>
          <h2 className="mt-2 text-3xl font-bold text-ink dark:text-white">
            Research Methods
          </h2>
          <p className="mt-3 max-w-2xl text-secondary-text dark:text-slate-400">
            After collecting all survey responses and interview transcripts,
            I organized every insight using affinity mapping to identify
            patterns and recurring themes across user feedback.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-x-10 gap-y-10 lg:grid-cols-2">
          {groups.map((group) => (
            <AffinityGroup key={group.title} group={group} />
          ))}
        </div>
      </Container>
    </section>
  );
}
