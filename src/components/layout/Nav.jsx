import { Link } from "react-router-dom";
import Container from "./Container.jsx";

const homeLinks = [
  { label: "Work", href: "/#work" },
  { label: "Experience", href: "/#experience" },
  { label: "About", href: "/#about" },
  { label: "Contact", href: "/#contact" },
];

const caseStudyLinks = [
  { label: "Back to Work", href: "/#work" },
  { label: "Contact", href: "/#contact" },
];

export default function Nav({ variant = "home" }) {
  const links = variant === "case-study" ? caseStudyLinks : homeLinks;

  return (
    <header className="fixed inset-x-0 top-0 z-50 h-20 border-b border-border bg-white">
      <Container className="flex h-full items-center justify-between">
        <Link to="/" className="text-lg font-semibold tracking-tight">
          <span className="text-brand-blue">Chima</span>{" "}
          <span className="text-ink">Worlu</span>
        </Link>

        <nav className="flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-secondary-text hover:text-ink"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </Container>
    </header>
  );
}
