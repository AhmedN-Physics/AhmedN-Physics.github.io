import { SectionDivider } from "@/components/SectionDivider";
import { Link, Redirect, useSearch } from "wouter";
import { ArrowRight } from "lucide-react";
import { courses } from "@/lib/courses";
import groups from "@/lib/note-groups.json";
import { NoteGroupIllustration } from "@/components/NoteGroupIllustration";

const categoryStyles: Record<string, { card: string; illustration: string; title: string; detail: string; link: string }> = {
  courses: {
    card: "bg-[#E8D6BC] border-[#C6A77F] hover:border-[#854B27]",
    illustration: "bg-[#F6EDDF] text-[#684326]",
    title: "text-[#352419]", detail: "text-[#614C3A]", link: "text-[#684326]",
  },
  physics: {
    card: "bg-[#FFF8F0] border-[#D6A77F] hover:border-[#854B27]",
    illustration: "bg-[#B8753E] text-white",
    title: "text-[#743F20]", detail: "text-[#72523D]", link: "text-[#854B27]",
  },
  mathematics: {
    card: "bg-[#42291B] border-[#684326] hover:border-[#B8753E]",
    illustration: "bg-[#583A28] text-[#E8D6BC]",
    title: "text-white", detail: "text-[#E8D6BC]", link: "text-[#F4EBDC]",
  },
};

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
      <div className="space-y-8">
        <SectionDivider symbol="∇" />
      <div className="grid gap-5 lg:grid-cols-3">
        {groups.map(group => {
          const style = categoryStyles[group.slug] ?? categoryStyles.courses;
          return (
          <Link key={group.slug} href={`/notes/category/${group.slug}`} data-testid={`note-group-${group.slug}`} className={`group flex min-w-0 flex-col overflow-hidden rounded-2xl border p-6 shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary motion-reduce:transform-none motion-reduce:transition-none ${style.card}`}>
            <div className={`mb-6 flex justify-center rounded-xl py-5 [&_svg]:text-current ${style.illustration}`}><NoteGroupIllustration kind={group.slug} /></div>
            <h2 className={`text-xl font-semibold leading-snug ${style.title}`}>{group.name}</h2>
            <p className={`mt-3 line-clamp-3 text-sm leading-relaxed ${style.detail}`}>{group.description}</p>
            <p className={`mt-4 font-mono text-xs ${style.detail}`}>{group.members.length} {group.slug === "courses" ? "courses" : group.members.length === 1 ? "topic" : "topics"}</p>
            <span className={`mt-auto flex items-center gap-2 pt-6 text-sm font-semibold ${style.link}`}>Browse <ArrowRight aria-hidden="true" className="h-4 w-4 transition-transform group-hover:translate-x-1" /></span>
          </Link>
          );
        })}
      </div>
      </div>
    </div>
  );
}
