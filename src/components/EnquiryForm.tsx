import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Send, CheckCircle } from "lucide-react";
import { defaultContent } from "@/lib/content";

interface EnquiryFormProps {
  content?: typeof defaultContent.enquiry;
}

export function EnquiryForm({ content = defaultContent.enquiry }: EnquiryFormProps) {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
    
    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    };

    try {
      const response = await fetch("https://api.part-find.org/api/v1/enquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        // Keep submitted state to show success screen
      } else {
        setSubmitted(false);
        alert("Failed to send enquiry. Please try again.");
      }
    } catch (error) {
      setSubmitted(false);
      alert("Network error. Please try again later.");
    }
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-muted/20 relative">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-block bg-brand text-white px-3 py-1 rounded-full text-[10px] font-mono font-bold uppercase tracking-[0.2em] mb-6 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
            Partner With Us
          </span>
          <h2 className="font-syne text-4xl md:text-6xl font-extrabold tracking-tighter uppercase mb-6 leading-none italic">
            {content.headline || "Business Enquiries"}
          </h2>
          <p className="font-outfit text-lg text-muted mb-12 max-w-md leading-relaxed">
            {content.subtitle || "Ready to scale your next event? Let us handle the people power."}
          </p>

          <div className="space-y-8">
            <div className="flex items-center gap-5 group">
              <div className="w-14 h-14 border-2 border-themed flex items-center justify-center group-hover:border-brand transition-colors bg-card shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-none">
                <Mail className="h-6 w-6 text-brand" />
              </div>
              <div className="space-y-1">
                <div className="font-mono text-[10px] uppercase tracking-widest text-muted">Direct Email</div>
                <div className="font-syne font-bold text-xl">{content.email}</div>
              </div>
            </div>
            <div className="flex items-center gap-5 group">
              <div className="w-14 h-14 border-2 border-themed flex items-center justify-center group-hover:border-brand transition-colors bg-card shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-none">
                <Phone className="h-6 w-6 text-brand" />
              </div>
              <div className="space-y-1">
                <div className="font-mono text-[10px] uppercase tracking-widest text-muted">Call Anytime</div>
                <div className="font-syne font-bold text-xl">{content.phone}</div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-card border-2 border-themed p-8 md:p-12 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] dark:shadow-[12px_12px_0px_0px_rgba(255,255,255,0.02)]"
        >
          {submitted ? (
            <div className="flex flex-col items-center justify-center py-16 text-center">
              <div className="w-20 h-20 bg-brand/10 rounded-full flex items-center justify-center mb-6">
                <CheckCircle className="h-10 w-10 text-brand" />
              </div>
              <h3 className="font-syne text-3xl font-extrabold uppercase mb-2 italic">Sent Successfully</h3>
              <p className="text-muted font-outfit">Expect a response within 2 business hours.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="font-mono text-[10px] uppercase tracking-widest text-muted px-1">Full Name</label>
                  <input
                    name="name"
                    required
                    placeholder="Jane Cooper"
                    className="w-full h-14 px-5 bg-muted/30 border-2 border-themed focus:border-brand outline-none font-outfit text-sm transition-all placeholder:opacity-50"
                  />
                </div>
                <div className="space-y-2">
                  <label className="font-mono text-[10px] uppercase tracking-widest text-muted px-1">Contact Email</label>
                  <input
                    name="email"
                    type="email"
                    required
                    placeholder="jane@company.com"
                    className="w-full h-14 px-5 bg-muted/30 border-2 border-themed focus:border-brand outline-none font-outfit text-sm transition-all placeholder:opacity-50"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="font-mono text-[10px] uppercase tracking-widest text-muted px-1">Project Details</label>
                <textarea
                  name="message"
                  required
                  placeholder="Dates, roles, and headcount needed..."
                  className="w-full min-h-[160px] p-5 bg-muted/30 border-2 border-themed focus:border-brand outline-none font-outfit text-sm transition-all resize-none placeholder:opacity-50"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-brand text-white hover:bg-brand-hover h-16 border-2 border-black dark:border-white/10 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] active:shadow-none active:translate-x-1 active:translate-y-1 transition-all font-syne font-black text-sm uppercase tracking-widest flex items-center justify-center gap-3 italic"
              >
                Send Request <Send className="h-4 w-4" />
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
