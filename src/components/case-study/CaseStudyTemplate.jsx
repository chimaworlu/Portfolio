import { Link } from "react-router-dom";
import Container from "../layout/Container.jsx";
import BrowserFrame from "../shared/BrowserFrame.jsx";
import SectionEyebrow from "./SectionEyebrow.jsx";

const decisions = [1, 2, 3];
const obstacles = [1, 2];
const screens = [1, 2, 3];
const learnings = [1, 2, 3];

const toolGroups = [
  { label: "Design", tools: ["[TOOL]", "[TOOL]", "[TOOL]"] },
  { label: "Build", tools: ["[TOOL]", "[TOOL]", "[TOOL]"] },
  { label: "AI Assisted Workflow", tools: ["[TOOL]", "[TOOL]", "[TOOL]"] },
];

export default function CaseStudyTemplate({ projectName, nextProject }) {
  return (
    <main className="pt-20">
      <Container className="pt-10">
        {/* Opener */}
        <div className="relative flex h-[420px] items-center justify-center rounded-card bg-slate-50">
          <span className="absolute right-6 top-6 rounded-full bg-brand-blue-tint px-3 py-1 text-xs font-medium text-brand-blue">
            View Live ↗
          </span>
          <span className="text-sm text-secondary-text">[OPENER VIDEO]</span>
        </div>
      </Container>

      {/* Title block */}
      <Container className="mt-16">
        <h1 className="text-5xl font-extrabold tracking-tight text-ink">
          {projectName}
        </h1>
        <p className="mt-3 text-lg text-secondary-text">
          [ONE LINE POSITIONING]
        </p>

        <div className="mt-10 grid grid-cols-1 gap-6 border-t border-border pt-6 sm:grid-cols-3">
          {["Role", "Timeline", "Tools"].map((label) => (
            <div key={label}>
              <p className="text-xs font-semibold uppercase tracking-wide text-secondary-text">
                {label}
              </p>
              <p className="mt-1 text-sm text-ink">[{label.toUpperCase()} PLACEHOLDER]</p>
            </div>
          ))}
        </div>
      </Container>

      {/* Context */}
      <Container className="mt-section">
        <SectionEyebrow>The Problem</SectionEyebrow>
        <h2 className="mt-2 text-3xl font-bold text-ink">
          [CONTEXT HEADLINE PLACEHOLDER]
        </h2>
        <p className="mt-4 max-w-2xl text-secondary-text">
          [CONTEXT PARAGRAPH PLACEHOLDER]
        </p>
      </Container>

      {/* Role & Ownership */}
      <Container className="mt-16">
        <div className="rounded-card bg-brand-blue-tint p-8">
          <SectionEyebrow>Role and Ownership</SectionEyebrow>
          <p className="mt-2 text-ink">
            Led {projectName} end to end, from problem to shipped product,
            directing AI-assisted execution throughout.
          </p>
        </div>
      </Container>

      {/* Key decisions */}
      <Container className="mt-section">
        <SectionEyebrow>Key Decisions</SectionEyebrow>
        <h2 className="mt-2 text-3xl font-bold text-ink">
          [DECISIONS HEADLINE]
        </h2>

        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {decisions.map((i) => (
            <div
              key={i}
              className="rounded-card border border-border p-6"
            >
              <p className="font-semibold text-ink">[DECISION TITLE]</p>
              <p className="mt-2 text-sm text-secondary-text">
                [DECISION BODY PLACEHOLDER]
              </p>
            </div>
          ))}
        </div>
      </Container>

      {/* Obstacles */}
      <Container className="mt-section">
        <SectionEyebrow>Obstacles</SectionEyebrow>
        <h2 className="mt-2 text-3xl font-bold text-ink">
          [OBSTACLES HEADLINE]
        </h2>

        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {obstacles.map((i) => (
            <div
              key={i}
              className="rounded-card border border-border p-6"
            >
              <p className="font-semibold text-ink">[OBSTACLE TITLE]</p>
              <p className="mt-2 text-sm text-secondary-text">
                [OBSTACLE BODY PLACEHOLDER]
              </p>
            </div>
          ))}
        </div>
      </Container>

      {/* What was built */}
      <Container className="mt-section">
        <SectionEyebrow>What Was Built</SectionEyebrow>
        <h2 className="mt-2 text-3xl font-bold text-ink">
          [BUILT HEADLINE]
        </h2>

        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {screens.map((i) => (
            <BrowserFrame key={i}>
              <div className="flex h-32 items-center justify-center">
                <span className="text-xs text-secondary-text">
                  [SCREEN PLACEHOLDER]
                </span>
              </div>
            </BrowserFrame>
          ))}
        </div>
      </Container>

      {/* Tools & skills */}
      <Container className="mt-section">
        <SectionEyebrow>Tools and Skills</SectionEyebrow>

        <div className="mt-8 grid grid-cols-1 gap-10 sm:grid-cols-3">
          {toolGroups.map((group) => (
            <div key={group.label}>
              <p className="font-semibold text-ink">{group.label}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {group.tools.map((tool, i) => (
                  <span
                    key={i}
                    className="rounded-full bg-slate-100 px-3 py-1 text-xs text-secondary-text"
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
      <Container className="mt-16">
        <div className="rounded-card border border-border p-8">
          <SectionEyebrow>Outcome</SectionEyebrow>
          <p className="mt-2 text-ink">[OUTCOME PLACEHOLDER]</p>
        </div>
      </Container>

      {/* What I learned */}
      <Container className="mt-section">
        <SectionEyebrow>What I Learned</SectionEyebrow>
        <h2 className="mt-2 text-3xl font-bold text-ink">
          [LEARNINGS HEADLINE]
        </h2>

        <ul className="mt-6 space-y-3">
          {learnings.map((i) => (
            <li key={i} className="flex items-start gap-3 text-secondary-text">
              <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-brand-blue" />
              [LEARNING PLACEHOLDER]
            </li>
          ))}
        </ul>
      </Container>

      {/* Close */}
      <Container className="mt-section pb-24 text-center">
        <p className="text-xs font-medium uppercase tracking-wide text-secondary-text">
          Next project
        </p>
        {nextProject?.caseStudyReady ? (
          <Link
            to={`/work/${nextProject.slug}`}
            className="mt-2 inline-flex items-center gap-2 text-3xl font-bold text-ink hover:text-brand-blue"
          >
            {nextProject.name} <span aria-hidden="true">→</span>
          </Link>
        ) : (
          <p className="mt-2 text-3xl font-bold text-ink">
            {nextProject ? nextProject.name : "[NEXT PROJECT NAME]"}
          </p>
        )}
      </Container>
    </main>
  );
}
