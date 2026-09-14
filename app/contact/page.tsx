import type { Metadata } from "next";
import { profile } from "@/data/profile";
import { ContactForm } from "@/components/contact/ContactForm";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { GradientText } from "@/components/ui/GradientText";

export const metadata: Metadata = { title: "Contact" };

export default function ContactPage() {
  const endpoint = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT || null;

  return (
    <div className="mx-auto flex max-w-xl flex-col gap-8">
      <SectionReveal>
        <h1 className="text-center text-4xl font-bold">
          <GradientText>Let&apos;s Talk</GradientText>
        </h1>
        <p className="mt-4 text-center opacity-80">
          Have a project, an opportunity, or just want to say hi? Send a message.
        </p>
      </SectionReveal>

      <SectionReveal delay={0.1}>
        <GlassCard>
          <ContactForm endpoint={endpoint} />
        </GlassCard>
      </SectionReveal>

      <SectionReveal delay={0.2}>
        <div className="flex flex-wrap justify-center gap-2">
          <a href={`mailto:${profile.email}`} className="link-pill">
            Email
          </a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="link-pill">
            LinkedIn
          </a>
          <a href={profile.github} target="_blank" rel="noopener noreferrer" className="link-pill">
            GitHub
          </a>
          <a href={profile.scholar} target="_blank" rel="noopener noreferrer" className="link-pill">
            Google Scholar
          </a>
        </div>
      </SectionReveal>
    </div>
  );
}
