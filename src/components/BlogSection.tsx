import { motion } from "framer-motion";
import { Calendar, ArrowRight } from "lucide-react";
import { defaultContent } from "@/lib/content";

interface BlogSectionProps {
  content?: typeof defaultContent.blogs;
}

export function BlogSection({ content = defaultContent.blogs }: BlogSectionProps) {
  const items = content.items || [];

  return (
    <section id="blogs" className="py-24 md:py-32 bg-[hsl(var(--bg))] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand/5 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2" />
      
      <div className="container mx-auto px-4 md:px-6 max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <span className="inline-block bg-brand text-white px-3 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider mb-4 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] dark:shadow-[2px_2px_0px_0px_rgba(255,255,255,0.1)]">
            Insights
          </span>
          <h2 className="font-syne text-4xl md:text-6xl font-bold tracking-tight uppercase italic">
            {content.headline || "Latest Updates"}
          </h2>
          <p className="font-outfit text-base md:text-lg text-muted mt-4 max-w-2xl">
            {content.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {items.map((blog: any, i) => (
            <motion.a
              key={i}
              href={blog.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="group block"
            >
              <div className="aspect-[21/9] overflow-hidden mb-8 border-2 border-themed group-hover:border-brand transition-colors duration-300 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:shadow-[8px_8px_0px_0px_rgba(255,255,255,0.05)]">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="flex items-center gap-2 text-muted font-mono text-xs uppercase tracking-[0.2em] mb-4">
                <Calendar className="h-3.5 w-3.5 text-brand" />
                {blog.date}
              </div>
              <h3 className="font-syne text-2xl lg:text-3xl font-extrabold mb-4 group-hover:translate-x-2 transition-transform duration-300">
                {blog.title}
              </h3>
              <p className="font-outfit text-base text-muted leading-relaxed mb-6 line-clamp-2">
                {blog.excerpt}
              </p>
              <div className="flex items-center gap-3 font-mono text-xs font-bold uppercase tracking-widest group-hover:text-brand transition-colors">
                Read Article <ArrowRight className="h-4 w-4 bg-brand text-white p-0.5 rounded-full" />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
