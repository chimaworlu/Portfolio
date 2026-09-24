import { Navigate } from "react-router-dom";
import Nav from "../components/layout/Nav.jsx";
import CaseStudyTemplate from "../components/case-study/CaseStudyTemplate.jsx";
import { getProjectBySlug, getNextProject } from "../data/projects.js";

export default function CaseStudyPage({ slug }) {
  const project = getProjectBySlug(slug);

  if (!project || !project.caseStudyReady) {
    return <Navigate to="/" replace />;
  }

  const nextProject = getNextProject(slug);

  return (
    <>
      <Nav variant="case-study" />
      <CaseStudyTemplate
        projectName={project.name}
        positioning={project.positioning}
        role={project.role}
        timeline={project.timeline}
        tools={project.tools}
        contextHeadline={project.contextHeadline}
        contextParagraph={project.contextParagraph}
        roleOwnership={project.roleOwnership}
        decisionsHeadline={project.decisionsHeadline}
        keyDecisions={project.keyDecisions}
        obstaclesHeadline={project.obstaclesHeadline}
        obstacles={project.obstacles}
        builtScreens={project.builtScreens}
        toolGroups={project.toolGroups}
        outcomeSummary={project.outcomeSummary}
        learnings={project.learnings}
        whatsNext={project.whatsNext}
        nextProject={nextProject}
      />
    </>
  );
}
