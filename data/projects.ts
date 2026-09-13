import type { FeaturedProject } from "./types";

export const featuredProjects: FeaturedProject[] = [
  {
    slug: "prism",
    title: "PRISM",
    tagline: "Personal Research Intelligence and Synthesis Manager",
    description:
      "A multi-agent research assistant system that helps researchers manage papers, compare methodologies, and maintain context across research sessions, built on RAG and LangGraph agent orchestration.",
    stack: ["Python", "LangGraph", "RAG", "FastAPI", "React"],
    githubUrl: "https://github.com/alMohimanul/PRISM",
    highlights: [
      "Multi-agent orchestration for research workflows via LangGraph",
      "RAG-backed retrieval across a personal paper library",
      "Session-persistent context so research state survives across visits",
    ],
  },
  {
    slug: "mavyn",
    title: "Mavyn",
    tagline: "Chat with your research papers — locally, privately, for free",
    description:
      "A fully offline, terminal-based research assistant. Drop PDFs into a folder and ask questions in plain English — Q&A, structured summaries, methodology comparison, literature-review drafts, and semantic search, all without uploading a single file.",
    stack: ["Python", "FAISS", "BM25", "Local LLMs"],
    githubUrl: "https://github.com/alMohimanul/mavyn",
    highlights: [
      "Hybrid FAISS + BM25 retrieval for accurate multi-paper search",
      "Fully local — no uploads, no subscriptions, no data leaving the machine",
      "Auto-generates literature reviews from an entire local library",
    ],
  },
  {
    slug: "screenly",
    title: "Screenly",
    tagline: "App Store and Play Store screenshots, at the exact sizes each platform demands",
    description:
      "A web app for producing store-ready screenshots without fighting platform size requirements by hand, tested end-to-end with Playwright and deployed as a static bundle behind nginx.",
    stack: ["React", "TypeScript", "Vite", "Playwright"],
    liveUrl: "https://screenly-nu.vercel.app/",
    highlights: [
      "Generates every required App Store / Play Store screenshot size automatically",
      "End-to-end tested with Playwright",
      "Ships as an immutable, content-hashed static bundle for fast, cache-safe deploys",
    ],
  },
  {
    slug: "syntai",
    title: "SyntAI",
    tagline: "A web research assistant for academic papers",
    description:
      "Search, retrieval-based Q&A, multi-paper comparison, chart generation, code extraction, and diagram analysis over academic papers, with a FastAPI backend and a React frontend.",
    stack: ["FastAPI", "Groq", "FAISS", "LangChain", "React"],
    githubUrl: "https://github.com/alMohimanul/SyntAI",
    highlights: [
      "Retrieval-based Q&A across multiple papers at once",
      "Automatic chart generation and diagram analysis from paper figures",
      "Code extraction for reproducing paper methodology",
    ],
  },
];
