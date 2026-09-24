import { useEffect, useLayoutEffect, useRef } from "react";
import { gsap } from "../../lib/gsap.js";
import Container from "../layout/Container.jsx";
import { useTheme } from "../../context/ThemeContext.jsx";

const skillTags = ["Product Design", "AI Product Building", "UX Research"];

const THEME_COLORS = {
  light: {
    name: "#0F172A",
    badgeBg: "#EFF4FE",
    badgeText: "#2563EB",
    paraText: "#475569",
    tagBg: "#EFF4FE",
    tagBgHover: "#E3EAFD",
    tagText: "#2563EB",
  },
  dark: {
    name: "#F8FAFC",
    badgeBg: "rgba(37, 99, 235, 0.15)",
    badgeText: "#93C5FD",
    paraText: "#94A3B8",
    tagBg: "rgba(37, 99, 235, 0.15)",
    tagBgHover: "rgba(37, 99, 235, 0.25)",
    tagText: "#93C5FD",
  },
};

export default function Hero() {
  const { theme } = useTheme();
  const hasRevealedRef = useRef(false);

  const pingRef = useRef(null);
  const scrollCueRef = useRef(null);
  const arrowRef = useRef(null);

  const headingRef = useRef(null);
  const badgeRef = useRef(null);
  const badgeDotRef = useRef(null);
  const paraRef = useRef(null);
  const tagRefs = useRef([]);

  // Assembly load-in: the name sits in a disabled/unstyled form and the
  // badge, tagline, and tags sit as plain gray placeholder boxes. After a
  // brief hold, everything snaps into its finished styled look at once.
  // Runs once on mount, using whichever theme is active at that moment.
  useLayoutEffect(() => {
    const colors = THEME_COLORS[theme];
    const tl = gsap.timeline({
      onComplete: () => {
        hasRevealedRef.current = true;
      },
    });

    tl.to({}, { duration: 0.6 }) // hold on the placeholder state
      .set(headingRef.current, {
        color: colors.name,
        fontWeight: 800,
      })
      .to(
        badgeRef.current,
        {
          backgroundColor: colors.badgeBg,
          color: colors.badgeText,
          duration: 0.3,
          ease: "power1.out",
        },
        "<"
      )
      .to(
        badgeDotRef.current,
        { opacity: 1, duration: 0.25, ease: "power1.out" },
        "<"
      )
      .to(
        paraRef.current,
        { color: colors.paraText, duration: 0.3, ease: "power1.out" },
        "<"
      )
      .to(
        tagRefs.current,
        {
          backgroundColor: colors.tagBg,
          color: colors.tagText,
          duration: 0.3,
          ease: "power1.out",
          stagger: 0.06,
        },
        "<"
      );

    return () => tl.kill();
    // Intentionally empty: the load-in plays once, capturing the theme
    // active at mount. Theme changes afterward are handled below.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Keep the already-revealed hero in sync when the theme is toggled.
  useEffect(() => {
    if (!hasRevealedRef.current) return;
    const colors = THEME_COLORS[theme];

    gsap.to(headingRef.current, { color: colors.name, duration: 0.3 });
    gsap.to(badgeRef.current, {
      backgroundColor: colors.badgeBg,
      color: colors.badgeText,
      duration: 0.3,
    });
    gsap.to(paraRef.current, { color: colors.paraText, duration: 0.3 });
    gsap.to(tagRefs.current, {
      backgroundColor: colors.tagBg,
      color: colors.tagText,
      duration: 0.3,
    });
  }, [theme]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        pingRef.current,
        { scale: 1, opacity: 0.6 },
        {
          scale: 2.4,
          opacity: 0,
          duration: 2,
          repeat: -1,
          ease: "sine.out",
        }
      );
    });

    return () => ctx.revert();
  }, []);

  // Scroll cue: bounces at the bottom of the hero while at the top of the
  // page, fades out once the user scrolls away, and reappears (bounce
  // resumed) if they scroll back up to the hero.
  useEffect(() => {
    let isVisible = true;
    const bounceTween = gsap.to(arrowRef.current, {
      y: 5,
      duration: 1.6,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    function handleScroll() {
      const shouldShow = window.scrollY <= 4;
      if (shouldShow === isVisible) return;
      isVisible = shouldShow;

      gsap.to(scrollCueRef.current, {
        opacity: shouldShow ? 1 : 0,
        duration: 0.6,
        ease: "power1.out",
      });

      if (shouldShow) {
        bounceTween.restart();
      } else {
        bounceTween.pause();
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      bounceTween.kill();
    };
  }, []);

  function handleTagEnter(event) {
    gsap.to(event.currentTarget, {
      backgroundColor: THEME_COLORS[theme].tagBgHover,
      duration: 0.3,
      ease: "power1.out",
    });
  }

  function handleTagLeave(event) {
    gsap.to(event.currentTarget, {
      backgroundColor: THEME_COLORS[theme].tagBg,
      duration: 0.3,
      ease: "power1.out",
    });
  }

  return (
    <section
      className="relative flex min-h-screen flex-col justify-center pt-20"
      style={{ minHeight: "100svh" }}
    >
      <Container className="w-full">
        <span
          ref={badgeRef}
          className="inline-flex w-fit items-center gap-2 rounded-full bg-slate-200 px-4 py-2 text-xs font-medium tracking-wide text-transparent dark:bg-slate-700"
        >
          <span
            ref={badgeDotRef}
            className="relative inline-flex h-1.5 w-1.5 opacity-0"
          >
            <span
              ref={pingRef}
              className="absolute inline-flex h-full w-full rounded-full bg-brand-blue"
            />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-brand-blue" />
          </span>
          Available for work
        </span>

        <h1
          ref={headingRef}
          className="mt-6 font-normal leading-tight tracking-tight text-slate-400 text-[clamp(2.25rem,9vw,4.5rem)]"
        >
          Chima Worlu
        </h1>

        <p
          ref={paraRef}
          className="mt-3 max-w-2xl text-lg leading-relaxed text-slate-400"
        >
          Product Designer who designs and builds useful digital products.
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          {skillTags.map((tag, i) => (
            <span
              key={tag}
              ref={(el) => (tagRefs.current[i] = el)}
              onMouseEnter={handleTagEnter}
              onMouseLeave={handleTagLeave}
              className="rounded-full bg-slate-200 px-4 py-2 text-xs font-light tracking-wide text-transparent dark:bg-slate-700"
            >
              {tag}
            </span>
          ))}
        </div>
      </Container>

      <div
        ref={scrollCueRef}
        className="pointer-events-none absolute inset-x-0 bottom-6 flex select-none flex-col items-center gap-2 text-secondary-text dark:text-slate-400 sm:bottom-10"
      >
        <span className="text-xs font-medium uppercase tracking-wide">
          Scroll
        </span>
        <svg
          ref={arrowRef}
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M5 9l7 7 7-7" />
        </svg>
      </div>
    </section>
  );
}
