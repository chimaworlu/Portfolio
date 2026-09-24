import { useLayoutEffect, useRef } from "react";
import { gsap } from "../../../lib/gsap.js";
import { animateCountUp } from "../../../lib/countUp.js";
import Container from "../../layout/Container.jsx";
import SectionEyebrow from "../SectionEyebrow.jsx";

const stats = [
  {
    value: 54,
    label: "Survey Responses",
    detail: "Students across multiple campuses",
  },
  {
    value: 25,
    label: "Had Hired a Professional",
    detail: "The relevant research subgroup",
  },
  {
    value: 3,
    label: "In-Depth Interviews",
    detail: "25-40 minutes each, on emotional journeys",
  },
];

const methods = [
  {
    title: "Quantitative Survey",
    body: "Distributed through campus WhatsApp groups to understand behavioral patterns at scale: current methods, frustrations, and decision-making factors.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="3" width="16" height="18" rx="2" />
        <path d="M9 3v2h6V3M8 11h8M8 15h5" />
      </svg>
    ),
  },
  {
    title: "In-Depth Interviews",
    body: "Semi-structured conversations exploring emotional journeys, trust signals, and the gap between expectations and reality.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
  },
];

function StatCard({ stat }) {
  const cardRef = useRef(null);
  const valueRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      animateCountUp(cardRef.current, stat.value, {
        onUpdate: (val) => {
          if (valueRef.current) valueRef.current.textContent = val;
        },
      });
    }, cardRef);

    return () => ctx.revert();
  }, [stat.value]);

  return (
    <div
      ref={cardRef}
      className="rounded-card border border-border p-6 dark:border-slate-700"
    >
      <p ref={valueRef} className="text-4xl font-extrabold text-brand-blue">
        0
      </p>
      <p className="mt-2 font-semibold text-ink dark:text-white">
        {stat.label}
      </p>
      <p className="mt-1 text-sm text-secondary-text dark:text-slate-400">
        {stat.detail}
      </p>
    </div>
  );
}

export default function ResearchSection() {
  const headerRef = useRef(null);
  const methodsRef = useRef(null);

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

      gsap.from(gsap.utils.toArray(methodsRef.current.children), {
        opacity: 0,
        y: 24,
        duration: 0.6,
        ease: "power2.out",
        stagger: 0.1,
        scrollTrigger: { trigger: methodsRef.current, start: "top 85%" },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section id="research" className="mt-section scroll-mt-20">
      <Container>
        <div ref={headerRef}>
          <SectionEyebrow>Research &amp; Discovery</SectionEyebrow>
          <h2 className="mt-2 text-3xl font-bold text-ink dark:text-white">
            Understanding the Problem
          </h2>
          <p className="mt-3 max-w-2xl text-secondary-text dark:text-slate-400">
            Quantitative and qualitative research into how students currently
            find and hire home service providers, their pain points, and what
            drives their decisions.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {stats.map((stat) => (
            <StatCard key={stat.label} stat={stat} />
          ))}
        </div>

        <div
          ref={methodsRef}
          className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2"
        >
          {methods.map((method) => (
            <div
              key={method.title}
              className="rounded-card border border-border p-6 dark:border-slate-700"
            >
              <span className="flex h-8 w-8 items-center justify-center text-brand-blue">
                {method.icon}
              </span>
              <p className="mt-3 font-semibold text-ink dark:text-white">
                {method.title}
              </p>
              <p className="mt-2 text-sm text-secondary-text dark:text-slate-400">
                {method.body}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
