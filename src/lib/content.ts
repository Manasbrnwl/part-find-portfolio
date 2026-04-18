export const defaultContent = {
  navbar: {
    brand: "Part-find",
    links: [
      { label: "Services", href: "#services" },
      { label: "Our Work", href: "#work" },
      { label: "Blogs", href: "#blogs" },
      { label: "Contact", href: "#contact" },
    ],
    cta: { label: "GET THE APP", href: "https://play.google.com/store/apps/details?id=com.event.part-find" },
  },
  hero: {
    badge: "Event Staffing Experts",
    headline: "Your Event. Our People.",
    subheadline:
      "Premium event staffing solutions — from hosts and promoters to shadows and volunteers. We deploy the right people for your event, every single time.",
    primaryCTA: { label: "Explore Services", href: "#services" },
    secondaryCTA: { label: "Contact Us", href: "#contact" },
    floatingCards: [
      {
        title: "Hostess Team",
        detail: "Corporate Summit 2025",
        icon: "Star",
        rotation: -6,
        offset: { x: 0, y: 0 },
      },
      {
        title: "Shadow Staff",
        detail: "Tech Conference Delhi",
        icon: "ShieldCheck",
        rotation: 3,
        offset: { x: 60, y: 100 },
      },
      {
        title: "Event Volunteers",
        detail: "Music Festival Mumbai",
        icon: "Users",
        rotation: -2,
        offset: { x: -30, y: 210 },
      },
    ],
  },
  services: {
    badge: "Services",
    headline: "What We Offer",
    subheadline:
      "Transparent per-day pricing. No hidden costs. Pick the role, tell us the dates, and we handle the rest.",
    items: [
      {
        role: "Host / Hostess",
        priceRange: "₹2,500 – ₹3,000",
        description:
          "Professional front-of-house staff to greet, guide and engage your event guests with poise.",
        icon: "Crown",
      },
      {
        role: "Stall Assistant",
        priceRange: "₹1,800 – ₹3,000",
        description:
          "Trained assistants to manage exhibition stalls, handle product demos and drive booth engagement.",
        icon: "Store",
      },
      {
        role: "Volunteer",
        priceRange: "₹1,200 – ₹1,500",
        description:
          "Dependable on-ground support for crowd management, logistics and event coordination.",
        icon: "HandHelping",
      },
      {
        role: "Promoter",
        priceRange: "₹1,500 – ₹2,200",
        description:
          "Energetic brand ambassadors to distribute material, engage audiences and amplify visibility.",
        icon: "Megaphone",
      },
      {
        role: "Shadow",
        priceRange: "₹2,500 – ₹4,000",
        description:
          "Discreet personal assistants for VIPs and executives — scheduling, coordination and security liaison.",
        icon: "ShieldCheck",
      },
    ],
  },
  stats: {
    items: [
      { value: 50, suffix: "+", label: "Events Supported" },
      { value: 500, suffix: "+", label: "Staff Deployed" },
      { value: 400, suffix: "+", label: "Successful Placements" },
      { value: 98, suffix: "%", label: "Client Satisfaction" },
    ],
  },
  workGallery: {
    badge: "Portfolio",
    headline: "Our Work",
    subheadline: "Glimpses from events we've powered with the right people.",
    categories: [
      "All",
      "Hall Management",
      "Hostess",
      "Shadow",
      "Registration Desk",
      "Volunteers",
    ],
  },
  testimonials: {
    badge: "Testimonials",
    headline: "Client Stories",
    items: [
      {
        quote:
          "Part-Find has been a game-changer for our corporate events. Their hostess team is exceptionally professional and well-trained.",
        author: "Sarah J.",
        role: "Event Director, TechCorp",
        rating: 5,
      },
      {
        quote:
          "The most reliable staffing partner we've found in Mumbai. The volunteers they provided for our festival were proactive and energetic.",
        author: "Karan M.",
        role: "Founder, LiveEvents India",
        rating: 5,
      },
      {
        quote:
          "Their shadow staff service is top-notch. Discreet, professional, and always on top of their game. Perfect for our VIP guests.",
        author: "Anita R.",
        role: "PR Lead, FashionWeek",
        rating: 4,
      },
      {
        quote:
          "Quick turnaround and great talent. Needed 20 promoters at short notice and Part-Find delivered within 24 hours.",
        author: "Vikram S.",
        role: "Marketing Manager, BeverageBrand",
        rating: 5,
      },
    ],
  },
  cta: {
    badge: "Let's Talk",
    headline: "Ready to Staff Your Next Event?",
    subheadline:
      "Tell us your dates, headcount, and roles needed. We'll handle recruitment, briefing and deployment — so you can focus on the event itself.",
    primaryCTA: { label: "Download App", href: "https://play.google.com/store/apps/details?id=com.event.part-find" },
    secondaryCTA: { label: "Get a Quote", href: "#contact" },
  },
  blogs: {
    headline: "Event Insights",
    subtitle: "Professional tips and company updates from the Part-find team.",
    items: [
      {
        title: "How to Ace Your First Event Gig",
        excerpt: "Tips on professionalism, networking, and making a great first impression.",
        date: "Oct 24, 2025",
        image: "https://images.unsplash.com/photo-1540575861501-7c00117feda?q=80&w=2070&auto=format&fit=crop"
      },
      {
        title: "Staffing Solutions for Large Events",
        excerpt: "Leveraging technology to manage hundreds of staff with zero friction.",
        date: "Nov 02, 2025",
        image: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?q=80&w=2070&auto=format&fit=crop"
      }
    ]
  },
  enquiry: {
    headline: "Business Enquiries",
    subtitle: "Let's discuss your event staffing requirements.",
    email: "official@part-find.org",
    phone: "+91 9110056157",
    address: "Mumbai, India"
  },
  footer: {
    brand: "Part-find",
    description: "Premium event staffing solutions. The right people, every event.",
    email: "official@part-find.org",
    socials: {
      instagram: "https://instagram.com/part_find",
    },
  },
};

export const getContent = (): typeof defaultContent => {
  const content = localStorage.getItem("portfolio_content_v1");
  if (content && content !== "undefined") {
    try {
      const parsed = JSON.parse(content);
      return { ...defaultContent, ...parsed };
    } catch (e) {
      console.warn("Failed parsing localstorage content", e);
    }
  }
  return defaultContent;
};

export const saveContent = (content: any) => {
  localStorage.setItem("portfolio_content_v1", JSON.stringify(content));
};

export const resetContent = () => {
  localStorage.removeItem("portfolio_content_v1");
  return defaultContent;
};
