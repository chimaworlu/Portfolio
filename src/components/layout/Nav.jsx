import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Container from "./Container.jsx";
import ThemeToggle from "../shared/ThemeToggle.jsx";

const homeLinks = [
  { label: "Work", href: "#work" },
  { label: "Experience", href: "#experience" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];
const caseStudyLinks = [{ label: "Back to Work", href: "/#work" }];

const ctaClass =
  "rounded-full bg-brand-blue px-4 py-2 text-xs font-semibold uppercase tracking-wide text-white";
const linkClass = "text-sm font-normal text-secondary-text dark:text-slate-400";

export default function Nav({ variant = "home" }) {
  const isHome = variant === "home";
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!menuOpen) return;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

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

        {isHome ? (
          <>
            <nav className="hidden items-center gap-8 md:flex">
              {homeLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className={`${linkClass} hover:text-ink dark:hover:text-white`}
                >
                  {link.label}
                </a>
              ))}
              <ThemeToggle />
              <span className={ctaClass}>Resume</span>
            </nav>

            <div className="flex items-center gap-3 md:hidden">
              <ThemeToggle />
              <button
                type="button"
                onClick={() => setMenuOpen((open) => !open)}
                aria-expanded={menuOpen}
                aria-label={menuOpen ? "Close menu" : "Open menu"}
                className="flex h-10 w-10 items-center justify-center rounded-full text-ink dark:text-white"
              >
                {menuOpen ? (
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M6 6l12 12M18 6L6 18" />
                  </svg>
                ) : (
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M4 7h16M4 12h16M4 17h16" />
                  </svg>
                )}
              </button>
            </div>
          </>
        ) : (
          <nav className="flex items-center gap-8">
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
          </nav>
        )}
      </Container>

      {isHome && menuOpen && (
        <div className="absolute inset-x-0 top-20 z-40 h-[calc(100vh-5rem)] bg-white dark:bg-ink md:hidden">
          <Container className="flex h-full flex-col justify-between py-10">
            <nav className="flex flex-col gap-6">
              {homeLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-3xl font-bold text-ink hover:text-brand-blue dark:text-white dark:hover:text-blue-400"
                >
                  {link.label}
                </a>
              ))}
            </nav>
            <span className={ctaClass}>Resume</span>
          </Container>
        </div>
      )}
    </header>
  );
}