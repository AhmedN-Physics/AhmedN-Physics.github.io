const publications = [
  {
    id: "pub-1",
    title: "Variational Approaches for degenerate perturbation theory: Fixing the thermodynamic limit",
    venue: "TBA",
    year: "2026",
    abstract: "We develop three non-perturbative variational formulations of the Schrieffer–Wolff transformation that overcome the thermodynamic-limit problem by exploiting locality or using cluster traces within variational principles. Applied to the one-dimensional Hubbard model, the cluster-trace McLachlan and Dirac–Frenkel methods significantly outperform conventional perturbation theory, with the Dirac–Frenkel approach achieving comparable accuracy through a simpler first-order formulation."
  },
  
];

export default function Publications() {
  return (
    <div className="space-y-12">
      <header className="space-y-4 border-b border-border/50 pb-8">
        <h1 className="text-4xl font-bold tracking-tight">Publications</h1>
        <p className="text-xl text-muted-foreground">
          A collection of my research papers, preprints, and other scholarly works in physics and mathematics.
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
