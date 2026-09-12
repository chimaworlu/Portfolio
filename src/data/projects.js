// Real, known facts only. Everything content-dependent (outcomes, copy,
// metrics) stays out of this file until it is finalized — see the
// bracketed placeholders rendered in the components instead.
export const projects = [
  {
    slug: "uxlens-ai",
    name: "UXLens AI",
    hasLiveBadge: true,
    caseStudyReady: true,
  },
  {
    slug: "legible",
    name: "Legible",
    hasLiveBadge: true,
    caseStudyReady: true,
  },
  {
    slug: "servicehub",
    name: "ServiceHub",
    hasLiveBadge: false,
    caseStudyReady: false,
  },
];

export function getProjectBySlug(slug) {
  return projects.find((project) => project.slug === slug);
}

export function getNextProject(slug) {
  const index = projects.findIndex((project) => project.slug === slug);
  if (index === -1) return null;
  return projects[(index + 1) % projects.length];
}
