import { useLayoutEffect, useRef } from "react";
import { gsap } from "../../../lib/gsap.js";
import Container from "../../layout/Container.jsx";
import SectionEyebrow from "../SectionEyebrow.jsx";

function UsersIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
      <circle cx="9" cy="8" r="3" stroke="currentColor" strokeWidth="1.6" />
      <path
        d="M3.5 19c0-3 2.5-5 5.5-5s5.5 2 5.5 5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M15.5 5.5c1.4.3 2.5 1.5 2.5 3s-1.1 2.7-2.5 3"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M17 14c2 .4 3.5 2 3.5 4"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

function RefreshIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
      <path
        d="M4 12a8 8 0 0 1 13.5-5.8M20 12a8 8 0 0 1-13.5 5.8"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M17.2 5.5h2.8v2.8M6.8 18.5H4v-2.8"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function EyeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
      <path
        d="M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="12" r="2.75" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}

const lessons = [
  {
    icon: UsersIcon,
    title: "Provider-Side Research",
    body: "I focused on the student experience. Interviewing plumbers and electricians would surface how they'd actually want to manage urgent requests.",
  },
  {
    icon: RefreshIcon,
    title: "Deeper Iteration",
    body: "More rounds of testing would help simplify the booking flow further, reducing clicks from search to confirmation.",
  },
  {
    icon: EyeIcon,
    title: "Accessibility Audit",
    body: "A full WCAG-standard audit would ensure status badges and category icons remain readable for users with color blindness or low vision.",
  },
];

export default function LessonsLearnedSection() {
  const headerRef = useRef(null);
  const cardsRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(gsap.utils.toArray(headerRef.current.children), {
        opacity: 0,
        y: 24,
        duration: 0.6,
        ease: "power2.out",
        stagger: 0.1,
        scrollTrigger: { trigger: headerRef.current, start: "top 85%" },
      });

      gsap.from(gsap.utils.toArray(cardsRef.current.children), {
        opacity: 0,
        y: 24,
        duration: 0.6,
        ease: "power2.out",
        stagger: 0.1,
        scrollTrigger: { trigger: cardsRef.current, start: "top 85%" },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="mt-section scroll-mt-20">
      <Container>
        <div ref={headerRef}>
          <SectionEyebrow>Lessons Learned</SectionEyebrow>
          <h2 className="mt-2 text-3xl font-bold text-ink dark:text-white">
            What I'd Do Differently
          </h2>
        </div>

        <div
          ref={cardsRef}
          className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3"
        >
          {lessons.map((lesson) => (
            <div
              key={lesson.title}
              className="rounded-card border border-border p-6 dark:border-slate-700"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-dashed border-brand-blue text-brand-blue dark:border-blue-400 dark:text-blue-300">
                <lesson.icon />
              </span>
              <h3 className="mt-4 text-base font-bold text-ink dark:text-white">
                {lesson.title}
              </h3>
              <p className="mt-2 text-sm text-secondary-text dark:text-slate-400">
                {lesson.body}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
