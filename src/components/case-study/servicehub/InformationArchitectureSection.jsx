import { useLayoutEffect, useRef } from "react";
import { gsap } from "../../../lib/gsap.js";
import Container from "../../layout/Container.jsx";
import SectionEyebrow from "../SectionEyebrow.jsx";

const branches = [
  {
    title: "Home",
    items: ["Service search", "Available Now", "Most Popular", "Recent Activity", "Categories"],
  },
  {
    title: "Search",
    items: [
      "All services",
      "Filters (availability, distance, price, rating, university)",
      "Search results",
      "Provider profile",
      "Booking form",
      "Confirmation",
    ],
    nested: {
      title: "Provider profile contains:",
      items: ["Overview", "Services", "Pricing", "Availability", "Ratings & reviews"],
    },
  },
  {
    title: "Bookings",
    items: ["Upcoming", "Past", "Cancelled", "Booking details", "Chat with provider", "Leave review"],
  },
  {
    title: "Profile",
    items: ["Settings", "Saved providers", "My reviews", "Help & support"],
  },
];

export default function InformationArchitectureSection() {
  const headerRef = useRef(null);
  const treeRef = useRef(null);

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

      gsap.from(treeRef.current, {
        opacity: 0,
        y: 24,
        duration: 0.6,
        ease: "power2.out",
        scrollTrigger: { trigger: treeRef.current, start: "top 85%" },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="mt-section scroll-mt-20">
      <Container>
        <div ref={headerRef}>
          <SectionEyebrow>Structure</SectionEyebrow>
          <h2 className="mt-2 text-3xl font-bold text-ink dark:text-white">
            Information Architecture
          </h2>
          <p className="mt-3 max-w-2xl text-secondary-text dark:text-slate-400">
            Organizing the platform around how students actually search,
            book, and review.
          </p>
        </div>

        <div ref={treeRef} className="mt-10 overflow-x-auto">
          <div className="flex min-w-[800px] flex-col items-center">
            <span className="rounded-full bg-brand-blue px-6 py-2 text-sm font-semibold text-white">
              ServiceHub App
            </span>
            <div className="h-6 w-px bg-border dark:bg-slate-700" />
            <span className="rounded-full border border-brand-blue px-5 py-1.5 text-sm font-medium text-brand-blue dark:border-blue-400 dark:text-blue-300">
              Onboarding: Sign up / Log in
            </span>

            <div className="relative mt-6 w-full">
              <div className="absolute inset-x-[12.5%] top-0 border-t border-border dark:border-slate-700" />
              <div className="grid grid-cols-4 gap-4">
                {branches.map((branch) => (
                  <div key={branch.title} className="flex flex-col items-center">
                    <div className="h-6 w-px bg-border dark:bg-slate-700" />
                    <div className="w-full rounded-card border-2 border-brand-blue p-4 dark:border-blue-400">
                      <p className="text-sm font-bold uppercase tracking-wide text-brand-blue dark:text-blue-300">
                        {branch.title}
                      </p>
                      <ul className="mt-2 space-y-1.5">
                        {branch.items.map((item, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-2 text-xs text-secondary-text dark:text-slate-400"
                          >
                            <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-brand-blue dark:bg-blue-400" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {branch.nested && (
                      <>
                        <div className="h-4 w-px bg-border dark:bg-slate-700" />
                        <div className="w-full rounded-card border border-border p-4 dark:border-slate-700">
                          <p className="text-xs font-semibold text-ink dark:text-white">
                            {branch.nested.title}
                          </p>
                          <ul className="mt-2 space-y-1.5">
                            {branch.nested.items.map((item, i) => (
                              <li
                                key={i}
                                className="flex items-start gap-2 text-xs text-secondary-text dark:text-slate-400"
                              >
                                <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-brand-blue dark:bg-blue-400" />
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <p className="mt-6 text-xs text-secondary-text dark:text-slate-400">
              Four top-level destinations; booking lives inside Search,
              records live in Bookings.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
