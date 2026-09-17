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
