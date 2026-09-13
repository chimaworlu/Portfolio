import { useLayoutEffect, useRef } from "react";
import { gsap } from "../../lib/gsap.js";
import Container from "../layout/Container.jsx";

const experience = [
  {
    company: "EverTry",
    role: "Product Designer",
    dates: "May 2026 - Present",
  },
  {
    company: "Squama Marketing",
    role: "UX/UI Designer (Freelance)",
    dates: "March 2026 - Present",
  },
];

export default function Experience() {
  const sectionRef = useRef(null);
  const listRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(sectionRef.current, {
        opacity: 0,
        y: 24,
        duration: 0.6,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
        },
      });

      gsap.from(gsap.utils.toArray(listRef.current.children), {
        opacity: 0,
        y: 20,
        duration: 0.6,
        ease: "power2.out",
        stagger: 0.08,
        scrollTrigger: {
          trigger: listRef.current,
          start: "top 85%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="experience" className="mt-section scroll-mt-20">
      <Container>
        <h2 ref={sectionRef} className="text-3xl font-bold text-ink dark:text-white">
          Experience
        </h2>

        <div ref={listRef} className="mt-10 border-t border-border dark:border-slate-700">
          {experience.map((row, i) => (
            <div
              key={i}
              className="flex items-start justify-between gap-6 border-b border-border py-6 dark:border-slate-700"
            >
              <div>
                <p className="font-semibold text-ink dark:text-white">{row.company}</p>
                <p className="mt-1 text-sm text-secondary-text dark:text-slate-400">{row.role}</p>
              </div>
              <p className="whitespace-nowrap text-sm text-secondary-text dark:text-slate-400">
                {row.dates}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
