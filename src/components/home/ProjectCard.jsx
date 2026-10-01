import { useLayoutEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { gsap } from "../../lib/gsap.js";

export default function ProjectCard({ project, index }) {
  const imageFirst = index % 2 === 0;
  const [overlayActive, setOverlayActive] = useState(false);
  const hasImageOverlay = Boolean(project.gridImage) && project.slug !== "servicehub";
  const descriptionRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        descriptionRef.current,
        { opacity: 0.35 },
        {
          opacity: 1,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: { trigger: descriptionRef.current, start: "top 90%" },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="grid grid-cols-1 items-center gap-10 py-16 sm:gap-16 sm:py-20 lg:grid-cols-2 lg:gap-20">
      <div className={imageFirst ? "lg:order-1" : "lg:order-2"}>
        {project.gridImage ? (
          <div
            className={`relative flex h-80 w-full items-center justify-center overflow-hidden rounded-[8px] sm:h-[420px] ${
              hasImageOverlay ? "group cursor-pointer" : ""
            }`}
            onClick={hasImageOverlay ? () => setOverlayActive((active) => !active) : undefined}
          >
            <img
              src={project.gridImage}
              alt={`${project.name} screenshot`}
              className={
                project.gridImageFit === "cover"
                  ? "h-full w-full rounded-[8px] object-cover shadow-[0_4px_16px_rgba(0,0,0,0.08)]"
                  : "max-h-full max-w-full rounded-[8px] object-contain shadow-[0_4px_16px_rgba(0,0,0,0.08)]"
              }
            />

            {hasImageOverlay && (
              <div
                className={`absolute inset-0 flex items-center justify-center gap-6 bg-black/50 transition-opacity duration-300 group-hover:opacity-100 ${
                  overlayActive ? "opacity-100" : "opacity-0"
                }`}
              >
                <Link
                  to={project.href}
                  onClick={(event) => event.stopPropagation()}
                  className="inline-flex items-center gap-1 font-sans text-sm font-medium text-white"
                >
                  View Case Study
                  <span style={{ color: project.cardColor }} className="inline-flex">
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
                      <path d="M5 12h14M13 6l6 6-6 6" />
                    </svg>
                  </span>
                </Link>

                {project.link && (
                  <a
                    href={project.link.href}
                    target="_blank"
                    rel="noreferrer"
                    onClick={(event) => event.stopPropagation()}
                    className="inline-flex items-center gap-1 font-sans text-sm font-medium text-white"
                  >
                    {project.link.label}
                    <span style={{ color: project.cardColor }} className="inline-flex">
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
                    </span>
                  </a>
                )}
              </div>
            )}
          </div>
        ) : (
          <div className="flex h-80 w-full items-center justify-center rounded-[8px] bg-slate-100 shadow-[0_4px_16px_rgba(0,0,0,0.08)] dark:bg-slate-800 sm:h-[420px]">
            <span className="font-sans text-sm text-secondary-text dark:text-slate-400">
              [PROJECT SCREENSHOT PLACEHOLDER]
            </span>
          </div>
        )}
      </div>

      <div className={imageFirst ? "lg:order-2" : "lg:order-1"}>
        <span
          style={{ color: project.cardColor }}
          className="font-sans text-[11px] font-semibold uppercase tracking-widest"
        >
          {project.projectType ?? "[PROJECT TYPE PLACEHOLDER]"}
        </span>

        <h3 className="mt-3 font-display text-3xl text-ink dark:text-white sm:text-4xl">
          {project.name}
        </h3>

        <p
          ref={descriptionRef}
          className="mt-6 max-w-md font-sans text-sm text-secondary-text dark:text-slate-400"
        >
          {project.outcome ?? "[ONE-LINE PROJECT OUTCOME - PLACEHOLDER]"}
        </p>

        <div className="mt-10 flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-6">
          <Link
            to={project.href}
            style={{ "--accent": project.cardColor }}
            className="inline-flex items-center gap-1 font-sans text-sm font-medium text-ink transition-colors duration-200 hover:text-[var(--accent)] dark:text-white"
          >
            View Case Study
            <span style={{ color: project.cardColor }} className="inline-flex">
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
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </span>
          </Link>

          {project.link && (
            <a
              href={project.link.href}
              target="_blank"
              rel="noreferrer"
              style={{ "--accent": project.cardColor }}
              className="inline-flex items-center gap-1 font-sans text-sm font-medium text-ink transition-colors duration-200 hover:text-[var(--accent)] dark:text-white"
            >
              {project.link.label}
              <span style={{ color: project.cardColor }} className="inline-flex">
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
              </span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
