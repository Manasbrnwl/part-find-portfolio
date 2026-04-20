import { motion } from "framer-motion";
import {
  Crown,
  Store,
  HandHelping,
  Megaphone,
  ShieldCheck,
  Star,
  Users,
  Mic,
  Ticket,
  Camera,
} from "lucide-react";
import { defaultContent } from "@/lib/content";

const ICON_MAP: Record<string, any> = {
  Crown,
  Store,
  HandHelping,
  Megaphone,
  ShieldCheck,
  Star,
  Users,
  Mic,
  Ticket,
  Camera,
};

interface ServicesSectionProps {
  content?: typeof defaultContent.services;
}

export function ServicesSection({ content = defaultContent.services }: ServicesSectionProps) {
  return (
    <section id="services" className="py-24 md:py-32 bg-muted-themed relative overflow-hidden">
      {/* Event Theme: Decorative spotlights */}
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-accent/5 blur-[100px] rounded-full -translate-y-1/2" />
      <div className="absolute top-1/2 right-0 w-64 h-64 bg-brand/5 blur-[100px] rounded-full -translate-y-1/2" />

      <div className="container mx-auto px-4 md:px-6 max-w-7xl relative z-10">
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {content.items.map((service, i) => {
            const Icon = ICON_MAP[service.icon] || Star;
            return (
              <motion.div
                key={service.role}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="group relative border-2 border-themed card-bg p-6 md:p-8 hover:border-accent transition-colors duration-300 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,0.05)] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none"
              >
                {/* Corner accent */}
                <div className="absolute top-0 right-0 w-16 h-16 bg-accent/10 group-hover:bg-accent/20 transition-colors duration-300" />
{/* 
                <div className="relative mb-6 aspect-video overflow-hidden border-b-2 border-themed -mx-6 -mt-6 md:-mx-8 md:-mt-8">
                  {service.image ? (
                    <img
                      src={service.image}
                      alt={service.role}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <div className="w-full h-full bg-muted flex items-center justify-center">
                      <Icon className="h-12 w-12 text-brand/20" />
                    </div>
                  )}
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-300" />
                </div> */}

                <div className="flex items-center gap-3 mb-4">
                  <Icon className="h-6 w-6 text-brand" />
                  <h3 className="font-syne text-xl font-bold uppercase">
                    {service.role}
                  </h3>
                </div>
                <div className="font-mono text-sm text-accent font-bold mb-4">
                  {service.priceRange}
                  <span className="text-muted font-normal text-xs ml-1">
                    / day
                  </span>
                </div>
                <p className="font-outfit text-sm text-muted leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
