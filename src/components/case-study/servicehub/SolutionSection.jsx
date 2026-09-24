import { useLayoutEffect, useRef } from "react";
import { gsap } from "../../../lib/gsap.js";
import Container from "../../layout/Container.jsx";
import SectionEyebrow from "../SectionEyebrow.jsx";
import principle1Rating from "../../../assets/servicehub/principle1-rating.png";
import principle1Testimonials from "../../../assets/servicehub/principle1-testimonials.png";
import principle2Electricians from "../../../assets/servicehub/principle2-electricians.png";
import principle2Home from "../../../assets/servicehub/principle2-home.png";
import principle3Chat from "../../../assets/servicehub/principle3-chat.png";
import principle3ProviderProfile from "../../../assets/servicehub/principle3-provider-profile.png";

const principles = [
  {
    number: "1",
    title: "Peer-Verified Trust",
    bullets: [
      "Gain the reliability of a friend's recommendation through reviews exclusively from fellow students.",
      "Every provider is student-verified, ensuring you only let trusted professionals into your living space.",
    ],
    screens: [
      { src: principle1Rating, alt: "Provider rating detail screen" },
      { src: principle1Testimonials, alt: "Student testimonials screen" },
    ],
  },
  {
    number: "2",
    title: "Real-Time Transparency",
    bullets: [
      "No more waiting for callbacks; see exactly who is available to help right now during an emergency.",
      "Make informed decisions quickly with transparent peer ratings and clear pricing structures.",
    ],
    screens: [
      { src: principle2Electricians, alt: "Electricians list screen" },
      { src: principle2Home, alt: "ServiceHub home screen" },
    ],
    reversed: true,
  },
  {
    number: "3",
    title: "Community-Driven Reliability",
    bullets: [
      "Access a network of trusted professionals even if you don't have local personal connections.",
      "High social stakes and student-focused feedback keep service quality high for the entire campus.",
    ],
    screens: [
      { src: principle3Chat, alt: "Chat conversation screen" },
      { src: principle3ProviderProfile, alt: "Provider profile screen" },
    ],
  },
];

function PrincipleRow({ principle }) {
  const rowRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(rowRef.current.querySelectorAll("[data-reveal]"), {
        opacity: 0,
        y: 24,
        duration: 0.6,
        ease: "power2.out",
        stagger: 0.1,
        scrollTrigger: { trigger: rowRef.current, start: "top 85%" },
      });
    }, rowRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={rowRef}
      className={`relative mt-section flex flex-col items-center gap-10 sm:gap-16 lg:flex-row ${
        principle.reversed ? "lg:flex-row-reverse" : ""
      }`}
    >
      <div data-reveal className="relative flex-1">
        <span
          aria-hidden="true"
          className="pointer-events-none absolute -top-20 left-[170px] -z-10 select-none text-[20rem] font-extrabold leading-none text-brand-blue-tint/70 dark:text-slate-800/70"
        >
          {principle.number}
        </span>

        <h3 className="relative text-2xl font-bold text-ink dark:text-white">
          {principle.title}
        </h3>
        <ul className="relative mt-4 max-w-md space-y-3">
          {principle.bullets.map((bullet, i) => (
            <li
              key={i}
              className="flex items-start gap-3 text-secondary-text dark:text-slate-400"
            >
              <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-brand-blue" />
              {bullet}
            </li>
          ))}
        </ul>
      </div>

      <div data-reveal className="relative flex flex-shrink-0 items-center gap-1">
        {principle.screens.map((screen, i) => (
          <img
            key={i}
            src={screen.src}
            alt={screen.alt}
            loading="lazy"
            className="h-96 w-56 object-contain sm:h-[28rem] sm:w-64"
          />
        ))}
      </div>
    </div>
  );
}

export default function SolutionSection() {
  const headerRef = useRef(null);

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
    }, headerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="mt-section scroll-mt-20">
      <Container>
        <div ref={headerRef}>
          <SectionEyebrow>The Solution</SectionEyebrow>
          <h2 className="mt-2 max-w-2xl text-3xl font-bold text-ink dark:text-white">
            Building trust through peer-to-peer accountability
          </h2>
          <p className="mt-3 max-w-xl text-secondary-text dark:text-slate-400">
            Where the process landed: three principles the final product is
            built on.
          </p>
        </div>

        {principles.map((principle) => (
          <PrincipleRow key={principle.number} principle={principle} />
        ))}
      </Container>
    </section>
  );
}
