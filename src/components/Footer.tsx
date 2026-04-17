import { Mail, Globe, Ticket } from "lucide-react";
import { defaultContent } from "@/lib/content";

interface FooterProps {
  content?: typeof defaultContent.footer;
}

export function Footer({ content = defaultContent.footer }: FooterProps) {
  return (
    <footer className="border-t-2 border-themed py-16 bg-[hsl(var(--bg))] relative overflow-hidden">
      {/* Event Theme: Decorative logo background */}
      <div className="absolute -bottom-12 -right-12 opacity-[0.03] scale-150 rotate-12 pointer-events-none">
        <Ticket className="w-64 h-64" />
      </div>

      <div className="container mx-auto px-4 md:px-6 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-6 h-6 bg-brand flex items-center justify-center border border-black rotate-3">
                <Ticket className="h-3 w-3 text-white -rotate-3" />
              </div>
              <div className="font-syne font-extrabold text-2xl tracking-tighter uppercase whitespace-nowrap">
                {content.brand}
              </div>
            </div>
            <p className="font-outfit text-sm text-muted max-w-xs leading-relaxed">
              {content.description}
            </p>
          </div>

          {/* Links handled by Navbar for consistency, or we can use generic ones */}
          <div>
            <div className="font-mono text-xs uppercase tracking-wider text-muted mb-4 opacity-70">
              Navigation
            </div>
            <ul className="space-y-3">
              {["Services", "Our Work", "About", "Contact"].map((label) => (
                <li key={label}>
                  <a
                    href={`#${label.toLowerCase().replace(" ", "")}`}
                    className="font-outfit text-sm text-muted hover:text-brand transition-colors duration-200"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <div className="font-mono text-xs uppercase tracking-wider text-muted mb-4 opacity-70">
              Connect
            </div>
            <div className="flex items-center gap-4 mb-4">
              <a
                href={content.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border-2 border-themed flex items-center justify-center hover:border-accent hover:text-accent transition-colors duration-200 bg-card/50 backdrop-blur-sm"
                aria-label="Instagram"
              >
                <Globe className="h-4 w-4" />
              </a>
              <a
                href={`mailto:${content.email}`}
                className="w-10 h-10 border-2 border-themed flex items-center justify-center hover:border-accent hover:text-accent transition-colors duration-200 bg-card/50 backdrop-blur-sm"
                aria-label="Email"
              >
                <Mail className="h-4 w-4" />
              </a>
            </div>
            <p className="font-mono text-xs text-muted">
              {content.email}
            </p>
          </div>
        </div>

        <div className="border-t border-themed mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-mono text-xs text-muted opacity-60">
            &copy; {new Date().getFullYear()} {content.brand}. All rights reserved.
          </p>
          <div className="flex items-center gap-2 font-mono text-xs text-muted opacity-60">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            Live Event Support Active
          </div>
        </div>
      </div>
    </footer>
  );
}
