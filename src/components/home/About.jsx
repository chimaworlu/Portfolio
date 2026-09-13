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
    <section id="about" className="mt-section scroll-mt-20">
      <Container>
        <h2 ref={headingRef} className="text-3xl font-bold text-ink dark:text-white">
          About
        </h2>

        <p
          ref={paraRef}
          className="mx-auto mt-10 max-w-2xl text-center text-secondary-text dark:text-slate-400"
        >
          [ABOUT PARAGRAPH - PLACEHOLDER, NOT FINAL]
        </p>
      </Container>
    </section>
  );
}
