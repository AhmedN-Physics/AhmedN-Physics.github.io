import { useEffect, useState } from "react";
import { useSearch } from "wouter";
import {
  ChevronDown,
  ChevronRight,
  ExternalLink,
  FileText,
} from "lucide-react";

type Chapter = {
  id: number;
  title: string;
  description: string;
  date?: string;
  pdfUrl?: string | null;
  solvedPdfUrl?: string | null;
  unsolvedPdfUrl?: string | null;
};

type Category = {
  id: string;
  name: string;
  description: string;
  chapters?: Chapter[];
  pdfUrl?: string;
};

const categories: Category[] = [
  {
    id: "electromagnetism-in-a-nutshell",
    name: "Electromagnetism in a nutshell",
    description:
      "An introduction to the fundamental principles and mathematical framework of electromagnetism, including vector calculus and electrostatics.",
    chapters: [
      {
        id: 1,
        title: "Chapter 1 — Vector Calculus ",
        description:
          "This lecture introduces the mathematical framework of vector calculus, including vector fields, divergence, curl, and the fundamental theorems of vector calculus.",
        // Replace null with the PDF path once the file is available.
        solvedPdfUrl: null,
        unsolvedPdfUrl: null,
      },
      {
        id: 2,
        title: "Chapter 2 — Electrostatics ",
        description:
          "Probability interpretation, normalization, and time evolution.",
        // Replace null with the PDF path once the file is available.
        solvedPdfUrl: null,
        unsolvedPdfUrl: null,
      },
      
    ],
  },
  
  {
    id: "quantum-mechanics",
    name: "Quantum Mechanics",
    description:
      "An introduction to the fundamental principles and applications of quantum mechanics.",
    chapters: [
      {
        id: 1,
        title: "Chapter 1 — Introduction to Quantum Mechanics",
        description:
          "This lecture introduces the historical development of quantum mechanics, the Schrödinger equation, Born’s probability interpretation, wavefunction normalization, expectation values, statistical uncertainty, and the operators associated with position and momentum.",
        pdfUrl: "/website/youtube notes/QM1/QM1,LEC 1.pdf",
      },
      {
        id: 2,
        title: "Chapter 2 — The Schrödinger Equation",
        description:
          "Probability interpretation, normalization, and time evolution.",
        pdfUrl: "/website/youtube notes/QM1/QM1, LEC2.pdf",
      },
      {
        id: 3,
        title: "Chapter 3 — Formalism of Quantum Mechanics",
        description:
          "A discussion of the mathematical formalism of quantum theory, consisting of states in Hilbert space and operators corresponding to observables.",
        pdfUrl: "/website/youtube notes/QM1/QM1, LEC3.pdf",
      },
    ],
  },
  {
    id: "linear-algebra",
    name: "Linear Algebra for Quantum Mechanics",
    description:
      "A concise introduction to linear algebra, focusing on the concepts and techniques most relevant to quantum mechanics.",
    pdfUrl: "/website/youtube notes/QM1/LAQM.pdf",
  },

  {id: "qed",
    name: " QED and Pseudo Quantum Electrodynamics",
    description:"discussion of a recent extension of QED applicable to condensed matter systems, known as Pseudo Quantum Electrodynamics (PQED).",
    pdfUrl: "/website/physics things/pqed.pdf",
  },
   {id: "topology of R",
    name: " Topology of R",
    description:" A discussion of the topology of the real line, including open and closed sets, limit points, and continuity.",
    pdfUrl: "/website/math things/The Topology of R.pdf",
  },

  {
    id: "Alexandroff Spaces",
    name: "Alexandroff Spaces",
    description:
      "An introduction to Alexandroff spaces, a class of topological spaces that are particularly useful in the study of order theory and lattice theory.",
    chapters: [
      {
        id: 1,
        title: "introduction to Alexandroff Spaces",
        description:
          "This paper introduces the concept of Alexandroff spaces, their properties, and examples",
        pdfUrl: "/website/math things/Alexandroff Spaces.pdf",
      },
      {
        id: 2,
        title: "Presentation - Alexandroff Spaces",
        description:
          "This presentation provides an overview of Alexandroff spaces, including their definitionn",
        pdfUrl: "/website/math things/Alexandroff_slides.pdf",
      },]
  },

  {
    id: "partition theory",
    name: "Partition Theory",
    description:
      "An introduction to partition theory, a branch of number theory that deals with the ways of writing a number as a sum of positive integers.",
    chapters: [
      {
        id: 1,
        title: "introduction to Partition Theory",
        description:
          "This paper introduces the concept of partition theory, their properties, and examples",
        pdfUrl: "/website/math things/Partition Theory.pdf",
      },
      {
        id: 2,
        title: "Presentation - Partition Theory",
        description:
          "This presentation provides an overview of partition theory, including their definitionn",
        pdfUrl: "/website/math things/partition-slides.pdf",
      },]
  },

   {id: "Calculus of Variations",
    name: "Calculus of Variations",
    description:" A discussion of the calculus of variations, including the Euler-Lagrange equation and its applications.",
    pdfUrl: "/website/math things/Calculus of Variations.pdf",
  },

  
 
];

