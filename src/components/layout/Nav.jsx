import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { gsap } from "../../lib/gsap.js";
import Container from "./Container.jsx";
import {
  GitHubIcon,
  LinkedInIcon,
  BehanceIcon,
  XIcon,
  MediumIcon,
} from "../shared/SocialIcons.jsx";

const socials = [
  { label: "GitHub", href: "https://github.com/chimaworlu", Icon: GitHubIcon },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/chima-worlu", Icon: LinkedInIcon },
  { label: "Behance", href: "https://www.behance.net/chimaworlu07", Icon: BehanceIcon },
  { label: "X", href: "https://x.com/chimaworlu_", Icon: XIcon },
  { label: "Medium", href: "https://medium.com/@chimasolomon00", Icon: MediumIcon },
];

const HEADER_OFFSET = 80;

function smoothScrollToHash(event, href) {
  event.preventDefault();
  const targetY =
    href === "#"
      ? 0
      : document.querySelector(href)?.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET;

  if (targetY === undefined) return;

  const distance = Math.abs(window.scrollY - targetY);
  const duration = Math.min(1.2, Math.max(0.5, distance / 1400));

  gsap.to(window, {
    duration,
    scrollTo: { y: targetY },
    ease: "power2.out",
  });

  window.history.pushState(null, "", href === "#" ? window.location.pathname : href);
}

const homeLinks = [
  { label: "Home", href: "#" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#work" },
  { label: "Contact", href: "#contact" },
];

// TODO: replace with the real resume URL once provided.
const RESUME_URL = "#";

const linkClass =
  "font-sans text-sm font-medium tracking-wide text-ink dark:text-white";

export default function Nav({ variant = "home" }) {
  const isHome = variant === "home";
  const [menuOpen, setMenuOpen] = useState(false);
  const panelRef = useRef(null);

  useLayoutEffect(() => {
    if (panelRef.current) {
      gsap.set(panelRef.current, { autoAlpha: 0, y: -16 });
    }
  }, []);

  useLayoutEffect(() => {
    if (!panelRef.current) return;
    gsap.to(panelRef.current, {
      autoAlpha: menuOpen ? 1 : 0,
      y: menuOpen ? 0 : -16,
      duration: menuOpen ? 0.35 : 0.25,
      ease: menuOpen ? "power2.out" : "power2.in",
    });
  }, [menuOpen]);

  useEffect(() => {
    if (!menuOpen) return;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  function resolveHref(href) {
    if (isHome) return href;
    return href === "#" ? "/" : `/${href}`;
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50 h-20 bg-[#FAFAF7]/70 backdrop-blur-md dark:bg-ink/70">
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

        <nav className="hidden items-center gap-14 md:flex">
          {homeLinks.map((link) =>
            isHome ? (
              <a
                key={link.label}
                href={link.href}
                onClick={(event) => smoothScrollToHash(event, link.href)}
                className={`${linkClass} transition-colors duration-200 hover:text-secondary-text dark:hover:text-slate-400`}
              >
                {link.label}
              </a>
            ) : (
              <Link
                key={link.label}
                to={resolveHref(link.href)}
                className={`${linkClass} transition-colors duration-200 hover:text-secondary-text dark:hover:text-slate-400`}
              >
                {link.label}
              </Link>
            )
          )}
          <a
            href={RESUME_URL}
            target="_blank"
            rel="noreferrer"
            className={`${linkClass} transition-colors duration-200 hover:text-secondary-text dark:hover:text-slate-400`}
          >
            Resume
          </a>
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
      </Container>

      <div
        ref={panelRef}
        aria-hidden={!menuOpen}
        className="absolute inset-x-0 top-20 z-40 h-[calc(100vh-5rem)] bg-[#FAFAF7] dark:bg-ink md:hidden"
      >
        <Container className="flex h-full flex-col py-10">
          <nav className="flex flex-col gap-6">
            {homeLinks.map((link) =>
              isHome ? (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(event) => {
                    smoothScrollToHash(event, link.href);
                    setMenuOpen(false);
                  }}
                  className="font-sans text-2xl font-medium tracking-wide text-ink transition-colors duration-200 hover:text-secondary-text dark:text-white dark:hover:text-slate-400"
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.label}
                  to={resolveHref(link.href)}
                  onClick={() => setMenuOpen(false)}
                  className="font-sans text-2xl font-medium tracking-wide text-ink transition-colors duration-200 hover:text-secondary-text dark:text-white dark:hover:text-slate-400"
                >
                  {link.label}
                </Link>
              )
            )}
            <a
              href={RESUME_URL}
              target="_blank"
              rel="noreferrer"
              onClick={() => setMenuOpen(false)}
              className="font-sans text-2xl font-medium tracking-wide text-ink transition-colors duration-200 hover:text-secondary-text dark:text-white dark:hover:text-slate-400"
            >
              Resume
            </a>
          </nav>

          <div className="mt-8 h-px w-full bg-border dark:bg-slate-700" />

          <div className="mt-6 flex items-center gap-4">
            {socials.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="text-ink transition-colors duration-200 hover:text-secondary-text dark:text-white dark:hover:text-slate-400"
              >
                <Icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </Container>
      </div>
    </header>
  );
}