import { useRef } from "react";
import { gsap } from "../../lib/gsap.js";
import { useTheme } from "../../context/ThemeContext.jsx";

const LIGHT_BG = "#FFFFFF";
const DARK_BG = "#0F172A";

function SunIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79Z" />
    </svg>
  );
}

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const circleRef = useRef(null);

  function handleClick(event) {
    const { clientX: x, clientY: y } = event;
    const targetBg = theme === "dark" ? LIGHT_BG : DARK_BG;

    const maxX = Math.max(x, window.innerWidth - x);
    const maxY = Math.max(y, window.innerHeight - y);
    const radius = Math.hypot(maxX, maxY);
    const diameter = radius * 2;

    const circle = circleRef.current;
    circle.style.left = `${x}px`;
    circle.style.top = `${y}px`;
    circle.style.backgroundColor = targetBg;

    gsap.killTweensOf(circle);
    gsap.set(circle, { width: 0, height: 0, opacity: 1 });
    gsap.to(circle, {
      width: diameter,
      height: diameter,
      duration: 0.5,
      ease: "power2.inOut",
      onComplete: () => {
        toggleTheme();
        gsap.to(circle, {
          width: 0,
          height: 0,
          duration: 0.5,
          ease: "power2.inOut",
          onComplete: () => gsap.set(circle, { opacity: 0 }),
        });
      },
    });
  }

  return (
    <>
      <button
        type="button"
        onClick={handleClick}
        aria-label={
          theme === "dark" ? "Switch to light mode" : "Switch to dark mode"
        }
        className="flex h-8 w-8 items-center justify-center rounded-full text-secondary-text hover:text-ink dark:text-slate-400 dark:hover:text-white"
      >
        {theme === "dark" ? <SunIcon /> : <MoonIcon />}
      </button>

      <div
        ref={circleRef}
        aria-hidden="true"
        className="pointer-events-none fixed z-[100] rounded-full opacity-0"
        style={{ transform: "translate(-50%, -50%)" }}
      />
    </>
  );
}
