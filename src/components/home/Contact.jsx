import { useLayoutEffect, useRef } from "react";
import { gsap } from "../../lib/gsap.js";
import Container from "../layout/Container.jsx";

const socials = ["GH", "LI", "BE", "X", "MD"];

export default function Contact() {
  const contentRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(gsap.utils.toArray(contentRef.current.children), {
        opacity: 0,
        y: 24,
        duration: 0.6,
        ease: "power2.out",
        stagger: 0.1,
        scrollTrigger: {
          trigger: contentRef.current,
          start: "top 85%",
        },
      });
    }, contentRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="contact"
      className="mt-section scroll-mt-20 bg-brand-blue-tint py-24 dark:bg-blue-500/10"
    >
      <Container
        ref={contentRef}
        className="flex flex-col items-center gap-8 text-center"
      >
        <p className="text-2xl font-bold text-brand-blue sm:text-3xl dark:text-blue-300">
          [EMAIL PLACEHOLDER]
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3">
          {socials.map((label) => (
            <span
              key={label}
              className="rounded-full bg-white px-3 py-1.5 text-xs font-semibold text-brand-blue dark:bg-slate-800 dark:text-blue-300"
            >
              {label}
            </span>
          ))}
        </div>

        <p className="text-sm text-secondary-text dark:text-slate-400">
          © 2026 [NAME PLACEHOLDER]
        </p>
      </Container>
    </section>
  );
}
