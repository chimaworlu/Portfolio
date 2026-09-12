import Container from "../layout/Container.jsx";
import ProjectCard from "./ProjectCard.jsx";
import { projects } from "../../data/projects.js";

export default function ProjectGrid() {
  return (
    <section id="work" className="mt-section scroll-mt-20">
      <Container>
        <h2 className="sr-only">Work</h2>
        <div className="flex flex-col gap-20">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </Container>
    </section>
  );
}
