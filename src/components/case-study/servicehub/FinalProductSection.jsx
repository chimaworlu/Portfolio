import { useLayoutEffect, useRef } from "react";
import { gsap } from "../../../lib/gsap.js";
import Container from "../../layout/Container.jsx";
import SectionEyebrow from "../SectionEyebrow.jsx";
import discover1 from "../../../assets/servicehub/flow-discover-1.png";
import discover2 from "../../../assets/servicehub/flow-discover-2.png";
import discover3 from "../../../assets/servicehub/flow-discover-3.png";
import evaluate1 from "../../../assets/servicehub/flow-evaluate-1.png";
import evaluate2 from "../../../assets/servicehub/flow-evaluate-2.png";
import book1 from "../../../assets/servicehub/flow-book-1.png";
import book2 from "../../../assets/servicehub/flow-book-2.png";
import review1 from "../../../assets/servicehub/flow-review-1.png";
import review2 from "../../../assets/servicehub/flow-review-2.png";
import review3 from "../../../assets/servicehub/flow-review-3.png";

const flows = [
  {
    number: 1,
    title: "Discover",
    subtitle: "Finding available providers nearby",
    images: [
      { src: discover1, alt: "Home screen with Available Now providers" },
      { src: discover2, alt: "Search screen with recent searches" },
      { src: discover3, alt: "Electricians list filtered by availability" },
    ],
  },
  {
    number: 2,
    title: "Evaluate",
    subtitle: "Building confidence before booking",
    images: [
      { src: evaluate1, alt: "Provider profile with trust signals and stats" },
      { src: evaluate2, alt: "Reviews and rating breakdown" },
    ],
  },
  {
    number: 3,
    title: "Book",
    subtitle: "Confirming the request",
    images: [
      { src: book1, alt: "Book Service form with urgent booking mode" },
      { src: book2, alt: "Booking Confirmed screen" },
    ],
  },
  {
    number: 4,
    title: "Review",
    subtitle: "Closing the loop",
    images: [
      { src: review1, alt: "Chat with provider" },
      { src: review2, alt: "My Bookings list" },
      { src: review3, alt: "Rate this service screen" },
    ],
  },
];

function FlowGroup({ flow }) {
  const groupRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(groupRef.current.querySelectorAll("[data-reveal]"), {
        opacity: 0,
        y: 24,
        duration: 0.6,
        ease: "power2.out",
        stagger: 0.08,
        scrollTrigger: { trigger: groupRef.current, start: "top 85%" },
      });
    }, groupRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={groupRef} className="mt-14 first:mt-10">
      <div data-reveal className="flex items-center gap-3">
        <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-brand-blue text-sm font-bold text-white">
          {flow.number}
        </span>
        <h3 className="text-xl font-bold text-ink dark:text-white">
          {flow.title}
        </h3>
        <span className="text-sm text-secondary-text dark:text-slate-400">
          {flow.subtitle}
        </span>
      </div>

      <div data-reveal className="mt-6 flex flex-wrap items-start gap-6">
        {flow.images.map((img, i) => (
          <img
            key={i}
            src={img.src}
            alt={img.alt}
            loading="lazy"
            className="h-72 w-auto object-contain sm:h-80"
          />
        ))}
      </div>
    </div>
  );
}

export default function FinalProductSection() {
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
          <SectionEyebrow>Final Product</SectionEyebrow>
          <h2 className="mt-2 text-3xl font-bold text-ink dark:text-white">
            30+ Screens, Four Core Flows
          </h2>
          <p className="mt-3 max-w-2xl text-secondary-text dark:text-slate-400">
            From discovering a provider to leaving a review, every step
            designed.
          </p>
        </div>

        {flows.map((flow) => (
          <FlowGroup key={flow.title} flow={flow} />
        ))}
      </Container>
    </section>
  );
}
