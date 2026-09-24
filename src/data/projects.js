// Real, known facts only. Everything content-dependent (outcomes, copy,
// metrics) stays out of this file until it is finalized, see the
// bracketed placeholders rendered in the components instead.
import uxlensScreenUpload from "../assets/uxlens-ai/screen-upload.png";
import uxlensScreenInsights from "../assets/uxlens-ai/screen-insights.png";
import uxlensScreenChat from "../assets/uxlens-ai/screen-chat.png";

export const projects = [
  {
    slug: "uxlens-ai",
    name: "UXLens AI",
    hasLiveBadge: true,
    caseStudyReady: true,
    href: "/work/uxlens-ai",
    outcome: "Reads your research, finds the patterns, shows you exactly where.",
    positioning:
      "AI-powered research synthesis, every insight traceable back to its source.",
    role: "Design to MVP, end to end",
    timeline: "2 months",
    tools: "Figma, Next.js, Claude Code",
    contextHeadline:
      "Fifty-four responses. No way to know what they actually meant.",
    contextParagraph:
      "I ran a survey for ServiceHub and got fifty-four responses back. Google Forms could show me the raw answers, but it couldn't tell me which problems came up most, what patterns connected them, or point me back to which response said what. So I read all fifty-four by hand, the same evening most designers spend doing exactly that. UXLens AI exists so nobody has to.",
    roleOwnership:
      "I owned this project end to end, from problem to shipped product. I defined the core idea and every requirement, working closely with AI to develop the specs and architecture, reviewing, accepting, or rejecting each decision along the way. Every screen was designed in Figma before a single line of code was written.",
    decisionsHeadline: "The Decisions That Shaped the Build",
    obstaclesHeadline: "What Went Wrong, and What I Did About It",
    keyDecisions: [
      {
        title: "Citation Verification Runs on Code, Not AI",
        body: "Every quote gets checked by real string-matching, never another AI call grading itself. Anything unverifiable gets dropped, not shown.",
      },
      {
        title: "No Vector Database, Until the Numbers Say Otherwise",
        body: "Full content goes straight to the model when it fits, search is only a fallback for larger projects. No embeddings, unless the data says I need them.",
      },
      {
        title: "Cut My Own Quotas After Checking the Math",
        body: "My original limits looked fine on paper. The real cost math showed otherwise, so I lowered them before launch, not after.",
      },
    ],
    obstacles: [
      {
        title: "Built the Wrong Payment Provider First",
        body: "Built the entire billing flow on Flutterwave, then switched to Paystack mid-project. Tearing out working code isn't fun, but better before launch than after.",
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
      "The one honest gap left is analytics instrumentation, everything else has been checked against the original requirements and holds up.",
    ],
    learnings: [
      "Building the citation-verification step taught me something about trust in AI products, it's not enough for an AI to sound right, the system needs a way to prove it, in code, every time.",
      "Working this closely with AI on a real product changed how I think about my own role, less about writing every line, more about making every call.",
    ],
  },
  {
    slug: "legible",
    name: "Legible",
    hasLiveBadge: true,
    caseStudyReady: true,
    href: "/work/legible",
    outcome: "Turns handwritten notes into a clean, structured digital book.",
    positioning:
      "Turns messy handwritten notes into a clean digital book you can actually read.",
    role: "Design to MVP, end to end",
    timeline: "2 months",
    tools: "Design in Code, Next.js, Claude Code",
    contextHeadline: "Handwritten notes that never became anything useful.",
    contextParagraph:
      "The idea came from my own schooling in Nigeria, notebooks full of handwritten notes that stayed exactly that, notes, never organized, never easy to revisit before an exam. I wasn't testing a validated theory, I was designing for a problem I'd actually lived. Legible turns that pile of photos into something you'd actually want to read.",
    roleOwnership:
      "I owned this project end to end, from problem to shipped product. I defined the idea, worked closely with AI to develop the requirements and architecture, reviewing, accepting, or rejecting each decision along the way. Unlike a typical design-to-code process, there was no Figma UI step here, I designed the tokens, then made every screen and layout decision directly in code.",
    decisionsHeadline: "The Decisions That Shaped the Build",
    obstaclesHeadline: "What Went Wrong, and What I Did About It",
    keyDecisions: [
      {
        title: "Caught an AI Asking to Fabricate Content",
        body: "DeepSeek wanted to rephrase and expand transcriptions using its own knowledge. That's fabrication, against my own rules. I split it into a separate, clearly-labeled Summarize feature instead of letting it blur into the real transcript.",
      },
      {
        title: "Split AI Providers by What They're Actually Good At",
        body: "DeepSeek rejected image uploads outright. Rather than force one provider to do everything, DeepSeek handles text, Gemini handles vision, both behind the same interface.",
      },
      {
        title: "Cost Checks Run Per Image, Not Per Batch",
        body: "A batch of images can push the running cost mid-way through. Checking once at the start wasn't enough, so every single image gets its own gate.",
      },
    ],
    obstacles: [
      {
        title: "Chased a Broken Feature That Was Actually Just Not Running",
        body: "Jobs sat stuck for no visible reason, more than once. Turned out the background worker process just wasn't running, not a code bug at all.",
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
      "Legible works end to end today, upload, transcription, in-app reading, and PDF export are all functional. Chapter grouping and the editing experience are still ahead, and a few smaller gaps, like the free-plan watermark, are still open.",
    learnings: [
      "Building the fabrication check taught me that AI-assisted still means I own every line it produces, especially when it tries to do more than I asked.",
      "Chapter grouping and editing didn't make it into this build. Shipping a smaller, working core mattered more than shipping every planned feature half-done.",
    ],
  },
  {
    slug: "servicehub",
    name: "ServiceHub",
    hasLiveBadge: false,
    caseStudyReady: true,
    href: "/work/servicehub",
    outcome: "Helping students find and book trusted home service providers.",
    videoId: "48aAL7gLUOo",
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
