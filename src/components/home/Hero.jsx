import { useEffect, useLayoutEffect, useRef } from "react";
import { gsap } from "../../lib/gsap.js";
import Container from "../layout/Container.jsx";

export default function Hero() {
  const nameRef = useRef(null);
  const taglineRef = useRef(null);
  const scrollCueRef = useRef(null);
  const arrowRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from([nameRef.current, taglineRef.current], {
        opacity: 0,
        y: 24,
        duration: 0.7,
        ease: "power2.out",
        stagger: 0.12,
      });
    });

    return () => ctx.revert();
  }, []);

  // Scroll cue: bounces at the bottom of the hero while at the top of the
  // page, fades out once the user scrolls away, and reappears (bounce
  // resumed) if they scroll back up to the hero.
  useEffect(() => {
    let isVisible = true;
    const bounceTween = gsap.to(arrowRef.current, {
      y: 6,
      duration: 1.8,
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

  return (
    <section
      className="relative flex min-h-screen flex-col items-center justify-center bg-[#FAFAF7] pt-20 text-center dark:bg-ink"
      style={{ minHeight: "100svh" }}
    >
      <Container className="flex w-full flex-col items-center">
        <h1
          ref={nameRef}
          className="w-full font-display uppercase leading-[0.9] tracking-tight text-ink text-[clamp(3rem,15vw,10.5rem)] dark:text-white"
        >
          Chima Worlu
        </h1>

        <p
          ref={taglineRef}
          className="mt-8 max-w-xl font-poppins text-xl leading-relaxed text-secondary-text dark:text-slate-400"
        >
          Hey, I'm Chima. I design products, then I build them.
        </p>
      </Container>

      <div
        ref={scrollCueRef}
        className="pointer-events-none absolute inset-x-0 bottom-6 select-none sm:bottom-10"
      >
        <Container className="flex items-center gap-3">
          <span className="font-sans text-sm font-medium tracking-wide text-ink dark:text-white">
            Scroll to Explore
          </span>
          <span
            ref={arrowRef}
            className="flex h-8 w-8 items-center justify-center rounded-md border border-ink/30 text-ink dark:border-white/30 dark:text-white sm:h-9 sm:w-9"
          >
            <svg
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
          </span>
        </Container>
      </div>
    </section>
  );
}
