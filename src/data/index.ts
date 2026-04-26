import { Home, Monitor, Layers, Zap, Code, Shield } from 'lucide-react';

export const NAV_LINKS = [
  { name: 'Home', to: 'home' },
  { name: 'Services', to: 'services' },
  { name: 'Projects', to: 'projects' },
  { name: 'Experience', to: 'experience' },
  { name: 'Contact', to: 'contact' },
];

export const HERO_DATA = {
  name: "Alexander_Dev",
  role: "Performance-Focused Frontend Engineer & UX Architect",
  description: "Crafting visually stunning, immersive web applications with locked 60FPS performance. Bridging the gap between 3D interactives and core UX.",
};

export const SERVICES = [
  { title: "Frontend Architecture", description: "Scalable React & Next.js systems with maximum efficiency.", icon: Layers },
  { title: "Creative Development", description: "Three.js, WebGL & Framer Motion immersive experiences.", icon: Monitor },
  { title: "Performance Optimization", description: "Lighthouse audits, code-splitting & frame-time tuning.", icon: Zap },
];

export const TECH_STACK = [
  { name: "React", level: 95 },
  { name: "TypeScript", level: 90 },
  { name: "Three.js", level: 85 },
  { name: "Tailwind CSS", level: 98 },
  { name: "Framer Motion", level: 90 },
  { name: "Node.js", level: 80 },
];

export const PROJECTS = [
  {
    id: 1,
    title: "Nexus Dashboard",
    description: "A highly interactive crypto analytics dashboard with real-time websocket streams and advanced visualizations.",
    image: "/nexus_dashboard.png",
    technologies: ["React", "Three.js", "Framer Motion", "Tailwind", "Zustand"],
    link: "https://example.com/nexus",
    repo: "https://github.com/example/nexus"
  },
  {
    id: 2,
    title: "Quantum E-Commerce",
    description: "Next.js performance-focused headless shop with dynamic 3D product previews and instant transitions.",
    image: "/quantum_ecommerce.png",
    technologies: ["Next.js", "TypeScript", "Tailwind", "React Three Fiber", "Stripe"],
    link: "https://example.com/quantum",
    repo: "https://github.com/example/quantum"
  },
  {
    id: 3,
    title: "Neural UI Kit",
    description: "An accessible, physics-based, animated component library for modern React applications.",
    image: "https://images.unsplash.com/photo-1618761714954-0b8cd0026356?auto=format&fit=crop&q=80&w=1000",
    technologies: ["React", "Framer Motion", "Tailwind", "Radix UI", "Storybook"],
    link: "https://example.com/neural",
    repo: "https://github.com/example/neural"
  }
];

export const EDUCATION = [
  {
    id: 1,
    year: "2020 - 2024",
    title: "B.Tech in Computer Science",
    description: "Tech University",
    image: "/opensource_contrib.png", // Or appropriate generic image
  },
  {
    id: 2,
    year: "2018 - 2020",
    title: "High School Diploma",
    description: "Science Academy",
    image: "/opensource_contrib.png", 
  }
];

export const CERTIFICATIONS = [
  { id: 1, title: "AWS Solutions Architect", issuer: "Amazon Web Services", date: "2023", image: "/aws_cert.png" },
  { id: 2, title: "Advanced React Patterns", issuer: "Frontend Masters", date: "2022", image: "/react_cert.png" },
  { id: 3, title: "WebGL Fundamentals", issuer: "Udacity", date: "2023", image: "/opensource_contrib.png" },
];

export const ACHIEVEMENTS = [
  {
    id: 1,
    title: "Hackathon Winner",
    description: "Won first place in the global Web3 Hackathon building a decentralized protocol.",
    image: "/hackathon_win.png",
    link: "https://linkedin.com",
    date: "2023"
  },
  {
    id: 2,
    title: "Open Source Contributor",
    description: "Major contributions to popular React ecosystems including Framer Motion and Three.js.",
    image: "/opensource_contrib.png",
    link: "https://github.com",
    date: "2022"
  }
];
