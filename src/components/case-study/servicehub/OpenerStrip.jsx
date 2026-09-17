import { useLayoutEffect, useRef } from "react";
import { gsap } from "../../../lib/gsap.js";
import searchResults from "../../../assets/servicehub/opener-search-results.png";
import searchTyping from "../../../assets/servicehub/opener-search-typing.png";
import providerProfile from "../../../assets/servicehub/opener-provider-profile.png";
import bookService from "../../../assets/servicehub/opener-book-service.png";
import bookingConfirmed from "../../../assets/servicehub/opener-booking-confirmed.png";

const screens = [
  { src: searchResults, alt: "Search results screen showing available providers" },
  { src: searchTyping, alt: "Search screen with keyboard open" },
  { src: providerProfile, alt: "Provider profile screen for Obi Daniel" },
  { src: bookService, alt: "Book service screen" },
  { src: bookingConfirmed, alt: "Booking confirmed screen" },
];

export default function OpenerStrip() {
  const trackRef = useRef(null);
  const tweenRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // The track renders two identical copies of the screens back to back;
      // shifting exactly -50% loops seamlessly with no visible reset.
      tweenRef.current = gsap.to(trackRef.current, {
        xPercent: -50,
        duration: 24,
        ease: "none",
        repeat: -1,
      });
    }, trackRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      className="overflow-hidden"
      onMouseEnter={() => tweenRef.current?.pause()}
      onMouseLeave={() => tweenRef.current?.play()}
    >
      <div ref={trackRef} className="flex w-max items-start gap-6">
        {[...screens, ...screens].map((screen, i) => (
          <img
            key={i}
            src={screen.src}
            alt={screen.alt}
            loading={i < screens.length ? "eager" : "lazy"}
            className="h-96 w-56 flex-shrink-0 object-contain sm:h-[28rem] sm:w-64"
          />
        ))}
      </div>
    </div>
  );
}
