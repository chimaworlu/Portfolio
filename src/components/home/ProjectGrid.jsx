import { useLayoutEffect, useRef } from "react";
import { gsap } from "../../lib/gsap.js";
import Container from "../layout/Container.jsx";
import ProjectCard from "./ProjectCard.jsx";
import { projects } from "../../data/projects.js";

export default function ProjectGrid() {
  const listRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const rows = gsap.utils.toArray(listRef.current.children);
      rows.forEach((row) => {
        gsap.from(row, {
          opacity: 0,
          y: 32,
          duration: 0.7,
          ease: "power2.out",
          scrollTrigger: { trigger: row, start: "top 85%" },
        });
      });
    }, listRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="work" className="scroll-mt-20 bg-[#FAFAF7] py-20 dark:bg-ink sm:py-section">
      <Container>
        <h2 className="sr-only font-display">Work</h2>
        <div ref={listRef} className="flex flex-col divide-y divide-border dark:divide-slate-800">
          {projects.map((project, i) => (
            <ProjectCard key={project.slug} project={project} index={i} />
          ))}
        </div>
      </Container>
    </section>
  );
}
