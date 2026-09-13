import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { gsap } from "../../lib/gsap.js";
import Container from "./Container.jsx";
import ThemeToggle from "../shared/ThemeToggle.jsx";

const homeLinks = ["Work", "Experience", "About", "Contact"];
const caseStudyLinks = [{ label: "Back to Work", href: "/#work" }];

const ctaClass =
  "rounded-full bg-brand-blue px-4 py-2 text-xs font-semibold uppercase tracking-wide text-white";
const linkClass = "text-sm font-normal text-secondary-text dark:text-slate-400";

export default function Nav({ variant = "home" }) {
  const isHome = variant === "home";
  const resumeRef = useRef(null);

  // Soft pulsing glow to draw attention to the primary CTA.
  useEffect(() => {
    if (!resumeRef.current) return;

    const tween = gsap.fromTo(
      resumeRef.current,
      { boxShadow: "0 0 0px 0px rgba(37, 99, 235, 0.45)" },
      {
        boxShadow: "0 0 18px 4px rgba(37, 99, 235, 0.45)",
        duration: 1.6,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      }
    );

    return () => tween.kill();
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 h-20 bg-white dark:bg-ink">
      <Container className="flex h-full items-center justify-between">
        {isHome ? (
          <span className="font-syne text-xl font-bold tracking-tight text-ink dark:text-white">
            cw<span className="text-brand-blue">.</span>
          </span>
        ) : (
          <Link
            to="/"
            className="font-syne text-xl font-bold tracking-tight text-ink dark:text-white"
          >
            cw<span className="text-brand-blue">.</span>
          </Link>
        )}

        <nav className="flex items-center gap-8">
          {isHome ? (
            <>
              {homeLinks.map((label) => (
                <span key={label} className={linkClass}>
                  {label}
                </span>
              ))}
              <ThemeToggle />
              <span ref={resumeRef} className={ctaClass}>
                Resume
              </span>
            </>
          ) : (
            <>
              {caseStudyLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className={`${linkClass} hover:text-ink dark:hover:text-white`}
                >
                  {link.label}
                </a>
              ))}
              <a href="/#contact" className={ctaClass}>
                Contact
              </a>
            </>
          )}
        </nav>
      </Container>
    </header>
  );
}
