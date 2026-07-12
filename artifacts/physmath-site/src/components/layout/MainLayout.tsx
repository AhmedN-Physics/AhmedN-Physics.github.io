import { Link, useLocation } from "wouter";
import { BookOpen, FileText, Home, Mail, User } from "lucide-react";

export function MainLayout({ children }: { children: React.ReactNode }) {
  const [location] = useLocation();

  const navItems = [
    { href: "/", label: "Home", icon: Home },
    { href: "/about", label: "About", icon: User },
    { href: "/notes", label: "Notes", icon: BookOpen },
    { href: "/publications", label: "Publications", icon: FileText },
    { href: "/contact", label: "Contact", icon: Mail },
  ];

  return (
    <div className="min-h-[100dvh] flex flex-col md:flex-row paper-texture">
      {/* Sidebar Navigation */}
      <aside className="w-full md:w-64 border-b md:border-b-0 md:border-r border-border/50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 p-6 flex flex-col md:sticky md:top-0 md:h-screen shrink-0 z-40">
        <div className="mb-12 hidden md:block">
          <Link href="/" className="text-xl font-bold tracking-tight text-primary">
            Ahmed <br />
            <span className="text-muted-foreground font-mono text-sm tracking-normal">Alotaibi</span>
          </Link>
        </div>
        
        <nav className="flex md:flex-col gap-4 overflow-x-auto md:overflow-x-visible pb-4 md:pb-0">
          {navItems.map((item) => {
            const isActive = location === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-3 px-3 py-2 text-sm transition-colors hover:text-primary whitespace-nowrap ${
                  isActive ? "text-primary font-medium border-l-2 border-primary -ml-[2px] bg-secondary/50" : "text-muted-foreground"
                }`}
                data-testid={`nav-${item.label.toLowerCase()}`}
              >
                <item.icon className="w-4 h-4 shrink-0" />
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="mt-auto hidden md:block pt-8 text-xs text-muted-foreground font-mono">
          © {new Date().getFullYear()} Ahmed Alotaibi
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 max-w-4xl px-6 py-12 md:py-24 mx-auto w-full animate-in fade-in duration-700">
        {children}
      </main>
    </div>
  );
}
