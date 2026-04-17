import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { ServicesSection } from "@/components/ServicesSection";
import { StatsSection } from "@/components/StatsSection";
import { WorkGallery } from "@/components/WorkGallery";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";
import { defaultContent } from "@/lib/content";

interface LandingPageProps {
  content?: typeof defaultContent;
}

export function LandingPage({ content = defaultContent }: LandingPageProps) {
  return (
    <div className="min-h-screen bg-[hsl(var(--bg))] text-[hsl(var(--fg))]">
      <Navbar content={content.navbar} />
      <HeroSection content={content.hero} />
      <ServicesSection content={content.services} />
      <StatsSection content={content.stats} />
      <WorkGallery content={content.workGallery} />
      <TestimonialsSection content={content.testimonials} />
      <CTASection content={content.cta} />
      <Footer content={content.footer} />
    </div>
  );
}
