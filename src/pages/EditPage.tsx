import { useState, useCallback } from "react";
import { getContent, saveContent, resetContent, defaultContent } from "@/lib/content";
import { Save, RotateCcw, Check, AlertTriangle, ArrowLeft } from "lucide-react";
import { toast } from "sonner";
import { Link } from "react-router-dom";

const SECTION_LABELS: Record<string, string> = {
  navbar: "Navbar",
  hero: "Hero Section",
  services: "Services Section",
  stats: "Stats Section",
  workGallery: "Work Gallery",
  testimonials: "Testimonials Section",
  cta: "Final CTA",
  footer: "Footer",
};

export function EditPage() {
  const [content, setContent] = useState(getContent());
  const [activeSection, setActiveSection] = useState<string>("hero");
  const [jsonText, setJsonText] = useState(() =>
    JSON.stringify(getContent().hero, null, 2)
  );
  const [jsonError, setJsonError] = useState<string | null>(null);

  const handleSectionChange = useCallback(
    (section: string) => {
      setActiveSection(section);
      setJsonText(JSON.stringify((content as any)[section] || {}, null, 2));
      setJsonError(null);
    },
    [content]
  );

  const handleJsonChange = (value: string) => {
    setJsonText(value);
    try {
      JSON.parse(value);
      setJsonError(null);
    } catch (e: any) {
      setJsonError(e.message);
    }
  };

  const handleSave = () => {
    try {
      const parsed = JSON.parse(jsonText);
      const updated = { ...content, [activeSection]: parsed };
      saveContent(updated);
      setContent(updated);
      setJsonError(null);
      toast.success(`${SECTION_LABELS[activeSection]} saved successfully!`);
    } catch (e: any) {
      setJsonError(e.message);
      toast.error("Invalid JSON. Fix errors before saving.");
    }
  };

  const handleReset = () => {
    if (confirm("Reset ALL content to defaults? This cannot be undone.")) {
      const fresh = resetContent();
      setContent(fresh);
      setJsonText(JSON.stringify((fresh as any)[activeSection] || {}, null, 2));
      setJsonError(null);
      toast.success("Content reset to defaults.");
    }
  };

  const sectionKeys = Object.keys(SECTION_LABELS);

  return (
    <div className="min-h-screen bg-[hsl(var(--bg))] text-[hsl(var(--fg))] font-outfit">
      <div className="border-b-2 border-themed bg-[hsl(var(--bg))]/80 backdrop-blur-xl sticky top-0 z-50">
        <div className="container mx-auto px-4 md:px-6 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 hover:text-accent transition-colors">
            <ArrowLeft className="h-4 w-4" />
            <span className="font-mono text-xs uppercase tracking-widest font-bold">Back to Site</span>
          </Link>
          <div className="flex gap-3">
            <button
              onClick={handleReset}
              className="h-10 px-4 border-2 border-themed flex items-center gap-2 font-mono text-xs uppercase tracking-wider hover:bg-muted transition-colors active:scale-95"
            >
              <RotateCcw className="h-3.5 w-3.5" />
              Reset All
            </button>
            <button
              onClick={handleSave}
              disabled={!!jsonError}
              className="h-10 px-6 bg-accent text-black font-bold text-xs uppercase tracking-wider flex items-center gap-2 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:bg-accent-hover transition-all active:shadow-none active:translate-x-1 active:translate-y-1 disabled:opacity-50 disabled:pointer-events-none"
            >
              <Save className="h-3.5 w-3.5" />
              Save {SECTION_LABELS[activeSection]}
            </button>
          </div>
        </div>
      </div>

      <main className="container mx-auto px-4 md:px-6 py-12 max-w-7xl">
        <div className="mb-12">
          <h1 className="font-syne text-4xl font-extrabold tracking-tighter uppercase mb-2">
            Portfolio Content CMS
          </h1>
          <p className="text-muted max-w-xl">
            Directly update your website content by editing the JSON data below. Changes are saved locally to your browser.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-3 space-y-4">
            <div className="border-2 border-themed card-bg p-2 h-fit">
              <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted p-3">
                Sections
              </div>
              <div className="space-y-1">
                {sectionKeys.map((key) => (
                  <button
                    key={key}
                    onClick={() => handleSectionChange(key)}
                    className={`w-full text-left px-4 py-3 text-sm font-bold uppercase tracking-tight transition-all ${
                      activeSection === key
                        ? "bg-brand text-white shadow-[4px_4px_0px_0px_rgba(0,0,0,0.2)]"
                        : "hover:bg-muted"
                    }`}
                  >
                    {SECTION_LABELS[key]}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Editor Area */}
          <div className="lg:col-span-9 space-y-8">
            <div className="border-2 border-themed shadow-[8px_8px_0px_0px_rgba(0,0,0,0.05)] dark:shadow-[8px_8px_0px_0px_rgba(255,255,255,0.02)]">
              <div className="border-b-2 border-themed px-6 py-4 flex items-center justify-between bg-muted/30">
                <div className="flex items-center gap-3">
                  <span className="font-syne font-extrabold text-xl uppercase italic">
                    {SECTION_LABELS[activeSection]}
                  </span>
                  {jsonError ? (
                    <span className="flex items-center gap-1.5 text-red-500 font-mono text-[10px] font-bold uppercase bg-red-500/10 px-2 py-0.5 rounded-full border border-red-500/20">
                      <AlertTriangle className="h-3 w-3" />
                      Invalid JSON
                    </span>
                  ) : (
                    <span className="flex items-center gap-1.5 text-brand font-mono text-[10px] font-bold uppercase bg-brand/10 px-2 py-0.5 rounded-full border border-brand/20">
                      <Check className="h-3 w-3" />
                      Ready to Save
                    </span>
                  )}
                </div>
                <div className="font-mono text-[10px] text-muted uppercase">
                  config.json
                </div>
              </div>

              <div className="p-1 bg-zinc-950">
                <textarea
                  value={jsonText}
                  onChange={(e) => handleJsonChange(e.target.value)}
                  className="w-full font-mono text-sm min-h-[500px] p-6 bg-transparent text-emerald-400 focus:outline-none resize-y selection:bg-brand/30"
                  spellCheck={false}
                />
              </div>

              {jsonError && (
                <div className="p-4 border-t-2 border-red-500 bg-red-500/5 font-mono text-xs text-red-400">
                  <div className="font-bold mb-1 flex items-center gap-2">
                    <AlertTriangle className="h-3.5 w-3.5" />
                    Parsing Error
                  </div>
                  {jsonError}
                </div>
              )}
            </div>

            {/* Preview Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="font-syne font-bold uppercase text-sm tracking-wider">Default Structure</h3>
                <pre className="p-4 border-2 border-themed card-bg font-mono text-[11px] text-muted h-64 overflow-auto scrollbar-thin">
                  {JSON.stringify((defaultContent as any)[activeSection], null, 2)}
                </pre>
              </div>
              <div className="space-y-4">
                <h3 className="font-syne font-bold uppercase text-sm tracking-wider text-brand">Live State</h3>
                <pre className="p-4 border-2 border-brand/30 bg-brand/5 font-mono text-[11px] text-brand h-64 overflow-auto scrollbar-thin">
                  {jsonError ? "// Fix JSON to see preview" : JSON.stringify(JSON.parse(jsonText || "{}"), null, 2)}
                </pre>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
