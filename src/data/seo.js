// Per-route SEO metadata. Descriptions reuse the project's own approved
// outcome line, nothing invented. Keyed by route path so both the React
// hooks and the build-time prerender script read from one source.
export const pageSeo = {
  "/": {
    title: "Chima Worlu | Product Designer & Builder",
    description:
      "Chima Worlu is a product designer who designs and builds useful digital products. Case studies in AI product design, UX research, and product building: UXLens AI, Legible, and ServiceHub.",
  },
  "/work/uxlens-ai": {
    title: "UXLens AI Case Study | Chima Worlu",
    description:
      "UXLens AI reads your research, finds the patterns, and shows you exactly where. A product design case study by Chima Worlu.",
  },
  "/work/legible": {
    title: "Legible Case Study | Chima Worlu",
    description:
      "Legible turns messy handwritten notes into a clean digital book you can actually read. A product design case study by Chima Worlu.",
  },
  "/work/servicehub": {
    title: "ServiceHub Case Study | Chima Worlu",
    description:
      "ServiceHub helps students find and book trusted home service providers. A product design case study by Chima Worlu.",
  },
};
