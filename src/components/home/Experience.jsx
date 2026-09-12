import Container from "../layout/Container.jsx";

const experience = [
  {
    company: "[COMPANY NAME]",
    role: "[ROLE TITLE]",
    dates: "[YYYY] - [YYYY]",
  },
  {
    company: "EverTry",
    role: "[ROLE TITLE - dual Design + PM role, wording pending]",
    dates: "[YYYY] - [YYYY]",
  },
  {
    company: "[COMPANY NAME]",
    role: "[ROLE TITLE]",
    dates: "[YYYY] - [YYYY]",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="mt-section scroll-mt-20">
      <Container>
        <h2 className="text-3xl font-bold text-ink">Experience</h2>

        <div className="mt-10 border-t border-border">
          {experience.map((row) => (
            <div
              key={row.company}
              className="flex items-start justify-between gap-6 border-b border-border py-6"
            >
              <div>
                <p className="font-semibold text-ink">{row.company}</p>
                <p className="mt-1 text-sm text-secondary-text">{row.role}</p>
              </div>
              <p className="whitespace-nowrap text-sm text-secondary-text">
                {row.dates}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