function ChapterPdfLinks({ chapter }: { chapter: Chapter }) {
  const hasVersions =
    chapter.solvedPdfUrl !== undefined || chapter.unsolvedPdfUrl !== undefined;
  const links = hasVersions
    ? [
        { key: "solved", label: "Solved PDF", url: chapter.solvedPdfUrl },
        { key: "unsolved", label: "Unsolved PDF", url: chapter.unsolvedPdfUrl },
      ]
    : [{ key: "original", label: "View PDF", url: chapter.pdfUrl }];

  return (
    <div className="flex flex-wrap gap-2 sm:flex-col sm:items-end">
      {links.map(({ key, label, url }) =>
        url ? (
          <a
            key={key}
            href={url}
            target="_blank"
            rel="noreferrer"
            aria-label={`${chapter.title.trim()} — ${label} (opens in a new tab)`}
            className="inline-flex items-center justify-center gap-1.5 whitespace-nowrap border border-primary/60 px-3 py-1.5 font-mono text-xs text-primary transition-colors duration-150 hover:bg-primary hover:text-primary-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            <ExternalLink aria-hidden="true" className="h-3 w-3" />
            {label}
          </a>
        ) : (
          <span
            key={key}
            className="inline-flex items-center gap-1.5 border border-border/40 px-3 py-1.5 font-mono text-xs text-muted-foreground"
          >
            <FileText aria-hidden="true" className="h-3 w-3 shrink-0" />
            {hasVersions ? `${label} — Coming soon` : "Coming soon"}
          </span>
        ),
      )}
    </div>
  );
}

export default function Notes() {
  const search = useSearch();
  const requestedCategory = new URLSearchParams(search).get("category");
  const targetCategory = categories.find(({ id }) => id === requestedCategory)?.id ?? null;
  const [openCategory, setOpenCategory] = useState<string | null>(targetCategory);

  useEffect(() => {
    if (!targetCategory) return;

    setOpenCategory(targetCategory);
    const frame = requestAnimationFrame(() => {
      document.getElementById(`note-${targetCategory}`)?.scrollIntoView({
        block: "start",
      });
    });
    return () => cancelAnimationFrame(frame);
  }, [targetCategory]);

  function toggle(id: string) {
    setOpenCategory((previous) => (previous === id ? null : id));
  }

  return (
    <div className="space-y-12">
      <header className="space-y-4 border-b border-border/50 pb-8">
        <h1 className="text-4xl font-bold tracking-tight">
          Notes &amp; Lectures
        </h1>

        <p className="text-xl text-muted-foreground">
          Select a subject to browse its chapters or open the complete file.
        </p>
      </header>

      <div className="space-y-3">
        {categories.map((category) => {
          const isOpen = openCategory === category.id;
          const chapterCount = category.chapters?.length ?? 0;

          return (
            <div
              key={category.id}
              id={`note-${category.id}`}
              className="scroll-mt-6 overflow-hidden border border-border/50 bg-card"
              data-testid={`category-${category.id}`}
            >
              <button
                type="button"
                onClick={() => toggle(category.id)}
                aria-expanded={isOpen}
                className="flex w-full items-center justify-between gap-4 p-6 text-left transition-colors duration-200 hover:bg-secondary/20"
                data-testid={`category-toggle-${category.id}`}
              >
                <div className="space-y-1">
                  <h2 className="text-xl font-semibold">{category.name}</h2>

                  <p className="text-sm text-muted-foreground">
                    {category.description}
                  </p>
                </div>

                <div className="flex shrink-0 items-center gap-3">
                  <span className="font-mono text-xs text-muted-foreground">
                    {category.pdfUrl
                      ? "1 file"
                      : `${chapterCount} ${
                          chapterCount === 1 ? "chapter" : "chapters"
                        }`}
                  </span>

                  {isOpen ? (
                    <ChevronDown className="h-5 w-5 text-muted-foreground" />
                  ) : (
                    <ChevronRight className="h-5 w-5 text-muted-foreground" />
                  )}
                </div>
              </button>

              {isOpen && (
                <div className="divide-y divide-border/30 border-t border-border/50">
                  {category.pdfUrl ? (
                    <div
                      className="flex items-start gap-4 px-6 py-5 transition-colors duration-150 hover:bg-secondary/10"
                      data-testid={`single-file-${category.id}`}
                    >
                      <FileText className="mt-1 h-4 w-4 shrink-0 text-muted-foreground" />

                      <div className="flex min-w-0 flex-1 flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                        <div className="min-w-0">
                          <h3 className="font-medium">{category.name}</h3>

                          <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                            Complete notes available as one PDF file.
                          </p>
                        </div>

                        <a
                          href={category.pdfUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex shrink-0 items-center justify-center gap-1.5 border border-primary/60 px-3 py-1.5 font-mono text-xs text-primary transition-colors duration-150 hover:bg-primary hover:text-primary-foreground"
                          data-testid={`pdf-link-${category.id}`}
                        >
                          <ExternalLink className="h-3 w-3" />
                          View PDF
                        </a>
                      </div>
                    </div>
                  ) : (
                    category.chapters?.map((chapter) => (
                      <div
                        key={chapter.id}
                        className="flex items-start gap-4 px-6 py-5 transition-colors duration-150 hover:bg-secondary/10"
                        data-testid={`chapter-${chapter.id}`}
                      >
                        <FileText className="mt-1 h-4 w-4 shrink-0 text-muted-foreground" />

                        <div className="min-w-0 flex-1">
                          <div className="mb-1 flex flex-col justify-between gap-2 sm:flex-row sm:items-start">
                            <div className="min-w-0 flex-1">
                              <h3 className="font-medium">{chapter.title}</h3>

                              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                                {chapter.description}
                              </p>
                            </div>

                            <div className="flex flex-wrap items-center gap-3 sm:ml-4 sm:max-w-[45%] sm:shrink-0 sm:flex-col sm:items-end">
                              {chapter.date && (
                                <time className="font-mono text-xs text-muted-foreground">
                                  {chapter.date}
                                </time>
                              )}

                              <ChapterPdfLinks chapter={chapter} />
                            </div>
                          </div>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}