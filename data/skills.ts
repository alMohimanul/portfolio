import type { SkillCategory } from "./types";

export const skills: SkillCategory[] = [
  { category: "Languages", items: ["Python", "TypeScript", "SQL"] },
  {
    category: "Backend",
    items: ["FastAPI", "Flask", "REST APIs", "PostgreSQL", "MySQL", "MongoDB", "ClickHouse"],
  },
  {
    category: "ML & AI",
    items: ["NLP", "LLM Agents", "RAG", "Aspect-Based Sentiment", "Computer Vision", "Deep Learning"],
  },
  {
    category: "Frameworks",
    items: ["PyTorch", "TensorFlow", "Scikit-learn", "Hugging Face", "LangChain", "LangGraph"],
  },
  { category: "Data", items: ["Pandas", "NumPy", "FAISS", "Qdrant", "OpenCV"] },
  { category: "Cloud", items: ["GCP", "Vertex AI", "Docker", "Git", "Grafana"] },
  { category: "Frontend", items: ["React", "Vite", "Zustand"] },
];
