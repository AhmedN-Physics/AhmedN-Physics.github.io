import { Badge } from "@/components/ui/badge";

const notes = [
  {
    id: 1,
    title: "Lagrangian & Hamiltonian Mechanics",
    category: "Classical Mechanics",
    description: "An axiomatic approach to classical mechanics using the calculus of variations. Moving from Newtonian forces to energy-based formulations.",
    date: "2024-03-12"
  },
  {
    id: 2,
    title: "Introduction to Point-Set Topology",
    category: "Topology",
    description: "Definitions of open sets, neighborhoods, compactness, and connectedness. The foundation for real analysis and geometry.",
    date: "2024-02-28"
  },
  {
    id: 3,
    title: "Linear Algebra Done Right: A Summary",
    category: "Linear Algebra",
    description: "Focusing on linear maps as the primary objects of study rather than matrices. Determinants deferred to the end.",
    date: "2024-01-15"
  },
  {
    id: 4,
    title: "Measure Theory & Lebesgue Integration",
    category: "Real Analysis",
    description: "Why Riemann integration fails and how Lebesgue measure solves the problem of integrating over arbitrary sets.",
    date: "2023-11-04"
  },
  {
    id: 5,
    title: "Symmetries and Conservation Laws",
    category: "Mathematical Physics",
    description: "Noether's Theorem in depth. How every continuous symmetry of the action corresponds to a conserved current.",
    date: "2023-09-22"
  }
];

export default function Notes() {
  return (
    <div className="space-y-12">
      <header className="space-y-4 border-b border-border/50 pb-8">
        <h1 className="text-4xl font-bold tracking-tight">Notes & Lectures</h1>
        <p className="text-xl text-muted-foreground">
          Handwritten and typeset notes accompanying my lectures and independent study.
        </p>
      </header>

      <div className="grid gap-6">
        {notes.map((note) => (
          <article 
            key={note.id} 
            className="group block p-6 border border-border/50 bg-card hover:bg-secondary/20 transition-all duration-300"
            data-testid={`note-card-${note.id}`}
          >
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
              <div>
                <Badge variant="outline" className="font-mono text-xs rounded-none bg-background mb-3" data-testid={`note-category-${note.id}`}>
                  {note.category}
                </Badge>
                <h2 className="text-xl font-semibold group-hover:text-primary transition-colors cursor-pointer">
                  {note.title}
                </h2>
              </div>
              <time className="text-sm font-mono text-muted-foreground shrink-0 mt-1">
                {note.date}
              </time>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              {note.description}
            </p>
          </article>
        ))}
      </div>
    </div>
  );
}
