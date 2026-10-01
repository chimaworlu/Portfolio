import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { gsap } from "../../lib/gsap.js";
import Container from "./Container.jsx";

const homeLinks = [
  { label: "Home", href: "#" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#work" },
  { label: "Contact", href: "#contact" },
];
const caseStudyLinks = [{ label: "Back to Work", href: "/#work" }];

const ctaClass =
  "rounded-full bg-brand-blue px-4 py-2 text-xs font-semibold uppercase tracking-wide text-white";
const linkClass =
  "font-sans text-sm font-medium tracking-wide text-ink dark:text-white";

export default function Nav({ variant = "home" }) {
  const isHome = variant === "home";
  const [menuOpen, setMenuOpen] = useState(false);

  function handleLinkEnter(event) {
    const underline = event.currentTarget.querySelector("[data-underline]");
    gsap.to(underline, { scaleX: 1, duration: 0.35, ease: "power2.out" });
  }

  function handleLinkLeave(event) {
    const underline = event.currentTarget.querySelector("[data-underline]");
    gsap.to(underline, { scaleX: 0, duration: 0.3, ease: "power2.out" });
  }

  useEffect(() => {
    if (!menuOpen) return;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 h-20 bg-[#FAFAF7] dark:bg-ink">
      <Container className="flex h-full items-center justify-between">
        {isHome ? (
          <span className="font-syne text-xl font-bold tracking-tight text-ink dark:text-white">
            cw<span className="text-brand-amber">.</span>
          </span>
        ) : (
          <Link
            to="/"
            className="font-syne text-xl font-bold tracking-tight text-ink dark:text-white"
          >
            cw<span className="text-brand-amber">.</span>
          </Link>
        )}

        {isHome ? (
          <>
            <nav className="hidden items-center gap-14 md:flex">
              {homeLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onMouseEnter={handleLinkEnter}
                  onMouseLeave={handleLinkLeave}
                  className={`relative inline-block ${linkClass} hover:text-secondary-text dark:hover:text-slate-400`}
                >
                  {link.label}
                  <span
                    data-underline
                    aria-hidden="true"
                    className="absolute inset-x-0 -bottom-1 h-[1.5px] origin-left scale-x-0 bg-ink dark:bg-white"
                  />
                </a>
              ))}
            </nav>

            <div className="flex items-center gap-3 md:hidden">
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
        <div className="absolute inset-x-0 top-20 z-40 h-[calc(100vh-5rem)] bg-[#FAFAF7] dark:bg-ink md:hidden">
          <Container className="flex h-full flex-col py-10">
            <nav className="flex flex-col gap-6">
              {homeLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="font-sans text-2xl font-medium tracking-wide text-ink hover:text-secondary-text dark:text-white dark:hover:text-slate-400"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </Container>
        </div>
      )}
    </header>
  );
}