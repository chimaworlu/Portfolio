// Real, known facts only. Everything content-dependent (outcomes, copy,
// metrics) stays out of this file until it is finalized, see the
// bracketed placeholders rendered in the components instead.
import uxlensScreenUpload from "../assets/uxlens-ai/screen-upload.png";
import uxlensScreenInsights from "../assets/uxlens-ai/screen-insights.png";
import uxlensScreenChat from "../assets/uxlens-ai/screen-chat.png";
import uxlensGridImage from "../assets/projects-grid/uxlens-ai.png";
import legibleGridImage from "../assets/projects-grid/legible.png";
import servicehubGridImage from "../assets/projects-grid/servicehub.png";

const SERVICEHUB_FIGMA_URL =
  "https://www.figma.com/design/qenncamO8BWYaKMJDo8RvT/Home-Service-App?node-id=108-4&t=AP0MDwpCSSvJFdYi-1";

export const projects = [
  {
    slug: "uxlens-ai",
    name: "UXLens AI",
    hasLiveBadge: true,
    caseStudyReady: true,
    href: "/work/uxlens-ai",
    outcome: "Reads your research, finds the patterns, shows you exactly where.",
    gridImage: uxlensGridImage,
    cardColor: "#3457D5",
    projectType: "Full-Stack AI Product",
    link: { label: "View Live", href: "#" },
    positioning:
      "AI-powered research synthesis, every insight traceable back to its source.",
    role: "Design to MVP, end to end",
    timeline: "2 months",
    tools: "Figma, Next.js, Claude Code",
    contextHeadline:
      "Fifty-four responses. No way to know what they actually meant.",
    contextParagraph:
      "I ran a survey for ServiceHub and got fifty-four responses back. Google Forms showed me the answers, but not what they meant together, or which response said what. So I read all fifty-four by hand. UXLens AI exists so nobody has to.",
    roleOwnership:
      "I owned this project end to end. I defined the core idea and every requirement, working closely with AI to develop the specs, reviewing and approving each decision. Every screen was designed in Figma first.",
    decisionsHeadline: "The Decisions That Shaped the Build",
    obstaclesHeadline: "What Went Wrong, and What I Did About It",
    keyDecisions: [
      {
        title: "Citations Verified in Code",
        body: "Every quote is checked by real string-matching, not another AI call. Unverifiable ones get dropped.",
      },
      {
        title: "No Vector Database Yet",
        body: "Full content goes straight to the model when it fits. No embeddings, unless the data says I need them.",
      },
      {
        title: "Cut My Own Quotas",
        body: "My limits looked fine on paper. The real cost math said otherwise, so I lowered them before launch.",
      },
    ],
    obstacles: [
      {
        title: "Built the Wrong Payment Provider First",
        body: "Built the entire billing flow on Flutterwave, then switched to Paystack mid-project. Better to fix it before launch than after.",
      },
    ],
    builtScreens: [
      { src: uxlensScreenUpload, alt: "Project upload view" },
      { src: uxlensScreenInsights, alt: "Insights view showing themes and citations" },
      { src: uxlensScreenChat, alt: "Chat interface" },
    ],
    toolGroups: [
      { label: "Design", tools: ["Figma", "Figma AI"] },
      {
        label: "Build",
        tools: [
          "Next.js",
          "TypeScript",
          "Prisma",
          "PostgreSQL",
          "BullMQ",
          "Redis",
          "Cloudflare R2",
        ],
      },
      {
        label: "AI-Assisted Workflow",
        tools: ["Claude Code", "Claude", "OpenCode", "Antigravity IDE"],
      },
    ],
    outcomeSummary:
      "UXLens AI works end to end today, upload, analysis, citations, chat, all functional and ready to use.",
    whatsNext: [
      "The one honest gap left is analytics instrumentation. Everything else holds up.",
    ],
    learnings: [
      "Citation verification taught me AI sounding right isn't enough, it needs to prove it, in code.",
      "Working this closely with AI changed how I see my own role, less about writing every line, more about every call.",
    ],
  },
  {
    slug: "legible",
    name: "Legible",
    hasLiveBadge: true,
    caseStudyReady: true,
    href: "/work/legible",
    outcome: "Turns messy handwritten notes into a clean digital book you can actually read.",
    gridImage: legibleGridImage,
    cardColor: "#00B407",
    projectType: "Full-Stack AI Product",
    link: { label: "View Live", href: "#" },
    positioning:
      "Turns messy handwritten notes into a clean digital book you can actually read.",
    role: "Design to MVP, end to end",
    timeline: "2 months",
    tools: "Design in Code, Next.js, Claude Code",
    contextHeadline: "Handwritten notes that never became anything useful.",
    contextParagraph:
      "The idea came from my own schooling in Nigeria, notebooks full of handwritten notes that never got organized or revisited. I wasn't testing a validated theory, I was designing for a problem I'd lived. Legible turns that pile of photos into something worth reading.",
    roleOwnership:
      "I owned this project end to end, working closely with AI on every decision. No Figma UI step, I designed the tokens, then built every screen directly in code.",
    decisionsHeadline: "The Decisions That Shaped the Build",
    obstaclesHeadline: "What Went Wrong, and What I Did About It",
    keyDecisions: [
      {
        title: "Caught an AI Trying to Fabricate",
        body: "DeepSeek wanted to rephrase transcriptions using its own knowledge. I split that out into a separate Summarize feature.",
      },
      {
        title: "Split AI Providers by Strength",
        body: "DeepSeek rejected image uploads, so DeepSeek handles text, Gemini handles vision.",
      },
      {
        title: "Cost Checks Run Per Image",
        body: "A batch can push cost mid-way through, so every image gets its own check.",
      },
    ],
    obstacles: [
      {
        title: "Chased a Bug That Wasn't a Bug",
        body: "Jobs sat stuck for no visible reason. Turned out the background worker process just wasn't running, not a code bug.",
      },
    ],
    toolGroups: [
      { label: "Design", tools: ["Design in Code (tokens only, no Figma UI)"] },
      {
        label: "Build",
        tools: [
          "Next.js",
          "TypeScript",
          "Prisma",
          "PostgreSQL",
          "Cloudflare R2",
        ],
      },
      {
        label: "AI-Assisted Workflow",
        tools: ["Claude Code", "Claude", "OpenCode", "Antigravity IDE"],
      },
    ],
    outcomeSummary:
      "Legible works end to end today. Upload, transcription, chapter grouping, editing, and export are all fully functional.",
    learnings: [
      "Building the fabrication check taught me that AI-assisted still means I own every line it produces, especially when it tries to do more than I asked.",
      "Chasing that 'broken' feature taught me to verify before assuming, the simplest explanation is usually right.",
    ],
  },
  {
    slug: "servicehub",
    name: "ServiceHub",
    hasLiveBadge: false,
    caseStudyReady: true,
    href: "/work/servicehub",
    outcome: "Helping students find and book trusted home service providers.",
    gridImage: servicehubGridImage,
    cardColor: "#2563EB",
    projectType: "UX Research, Product Design",
    link: { label: "View Figma", href: SERVICEHUB_FIGMA_URL },
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
