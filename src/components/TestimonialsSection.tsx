import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { defaultContent } from "@/lib/content";

interface TestimonialsSectionProps {
  content?: typeof defaultContent.testimonials;
}

export function TestimonialsSection({ content = defaultContent.testimonials }: TestimonialsSectionProps) {
  return (
    <section className="py-24 md:py-32 bg-muted-themed relative">
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
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {content.items.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="group relative border-2 border-themed card-bg p-8 hover:border-accent transition-colors duration-300 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,0.05)]"
            >
              <Quote className="h-6 w-6 text-accent/30 mb-4" />

              <p className="font-outfit text-base leading-relaxed text-muted mb-6">
                "{t.quote}"
              </p>

              <div className="flex items-center justify-between mt-auto">
                <div>
                  <div className="font-syne font-bold text-sm tracking-tight">{t.author}</div>
                  <div className="font-mono text-xs text-muted uppercase tracking-wider">
                    {/* {t.role} */}
                  </div>
                </div>
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, si) => (
                    <Star
                      key={si}
                      className={`h-4 w-4 ${
                        si < t.rating
                          ? "text-accent fill-accent"
                          : "text-zinc-600"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
