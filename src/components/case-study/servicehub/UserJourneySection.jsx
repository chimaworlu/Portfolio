import { useLayoutEffect, useRef, useState } from "react";
import { gsap } from "../../../lib/gsap.js";
import Container from "../../layout/Container.jsx";
import SectionEyebrow from "../SectionEyebrow.jsx";

const stages = [
  {
    name: "Problem Occurs",
    emotion: "Concerned",
    y: 0.55,
    labelPos: "below",
    doing: "Notices problem, decides help is needed",
    pain: "Don't know who to call",
    opp: "Urgency triage",
  },
  {
    name: "Searching for Help",
    emotion: "Frustrated, hopeful",
    y: 0.45,
    labelPos: "below",
    doing: "Asks family, friends, WhatsApp groups",
    pain: "Takes too long, weeks to find someone",
    opp: "Trusted digital discovery",
  },
  {
    name: "Evaluating Options",
    emotion: "Uncertain",
    y: 0.25,
    labelPos: "below",
    doing: "Weighs 2-3 names, no way to verify",
    pain: "No way to verify quality",
    opp: "Verification & reviews",
  },
  {
    name: "Contact & Booking",
    emotion: "Nervous",
    y: 0.5,
    labelPos: "above",
    doing: "Calls or texts, explains problem",
    pain: "Vague timing, they said later",
    opp: "Upfront pricing & availability",
  },
  {
    name: "Waiting for Service",
    emotion: "Anxious, powerless",
    y: 0.05,
    labelPos: "below",
    doing: "Keeps phone nearby, waits, may miss classes",
    pain: "No arrival updates, number may not connect",
    opp: "Real-time ETA tracking",
  },
  {
    name: "Service Delivery",
    emotion: "Relieved",
    y: 0.95,
    labelPos: "above",
    doing: "Provider arrives (or doesn't), pays",
    pain: "Fear of being overcharged or disrespected",
    opp: "Behavior-focused ratings",
  },
];

const rowLabelClass =
  "flex w-6 flex-shrink-0 items-center justify-center text-[10px] font-semibold uppercase tracking-wide text-secondary-text dark:text-slate-400";

