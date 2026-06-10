import { useState } from "react";
import { ChevronDown, ChevronRight, FileText } from "lucide-react";

const categories = [
  {
    id: "quantum-mechanics",
    name: "Quantum Mechanics",
    description: "From wave mechanics to the axiomatic Hilbert-space formulation.",
    chapters: [
      { id: 1, title: "Chapter 1 — The Failure of Classical Physics", date: "2024-03-12", description: "Blackbody radiation, photoelectric effect, and the path to quantisation." },
      { id: 2, title: "Chapter 2 — Wave Functions & the Schrödinger Equation", date: "2024-03-20", description: "Probability interpretation, normalization, and time evolution." },
      { id: 3, title: "Chapter 3 — Operators and Observables", date: "2024-04-01", description: "Hermitian operators, eigenvalues, and the measurement postulate." },
    ],
  },
  {
    id: "topology",
    name: "Topology",
    description: "Point-set foundations through to the fundamental group.",
    chapters: [
      { id: 4, title: "Chapter 1 — Topological Spaces", date: "2024-02-28", description: "Definitions of open sets, neighborhoods, bases, and sub-bases." },
      { id: 5, title: "Chapter 2 — Compactness & Connectedness", date: "2024-03-05", description: "Finite-cover characterisations, path-connectedness, and components." },
    ],
  },
  {
    id: "linear-algebra",
    name: "Linear Algebra",
    description: "Linear maps as the central objects — matrices as a computational tool.",
    chapters: [
      { id: 6, title: "Chapter 1 — Vector Spaces", date: "2024-01-15", description: "Axioms, subspaces, span, linear independence, and bases." },
      { id: 7, title: "Chapter 2 — Linear Maps", date: "2024-01-22", description: "Null space, range, rank-nullity theorem." },
      { id: 8, title: "Chapter 3 — Inner Product Spaces", date: "2024-01-30", description: "Gram-Schmidt, orthogonal projections, and the spectral theorem." },
    ],
  },
  {
    id: "real-analysis",
    name: "Real Analysis",
    description: "Rigorous foundations of limits, continuity, differentiation, and integration.",
    chapters: [
      { id: 9, title: "Chapter 1 — The Real Numbers", date: "2023-11-04", description: "Completeness axiom, supremum, infimum, and Archimedean property." },
      { id: 10, title: "Chapter 2 — Sequences and Series", date: "2023-11-18", description: "Cauchy sequences, convergence tests, and power series." },
      { id: 11, title: "Chapter 3 — Measure Theory & Lebesgue Integration", date: "2023-12-02", description: "Why Riemann integration fails and how Lebesgue measure resolves it." },
    ],
  },
  {
    id: "mathematical-physics",
    name: "Mathematical Physics",
    description: "The mathematical language behind classical and quantum theories.",
    chapters: [
      { id: 12, title: "Chapter 1 — Lagrangian Formalism", date: "2023-09-10", description: "Calculus of variations, Euler-Lagrange equations, and constraints." },
      { id: 13, title: "Chapter 2 — Symmetries and Conservation Laws", date: "2023-09-22", description: "Noether's theorem: every continuous symmetry yields a conserved current." },
    ],
  },
];

export default function Notes() {
  const [openCategory, setOpenCategory] = useState<string | null>(null);

  function toggle(id: string) {
    setOpenCategory((prev) => (prev === id ? null : id));
  }

  return (
    <div className="space-y-12">
      <header className="space-y-4 border-b border-border/50 pb-8">
        <h1 className="text-4xl font-bold tracking-tight">Notes & Lectures</h1>
        <p className="text-xl text-muted-foreground">
          Select a subject to browse the chapters.
        </p>
      </header>

      <div className="space-y-3">
        {categories.map((cat) => {
          const isOpen = openCategory === cat.id;
          return (
            <div
              key={cat.id}
              className="border border-border/50 bg-card overflow-hidden"
              data-testid={`category-${cat.id}`}
            >
              <button
                onClick={() => toggle(cat.id)}
                className="w-full flex items-center justify-between gap-4 p-6 text-left hover:bg-secondary/20 transition-colors duration-200"
                data-testid={`category-toggle-${cat.id}`}
              >
                <div className="space-y-1">
                  <h2 className="text-xl font-semibold">{cat.name}</h2>
                  <p className="text-sm text-muted-foreground">{cat.description}</p>
                </div>
                <div className="flex items-center gap-3 shrink-0">
                  <span className="text-xs font-mono text-muted-foreground">
                    {cat.chapters.length} {cat.chapters.length === 1 ? "chapter" : "chapters"}
                  </span>
                  {isOpen ? (
                    <ChevronDown className="w-5 h-5 text-muted-foreground" />
                  ) : (
                    <ChevronRight className="w-5 h-5 text-muted-foreground" />
                  )}
                </div>
              </button>

              {isOpen && (
                <div className="border-t border-border/50 divide-y divide-border/30">
                  {cat.chapters.map((ch) => (
                    <div
                      key={ch.id}
                      className="flex items-start gap-4 px-6 py-5 hover:bg-secondary/10 transition-colors duration-150"
                      data-testid={`chapter-${ch.id}`}
                    >
                      <FileText className="w-4 h-4 mt-1 shrink-0 text-muted-foreground" />
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1">
                          <h3 className="font-medium">{ch.title}</h3>
                          <time className="text-xs font-mono text-muted-foreground shrink-0">{ch.date}</time>
                        </div>
                        <p className="text-sm text-muted-foreground leading-relaxed">{ch.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
