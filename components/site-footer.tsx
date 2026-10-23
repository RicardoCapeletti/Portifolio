import { profile } from "@/content/profile";

export function SiteFooter() {
  return (
    <footer className="px-5 py-8 sm:px-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
        <p>
          {profile.name}
          <span aria-hidden="true"> · </span>
          <span className="sr-only">, </span>
          {profile.location}
        </p>
        <a className="hover:text-foreground" href={`mailto:${profile.email}`}>
          {profile.email}
        </a>
      </div>
    </footer>
  );
}
