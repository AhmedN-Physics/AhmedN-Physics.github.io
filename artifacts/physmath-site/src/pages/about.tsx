export default function About() {
  return (
    <div className="flex flex-col gap-12 max-w-3xl">
      <header className="space-y-4 border-b border-border/50 pb-8">
        <h1 className="text-4xl font-bold tracking-tight">About</h1>
        <p className="text-xl text-muted-foreground font-medium italic">
          Educator, Researcher, Lifelong Student.
        </p>
      </header>

      <div className="prose prose-lg dark:prose-invert font-sans text-muted-foreground">
        <p>
          My name is [Name], and I run the <strong>physmath done right</strong> channel. 
          My background lies at the intersection of theoretical physics and pure mathematics, 
          specifically in mathematical physics, differential geometry, and quantum field theory.
        </p>
        
        <h3 className="text-foreground mt-8 mb-4 font-serif text-2xl">Teaching Philosophy</h3>
        <p>
          I believe that mathematics should not be a collection of disparate tricks, but a cohesive 
          narrative. When teaching, my goal is to highlight the underlying structures and symmetries 
          that govern physical laws. A rigorous proof is not just a verification of truth, but an 
          explanation of why that truth must hold.
        </p>

        <h3 className="text-foreground mt-8 mb-4 font-serif text-2xl">Academic Background</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Ph.D. in Mathematical Physics</strong> — Focus on topological quantum field theories.</li>
          <li><strong>M.Sc. in Pure Mathematics</strong> — Thesis on manifold structures in gauge theory.</li>
          <li><strong>B.Sc. in Physics and Mathematics</strong></li>
        </ul>
      </div>
    </div>
  );
}
