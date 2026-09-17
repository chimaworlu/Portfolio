import { useLayoutEffect, useRef } from "react";
import { gsap } from "../../../lib/gsap.js";
import Container from "../../layout/Container.jsx";
import SectionEyebrow from "../SectionEyebrow.jsx";
import avatarChisom from "../../../assets/servicehub/avatar-chisom.png";
import avatarFavour from "../../../assets/servicehub/avatar-favour.png";

function TargetIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="4" />
    </svg>
  );
}

function AlertIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 8v5M12 16h.01" />
    </svg>
  );
}

function ZapIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M13 2 4 14h6l-1 8 9-12h-6z" />
    </svg>
  );
}

function TrendingUpIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="m22 7-8.5 8.5-5-5L2 17M16 7h6v6" />
    </svg>
  );
}

const personas = [
  {
    name: "Chisom Okafor",
    meta: "21, 3rd Year Business Student, Lagos, Nigeria, lives with parents",
    avatar: avatarChisom,
    quote:
      "I usually just ask my mom or friends who they've used before. It works, but I'd still like to see reviews to be sure.",
    description:
      "Lives at home with established family provider networks, but is starting to want independence and confidence in her own decisions.",
    goals: [
      "Find reliable providers quickly",
      "Verify recommendations are actually good",
      "Get fair pricing independently",
      "Build her own trusted network",
    ],
    frustrations: [
      "Can't always rely on parents' contacts",
      "No way to verify beyond word-of-mouth",
      "Wants independence but lacks confidence",
      "Uncertain about fair pricing",
    ],
    behaviors: [
      "Asks family first",
      "Checks friends next",
      "Rarely uses Google or apps",
      "Prioritizes speed and convenience",
    ],
    motivations: [
      "Building independence",
      "Not bothering parents",
      "Gaining decision confidence",
      "Having backup options",
    ],
  },
  {
    name: "Favour Okonkwo",
    meta: "22, Final Year Engineering Student, Ibadan, Nigeria, rents with 2 roommates",
    avatar: avatarFavour,
    quote:
      "They show up late, charge whatever they like, and treat you like you know nothing just because you're a student.",
    description:
      "Moved away from her family support system for university. Faces service providers who arrive late, hide pricing, and treat her dismissively because she's young.",
    goals: [
      "Find trustworthy providers",
      "Know fair pricing before committing",
      "Get providers who respect her",
      "Feel confident and safe",
    ],
    frustrations: [
      "Providers arrive late or don't show",
      "Treated disrespectfully for being young",
      "No way to verify trustworthiness",
      "Fear of being overcharged",
    ],
    behaviors: [
      "Asks roommates first",
      "Posts in WhatsApp groups",
      "Avoids Google search",
      "Waits and stresses before hiring",
    ],
    motivations: [
      "Avoiding being scammed",
      "Not wasting time and money",
      "Feeling respected",
      "Building confidence in adult responsibilities",
    ],
  },
];

const traitGroups = [
  { key: "goals", label: "Goals", Icon: TargetIcon, color: "text-brand-blue dark:text-blue-300" },
  { key: "frustrations", label: "Frustrations", Icon: AlertIcon, color: "text-red-500 dark:text-red-400" },
  { key: "behaviors", label: "Behaviors", Icon: ZapIcon, color: "text-purple-500 dark:text-purple-400" },
  { key: "motivations", label: "Motivations", Icon: TrendingUpIcon, color: "text-green-500 dark:text-green-400" },
];

function PersonaCard({ persona }) {
  const cardRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(cardRef.current, {
        opacity: 0,
        y: 24,
        duration: 0.6,
        ease: "power2.out",
        scrollTrigger: { trigger: cardRef.current, start: "top 85%" },
      });
    }, cardRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={cardRef}
      className="rounded-card border border-border p-6 dark:border-slate-700"
    >
      <div className="flex items-center gap-3">
        <img
          src={persona.avatar}
          alt={persona.name}
          className="h-12 w-12 flex-shrink-0 rounded-full object-cover"
        />
        <div>
          <p className="font-semibold text-ink dark:text-white">
            {persona.name}
          </p>
          <p className="text-xs text-secondary-text dark:text-slate-400">
            {persona.meta}
          </p>
        </div>
      </div>

      <p className="mt-4 rounded-md bg-brand-blue-tint px-4 py-3 text-sm italic text-ink dark:bg-slate-800 dark:text-slate-200">
        &ldquo;{persona.quote}&rdquo;
      </p>

      <p className="mt-4 text-sm text-secondary-text dark:text-slate-400">
        {persona.description}
      </p>

      <div className="mt-6 grid grid-cols-1 gap-6 border-t border-border pt-6 sm:grid-cols-2 dark:border-slate-700">
        {traitGroups.map(({ key, label, Icon, color }) => (
          <div key={key}>
            <div className="flex items-center gap-2">
              <Icon className={`h-4 w-4 ${color}`} />
              <p className="text-sm font-semibold text-ink dark:text-white">
                {label}
              </p>
            </div>
            <ul className="mt-2 space-y-1.5">
              {persona[key].map((item, i) => (
                <li
                  key={i}
                  className="flex items-start gap-2 text-xs text-secondary-text dark:text-slate-400"
                >
                  <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-current" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function PersonasSection() {
  const headerRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(gsap.utils.toArray(headerRef.current.children), {
        opacity: 0,
        y: 24,
        duration: 0.6,
        ease: "power2.out",
        stagger: 0.1,
        scrollTrigger: { trigger: headerRef.current, start: "top 85%" },
      });
    }, headerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="mt-section scroll-mt-20">
      <Container>
        <div ref={headerRef}>
          <SectionEyebrow>Meet the Users</SectionEyebrow>
          <h2 className="mt-2 text-3xl font-bold text-ink dark:text-white">
            Two Students, Two Realities
          </h2>
          <p className="mt-3 max-w-2xl text-secondary-text dark:text-slate-400">
            Research surfaced two distinct segments within the student
            population.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {personas.map((persona) => (
            <PersonaCard key={persona.name} persona={persona} />
          ))}
        </div>
      </Container>
    </section>
  );
}
