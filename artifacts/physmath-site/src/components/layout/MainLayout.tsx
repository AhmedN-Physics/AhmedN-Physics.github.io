import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "wouter";
import { BookOpen, FileText, Home, Mail, User, Menu, X } from "lucide-react";

export function MainLayout({ children }: { children: React.ReactNode }) {
  const [location] = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);
  useEffect(() => { setMenuOpen(false); }, [location]);
  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 768px)");
    const closeOnDesktop = () => { if (desktop.matches) setMenuOpen(false); };
    desktop.addEventListener("change", closeOnDesktop);
    return () => desktop.removeEventListener("change", closeOnDesktop);
  }, []);
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
              <g fill="currentColor" fontSize="26">
                <text x="45" y="70" transform="rotate(-5 45 70)">∇ · E = ρ/ε₀</text>
                <text x="440" y="95" transform="rotate(4 440 95)">E = mc²</text>
                <text x="725" y="65" transform="rotate(-4 725 65)">∇ · B = 0</text>
                <text x="65" y="210" fontSize="23" transform="rotate(-3 65 210)">
                  H = −t ∑<tspan baselineShift="sub" fontSize="15">⟨ij⟩,σ</tspan><tspan> (c</tspan><tspan baselineShift="super" fontSize="15">†</tspan><tspan baselineShift="sub" fontSize="15">iσ</tspan><tspan>c</tspan><tspan baselineShift="sub" fontSize="15">jσ</tspan><tspan> + h.c.) + U ∑</tspan><tspan baselineShift="sub" fontSize="15">i</tspan><tspan> n</tspan><tspan baselineShift="sub" fontSize="15">i↑</tspan><tspan>n</tspan><tspan baselineShift="sub" fontSize="15">i↓</tspan>
                </text>
                <text x="50" y="350" transform="rotate(4 50 350)">iℏ ∂ψ/∂t = Ĥψ</text>
                <text x="500" y="325" transform="rotate(-4 500 325)">Δx Δp ≥ ℏ/2</text>
                <text x="770" y="385" transform="rotate(5 770 385)">F = ma</text>
                <text x="80" y="480" transform="rotate(-4 80 480)">∇ × E = −∂B/∂t</text>
                <text x="560" y="490" transform="rotate(4 560 490)">[x̂, p̂] = iℏ</text>
                <text x="40" y="620" transform="rotate(3 40 620)">∇ × B = μ₀J + μ₀ε₀ ∂E/∂t</text>
                <text x="650" y="630" transform="rotate(-4 650 630)">S = k<tspan baselineShift="sub" fontSize="17">B</tspan> ln Ω</text>
                <text x="110" y="765" transform="rotate(-3 110 765)">δS = 0</text>
                <text x="460" y="760" transform="rotate(3 460 760)">E = ℏω</text>
              </g>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#physics-equation-pattern)" />
        </svg>
      </div>
      <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-card focus:p-3">Skip to content</a>
      <aside onKeyDown={event => {
        if (event.key === "Escape" && menuOpen) {
          setMenuOpen(false);
          menuButton.current?.focus();
        }
      }} className="sticky top-0 z-40 flex w-full shrink-0 flex-col border-b border-border/50 bg-card/95 px-4 py-3 backdrop-blur-md md:h-screen md:w-56 md:border-b-0 md:border-r md:p-6">
        <div className="flex items-center justify-between gap-3 md:block">
        <Link href="/" className="flex min-w-0 items-center gap-2.5 md:mb-12 md:flex-col md:items-start">
          <span aria-hidden="true" className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary font-serif text-lg text-primary-foreground">AN</span>
          <span className="font-serif text-base font-semibold leading-tight md:text-xl">Ahmed Alotaibi<span className="mt-1 block font-sans text-xs font-normal text-muted-foreground">Physics &amp; Mathematics</span></span>
        </Link>
        <button ref={menuButton} type="button" aria-expanded={menuOpen} aria-controls="main-navigation" onClick={() => setMenuOpen(open => !open)} className="flex min-h-11 shrink-0 items-center gap-2 rounded-lg border border-border bg-background px-3 text-sm font-semibold text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary md:hidden">
          {menuOpen ? <X aria-hidden="true" className="h-5 w-5" /> : <Menu aria-hidden="true" className="h-5 w-5" />}
          {menuOpen ? "Close" : "Menu"}
        </button>
        </div>
        <nav id="main-navigation" aria-label="Main navigation" className={`${menuOpen ? "flex" : "hidden"} mt-3 max-h-[calc(100dvh-6rem)] flex-col gap-1 overflow-y-auto border-t border-border/50 pt-3 md:mt-0 md:flex md:max-h-none md:gap-2 md:border-0 md:pt-0`}>
          {navItems.map(item => {
            const currentPath = location.replace(/\/+$/, "") || "/";
            const isActive = currentPath === item.href || (item.href === "/notes" && currentPath.startsWith("/notes/"));
            return (
              <Link key={item.href} href={item.href} onClick={() => { if (menuOpen) { setMenuOpen(false); menuButton.current?.focus(); } }} aria-current={isActive ? "page" : undefined} data-testid={`nav-${item.label.toLowerCase()}`} className={`flex min-h-12 items-center gap-3 rounded-lg px-3 py-3 text-base md:min-h-11 md:py-2.5 md:text-sm transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary ${isActive ? "bg-secondary font-semibold text-primary" : "text-muted-foreground hover:bg-secondary/60 hover:text-primary"}`}>
                <item.icon aria-hidden="true" className="h-4 w-4 shrink-0" />{item.label}
              </Link>
            );
          })}
        </nav>
        <div className="mt-auto hidden border-t border-border/50 pt-5 text-xs leading-relaxed text-muted-foreground md:block">Notes, ideas, and explorations.<br /><span className="mt-3 block">© {new Date().getFullYear()} Ahmed Alotaibi</span></div>
      </aside>
      <main id="main-content" tabIndex={-1} className="scroll-mt-24 mx-auto w-full min-w-0 max-w-6xl flex-1 px-5 py-10 outline-none sm:px-8 md:py-14 lg:px-12">{children}</main>
    </div>
  );
}
