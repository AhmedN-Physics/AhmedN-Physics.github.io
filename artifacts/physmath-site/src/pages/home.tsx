import { Link } from "wouter";
import { ArrowRight, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex flex-col gap-16">
      <section className="space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold text-primary leading-tight tracking-tight">
          Physics and Mathematics, <br/>
          <span className="text-muted-foreground italic font-medium">taught with precision.</span>
        </h1>
        
        <div className="prose prose-lg dark:prose-invert text-muted-foreground max-w-2xl font-sans">
          <p>
            Welcome. I am Ahmed Alotaibi, and this is my personal website. It contains my notes on various topics in physics and mathematics, my future publications, and my contact information.
          </p>
        </div>

        <div className="flex flex-wrap gap-4 pt-4">
          <Button asChild className="font-mono" data-testid="button-explore-notes">
            <Link href="/notes" className="flex items-center gap-2">
              Explore Notes <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
          <Button asChild variant="outline" className="font-mono bg-transparent" data-testid="button-youtube">
            <a href="https://youtube.com/@physmathdoneright?si=CfAuGqmAn3MUlrQi" target="_blank" rel="noreferrer" className="flex items-center gap-2">
              <Youtube className="w-4 h-4" /> YouTube Channel
            </a>
          </Button>
        </div>
      </section>

      <section className="border-t border-border/50 pt-12 space-y-8">
        <h2 className="text-2xl font-semibold tracking-tight">Recent Additions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Link href="/notes" className="group block p-6 border border-border/50 bg-card hover:bg-secondary/30 transition-colors" data-testid="card-recent-1">
            <div className="text-xs font-mono text-muted-foreground mb-3">Topology</div>
            <h3 className="text-lg font-medium mb-2 group-hover:text-primary/80 transition-colors">A Primer on Point-Set Topology</h3>
            <p className="text-sm text-muted-foreground line-clamp-2">
              Notes on open sets, limit points, and continuous functions. A gentle introduction before moving onto algebraic topology.
            </p>
          </Link>
          <Link href="/notes" className="group block p-6 border border-border/50 bg-card hover:bg-secondary/30 transition-colors" data-testid="card-recent-2">
            <div className="text-xs font-mono text-muted-foreground mb-3">Classical Mechanics</div>
            <h3 className="text-lg font-medium mb-2 group-hover:text-primary/80 transition-colors">Lagrangian Formalism</h3>
            <p className="text-sm text-muted-foreground line-clamp-2">
              Deriving the Euler-Lagrange equations from the principle of stationary action. Examples with double pendulums.
            </p>
          </Link>
        </div>
      </section>
    </div>
  );
}
