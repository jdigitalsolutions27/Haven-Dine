export const siteConfig = {
  name: "Haven Dine",
  description:
    "Haven Dine is a luxury fine dining restaurant in Tacloban City offering refined tasting menus, cinematic interiors, private dining, and elevated service.",
  url: "https://havendine.example.com",
  ogImage:
    "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1600&q=80"
};

export const navigationLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/menu", label: "Menu" },
  { href: "/events", label: "Events" },
  { href: "/private-dining", label: "Private Dining" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" }
];

export const contactDetails = {
  phone: "+63 917 860 1212",
  phoneHref: "tel:+639178601212",
  email: "reservations@havendine.com",
  address: "Magsaysay Boulevard, Tacloban City, Leyte 6500",
  mapHref:
    "https://www.google.com/maps/search/?api=1&query=Magsaysay+Boulevard+Tacloban+City+Leyte+6500",
  openingHours: [
    "Tuesday - Thursday: 5:30 PM - 10:30 PM",
    "Friday - Saturday: 5:30 PM - 11:30 PM",
    "Sunday Brunch: 11:30 AM - 3:00 PM",
    "Sunday Dinner: 5:30 PM - 10:00 PM"
  ]
};

export const heroImage =
  "https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=1800&q=80";

export const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1200&q=80",
    alt: "Elegant fine dining room with moody lighting",
    category: "Interior"
  },
  {
    src: "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1200&q=80",
    alt: "Chef plating a premium seafood dish",
    category: "Experience"
  },
  {
    src: "https://images.unsplash.com/photo-1519690889869-e705e59f72e1?auto=format&fit=crop&w=1200&q=80",
    alt: "Wine poured over a candlelit dining table",
    category: "Dining"
  },
  {
    src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1200&q=80&sat=-5",
    alt: "Private dining table prepared for celebration",
    category: "Private Dining"
  },
  {
    src: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=80",
    alt: "Premium plated beef main course",
    category: "Food"
  },
  {
    src: "https://images.unsplash.com/photo-1515669097368-22e68427d265?auto=format&fit=crop&w=1200&q=80",
    alt: "Curated dessert plated with gold accents",
    category: "Food"
  },
  {
    src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80",
    alt: "Refined restaurant facade and reception",
    category: "Interior"
  },
  {
    src: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=1200&q=80",
    alt: "Guests enjoying a warm evening dinner service",
    category: "Experience"
  }
];

export const instagramImages = galleryImages.slice(0, 6);
