import { useEffect } from "react";
import { Link } from "wouter";
import { ArrowLeft, FileText } from "lucide-react";
import groups from "@/lib/note-groups.json";
import { courses } from "@/lib/courses";
import { ChapterPdfLinks, CorrectionLink } from "@/components/NoteResources";
import NotFound from "@/pages/not-found";

export default function CoursePage({ slug }: { slug: string }) {
  const course = courses.find((item) => item.slug === slug);
  useEffect(() => { window.scrollTo({ top: 0, left: 0, behavior: "instant" }); }, [slug]);
  if (!course) return <NotFound />;

  const group = groups.find((item) => item.members.includes(slug));
  const resources = course.chapters ?? [{
    id: 1,
    title: course.description,
    description: "",
    pdfUrl: course.pdfUrl,
  }];

  return (
    <div className="space-y-10">
      <Link href={group ? `/notes/category/${group.slug}` : "/notes"} className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-4">
        <ArrowLeft aria-hidden="true" className="h-4 w-4" /> {group?.name ?? "All notes & lectures"}
      </Link>
      <header className="space-y-4 border-b border-border/50 pb-8">
        <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">{course.group}</p>
        <h1 className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl">{course.name}</h1>
        {course.chapters && <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground">{course.description}</p>}
        <p className="text-sm text-muted-foreground">Notes by Ahmed N. Alotaibi</p>
        {course.image && <img src={course.image.src} alt={course.image.alt} width={640} height={360} className="h-auto w-full max-w-2xl" />}
      </header>
      <section aria-label="Notes and resources">
        <div className="space-y-4">
          {resources.map((chapter) => (
            <article key={chapter.id} id={`chapter-${chapter.id}`} className="scroll-mt-6 border border-border/60 bg-card p-5 sm:p-6" data-testid={`chapter-${chapter.id}`}>
              <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                <div className="min-w-0 flex-1">
                  <h2 className="flex items-start gap-3 text-xl font-semibold leading-snug">
                    <FileText aria-hidden="true" className="mt-1 h-4 w-4 shrink-0 text-muted-foreground" />
                    {chapter.title.trim()}
                  </h2>
                  {chapter.description && <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{chapter.description}</p>}
                  {chapter.date && <p className="mt-3 font-mono text-xs text-muted-foreground">{chapter.date}</p>}
                </div>
                <div className="sm:max-w-[45%] sm:shrink-0"><ChapterPdfLinks chapter={course.chapters ? chapter : { ...chapter, title: course.name }} /></div>
              </div>
              <div className="mt-5 border-t border-border/40 pt-1">
                <CorrectionLink course={course.name} chapter={course.chapters ? chapter.title : undefined} />
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
