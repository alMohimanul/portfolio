import { profile } from "@/data/profile";

export function Footer() {
  return (
    <footer className="mx-auto mt-24 max-w-5xl px-6 pb-12 pt-8 text-sm opacity-70">
      <div className="flex flex-col items-center justify-between gap-4 border-t pt-8 md:flex-row">
        <p>
          © {new Date().getFullYear()} {profile.name}. Built with Next.js.
        </p>
        <div className="flex gap-4">
          <a href={profile.github} target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a href={profile.scholar} target="_blank" rel="noopener noreferrer">
            Scholar
          </a>
          <a href={`mailto:${profile.email}`}>Email</a>
        </div>
      </div>
    </footer>
  );
}
