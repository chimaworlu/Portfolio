import { gsap } from "./gsap.js";

// Animates a number from 0 to `target` once the element scrolls into view.
// `onUpdate` receives the current rounded value on every tick, so callers
// can drive both the displayed number and any paired visual (e.g. a fill bar).
export function animateCountUp(el, target, { onUpdate, duration = 1.6, delay = 0 } = {}) {
  const proxy = { val: 0 };
  return gsap.to(proxy, {
    val: target,
    duration,
    delay,
    ease: "power2.out",
    scrollTrigger: {
      trigger: el,
      start: "top 85%",
      once: true,
    },
    onUpdate: () => onUpdate(Math.round(proxy.val)),
  });
}
