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
    <div className="paper-texture flex min-h-[100dvh] flex-col md:flex-row">
      <div className="physics-equations" aria-hidden="true">
        <svg xmlns="http://www.w3.org/2000/svg" focusable="false">
          <defs>
            <pattern id="physics-equation-pattern" width="1000" height="820" patternUnits="userSpaceOnUse">
              <g fill="currentColor" fontSize="28">
                <text x="52" y="90" transform="rotate(-7 52 90)">∇ · E = ρ/ε₀</text>
                <text x="660" y="155" transform="rotate(6 660 155)">E = mc²</text>
                <text x="320" y="325" transform="rotate(-5 320 325)">iℏ ∂ψ/∂t = Ĥψ</text>
                <text x="45" y="490" transform="rotate(5 45 490)">∇ × E = −∂B/∂t</text>
                <text x="650" y="565" transform="rotate(-6 650 565)">[x̂, p̂] = iℏ</text>
                <text x="270" y="735" transform="rotate(4 270 735)">∇ · B = 0</text>
              </g>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#physics-equation-pattern)" />
        </svg>
      </div>
      <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-card focus:p-3">Skip to content</a>
      <aside className="z-40 flex w-full shrink-0 flex-col border-b border-border/50 bg-card/90 p-5 md:sticky md:top-0 md:h-screen md:w-56 md:border-b-0 md:border-r md:p-6">
        <Link href="/" className="mb-5 flex items-center gap-3 md:mb-12 md:flex-col md:items-start">
          <span aria-hidden="true" className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary font-serif text-lg text-primary-foreground">AN</span>
          <span className="font-serif text-xl font-semibold leading-tight">Ahmed Alotaibi<span className="mt-1 block font-sans text-xs font-normal text-muted-foreground">Physics &amp; Mathematics</span></span>
        </Link>
        <nav aria-label="Main navigation" className="flex flex-wrap gap-1 md:flex-col md:gap-2">
          {navItems.map(item => {
            const currentPath = location.replace(/\/+$/, "") || "/";
            const isActive = currentPath === item.href || (item.href === "/notes" && currentPath.startsWith("/notes/"));
            return (
              <Link key={item.href} href={item.href} aria-current={isActive ? "page" : undefined} data-testid={`nav-${item.label.toLowerCase()}`} className={`flex items-center gap-2 rounded-lg px-3 py-2.5 text-sm transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary ${isActive ? "bg-secondary font-semibold text-primary" : "text-muted-foreground hover:bg-secondary/60 hover:text-primary"}`}>
                <item.icon aria-hidden="true" className="h-4 w-4 shrink-0" />{item.label}
              </Link>
            );
          })}
        </nav>
        <div className="mt-auto hidden border-t border-border/50 pt-5 text-xs leading-relaxed text-muted-foreground md:block">Notes, ideas, and explorations.<br /><span className="mt-3 block">© {new Date().getFullYear()} Ahmed Alotaibi</span></div>
      </aside>
      <main id="main-content" tabIndex={-1} className="mx-auto w-full min-w-0 max-w-6xl flex-1 px-5 py-10 outline-none sm:px-8 md:py-14 lg:px-12">{children}</main>
    </div>
  );
}
