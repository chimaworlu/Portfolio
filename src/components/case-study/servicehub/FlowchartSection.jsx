import { useLayoutEffect, useRef, useState, useCallback } from "react";
import { gsap } from "../../../lib/gsap.js";
import Container from "../../layout/Container.jsx";
import SectionEyebrow from "../SectionEyebrow.jsx";
import flowchartFull from "../../../assets/servicehub/flowchart-full.png";

const FLOWCHART_ASPECT = 4056 / 1100;
const MIN_SCALE = 0.6;
const MAX_SCALE = 3;
const SCALE_STEP = 0.4;

function clampPan(pan, scale, size) {
  if (!size.width || !size.height) return pan;
  const dispWidth = size.height * scale * FLOWCHART_ASPECT;
  const dispHeight = size.height * scale;
  const maxX = Math.max(0, (dispWidth - size.width) / 2);
  const maxY = Math.max(0, (dispHeight - size.height) / 2);
  return {
    x: Math.min(maxX, Math.max(-maxX, pan.x)),
    y: Math.min(maxY, Math.max(-maxY, pan.y)),
  };
}

function FlowchartViewer() {
  const containerRef = useRef(null);
  const [size, setSize] = useState({ width: 0, height: 0 });
  const [scale, setScale] = useState(1);
  const [pan, setPan] = useState({ x: 0, y: 0 });
  const dragState = useRef(null);

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

  const applyScale = useCallback(
    (next) => {
      const clamped = Math.min(MAX_SCALE, Math.max(MIN_SCALE, next));
      setScale(clamped);
      setPan((prev) => clampPan(prev, clamped, size));
    },
    [size]
  );

  function handlePointerDown(e) {
    dragState.current = {
      startX: e.clientX,
      startY: e.clientY,
      startPan: pan,
    };
    e.currentTarget.setPointerCapture(e.pointerId);
  }

  function handlePointerMove(e) {
    if (!dragState.current) return;
    const dx = e.clientX - dragState.current.startX;
    const dy = e.clientY - dragState.current.startY;
    const next = {
      x: dragState.current.startPan.x + dx,
      y: dragState.current.startPan.y + dy,
    };
    setPan(clampPan(next, scale, size));
  }

  function handlePointerUp() {
    dragState.current = null;
  }

  function handleWheel(e) {
    e.preventDefault();
    applyScale(scale + (e.deltaY < 0 ? SCALE_STEP / 2 : -SCALE_STEP / 2));
  }

  return (
    <div className="relative mt-8">
      <div
        ref={containerRef}
        className="relative h-[280px] cursor-grab touch-none overflow-hidden rounded-card border border-border bg-slate-50 active:cursor-grabbing dark:border-slate-700 dark:bg-slate-900 sm:h-[380px] lg:h-[460px]"
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerLeave={handlePointerUp}
        onWheel={handleWheel}
      >
        {size.width > 0 && (
          <img
            src={flowchartFull}
            alt="Full end-to-end user flow: from power outage to booking confirmation"
            draggable={false}
            className="pointer-events-none absolute left-1/2 top-1/2 max-w-none select-none"
            style={{
              height: size.height * scale,
              width: size.height * scale * FLOWCHART_ASPECT,
              transform: `translate(-50%, -50%) translate(${pan.x}px, ${pan.y}px)`,
            }}
          />
        )}
      </div>

      <div className="absolute bottom-3 right-3 flex flex-col overflow-hidden rounded-md border border-border bg-white shadow-sm dark:border-slate-700 dark:bg-slate-800">
        <button
          type="button"
          aria-label="Zoom in"
          onClick={() => applyScale(scale + SCALE_STEP)}
          className="flex h-9 w-9 items-center justify-center text-lg font-semibold text-ink hover:bg-slate-100 dark:text-white dark:hover:bg-slate-700"
        >
          +
        </button>
        <div className="h-px w-full bg-border dark:bg-slate-700" />
        <button
          type="button"
          aria-label="Zoom out"
          onClick={() => applyScale(scale - SCALE_STEP)}
          className="flex h-9 w-9 items-center justify-center text-lg font-semibold text-ink hover:bg-slate-100 dark:text-white dark:hover:bg-slate-700"
        >
          &minus;
        </button>
      </div>
    </div>
  );
}

export default function FlowchartSection() {
  const headerRef = useRef(null);
  const viewerRef = useRef(null);

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

      gsap.from(viewerRef.current, {
        opacity: 0,
        y: 24,
        duration: 0.6,
        ease: "power2.out",
        scrollTrigger: { trigger: viewerRef.current, start: "top 85%" },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="mt-section scroll-mt-20">
      <Container>
        <div ref={headerRef}>
          <SectionEyebrow>Flow</SectionEyebrow>
          <h2 className="mt-2 text-3xl font-bold text-ink dark:text-white">
            End-to-End User Flow
          </h2>
          <p className="mt-3 max-w-2xl text-secondary-text dark:text-slate-400">
            From the moment a problem occurs to a confirmed booking. Drag to
            explore, use the plus and minus buttons to zoom.
          </p>
        </div>

        <div ref={viewerRef}>
          <FlowchartViewer />
        </div>
      </Container>
    </section>
  );
}
