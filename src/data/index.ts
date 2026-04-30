import { Layers, Zap, Code, Shield, Database } from 'lucide-react';

export const NAV_LINKS = [
  { name: 'Home', to: 'home' },
  { name: 'Services', to: 'services' },
  { name: 'Projects', to: 'projects' },
  { name: 'Achievements', to: 'experience' },
  { name: 'Contact', to: 'contact' },
];

export const HERO_DATA = {
  name: "MITHELESH K",
  role: "Full Stack Developer",
  description: "Full-stack developer with hands-on experience building scalable web applications and AI-integrated systems. Skilled in designing REST APIs, developing full-stack applications using MERN, and implementing data-driven features using modern technologies. Focused on building efficient and production-ready solutions.",
};

export const SERVICES = [
  { title: "Full Stack Development", description: "Scalable MERN stack applications with clean REST APIs and responsive UIs.", icon: Layers },
  { title: "AI Integration", description: "LangChain, OpenAI API, RAG pipelines, vector search & embeddings.", icon: Zap },
  { title: "Frontend Development", description: "React, Redux Toolkit, Tailwind CSS — pixel-perfect, performant UIs.", icon: Code },
  { title: "Backend Engineering", description: "Node.js / Express REST APIs with JWT auth and scalable data models.", icon: Shield },
  { title: "Database Design", description: "MongoDB, MySQL, PostgreSQL — relational and document-based schemas.", icon: Database },
];

export const TECH_STACK_CATEGORIES = [
  {
    category: "Languages",
    techs: [
      { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
      { name: "TypeScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
      { name: "Java", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
    ]
  },
  {
    category: "Frontend",
    techs: [
      { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "Next.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
      { name: "Redux Toolkit", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" },
      { name: "Tailwind CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
      { name: "HTML5", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
      { name: "CSS3", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
    ]
  },
  {
    category: "Backend",
    techs: [
      { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
      { name: "Express.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
    ]
  },
  {
    category: "Database",
    techs: [
      { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
      { name: "MySQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
      { name: "PostgreSQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
    ]
  },
  {
    category: "AI & ML",
    techs: [
      { name: "LangChain", logo: "https://raw.githubusercontent.com/langchain-ai/langchain/master/docs/static/img/favicon.ico" },
      { name: "OpenAI", logo: "https://upload.wikimedia.org/wikipedia/commons/4/4d/OpenAI_Logo.svg" },
      { name: "RAG Systems", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
      { name: "Chroma Cloud", logo: "https://www.trychroma.com/chroma-logo.png" },
    ]
  },
  {
    category: "Tools",
    techs: [
      { name: "Git", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
      { name: "GitHub", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
      { name: "Postman", logo: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" },
      { name: "Vercel", logo: "https://assets.vercel.com/image/upload/v1588805858/repositories/vercel/logo.png" },
      { name: "AWS EC2", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg" },
      { name: "Cloudinary", logo: "https://res.cloudinary.com/cloudinary-marketing/image/upload/v1599098500/creative_source/Logo/PNG/cloudinary_logo_blue_0720_2x.png" },
      { name: "Twilio", logo: "https://www.vectorlogo.zone/logos/twilio/twilio-icon.svg" },
    ]
  },
  {
    category: "Authentication",
    techs: [
      { name: "JWT", logo: "https://jwt.io/img/pic_logo.svg" },
      { name: "OAuth 2.0", logo: "https://upload.wikimedia.org/wikipedia/commons/d/d2/Oauth_logo.svg" },
    ]
  },
];

export const PROJECTS = [
  {
    id: 1,
    title: "Agentic-CX",
    description: "AI-powered customer support platform with a multi-agent architecture. Features a Router Agent that classifies user intents and routes between a RAG Agent for knowledge retrieval and an Action Agent for task execution. Achieved 86.8% Context Precision with a Hybrid Retrieval pipeline (vector + keyword search) and Ragas evaluation, cutting manual ticket resolution time by 40%.",
    image: "/agentic_cx.png",
    technologies: ["React", "Tailwind CSS", "Node.js", "Express.js", "MongoDB", "Chroma Cloud", "LangChain", "OpenAI"],
    link: "",
    repo: "https://github.com/MITHELESH-45/Agenitc-CX"
  },
  {
    id: 2,
    title: "DevConnect",
    description: "Developer networking platform supporting profile creation and connection management. Built with React + Redux Toolkit frontend and Node.js / Express REST APIs. Implements JWT authentication, a scalable connection request lifecycle, paginated feed APIs, and is deployed on AWS EC2 with Nginx reverse proxy and HTTPS.",
    image: "/devconnect.png",
    technologies: ["React", "Redux Toolkit", "Node.js", "Express.js", "MongoDB", "JWT", "AWS EC2", "Nginx"],
    link: "https://devconnecttt.duckdns.org",
    repo: "https://github.com/MITHELESH-45/devconnect"
  },
  {
    id: 3,
    title: "FeedFlow",
    description: "Role-based food donation management platform connecting donors, NGOs, and volunteers to streamline donation workflows. Features JWT authentication, role-based authorization, and admin NGO verification for secure access control.",
    image: "/feedflow.png",
    technologies: ["Next.js", "Node.js", "MongoDB", "JWT", "Cloudinary"],
    link: "https://feed-flow-brown.vercel.app/",
    repo: "https://github.com/MITHELESH-45/FeedFlow"
  }
];

export const EDUCATION = [
  {
    id: 1,
    year: "2023 - 2027",
    title: "B.Tech in Information Technology",
    description: "Pursuing Bachelor of Technology in Information Technology at Bannari Amman Institute of Technology, Sathyamangalam. CGPA: 7.79 / 10.",
    image: "/opensource_contrib.png",
    status: "ongoing",
  },
  {
    id: 2,
    year: "Up to 2023",
    title: "Higher Secondary Education",
    description: "Completed primary and higher secondary education with strong academic fundamentals.",
    image: "/opensource_contrib.png",
    status: "completed",
  }
];

export const CERTIFICATIONS: { id: number; title: string; issuer: string; date: string; image: string }[] = [];

export const ACHIEVEMENTS = [
  {
    id: 1,
    title: "Theme Winner — CMR Hackfest 3.0",
    description: "Secured 1st place at the theme level in the EdTech category at CMR Hackfest 3.0.",
    image: "/cmr%20wining%20image.jpeg",
    link: "https://www.linkedin.com/in/mitheleshk3005/",
    date: "2026"
  },
];
