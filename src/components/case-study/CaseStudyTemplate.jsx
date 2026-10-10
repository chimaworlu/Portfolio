import { useLayoutEffect, useRef, useState } from "react";
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
  cardColor,
  liveUrl,
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
  const [lightboxImage, setLightboxImage] = useState(null);

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
          {(() => {
            const badgeClass =
              "absolute right-6 top-6 inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-medium";
            const badgeStyle = {
              color: cardColor,
              backgroundColor: `${cardColor}1A`,
            };
            const badgeContent = (
              <>
                View Live
                <svg
                  width="13"
                  height="13"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M7 17L17 7M8 7h9v9" />
                </svg>
              </>
            );

            return liveUrl ? (
              <a
                href={liveUrl}
                target="_blank"
                rel="noreferrer"
                style={badgeStyle}
                className={`${badgeClass} transition-opacity hover:opacity-80`}
              >
                {badgeContent}
              </a>
            ) : (
              <span style={badgeStyle} className={badgeClass}>
                {badgeContent}
              </span>
            );
          })()}
          <span className="text-sm text-secondary-text dark:text-slate-400">[OPENER VIDEO]</span>
        </div>
      </Container>

      {/* Title block */}
      <Container className="mt-20 sm:mt-section" data-reveal-group>
        <h1 data-reveal className="font-display text-5xl tracking-tight text-ink dark:text-white">
          {projectName}
        </h1>
        <p data-reveal className="mt-6 text-lg text-secondary-text dark:text-slate-400">
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
      <Container className="mt-20 sm:mt-section" data-reveal-group>
        <SectionEyebrow color={cardColor}>The Problem</SectionEyebrow>
        <h2 data-reveal className="mt-2 font-display text-3xl text-ink dark:text-white">
          {contextHeadline ?? "[CONTEXT HEADLINE PLACEHOLDER]"}
        </h2>
        <p data-reveal className="mt-6 max-w-2xl text-secondary-text dark:text-slate-400">
          {contextParagraph ?? "[CONTEXT PARAGRAPH PLACEHOLDER]"}
        </p>
      </Container>

      {/* Role & Ownership */}
      <Container className="mt-20 sm:mt-section" data-reveal-group>
        <div data-reveal>
          <SectionEyebrow color={cardColor}>Role and Ownership</SectionEyebrow>
          <blockquote
            style={{ borderColor: cardColor }}
            className="mt-6 border-l-2 pl-6 text-ink dark:text-white"
          >
            {roleOwnership ??
              `Led ${projectName} end to end, from problem to shipped product, directing AI-assisted execution throughout.`}
          </blockquote>
        </div>
      </Container>

      {/* Key decisions */}
      <Container className="mt-20 sm:mt-section" data-reveal-group>
        <SectionEyebrow color={cardColor}>Key Decisions</SectionEyebrow>
        <h2 data-reveal className="mt-2 font-display text-3xl text-ink dark:text-white">
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
      <Container className="mt-20 sm:mt-section" data-reveal-group>
        <SectionEyebrow color={cardColor}>Obstacles</SectionEyebrow>
        <h2 data-reveal className="mt-2 font-display text-3xl text-ink dark:text-white">
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
        <Container className="mt-20 sm:mt-section" data-reveal-group>
          <SectionEyebrow color={cardColor}>What Was Built</SectionEyebrow>

          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {builtScreens.map((screen) => (
              <BrowserFrame key={screen.alt} data-reveal>
                <button
                  type="button"
                  onClick={() => setLightboxImage(screen)}
                  aria-label={`View ${screen.alt} full size`}
                  className="flex h-32 w-full cursor-pointer items-center justify-center border-0 bg-transparent p-0"
                >
                  <img
                    src={screen.src}
                    alt={screen.alt}
                    loading="lazy"
                    className="h-full w-full object-cover object-top"
                  />
                </button>
              </BrowserFrame>
            ))}
          </div>
        </Container>
      )}

      {/* Tools & skills */}
      <Container className="mt-20 sm:mt-section" data-reveal-group>
        <SectionEyebrow color={cardColor}>Tools and Skills</SectionEyebrow>

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
      <Container className="mt-20 sm:mt-section" data-reveal-group>
        <div data-reveal>
          <SectionEyebrow color={cardColor}>Outcome</SectionEyebrow>
          <blockquote
            style={{ borderColor: cardColor }}
            className="mt-6 border-l-2 pl-6 text-ink dark:text-white"
          >
            {outcomeSummary ?? "[OUTCOME PLACEHOLDER]"}
          </blockquote>
        </div>
      </Container>

      {/* What I learned */}
      <Container className="mt-20 sm:mt-section" data-reveal-group>
        <SectionEyebrow color={cardColor}>What I Learned</SectionEyebrow>

        <ul className="mt-6 space-y-3">
          {(learnings ?? placeholderLearnings).map((item, i) => (
            <li key={i} data-reveal className="flex items-start gap-3 text-secondary-text dark:text-slate-400">
              <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-ink dark:bg-white" />
              {learnings ? item : "[LEARNING PLACEHOLDER]"}
            </li>
          ))}
        </ul>
      </Container>

      {/* What's next */}
      {whatsNext && (
        <Container className="mt-20 sm:mt-section" data-reveal-group>
          <SectionEyebrow color={cardColor}>What's Next</SectionEyebrow>

          <ul className="mt-6 space-y-3">
            {whatsNext.map((item, i) => (
              <li key={i} data-reveal className="flex items-start gap-3 text-secondary-text dark:text-slate-400">
                <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-ink dark:bg-white" />
                {item}
              </li>
            ))}
          </ul>
        </Container>
      )}

      {/* Close */}
      <Container className="mt-20 pb-24 text-center sm:mt-section" data-reveal-group>
        <p data-reveal className="text-xs font-medium uppercase tracking-wide text-secondary-text dark:text-slate-400">
          Next project
        </p>
        {nextProject?.caseStudyReady ? (
          <Link
            to={`/work/${nextProject.slug}`}
            data-reveal
            className="group mt-2 inline-flex items-center gap-2 font-display text-3xl text-ink transition-colors duration-200 hover:text-secondary-text dark:text-white dark:hover:text-slate-400"
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
          <p data-reveal className="mt-2 font-display text-3xl text-ink dark:text-white">
            {nextProject ? nextProject.name : "[NEXT PROJECT NAME]"}
          </p>
        )}
      </Container>

      {lightboxImage && (
        <div
          onClick={() => setLightboxImage(null)}
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/80 p-6"
        >
          <button
            type="button"
            onClick={() => setLightboxImage(null)}
            aria-label="Close"
            className="absolute right-6 top-6 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors duration-200 hover:bg-white/20"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>
          <img
            src={lightboxImage.src}
            alt={lightboxImage.alt}
            onClick={(event) => event.stopPropagation()}
            className="max-h-full max-w-full rounded-lg object-contain"
          />
        </div>
      )}
    </main>
  );
}
