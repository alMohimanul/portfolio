import type { ExperienceEntry } from "./types";

export const experience: ExperienceEntry[] = [
  {
    company: "Markopolo AI Inc",
    role: "Software Engineer II, Machine Learning",
    location: "Dhaka, Bangladesh",
    startDate: "Sept 2025",
    endDate: "Present",
    bullets: [
      "Own the ML pipeline behind DeepDive, a social listening platform processing Facebook, Instagram, X and TikTok conversations in English, Bangla and code-mixed text for clients like Grameenphone, Robi and bKash.",
      "Split one large LLM annotation prompt into typed, retry-capped stages — cut cost and latency by about half, then another 50% through batching.",
      "Diagnosed a slow production agent workflow with structured logging and Grafana, then replaced it with a deterministic parallel version.",
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
      "Built a customer segmentation system over 600K+ profiles from two databases — audience building got about 60% faster.",
      "Built an ad content review system on Vertex AI flagging policy violations in generated creative — 90% compliance across 50+ brand accounts.",
      "Built a WhatsApp sales assistant recommending products from live stock — merchant response rates up 40%.",
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
