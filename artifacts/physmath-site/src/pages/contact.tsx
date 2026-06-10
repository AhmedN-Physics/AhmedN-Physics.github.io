import { Mail, Github, Youtube, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Contact() {
  return (
    <div className="space-y-12 max-w-2xl">
      <header className="space-y-4 border-b border-border/50 pb-8">
        <h1 className="text-4xl font-bold tracking-tight">Contact</h1>
        <p className="text-xl text-muted-foreground">
          Reach out for collaborations, questions, or just to discuss mathematics.
        </p>
      </header>

      <div className="space-y-8">
        <div className="space-y-4">
          <h2 className="text-lg font-semibold border-b border-border/30 pb-2 inline-block">Email</h2>
          <p className="text-muted-foreground">
            For professional inquiries, tutoring requests, or academic discussions:
          </p>
          <Button variant="outline" className="font-mono text-sm" asChild data-testid="link-email">
            <a href="mailto:ahmedalotaibiphys@gmail.com">
              <Mail className="w-4 h-4 mr-2" />
              ahmedalotaibiphys@gmail.com
            </a>
          </Button>
        </div>

        <div className="space-y-4 pt-6">
          <h2 className="text-lg font-semibold border-b border-border/30 pb-2 inline-block">Digital Presence</h2>
          <div className="flex flex-col gap-4">
            <a 
              href="https://youtube.com/@physmathdoneright?si=nEzytJ7-G2S39nPG" 
              target="_blank" 
              rel="noreferrer"
              className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors p-3 border border-border/50 bg-card hover:bg-secondary/20"
              data-testid="link-youtube"
            >
              <Youtube className="w-5 h-5 shrink-0" />
              <div>
                <div className="font-medium text-foreground">YouTube</div>
                <div className="text-sm font-mono">Video lectures and problem solving</div>
              </div>
            </a>
            
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noreferrer"
              className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors p-3 border border-border/50 bg-card hover:bg-secondary/20"
              data-testid="link-github"
            >
              <Github className="w-5 h-5 shrink-0" />
              <div>
                <div className="font-medium text-foreground">GitHub</div>
                <div className="text-sm font-mono">Code for numerical simulations and plots</div>
              </div>
            </a>

            <a 
              href="#" 
              target="_blank" 
              rel="noreferrer"
              className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors p-3 border border-border/50 bg-card hover:bg-secondary/20"
              data-testid="link-arxiv"
            >
              <BookOpen className="w-5 h-5 shrink-0" />
              <div>
                <div className="font-medium text-foreground">arXiv</div>
                <div className="text-sm font-mono">Preprints and drafts</div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
