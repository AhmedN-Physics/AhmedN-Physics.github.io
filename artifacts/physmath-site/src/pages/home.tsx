import { SectionDivider } from "@/components/SectionDivider";
import { Link } from "wouter";
import { ArrowRight, Youtube, BookOpen, Atom, Sigma } from "lucide-react";
import { Button } from "@/components/ui/button";

const paths = [
  { href: "/notes/category/courses", title: "Learn step by step", text: "Explore courses in electromagnetism, quantum mechanics, and linear algebra.", icon: BookOpen },
  { href: "/notes/category/physics", title: "Explore physics", text: "Focused discussions of physical ideas and the mathematics behind them.", icon: Atom },
  { href: "/notes/category/mathematics", title: "Discover mathematics", text: "Notes on topology, partition theory, calculus of variations, and more.", icon: Sigma },
];

export default function Home() {
  return (
    <div className="space-y-16 lg:space-y-20">
      <section className="grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_280px]">
        <div className="space-y-6">
          <p className="eyebrow">Physics · Mathematics </p>
          <h1 className="max-w-xl text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl xl:text-6xl">Ahmed N.<br />Alotaibi<span className="text-primary">.</span></h1>
          <p className="max-w-lg text-lg leading-relaxed text-muted-foreground">I’m Ahmed Nasser Alotaibi, a physics and mathematics student at KFUPM. This is where I share my notes, lectures, research, and the ideas I’m exploring.</p>
          <div className="flex flex-wrap gap-3 pt-2">
            <Button asChild size="lg" data-testid="button-explore-notes"><Link href="/notes">Explore my notes <ArrowRight aria-hidden="true" className="h-4 w-4" /></Link></Button>
            <Button asChild size="lg" variant="outline" className="bg-card" data-testid="button-youtube"><a href="https://youtube.com/@physmathdoneright" target="_blank" rel="noreferrer"><Youtube aria-hidden="true" className="h-4 w-4" />Watch lectures</a></Button>
          </div>
          <Link href="/about" className="inline-flex items-center gap-2 text-sm font-medium text-primary underline decoration-primary/30 underline-offset-4 hover:decoration-primary">More about me <ArrowRight aria-hidden="true" className="h-3 w-3" /></Link>
        </div>
        <div className="relative mx-auto w-full max-w-[280px] lg:mx-0">
          <div aria-hidden="true" className="absolute -bottom-3 -right-3 h-full w-full rounded-[2rem] border border-primary/25 bg-secondary" />
          <img src="/ahmedn1.png" alt="Ahmed N. Alotaibi" className="relative aspect-[4/5] w-full rounded-[2rem] object-cover shadow-lg" />
        </div>
      </section>

      <section className="space-y-6">
        <div className="pb-3"><SectionDivider symbol="ψ" /></div>
        <div className="flex flex-wrap items-end justify-between gap-3"><div><p className="eyebrow mb-2">Recent additions</p><h2 className="text-3xl font-semibold">A place to start</h2></div><Link href="/notes" className="inline-flex items-center gap-2 text-sm font-semibold text-primary">All notes <ArrowRight aria-hidden="true" className="h-4 w-4" /></Link></div>
        <Link href="/notes/electromagnetism-in-a-nutshell" data-testid="card-recent-1" className="interactive-card group grid overflow-hidden md:grid-cols-2">
          <img src="/electromagnetism-cover.png" alt="Abstract purple, pink, and blue light trails illustrating electromagnetism" width={640} height={360} loading="lazy" className="aspect-video h-full w-full object-cover" />
          <div className="flex flex-col items-start p-6 sm:p-8"><span className="mb-4 rounded-full bg-secondary px-3 py-1 text-xs font-semibold text-primary">Featured notes</span><h3 className="text-2xl font-semibold leading-snug">Electromagnetism<br />in a nutshell</h3><p className="mt-4 text-sm leading-relaxed text-muted-foreground">Build your understanding of vector calculus and electrostatics, with notes, exercises, and worked solutions.</p><span className="mt-auto flex items-center gap-2 pt-6 text-sm font-semibold text-primary">Start exploring <ArrowRight aria-hidden="true" className="h-4 w-4 transition-transform group-hover:translate-x-1" /></span></div>
        </Link>
      </section>

      <section className="space-y-6">
        <div className="pb-3"><SectionDivider symbol="∇" /></div>
        <div><p className="eyebrow mb-2">Follow your curiosity</p><h2 className="text-3xl font-semibold">Choose your next idea</h2></div>
        <div className="grid gap-4 lg:grid-cols-3">{paths.map(path => <Link key={path.href} href={path.href} className="interactive-card flex flex-col p-6"><path.icon aria-hidden="true" className="mb-5 h-7 w-7 text-primary" /><h3 className="text-xl font-semibold">{path.title}</h3><p className="mt-3 text-sm leading-relaxed text-muted-foreground">{path.text}</p><ArrowRight aria-hidden="true" className="mt-auto h-4 w-4 pt-0 text-primary translate-y-3 mb-3" /></Link>)}</div>
      </section>
    </div>
  );
}
