import { useLayoutEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { gsap } from "../../lib/gsap.js";
import Container from "../layout/Container.jsx";
import BrowserFrame from "../shared/BrowserFrame.jsx";
import SectionEyebrow from "./SectionEyebrow.jsx";

const placeholderDecisions = [1, 2, 3];
const placeholderObstacles = [1, 2];
const placeholderLearnings = [1, 2, 3];

const placeholderToolGroups = [
  { label: "Design", tools: ["[TOOL]", "[TOOL]", "[TOOL]"] },
  { label: "Build", tools: ["[TOOL]", "[TOOL]", "[TOOL]"] },
  { label: "AI Assisted Workflow", tools: ["[TOOL]", "[TOOL]", "[TOOL]"] },
];

export default function CaseStudyTemplate({
  projectName,
  positioning,
  role,
  timeline,
  tools,
  contextHeadline,
  contextParagraph,
  roleOwnership,
  decisionsHeadline,
  keyDecisions,
  obstaclesHeadline,
  obstacles,
  builtScreens,
  toolGroups,
  outcomeSummary,
  learnings,
  whatsNext,
  nextProject,
}) {
  const details = { Role: role, Timeline: timeline, Tools: tools };
  const mainRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray("[data-reveal-group]").forEach((group) => {
        gsap.from(group.querySelectorAll("[data-reveal]"), {
          opacity: 0,
          y: 24,
          duration: 0.6,
          ease: "power2.out",
          stagger: 0.1,
          scrollTrigger: { trigger: group, start: "top 85%" },
        });
      });
    }, mainRef);

    return () => ctx.revert();
  }, []);

  return (
    <main ref={mainRef} className="pt-20">
      <Container className="pt-10">
        {/* Opener */}
        <div className="relative flex h-[420px] items-center justify-center rounded-card bg-slate-50 dark:bg-slate-800">
          <span className="absolute right-6 top-6 rounded-full bg-brand-blue-tint px-3 py-1 text-xs font-medium text-brand-blue dark:bg-blue-500/15 dark:text-blue-300">
            View Live ↗
          </span>
          <span className="text-sm text-secondary-text dark:text-slate-400">[OPENER VIDEO]</span>
        </div>
      </Container>

      {/* Title block */}
      <Container className="mt-16" data-reveal-group>
        <h1 data-reveal className="text-5xl font-extrabold tracking-tight text-ink dark:text-white">
          {projectName}
        </h1>
        <p data-reveal className="mt-3 text-lg text-secondary-text dark:text-slate-400">
          {positioning ?? "[ONE LINE POSITIONING]"}
        </p>

        <div data-reveal className="mt-10 grid grid-cols-1 gap-6 border-t border-border pt-6 dark:border-slate-700 sm:grid-cols-3">
          {Object.entries(details).map(([label, value]) => (
            <div key={label}>
              <p className="text-xs font-semibold uppercase tracking-wide text-secondary-text dark:text-slate-400">
                {label}
              </p>
              <p className="mt-1 text-sm text-ink dark:text-white">
                {value ?? `[${label.toUpperCase()} PLACEHOLDER]`}
              </p>
            </div>
          ))}
        </div>
      </Container>

      {/* Context */}
      <Container className="mt-section" data-reveal-group>
        <SectionEyebrow>The Problem</SectionEyebrow>
        <h2 data-reveal className="mt-2 text-3xl font-bold text-ink dark:text-white">
          {contextHeadline ?? "[CONTEXT HEADLINE PLACEHOLDER]"}
        </h2>
        <p data-reveal className="mt-4 max-w-2xl text-secondary-text dark:text-slate-400">
          {contextParagraph ?? "[CONTEXT PARAGRAPH PLACEHOLDER]"}
        </p>
      </Container>

      {/* Role & Ownership */}
      <Container className="mt-16" data-reveal-group>
        <div data-reveal className="rounded-card bg-brand-blue-tint p-8 dark:bg-blue-500/15">
          <SectionEyebrow>Role and Ownership</SectionEyebrow>
          <p className="mt-2 text-ink dark:text-white">
            {roleOwnership ??
              `Led ${projectName} end to end, from problem to shipped product, directing AI-assisted execution throughout.`}
          </p>
        </div>
      </Container>

      {/* Key decisions */}
      <Container className="mt-section" data-reveal-group>
        <SectionEyebrow>Key Decisions</SectionEyebrow>
        <h2 data-reveal className="mt-2 text-3xl font-bold text-ink dark:text-white">
          {decisionsHeadline ?? "[DECISIONS HEADLINE]"}
        </h2>

        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {(keyDecisions ?? placeholderDecisions).map((decision, i) => (
            <div
              key={decision.title ?? i}
              data-reveal
              className="rounded-card border border-border p-6 dark:border-slate-700"
            >
              <p className="font-semibold text-ink dark:text-white">
                {decision.title ?? "[DECISION TITLE]"}
              </p>
              <p className="mt-2 text-sm text-secondary-text dark:text-slate-400">
                {decision.body ?? "[DECISION BODY PLACEHOLDER]"}
              </p>
            </div>
          ))}
        </div>
      </Container>

      {/* Obstacles */}
      <Container className="mt-section" data-reveal-group>
        <SectionEyebrow>Obstacles</SectionEyebrow>
        <h2 data-reveal className="mt-2 text-3xl font-bold text-ink dark:text-white">
          {obstaclesHeadline ?? "[OBSTACLES HEADLINE]"}
        </h2>

        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {(obstacles ?? placeholderObstacles).map((obstacle, i) => (
            <div
              key={obstacle.title ?? i}
              data-reveal
              className="rounded-card border border-border p-6 dark:border-slate-700"
            >
              <p className="font-semibold text-ink dark:text-white">
                {obstacle.title ?? "[OBSTACLE TITLE]"}
              </p>
              <p className="mt-2 text-sm text-secondary-text dark:text-slate-400">
                {obstacle.body ?? "[OBSTACLE BODY PLACEHOLDER]"}
              </p>
            </div>
          ))}
        </div>
      </Container>

      {/* What was built */}
      {builtScreens && (
        <Container className="mt-section" data-reveal-group>
          <SectionEyebrow>What Was Built</SectionEyebrow>

          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {builtScreens.map((screen) => (
              <BrowserFrame key={screen.alt} data-reveal>
                <div className="flex h-32 items-center justify-center">
                  <img
                    src={screen.src}
                    alt={screen.alt}
                    loading="lazy"
                    className="h-full w-full object-cover object-top"
                  />
                </div>
              </BrowserFrame>
            ))}
          </div>
        </Container>
      )}

      {/* Tools & skills */}
      <Container className="mt-section" data-reveal-group>
        <SectionEyebrow>Tools and Skills</SectionEyebrow>

        <div className="mt-8 grid grid-cols-1 gap-10 sm:grid-cols-3">
          {(toolGroups ?? placeholderToolGroups).map((group) => (
            <div key={group.label} data-reveal>
              <p className="font-semibold text-ink dark:text-white">{group.label}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {group.tools.map((tool, i) => (
                  <span
                    key={i}
                    className="rounded-full bg-slate-100 px-3 py-1 text-xs text-secondary-text dark:bg-slate-800 dark:text-slate-400"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>

      {/* Outcome */}
      <Container className="mt-16" data-reveal-group>
        <div data-reveal className="rounded-card border border-border p-8 dark:border-slate-700">
          <SectionEyebrow>Outcome</SectionEyebrow>
          <p className="mt-2 text-ink dark:text-white">
            {outcomeSummary ?? "[OUTCOME PLACEHOLDER]"}
          </p>
        </div>
      </Container>

      {/* What I learned */}
      <Container className="mt-section" data-reveal-group>
        <SectionEyebrow>What I Learned</SectionEyebrow>

        <ul className="mt-6 space-y-3">
          {(learnings ?? placeholderLearnings).map((item, i) => (
            <li key={i} data-reveal className="flex items-start gap-3 text-secondary-text dark:text-slate-400">
              <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-brand-blue dark:bg-blue-400" />
              {learnings ? item : "[LEARNING PLACEHOLDER]"}
            </li>
          ))}
        </ul>
      </Container>

      {/* What's next */}
      {whatsNext && (
        <Container className="mt-section" data-reveal-group>
          <SectionEyebrow>What's Next</SectionEyebrow>

          <ul className="mt-6 space-y-3">
            {whatsNext.map((item, i) => (
              <li key={i} data-reveal className="flex items-start gap-3 text-secondary-text dark:text-slate-400">
                <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-brand-blue dark:bg-blue-400" />
                {item}
              </li>
            ))}
          </ul>
        </Container>
      )}

      {/* Close */}
      <Container className="mt-section pb-24 text-center" data-reveal-group>
        <p data-reveal className="text-xs font-medium uppercase tracking-wide text-secondary-text dark:text-slate-400">
          Next project
        </p>
        {nextProject?.caseStudyReady ? (
          <Link
            to={`/work/${nextProject.slug}`}
            data-reveal
            className="group mt-2 inline-flex items-center gap-2 text-3xl font-bold text-ink hover:text-brand-blue dark:text-white dark:hover:text-blue-400"
          >
            {nextProject.name}
            <span
              aria-hidden="true"
              className="inline-block transition-transform duration-300 ease-out group-hover:translate-x-1.5"
            >
              →
            </span>
          </Link>
        ) : (
          <p data-reveal className="mt-2 text-3xl font-bold text-ink dark:text-white">
            {nextProject ? nextProject.name : "[NEXT PROJECT NAME]"}
          </p>
        )}
      </Container>
    </main>
  );
}
