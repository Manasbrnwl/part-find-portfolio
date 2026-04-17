import { motion } from "framer-motion";
import { ArrowRight, Phone, Zap } from "lucide-react";
import { defaultContent } from "@/lib/content";

interface CTASectionProps {
  content?: typeof defaultContent.cta;
}

export function CTASection({ content = defaultContent.cta }: CTASectionProps) {
  return (
    <section
      id="contact"
      className="relative py-24 md:py-32 bg-zinc-950 text-white overflow-hidden"
    >
      {/* Event Theme: Moving Spotlight */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-0 bg-gradient-to-br from-brand/20 via-transparent to-accent/20 blur-[100px]" 
      />
      <div className="absolute inset-0 grid-bg opacity-20" />

      <div className="container mx-auto px-4 md:px-6 max-w-4xl relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-center gap-2 mb-6">
            <span className="inline-block bg-accent text-black px-3 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider">
              {content.badge}
            </span>
          </div>
          <h2 className="font-syne text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tighter uppercase mb-6 leading-none">
            {content.headline}
          </h2>
          <p className="font-outfit text-lg md:text-xl text-zinc-400 mb-12 max-w-2xl mx-auto">
            {content.subheadline}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <a
            href={content.primaryCTA.href}
            className="inline-flex h-14 px-10 bg-brand text-white font-bold text-base tracking-wider uppercase items-center border-2 border-transparent hover:bg-brand-dark active:translate-y-0.5 transition-all duration-100 shadow-[6px_6px_0px_0px_rgba(255,255,255,0.1)] active:shadow-none"
          >
            <Zap className="mr-2 h-5 w-5 fill-current" />
            {content.primaryCTA.label}
          </a>
          <a
            href={content.secondaryCTA.href}
            className="inline-flex h-14 px-10 border-2 border-zinc-700 text-zinc-300 hover:bg-zinc-800 hover:text-white font-bold text-base tracking-wider uppercase items-center active:translate-y-0.5 transition-all duration-100"
          >
            <Phone className="mr-2 h-5 w-5" />
            {content.secondaryCTA.label}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
