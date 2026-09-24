import { useLayoutEffect, useRef } from "react";
import { gsap } from "../../../lib/gsap.js";
import Container from "../../layout/Container.jsx";
import SectionEyebrow from "../SectionEyebrow.jsx";

function LightbulbIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M9 18h6M10 22h4M12 2a7 7 0 0 0-4 12.7c.6.5 1 1.3 1 2.1V17h6v-.2c0-.8.4-1.6 1-2.1A7 7 0 0 0 12 2Z" />
    </svg>
  );
}

function SpeakerIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M11 5 6 9H2v6h4l5 4Z" />
      <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07" />
    </svg>
  );
}

function EyeIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7Z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

function ChatIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  );
}

const quadrants = [
  {
    title: "Think & Feel",
    Icon: LightbulbIcon,
    items: [
      "Is this person legit?",
      "What if they don't show up?",
      "I don't want to waste time waiting",
      "Concerned about being taken advantage of as a student",
      "Worried about being disrespected",
    ],
  },
  {
    title: "Hear",
    Icon: SpeakerIcon,
    items: [
      "“I used this guy last month, he was okay”",
      "“Call your uncle, he knows someone”",
      "“I'll come later” (from service providers)",
      "Stories of bad experiences from roommates",
    ],
  },
  {
    title: "See",
    Icon: EyeIcon,
    items: [
      "People waiting days or weeks for services",
      "Roommates coordinating about repairs",
      "60% of peers using recommendations",
      "Friends getting scammed or overcharged",
    ],
  },
  {
    title: "Say & Do",
    Icon: ChatIcon,
    items: [
      "“There's no site to look for, at least in my area”",
      "“Do you know a good plumber?”",
      "“Can you send me their number?”",
      "Ask family for recommendations",
      "Wait weeks to find someone reliable",
    ],
  },
];

export default function EmpathyMapSection() {
  const headerRef = useRef(null);
  const gridRef = useRef(null);

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

      gsap.from(gsap.utils.toArray(gridRef.current.children), {
        opacity: 0,
        y: 24,
        duration: 0.6,
        ease: "power2.out",
        stagger: 0.1,
        scrollTrigger: { trigger: gridRef.current, start: "top 85%" },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="mt-section scroll-mt-20">
      <Container>
        <div ref={headerRef}>
          <SectionEyebrow>Understanding Our Users</SectionEyebrow>
          <h2 className="mt-2 text-3xl font-bold text-ink dark:text-white">
            Empathy Map
          </h2>
          <p className="mt-3 max-w-2xl text-secondary-text dark:text-slate-400">
            Mapping what students think, feel, hear, say, see, and do when
            searching for a service provider.
          </p>
        </div>

        <div
          ref={gridRef}
          className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2"
        >
          {quadrants.map(({ title, Icon, items }) => (
            <div
              key={title}
              className="rounded-card border border-border p-6 dark:border-slate-700"
            >
              <div className="flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-blue-tint text-brand-blue dark:bg-blue-500/15 dark:text-blue-300">
                  <Icon className="h-4 w-4" />
                </span>
                <p className="font-semibold uppercase tracking-wide text-ink dark:text-white">
                  {title}
                </p>
              </div>

              <ul className="mt-4 space-y-2">
                {items.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-sm text-secondary-text dark:text-slate-400"
                  >
                    <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-brand-blue" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