function EmotionChart() {
  const containerRef = useRef(null);
  const polylineRef = useRef(null);
  const dotRefs = useRef([]);
  const labelRefs = useRef([]);
  const [size, setSize] = useState({ width: 0, height: 0 });

  useLayoutEffect(() => {
    function measure() {
      if (!containerRef.current) return;
      setSize({
        width: containerRef.current.clientWidth,
        height: containerRef.current.clientHeight,
      });
    }
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  // Real pixel coordinates (not a stretched viewBox) so the stroke and its
  // dash pattern render correctly regardless of the chart's aspect ratio.
  const points = stages.map((stage, i) => ({
    x: (i / (stages.length - 1)) * size.width,
    y: (1 - stage.y) * size.height,
  }));
  const polylinePoints = points.map((p) => `${p.x},${p.y}`).join(" ");

  useLayoutEffect(() => {
    if (!size.width || !size.height) return;

    const ctx = gsap.context(() => {
      const length = polylineRef.current.getTotalLength();
      gsap.set(polylineRef.current, {
        strokeDasharray: length,
        strokeDashoffset: length,
      });

      const tl = gsap.timeline({
        scrollTrigger: { trigger: containerRef.current, start: "top 80%" },
      });

      tl.to(polylineRef.current, {
        strokeDashoffset: 0,
        duration: 1.8,
        ease: "power2.inOut",
      })
        .from(
          dotRefs.current,
          {
            scale: 0,
            opacity: 0,
            duration: 0.35,
            stagger: 0.22,
            ease: "back.out(2)",
          },
          "<+0.1"
        )
        .from(
          labelRefs.current,
          {
            opacity: 0,
            y: 6,
            duration: 0.35,
            stagger: 0.22,
          },
          "<+0.05"
        );
    }, containerRef);

    return () => ctx.revert();
  }, [size.width, size.height]);

  return (
    <div ref={containerRef} className="relative mt-8 h-44 sm:h-48">
      {size.width > 0 && (
        <svg
          width={size.width}
          height={size.height}
          viewBox={`0 0 ${size.width} ${size.height}`}
          className="absolute inset-0 overflow-visible"
        >
          <polyline
            ref={polylineRef}
            points={polylinePoints}
            fill="none"
            className="stroke-brand-blue dark:stroke-blue-400"
            strokeWidth="1.5"
          />
        </svg>
      )}

      {points.map((p, i) => (
        <span
          key={i}
          ref={(el) => (dotRefs.current[i] = el)}
          className="absolute h-2 w-2 rounded-full bg-brand-blue dark:bg-blue-400"
          style={{
            left: `${p.x}px`,
            top: `${p.y}px`,
            transform: "translate(-50%, -50%)",
          }}
        />
      ))}

      {stages.map((stage, i) => (
        <span
          key={stage.name}
          ref={(el) => (labelRefs.current[i] = el)}
          className={`absolute whitespace-nowrap text-xs font-medium text-ink dark:text-white ${
            stage.labelPos === "above" ? "pb-2" : "pt-2"
          }`}
          style={{
            left: `${points[i].x}px`,
            top: `${points[i].y}px`,
            transform: `translateX(-50%) translateY(${
              stage.labelPos === "above" ? "-100%" : "0"
            })`,
          }}
        >
          {stage.emotion}
        </span>
      ))}
    </div>
  );
}

export default function UserJourneySection() {
  const headerRef = useRef(null);
  const mapRef = useRef(null);

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

      gsap.from(mapRef.current, {
        opacity: 0,
        y: 24,
        duration: 0.6,
        ease: "power2.out",
        scrollTrigger: { trigger: mapRef.current, start: "top 85%" },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="mt-section scroll-mt-20">
      <Container>
        <div ref={headerRef}>
          <SectionEyebrow>Define</SectionEyebrow>
          <h2 className="mt-2 text-3xl font-bold text-ink dark:text-white">
            Current User Journey
          </h2>
          <p className="mt-3 max-w-2xl text-secondary-text dark:text-slate-400">
            Connecting pain points to product opportunities.
          </p>
        </div>

        <div ref={mapRef} className="mt-10">
          <div className="grid grid-cols-6 gap-2 sm:gap-3">
            {stages.map((stage) => (
              <p
                key={stage.name}
                className="text-center text-[9px] font-semibold uppercase tracking-wide text-secondary-text dark:text-slate-400 sm:text-[11px]"
              >
                {stage.name}
              </p>
            ))}
          </div>

          <EmotionChart />

          {[
            { key: "doing", label: "Doing" },
            { key: "pain", label: "Pain" },
          ].map((row) => (
            <div key={row.key} className="mt-8 flex items-stretch gap-3 sm:gap-4">
              <span className={rowLabelClass} style={{ writingMode: "vertical-rl" }}>
                {row.label}
              </span>
              <div className="grid flex-1 grid-cols-6 gap-3 sm:gap-4">
                {stages.map((stage) => (
                  <div
                    key={stage.name}
                    className="rounded-md border border-border p-3 text-[11px] text-secondary-text dark:border-slate-700 dark:text-slate-400 sm:p-4 sm:text-xs"
                  >
                    {stage[row.key]}
                  </div>
                ))}
              </div>
            </div>
          ))}

          <div className="mt-8 flex items-center gap-3 sm:gap-4">
            <span className={rowLabelClass} style={{ writingMode: "vertical-rl" }}>
              Opp
            </span>
            <div className="flex flex-1 flex-wrap justify-between gap-2">
              {stages.map((stage) => (
                <div
                  key={stage.name}
                  className="whitespace-nowrap rounded-full bg-brand-blue-tint px-3 py-2 text-[10px] font-medium text-brand-blue dark:bg-blue-500/15 dark:text-blue-300 sm:px-4 sm:text-xs"
                >
                  {stage.opp}
                </div>
              ))}
            </div>
          </div>

          <p className="mt-6 text-xs text-secondary-text dark:text-slate-400">
            Lowest point: the wait, the stage no current alternative
            addresses.
          </p>
        </div>
      </Container>
    </section>
  );
}
