import { profile } from "@/data/profile";

export function Footer() {
  return (
    <footer className="mx-auto mt-24 max-w-5xl px-6 pb-12 pt-8 text-sm opacity-70">
      <div className="flex flex-col items-center justify-between gap-4 border-t pt-8 md:flex-row">
        <p>
          © {new Date().getFullYear()} {profile.name}
        </p>
        <div className="flex flex-wrap gap-2">
          <a href={profile.github} target="_blank" rel="noopener noreferrer" className="link-pill">
            GitHub
          </a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="link-pill">
            LinkedIn
          </a>
          <a href={profile.scholar} target="_blank" rel="noopener noreferrer" className="link-pill">
            Scholar
          </a>
          <a href={`mailto:${profile.email}`} className="link-pill">
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
