import { useEffect } from "react";
import { Link } from "wouter";
import { ArrowLeft, ArrowRight, BookOpen } from "lucide-react";
import { courses } from "@/lib/courses";
import groups from "@/lib/note-groups.json";
import NotFound from "@/pages/not-found";

export default function NoteGroup({ slug }: { slug: string }) {
  const group = groups.find(item => item.slug === slug);
  useEffect(() => { window.scrollTo({top: 0, behavior: "instant"}); }, [slug]);
  if (!group) return <NotFound />;
  const entries = courses.filter(course => group.members.includes(course.slug));

  return (
    <div className="space-y-10">
      <Link href="/notes" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-4"><ArrowLeft aria-hidden="true" className="h-4 w-4" />All notes &amp; lectures</Link>
      <header className="space-y-4 border-b border-border/50 pb-8">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">{group.name}</h1>
        <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground">{group.description}</p>
      </header>
      <div className="grid gap-4 lg:grid-cols-2">
        {entries.map(course => (
          <Link key={course.slug} href={`/notes/${course.slug}`} data-testid={`course-card-${course.slug}`} className="group flex min-w-0 flex-col border border-border/60 bg-card p-6 transition-colors hover:bg-secondary/30 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary">
            {course.image && <img src={course.image.src} alt={course.image.alt} width={640} height={360} loading="lazy" className="mb-5 aspect-video w-full object-cover" />}
            <div className="mb-4 flex items-center gap-2 font-mono text-xs text-muted-foreground"><BookOpen aria-hidden="true" className="h-4 w-4" />{course.chapters ? `${course.chapters.length} resources` : "1 PDF"}</div>
            <h2 className="text-xl font-semibold leading-snug">{course.name}</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{course.description}</p>
            <span className="mt-auto flex items-center gap-2 pt-6 font-mono text-xs">Explore notes <ArrowRight aria-hidden="true" className="h-4 w-4 transition-transform group-hover:translate-x-1" /></span>
          </Link>
        ))}
      </div>
    </div>
  );
}
