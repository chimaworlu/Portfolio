import { Link } from "react-router-dom";
import BrowserFrame from "../shared/BrowserFrame.jsx";

function VideoPlaceholder() {
  return (
    <div className="flex h-[320px] w-full flex-col items-center justify-center gap-4 rounded-card bg-slate-50 sm:w-[70%]">
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
  );
}

export default function ProjectCard({ project }) {
  const content = (
    <div className="flex flex-col items-start gap-8 sm:flex-row sm:items-center">
      <VideoPlaceholder />

      <div className="flex flex-1 flex-col gap-2">
        <h3 className="text-2xl font-bold text-ink">{project.name}</h3>

        {project.hasLiveBadge && (
          <span className="inline-flex w-fit items-center rounded-full bg-brand-blue-tint px-3 py-1 text-xs font-medium text-brand-blue">
            View Live ↗
          </span>
        )}

        <p className="text-sm text-secondary-text">
          [ONE-LINE PROJECT OUTCOME - PLACEHOLDER]
        </p>
      </div>
    </div>
  );

  if (project.caseStudyReady) {
    return (
      <Link
        to={`/work/${project.slug}`}
        className="block"
        aria-label={`View ${project.name} case study`}
      >
        {content}
      </Link>
    );
  }

  return <div>{content}</div>;
}
