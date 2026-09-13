import { useLayoutEffect, useRef, useState } from "react";
import { gsap } from "../../lib/gsap.js";
import Container from "../layout/Container.jsx";
import {
  GitHubIcon,
  LinkedInIcon,
  BehanceIcon,
  XIcon,
  MediumIcon,
} from "../shared/SocialIcons.jsx";

const email = "chimasolomon00@gmail.com";

const socials = [
  { label: "GitHub", href: "https://github.com/chimaworlu", Icon: GitHubIcon },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/chima-worlu", Icon: LinkedInIcon },
  { label: "Behance", href: "https://www.behance.net/chimaworlu07", Icon: BehanceIcon },
  { label: "X", href: "https://x.com/chimaworlu_", Icon: XIcon },
  { label: "Medium", href: "https://medium.com/@chimasolomon00", Icon: MediumIcon },
];

export default function Contact() {
  const contentRef = useRef(null);
  const [copied, setCopied] = useState(false);

  async function handleEmailClick(event) {
    event.preventDefault();
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard access unavailable; nothing further to fall back to here.
    }
  }

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(gsap.utils.toArray(contentRef.current.children), {
        opacity: 0,
        y: 24,
        duration: 0.6,
        ease: "power2.out",
        stagger: 0.1,
        scrollTrigger: {
          trigger: contentRef.current,
          start: "top 85%",
        },
      });
    }, contentRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="contact"
      className="mt-section scroll-mt-20 bg-brand-blue-tint py-24 dark:bg-blue-500/10"
    >
      <Container
        ref={contentRef}
        className="flex flex-col items-center gap-8 text-center"
      >
        <div className="relative">
          <a
            href={`mailto:${email}`}
            onClick={handleEmailClick}
            className="text-2xl font-bold text-brand-blue sm:text-3xl dark:text-blue-300"
          >
            {email}
          </a>
          <span
            className={`pointer-events-none absolute inset-x-0 -bottom-6 text-xs font-medium text-secondary-text transition-opacity duration-300 dark:text-slate-400 ${
              copied ? "opacity-100" : "opacity-0"
            }`}
          >
            Copied to clipboard
          </span>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3">
          {socials.map(({ label, href, Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={label}
              className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white text-brand-blue transition-colors hover:bg-brand-blue-tint dark:bg-slate-800 dark:text-blue-300 dark:hover:bg-slate-700"
            >
              <Icon className="h-4 w-4" />
            </a>
          ))}
        </div>

        <p className="text-sm text-secondary-text dark:text-slate-400">
          © 2026 Chima Worlu
        </p>
      </Container>
    </section>
  );
}
