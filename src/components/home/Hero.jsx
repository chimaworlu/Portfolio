import Container from "../layout/Container.jsx";

const skillTags = ["Product Design", "AI Product Building", "UX Research"];

export default function Hero() {
  return (
    <section className="relative flex min-h-[600px] flex-col justify-center pt-20">
      <Container className="w-full">
        <span className="inline-flex w-fit items-center gap-2 rounded-full bg-brand-blue-tint px-4 py-1.5 text-sm font-medium text-brand-blue">
          <span className="h-1.5 w-1.5 rounded-full bg-brand-blue" />
          Available for work
        </span>

        <h1 className="mt-6 text-6xl font-extrabold tracking-tight text-ink sm:text-7xl">
          Chima Worlu
        </h1>

        <p className="mt-6 max-w-xl text-lg text-secondary-text">
          Product Designer who designs and builds useful digital products.
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          {skillTags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-brand-blue-tint px-4 py-1.5 text-sm font-medium text-brand-blue"
            >
              {tag}
            </span>
          ))}
        </div>
      </Container>

      <div className="mt-16 flex flex-col items-center gap-2 text-secondary-text">
        <span className="text-xs font-medium uppercase tracking-wide">
          Scroll
        </span>
        <span aria-hidden="true">↓</span>
      </div>
    </section>
  );
}
