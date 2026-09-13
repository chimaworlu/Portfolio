import { useRef } from "react";
import { gsap } from "../../lib/gsap.js";
import BrowserFrame from "../shared/BrowserFrame.jsx";

export default function ProjectCard({ project }) {
  const wireframeRef = useRef(null);

  function handlePeel() {
    gsap.killTweensOf(wireframeRef.current);
    gsap
      .timeline()
      .set(wireframeRef.current, { opacity: 1 })
      .to({}, { duration: 0.35 })
      .to(wireframeRef.current, {
        opacity: 0,
        duration: 0.45,
        ease: "power1.inOut",
      });
  }

  return (
    <div
      onMouseEnter={handlePeel}
      className="flex flex-col items-start gap-8 sm:flex-row sm:items-center"
    >
      <div className="relative h-[320px] w-full overflow-hidden rounded-card bg-slate-50 dark:bg-slate-800 sm:w-[70%]">
        <div className="flex h-full flex-col items-center justify-center gap-4">
          <BrowserFrame className="w-64">
            <div className="space-y-2">
              <div className="h-2 w-full rounded bg-slate-200" />
              <div className="h-2 w-3/4 rounded bg-slate-200" />
              <div className="mt-2 h-4 w-16 rounded bg-brand-blue" />
            </div>
          </BrowserFrame>
          <span className="text-xs font-semibold uppercase tracking-wide text-brand-blue">
            Project video
          </span>
        </div>

        {/* Layer-peel: briefly reveals the underlying wireframe/token
            structure beneath the finished placeholder, then settles back. */}
        <div
          ref={wireframeRef}
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center gap-4 bg-white opacity-0 dark:bg-slate-900"
          style={{
            backgroundImage:
              "linear-gradient(to right, var(--grid-line) 1px, transparent 1px), linear-gradient(to bottom, var(--grid-line) 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        >
          <div className="grid w-64 grid-cols-3 gap-2">
            <div className="col-span-2 h-3 rounded-sm border border-dashed border-slate-300 dark:border-slate-600" />
            <div className="h-3 rounded-sm border border-dashed border-slate-300 dark:border-slate-600" />
            <div className="h-3 rounded-sm border border-dashed border-slate-300 dark:border-slate-600" />
            <div className="col-span-2 h-3 rounded-sm border border-dashed border-slate-300 dark:border-slate-600" />
            <div className="col-span-3 h-8 rounded-sm border border-dashed border-slate-300 dark:border-slate-600" />
          </div>
          <span className="text-xs font-semibold uppercase tracking-wide text-slate-400">
            Structure
          </span>
        </div>
      </div>

      <div className="flex flex-1 flex-col gap-2">
        <h3 className="text-2xl font-bold text-ink dark:text-white">
          {project.name}
        </h3>

        {project.hasLiveBadge && (
          <span className="inline-flex w-fit items-center rounded-full bg-brand-blue-tint px-3 py-1 text-xs font-medium text-brand-blue dark:bg-blue-500/15 dark:text-blue-300">
            View Live ↗
          </span>
        )}

        <p className="text-sm text-secondary-text dark:text-slate-400">
          [ONE-LINE PROJECT OUTCOME - PLACEHOLDER]
        </p>
      </div>
    </div>
  );
}
