import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { defaultContent } from "@/lib/content";

interface WorkGalleryProps {
  content?: typeof defaultContent.workGallery;
}

const GALLERY_ITEMS = [
  { id: 1, category: "Hall Management", color: "bg-blue-600", icon: "🏛️" },
  { id: 2, category: "Hostess", color: "bg-purple-600", icon: "👗" },
  { id: 3, category: "Shadow", color: "bg-zinc-600", icon: "🕶️" },
  { id: 4, category: "Registration Desk", color: "bg-emerald-600", icon: "📝" },
  { id: 5, category: "Volunteers", color: "bg-rose-600", icon: "🌹" },
  { id: 6, category: "Hall Management", color: "bg-blue-800", icon: "🏛️" },
];

export function WorkGallery({ content = defaultContent.workGallery }: WorkGalleryProps) {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredItems =
    activeCategory === "All"
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === activeCategory);

  return (
    <section id="work" className="py-24 md:py-32 bg-[hsl(var(--bg))] relative">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <span className="inline-block bg-accent text-black px-3 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider mb-4">
            {content.badge}
          </span>
          <h2 className="font-syne text-4xl md:text-6xl font-bold tracking-tight uppercase">
            {content.headline}
          </h2>
          <p className="font-outfit text-base md:text-lg text-muted mt-4 max-w-2xl">
            {content.subheadline}
          </p>
        </motion.div>

        <div className="flex flex-wrap gap-2 mb-12">
          {content.categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 font-mono text-xs uppercase tracking-wider border-2 transition-all duration-200 ${
                activeCategory === cat
                  ? "bg-accent border-black text-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
                  : "border-themed text-muted hover:border-accent"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className={`aspect-[4/3] relative group overflow-hidden border-2 border-themed ${item.color}`}
              >
                <div className="absolute inset-0 flex items-center justify-center text-6xl opacity-20 group-hover:scale-110 transition-transform duration-500">
                  {item.icon}
                </div>

                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <span className="font-mono text-xs text-accent uppercase tracking-widest mb-1">
                    {item.category}
                  </span>
                  <p className="font-syne text-white text-lg font-bold">
                    Event Logistics & Placement
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
