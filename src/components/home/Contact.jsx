import Container from "../layout/Container.jsx";

const socials = ["GH", "LI", "BE", "X", "MD"];

export default function Contact() {
  return (
    <section
      id="contact"
      className="mt-section scroll-mt-20 bg-brand-blue-tint py-24"
    >
      <Container className="flex flex-col items-center gap-8 text-center">
        <p className="text-2xl font-bold text-brand-blue sm:text-3xl">
          [EMAIL PLACEHOLDER]
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3">
          {socials.map((label) => (
            <span
              key={label}
              className="rounded-full bg-white px-3 py-1.5 text-xs font-semibold text-brand-blue"
            >
              {label}
            </span>
          ))}
        </div>

        <p className="text-sm text-secondary-text">
          © 2026 [NAME PLACEHOLDER]
        </p>
      </Container>
    </section>
  );
}
