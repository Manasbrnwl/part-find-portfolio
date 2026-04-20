export const defaultContent = {
  navbar: {
    brand: "Part-find",
    logo: "/assets/logo.webp",
    links: [
      { label: "Services", href: "#services" },
      { label: "Our Work", href: "#work" },
      { label: "Blogs", href: "#blogs" },
      { label: "Contact", href: "#contact" },
    ],
    cta: { label: "GET THE APP", target: "_blank", href: "https://play.google.com/store/apps/details?id=com.event.partfind" },
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
    items: [
      { id: 1, category: "Hall Management", image: "/assets/hall_manager_1.jpeg", title: "Corporate Business Summit" },
      { id: 2, category: "Hostess", image: "/assets/hostess.jpeg", title: "AI Expo" },
      { id: 3, category: "Shadow", image: "/assets/shadow.jpeg", title: "VIP Support" },
      { id: 4, category: "Registration Desk", image: "/assets/registration_desk.jpeg", title: "Corporate Check-in" },
      { id: 5, category: "Hostess", image: "/assets/hostess_2.jpeg", title: "Premium Product Launch" },
      { id: 6, category: "Volunteers", image: "/assets/volunteers.jpeg", title: "Music & Arts Festival" },
      { id: 7, category: "Registration Desk", image: "/assets/registration_desk_2.jpeg", title: "Tech Summit Check-in" },
      { id: 8, category: "Volunteers", image: "/assets/volunteers_2.jpeg", title: "Expo Volunteers" },
      { id: 9, category: "Hall Management", image: "/assets/hall_manager_3.jpeg", title: "Exhibition Floor Management" },
      { id: 10, category: "Volunteers", image: "/assets/volunteers_3.jpeg", title: "Music Festival Logistics" },
    ],
  },
  testimonials: {
    badge: "Testimonials",
    headline: "Client Stories",
    items: [
      {
        quote:
          "Great experience working with PartFind! The hostesses they provided were professional, approachable, and helped us engage better with visitors at our stall. Would definitely collaborate again.",
        author: "Island Computing Services",
        // role: "Event Director, TechCorp",
        rating: 5,
      },
      {
        quote:
          "Part-find supported us with shadow and registration desk staff, and the execution was seamless. The team was well-coordinated, punctual, and managed attendee flow efficiently. A reliable partner for event manpower.",
        author: "Goonj Entertainment",
        // role: "Founder, LiveEvents India",
        rating: 5,
      },
      {
        quote:
          "We regularly collaborate with PartFind for trip captains, and the experience has been consistently excellent. Their team is responsible, well-trained, and ensures smooth coordination throughout the journey.",
        author: "DreamEscape Journey",
        // role: "PR Lead, FashionWeek",
        rating: 4,
      },
      {
        quote:
          "We had a smooth experience working with PartFind. The hostess they provided was presentable, proactive, and helped us engage effectively with visitors at our stall. Highly reliable service.",
        author: "Binita Trading Company",
        // role: "Marketing Manager, BeverageBrand",
        rating: 5,
      },
    ],
  },
  cta: {
    badge: "Let's Talk",
    headline: "Ready to Staff Your Next Event?",
    subheadline:
      "Tell us your dates, headcount, and roles needed. We'll handle recruitment, briefing and deployment — so you can focus on the event itself.",
    primaryCTA: { label: "Download App", target: "_blank", href: "https://play.google.com/store/apps/details?id=com.event.partfind" },
    secondaryCTA: { label: "Get a Quote", href: "#contact" },
  },
  blogs: {
    headline: "Event Insights",
    subtitle: "Professional tips and company updates from the Part-find team.",
    items: [
      {
        title: "Volunteer Impact Ripples: Showing How Volunteerism Matters",
        excerpt: "Discover how volunteers create ripples of positive change at events, boosting engagement and community spirit.",
        date: "Apr 1, 2026",
        image: "https://i0.wp.com/www.volunteercommons.com/wp-content/uploads/2026/03/Ripple-by-qimono-from-Pixabay.jpg?resize=1024%2C546&ssl=1",
        href: "https://www.volunteercommons.com/2026/04/01/volunteer-impact-ripples/"
      },
      {
        title: "Future of Work and Business",
        excerpt: "The gig economy is reshaping how we work and do business. Learn how flexible staffing models are driving growth and innovation across industries.",
        date: "July 31, 2024",
        image: "https://www.park.edu/wp-content/uploads/2024/07/Park-University-Gig-Economy-Blog-Banner-1024x576.jpg",
        href: "https://www.park.edu/blog/the-gig-economy-shaping-the-future-of-work-and-business/"
      }
    ]
  },
  enquiry: {
    headline: "Business Enquiries",
    subtitle: "Let's discuss your event staffing requirements.",
    email: "official@part-find.org",
    phone: "+91 8538972281, +91 8826302320",
    cta: { label: "GET THE APP", href: "https://play.google.com/store/apps/details?id=com.event.partfind" },
  },
  footer: {
    brand: "Part-find",
    logo: "/assets/logo.webp",
    logoClassName: "rounded-full",
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
