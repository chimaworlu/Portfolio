import { useLayoutEffect, useRef } from "react";
import { gsap } from "../../lib/gsap.js";
import Container from "../layout/Container.jsx";

export default function About() {
  const headingRef = useRef(null);
  const paraRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from([headingRef.current, paraRef.current], {
        opacity: 0,
        y: 24,
        duration: 0.6,
        ease: "power2.out",
        stagger: 0.08,
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 85%",
        },
      });
    }, headingRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="about" className="mt-20 scroll-mt-20 sm:mt-section">
      <Container>
        <h2 ref={headingRef} className="text-3xl font-bold text-ink dark:text-white">
          About
        </h2>

        <p
          ref={paraRef}
          className="mx-auto mt-10 max-w-2xl text-center text-secondary-text dark:text-slate-400"
        >
          I&apos;m a Product Designer who spends time across design, research,
          and building, moving between Figma and code depending on what a
          project needs. I work closely with AI throughout, not as a
          shortcut, but as part of how I actually design and ship. I care
          about products that solve real problems, sometimes ones I&apos;ve
          lived myself, sometimes ones I&apos;ve watched people close to me
          struggle with. Currently based in Lagos, Nigeria, and open to new
          opportunities.
        </p>
      </Container>
    </section>
  );
}
