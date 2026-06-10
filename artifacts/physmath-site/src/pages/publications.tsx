const publications = [
  {
    id: "pub-1",
    title: "Topological invariants in low-dimensional gauge theories",
    venue: "Journal of Mathematical Physics",
    year: "2023",
    abstract: "We explore a novel class of topological invariants emerging from 3-dimensional Chern-Simons theory. By utilizing a modified path integral formulation, we demonstrate a direct correspondence between these invariants and knot polynomials..."
  },
  
];

export default function Publications() {
  return (
    <div className="space-y-12">
      <header className="space-y-4 border-b border-border/50 pb-8">
        <h1 className="text-4xl font-bold tracking-tight">Publications</h1>
        <p className="text-xl text-muted-foreground">
          Selected peer-reviewed research and educational papers.
        </p>
      </header>

      <div className="space-y-10">
        {publications.map((pub) => (
          <article 
            key={pub.id}
            className="space-y-3"
            data-testid={`publication-${pub.id}`}
          >
            <h2 className="text-xl font-semibold text-foreground">
              {pub.title}
            </h2>
            <div className="font-mono text-sm text-muted-foreground flex gap-3">
              <span>{pub.venue}</span>
              <span>•</span>
              <span>{pub.year}</span>
            </div>
            <p className="text-muted-foreground leading-relaxed text-sm max-w-3xl">
              {pub.abstract}
            </p>
            <div className="pt-2">
              <a href="#" className="text-sm font-mono text-primary underline underline-offset-4 hover:text-foreground transition-colors" onClick={(e) => e.preventDefault()}>
                [PDF]
              </a>
              <span className="mx-2 text-muted-foreground">/</span>
              <a href="#" className="text-sm font-mono text-primary underline underline-offset-4 hover:text-foreground transition-colors" onClick={(e) => e.preventDefault()}>
                [arXiv]
              </a>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
