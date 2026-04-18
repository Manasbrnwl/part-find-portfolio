import { useRef } from "react";
import { motion, useMotionValue, useTransform, type MotionValue } from "framer-motion";
import {
  ArrowRight,
  Users,
  Star,
  Calendar,
  Mic,
  ShieldCheck,
  Ticket,
} from "lucide-react";
import { defaultContent } from "@/lib/content";

const ICON_MAP: Record<string, any> = {
  Star,
  ShieldCheck,
  Users,
  Mic,
  Ticket,
  Calendar,
};

interface HeroSectionProps {
  content?: typeof defaultContent.hero;
}

export function HeroSection({ content = defaultContent.hero }: HeroSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (rect) {
      mouseX.set((e.clientX - rect.left - rect.width / 2) / 20);
      mouseY.set((e.clientY - rect.top - rect.height / 2) / 20);
    }
  };

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-screen flex items-center pt-16 overflow-hidden grid-bg"
      id="hero"
    >
      {/* Event Theme: Spotlight Effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-brand/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-accent/10 blur-[120px] rounded-full" />
      </div>

      <div className="container mx-auto px-4 md:px-6 max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center py-24 md:py-32 relative z-10">
        {/* Left */}
        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <span className="inline-block bg-accent text-black px-3 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider mb-6">
              {content.badge}
            </span>
            <h1 className="font-syne text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-extrabold tracking-tighter leading-none uppercase">
              {content.headline.split('.').map((part, i, arr) => (
                <span key={i}>
                  {i === arr.length - 1 ? <span className="text-brand">{part}</span> : part}
                  {i < arr.length - 1 && <br />}
                </span>
              ))}
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-outfit text-base md:text-lg leading-relaxed text-muted max-w-lg"
          >
            {content.subheadline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap gap-4"
          >
            <a
              href={content.primaryCTA.href}
              className="inline-flex h-14 px-10 bg-brand text-white font-black text-sm uppercase tracking-widest items-center border-2 border-transparent hover:bg-brand-dark active:translate-y-0.5 transition-all duration-100 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] dark:shadow-[6px_6px_0px_0px_rgba(255,255,255,0.1)] active:shadow-none italic"
            >
              <ArrowRight className="mr-2 h-4 w-4" />
              {content.primaryCTA.label}
            </a>
            <a
              href={content.secondaryCTA.href}
              className="inline-flex h-14 px-10 border-2 border-themed font-bold text-sm uppercase tracking-widest items-center hover:bg-[hsl(var(--fg))] hover:text-[hsl(var(--bg))] active:translate-y-0.5 transition-all duration-100 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] active:shadow-none ml-1"
            >
              <Mic className="mr-2 h-4 w-4" />
              {content.secondaryCTA.label}
            </a>
          </motion.div>
        </div>

        {/* Right — floating cards */}
        <div className="relative h-80 lg:h-[500px] hidden lg:block">
          {content.floatingCards.map((card, i) => (
            <FloatingCard
              key={i}
              card={card}
              index={i}
              mouseX={mouseX}
              mouseY={mouseY}
            />
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px border-themed border-b-2" />
    </section>
  );
}

interface FloatingCardProps {
  card: any;
  index: number;
  mouseX: MotionValue<number>;
  mouseY: MotionValue<number>;
}

function FloatingCard({ card, index, mouseX, mouseY }: FloatingCardProps) {
  const x = useTransform(
    mouseX,
    (v: number) => v * (index + 1) * 0.5 + card.offset.x
  );
  const y = useTransform(
    mouseY,
    (v: number) => v * (index + 1) * 0.5 + card.offset.y
  );
  const Icon = ICON_MAP[card.icon] || Star;

  return (
    <motion.div
      style={{ x, y, rotate: card.rotation } as any}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.3 + index * 0.15 }}
      className="absolute card-bg border-2 border-themed p-6 w-64 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,0.2)]"
    >
      <div className="flex items-center gap-2 mb-2">
        <Icon className="h-4 w-4 text-accent" />
        <span className="font-mono text-xs text-muted uppercase tracking-wider">
          STAFF #{String(index + 1).padStart(3, "0")}
        </span>
      </div>
      <div className="font-syne font-bold text-lg">{card.title}</div>
      <div className="flex justify-between items-center mt-3">
        <span className="font-mono text-sm text-accent font-bold">
          <ArrowRight className="inline h-3 w-3 mr-1" />
          View
        </span>
        <span className="font-outfit text-xs text-muted">{card.detail}</span>
      </div>
    </motion.div>
  );
}
