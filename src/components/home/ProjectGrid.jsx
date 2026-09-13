import { useLayoutEffect, useRef } from "react";
import { gsap } from "../../lib/gsap.js";
import Container from "../layout/Container.jsx";
import ProjectCard from "./ProjectCard.jsx";
import { projects } from "../../data/projects.js";

export default function ProjectGrid() {
  const listRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray(listRef.current.children);
      cards.forEach((card) => {
        gsap.from(card, {
          opacity: 0,
          y: 24,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
          },
        });
      });
    }, listRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="work" className="mt-section scroll-mt-20">
      <Container>
        <h2 className="sr-only">Work</h2>
        <div ref={listRef} className="flex flex-col gap-20">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </Container>
    </section>
  );
}
