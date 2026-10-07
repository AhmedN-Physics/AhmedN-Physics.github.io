import { Link, Redirect, useSearch } from "wouter";
import { ArrowRight } from "lucide-react";
import { courses } from "@/lib/courses";
import groups from "@/lib/note-groups.json";
import { NoteGroupIllustration } from "@/components/NoteGroupIllustration";

export default function Notes() {
  const requested = new URLSearchParams(useSearch()).get("category");
  const legacyCourse = courses.find((course) => course.id === requested || course.slug === requested);
  if (legacyCourse) return <Redirect to={`/notes/${legacyCourse.slug}`} replace />;

  return (
    <div className="space-y-10">
      <header className="page-heading space-y-4">
        <p className="eyebrow">Study resources</p>
        <h1 className="text-4xl font-bold tracking-tight">Notes &amp; Lectures</h1>
        <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground">Follow a course or explore a focused discussion in physics or mathematics.</p>
      </header>
      <div className="grid gap-5 lg:grid-cols-3">
        {groups.map(group => (
          <Link key={group.slug} href={`/notes/category/${group.slug}`} data-testid={`note-group-${group.slug}`} className="interactive-card group flex min-w-0 flex-col overflow-hidden p-6">
            <div className="mb-6 flex justify-center rounded-xl bg-secondary/70 py-5"><NoteGroupIllustration kind={group.slug} /></div>
            <h2 className="text-xl font-semibold leading-snug">{group.name}</h2>
            <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-muted-foreground">{group.description}</p>
            <p className="mt-4 font-mono text-xs text-muted-foreground">{group.members.length} {group.slug === "courses" ? "courses" : group.members.length === 1 ? "topic" : "topics"}</p>
            <span className="mt-auto flex items-center gap-2 pt-6 text-sm font-semibold text-primary">Browse <ArrowRight aria-hidden="true" className="h-4 w-4 transition-transform group-hover:translate-x-1" /></span>
          </Link>
        ))}
      </div>
    </div>
  );
}
