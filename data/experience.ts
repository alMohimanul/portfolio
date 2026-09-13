import type { ExperienceEntry } from "./types";

export const experience: ExperienceEntry[] = [
  {
    company: "Markopolo AI Inc",
    role: "Software Engineer II, Machine Learning",
    location: "Dhaka, Bangladesh",
    startDate: "Sept 2025",
    endDate: "Present",
    bullets: [
      "Own the ML pipeline behind DeepDive, a social listening platform that processes conversations from Facebook, Instagram, X and TikTok in English, Bangla and code-mixed text. Clients include Grameenphone, Robi and bKash.",
      "Split one large LLM annotation prompt into smaller stages for brand detection, thread context, aspect sentiment and moderation, each with typed Pydantic outputs and capped retries. Dropping reasoning the task did not need cut cost and latency by about half, and batch inference took off another 50%. Brand filtering and duplicate detection removed more calls on top of that, and every run now reports its own token and cost numbers.",
      "Moved the system from document-level sentiment to aspect-based sentiment, so each brand and topic gets scored on its own. Added thread-level context so comments that never name a brand still land against the right one.",
      "Built the Data Engine, a text-to-SQL layer over a live Postgres database. Questions get routed through SQL generation, entity resolution, brand comparison and thread analysis, with separate time and iteration budgets for quick answers and deeper ones. SqlGuard, an AST-based checker, validates tables, columns, parameters and tenant access before anything reaches the database.",
      "Built influencer monitoring and narrative-attack detection that does not depend on keyword lists. It works out which brands and industries are actually relevant by verifying evidence, then groups similar claims with multilingual embeddings using thresholds set from real data.",
      "Shipped the LankaBangla Markets Assistant, an embeddable assistant covering prices, indices, IPOs, dividends, financial statements and technical indicators. Answers are checked against verified market data, and the whole thing drops into a site with one script tag.",
      "Put structured logging and Grafana metrics around a slow production agent workflow, found where the time was going, and replaced it with a deterministic parallel version. Tail latency went from 77s to 18s and cost from $0.005 to $0.0008 per request.",
    ],
    stats: [
      { label: "Cost & latency cut", value: "~50%" },
      { label: "Tail latency", value: "77s → 18s" },
      { label: "Cost per request", value: "$0.005 → $0.0008" },
    ],
  },
  {
    company: "Markopolo AI Inc",
    role: "Jr. Machine Learning Engineer",
    location: "Dhaka, Bangladesh",
    startDate: "Oct 2024",
    endDate: "Aug 2025",
    bullets: [
      "Built a customer segmentation system over user behaviour data from two databases, covering 600K+ profiles. Audience building that used to be done by hand got about 60% faster.",
      "Added a way to ask plain business questions and get database queries back, so non-technical teams could pull campaign numbers without waiting on an analyst.",
      "Built an ad content review system on Vertex AI that flags policy violations in generated creative. Policy compliance reached 90% across 50+ brand accounts.",
      "Built a WhatsApp sales assistant that suggests products based on live stock. Merchant response rates went up 40%.",
    ],
    stats: [
      { label: "Audience building", value: "60% faster" },
      { label: "Policy compliance", value: "90% / 50+ brands" },
      { label: "Merchant response", value: "+40%" },
    ],
  },
  {
    company: "Nodes Digital Limited",
    role: "Jr. Machine Learning Engineer",
    location: "Dhaka, Bangladesh",
    startDate: "Mar 2024",
    endDate: "Oct 2024",
    bullets: [
      "Built a research assistant in Python for searching and asking questions across 200+ academic papers, which cut literature review time roughly in half.",
      "Built a Bangla voice assistant for farming advice using speech recognition and text to speech. Around 500 people used it to get agricultural information by voice.",
    ],
    stats: [
      { label: "Literature review time", value: "~50% faster" },
      { label: "Voice assistant users", value: "~500" },
    ],
  },
];
