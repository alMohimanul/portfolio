import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Al Mohimanul Islam — Software Engineer, ML & Backend",
    template: "%s — Al Mohimanul Islam",
  },
  description:
    "Portfolio of Al Mohimanul Islam, a software engineer building production ML and backend systems — LLM agents, RAG, data pipelines, and the infrastructure around them.",
  openGraph: {
    title: "Al Mohimanul Islam — Software Engineer, ML & Backend",
    description:
      "Portfolio of Al Mohimanul Islam, a software engineer building production ML and backend systems.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className={`${geistSans.variable} ${geistMono.variable} min-h-screen antialiased`}>
        <Navbar />
        <main className="mx-auto max-w-5xl px-6 py-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
