import { ExternalLink, FileText } from 'lucide-react';
import type { Chapter } from '@/lib/courses';

export function CorrectionLink({ course, chapter }: { course: string; chapter?: string }) {
  const note = chapter ? `${course.trim()} — ${chapter.trim()}` : course.trim();
  const subject = encodeURIComponent(`Correction: ${note}`);
  const body = encodeURIComponent(
    `Note: ${note}\nPDF version (with / without solutions): \nPage or exercise number: \n\nDescription of the mistake:\n\nSuggested correction (optional):\n`,
  );

  return (
    <p className="mt-3 text-xs text-muted-foreground">
      Found a mistake?{" "}
      <a
        href={`mailto:ahmedn.phys@gmail.com?subject=${subject}&body=${body}`}
        aria-label={`Report a mistake in ${note} by email`}
        className="underline underline-offset-4 hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
      >
        Let me know
      </a>
      .
    </p>
  );
}

export function ChapterPdfLinks({ chapter }: { chapter: Chapter }) {
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

