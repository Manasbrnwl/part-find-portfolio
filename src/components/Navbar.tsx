import { useState } from "react";
import { Sun, Moon, Menu, X, Ticket } from "lucide-react";
import { useTheme } from "@/lib/theme";
import { defaultContent } from "@/lib/content";

interface NavbarProps {
  content?: typeof defaultContent.navbar;
}

export function Navbar({ content = defaultContent.navbar }: NavbarProps) {
  const { theme, toggleTheme } = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav
      id="navbar"
      className="fixed top-0 left-0 right-0 z-50 border-b-2 border-themed bg-[hsl(var(--bg))]/80 backdrop-blur-xl"
    >
      <div className="container mx-auto px-4 md:px-6 max-w-7xl flex items-center justify-between h-16">
        <a 
          href="/" 
          className="flex items-center gap-3 group transition-transform duration-200 active:scale-95"
        >
          {content.logo ? (
            <img 
              src={content.logo} 
              alt={content.brand} 
              className="w-10 h-10 object-contain rounded-full border-2 border-themed group-hover:scale-105 transition-transform duration-200"
            />
          ) : (
            <div className="w-8 h-8 bg-brand flex items-center justify-center border-2 border-black rotate-3 group-hover:rotate-6 transition-transform duration-200 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
              <Ticket className="h-4 w-4 text-white -rotate-3 group-hover:-rotate-6 transition-transform duration-200" />
            </div>
          )}
          <span className="font-syne font-extrabold text-2xl tracking-tighter uppercase whitespace-nowrap">
            {content.brand}
          </span>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {content.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-outfit text-sm font-medium tracking-wide uppercase text-muted hover:text-[hsl(var(--fg))] transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={toggleTheme}
            className="w-10 h-10 border-2 border-themed flex items-center justify-center hover:border-accent transition-colors duration-200"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? (
              <Sun className="h-4 w-4" />
            ) : (
              <Moon className="h-4 w-4" />
            )}
          </button>

          <a
            href={content.cta.href}
            className="hidden md:inline-flex h-10 px-6 bg-accent text-black font-bold text-xs tracking-wider uppercase items-center border-2 border-black hover:bg-accent-hover transition-colors duration-200 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:shadow-none active:translate-x-1 active:translate-y-1"
          >
            {content.cta.label}
          </a>

          <button
            className="md:hidden w-10 h-10 border-2 border-themed flex items-center justify-center"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <X className="h-4 w-4" />
            ) : (
              <Menu className="h-4 w-4" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t-2 border-themed bg-[hsl(var(--bg))] px-4 py-6 space-y-4">
          {content.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="block font-outfit text-base font-medium uppercase tracking-wide"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href={content.cta.href}
            className="inline-flex h-10 px-6 bg-accent text-black font-bold text-xs tracking-wider uppercase items-center border-2 border-black w-full justify-center"
            onClick={() => setMobileOpen(false)}
          >
            {content.cta.label}
          </a>
        </div>
      )}
    </nav>
  );
}
