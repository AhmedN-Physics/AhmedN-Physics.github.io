import { Link } from "wouter";
import { ArrowRight, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex flex-col gap-16">
      <section className="grid items-center gap-8 md:grid-cols-[220px_minmax(0,1fr)] md:gap-12">
  <div className="flex justify-center md:justify-start">
    <img
      src="/ahmedn1.png"
      alt="Ahmed N. Alotaibi"
      className="h-72 w-60 max-w-full rounded-2xl border border-border object-cover shadow-xl sm:h-80 sm:w-64 md:h-64 md:w-52"
    />
  </div>

  <div className="min-w-0 space-y-6 text-center md:text-left">
    <h1 className="text-4xl font-bold leading-tight tracking-tight text-primary sm:text-5xl md:text-5xl">
      Ahmed N. Alotaibi
    </h1>

    <div className="prose prose-lg mx-auto max-w-2xl font-sans text-muted-foreground dark:prose-invert md:mx-0">
      <p>
        Welcome. I am Ahmed N. Alotaibi, and this is my personal website. It
        contains my notes on various topics in physics and mathematics, my
        future publications, and my contact information.
      </p>
    </div>

    <div className="flex flex-col gap-4 pt-4 sm:flex-row sm:flex-wrap sm:justify-center md:justify-start">
      <Button
        asChild
        className="w-full font-mono sm:w-auto"
        data-testid="button-explore-notes"
      >
        <Link href="/notes" className="flex items-center justify-center gap-2">
          Explore Notes <ArrowRight className="h-4 w-4" />
        </Link>
      </Button>

      <Button
        asChild
        variant="outline"
        className="w-full bg-transparent font-mono sm:w-auto"
        data-testid="button-youtube"
      >
        <a
          href="https://youtube.com/@physmathdoneright?si=CfAuGqmAn3MUlrQi"
          target="_blank"
          rel="noreferrer"
          className="flex items-center justify-center gap-2"
        >
          <Youtube className="h-4 w-4" />
          YouTube Channel
        </a>
      </Button>
    </div>
  </div>
</section>
      <section className="space-y-8 border-t border-border/50 pt-12">
        <h2 className="text-2xl font-semibold tracking-tight">
          Recent Additions
        </h2>

        <div className="grid gap-6 md:grid-cols-2">
          <Link
            href="/notes"
            className="group block border border-border/50 bg-card p-6 transition-colors hover:bg-secondary/30"
            data-testid="card-recent-1"
          >
            <div className="mb-3 font-mono text-xs text-muted-foreground">
              Quantum Mechanics
            </div>

            <h3 className="mb-2 text-lg font-medium transition-colors group-hover:text-primary/80">
              Foundations and Applications
            </h3>

            <p className="line-clamp-2 text-sm text-muted-foreground">
              An introduction to the mathematical framework of quantum
              mechanics, including Hilbert spaces and observables.
            </p>
          </Link>
        </div>
      </section>
    </div>
  );
}