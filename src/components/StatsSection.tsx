import { motion, useInView, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";
import { defaultContent } from "@/lib/content";

interface StatsSectionProps {
  content?: typeof defaultContent.stats;
}

export function StatsSection({ content = defaultContent.stats }: StatsSectionProps) {
  return (
    <section id="stats" className="py-24 bg-zinc-950 text-white overflow-hidden relative">
      {/* Event Theme: Decorative lines */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-px h-full bg-accent" />
        <div className="absolute top-0 left-1/2 w-px h-full bg-accent" />
        <div className="absolute top-0 left-3/4 w-px h-full bg-accent" />
      </div>

      <div className="container mx-auto px-4 md:px-6 max-w-7xl relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {content.items.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center"
            >
              <div className="font-syne text-5xl md:text-7xl font-extrabold tracking-tighter mb-2 flex items-center justify-center">
                <Counter value={stat.value} />
                <span className="text-accent">{stat.suffix}</span>
              </div>
              <div className="font-mono text-xs uppercase tracking-widest text-zinc-500">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Counter({ value }: { value: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const springValue = useSpring(0, {
    mass: 1,
    stiffness: 100,
    damping: 30,
  });

  const displayValue = useTransform(springValue, (current) =>
    Math.round(current).toLocaleString()
  );

  useEffect(() => {
    if (inView) {
      springValue.set(value);
    }
  }, [inView, value, springValue]);

  return <motion.span ref={ref}>{displayValue}</motion.span>;
}
