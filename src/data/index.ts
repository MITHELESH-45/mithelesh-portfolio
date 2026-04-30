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
    category: "AI",
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
    description:
      "AI-powered customer support platform using a multi-agent architecture with intelligent routing between RAG-based retrieval and action execution agents. Achieved 86.8% context precision and reduced manual resolution time by 40%.",
    image: "/projects/agentic_cx.png",
    technologies: ["React", "Node.js", "MongoDB", "LangChain", "OpenAI"],
    link: "",
    repo: "https://github.com/MITHELESH-45/Agenitc-CX",
    demo: "https://www.youtube.com/watch?v=YOUR_VIDEO_ID",
    tag: "AI System",
  },
  {
    id: 2,
    title: "DevConnect",
    description:
      "Full-stack developer networking platform with JWT authentication, scalable APIs, and AWS deployment using Nginx for production-ready performance.",
    image: "/projects/devconnect.png",
    technologies: ["React", "Redux Toolkit", "Node.js", "MongoDB", "JWT", "AWS"],
    link: "https://devconnecttt.duckdns.org",
    repo: "https://github.com/MITHELESH-45/devconnect",
    demo: "https://www.youtube.com/watch?v=YOUR_VIDEO_ID",
    tag: "Full Stack",
  },
  {
    id: 3,
    title: "EduGroot",
    description:
      "Interactive EdTech platform for electronics and IoT learning with a real-time circuit simulator and structured modules for hands-on learning.",
    image: "/projects/edugroot.png",
    technologies: ["Next.js", "Node.js", "MongoDB"],
    link: "https://edtech-9wnc.onrender.com/",
    repo: "https://github.com/MITHELESH-45/EduGroot",
    demo: "https://www.youtube.com/watch?v=YOUR_VIDEO_ID",
    tag: "EdTech",
  },
  {
    id: 4,
    title: "FeedFlow",
    description:
      "Food donation management platform connecting donors, NGOs, and volunteers with secure role-based authentication and workflow management.",
    image: "/projects/feedflow.png",
    technologies: ["Next.js", "Node.js", "MongoDB"],
    link: "https://feed-flow-brown.vercel.app/",
    repo: "https://github.com/MITHELESH-45/FeedFlow",
    demo: "https://www.youtube.com/watch?v=YOUR_VIDEO_ID",
    tag: "Full Stack",
  },
  {
    id: 5,
    title: "Trendora",
    description:
      "MERN-based e-commerce platform with product filtering, cart management, and secure checkout for a seamless shopping experience.",
    image: "/projects/trendora.png",
    technologies: ["React", "Node.js", "MongoDB"],
    link: "https://trendora-frontend.vercel.app/",
    repo: "https://github.com/MITHELESH-45/Trendora",
    demo: "https://www.youtube.com/watch?v=YOUR_VIDEO_ID",
    tag: "E-Commerce",
  },
  {
    id: 6,
    title: "Echoo",
    description:
      "Real-time chat application with responsive UI and smooth messaging experience, supporting live communication and user interactions.",
    image: "/projects/echoo.png",
    technologies: ["React", "HTML", "CSS"],
    link: "https://echoo-henna.vercel.app",
    repo: "https://github.com/MITHELESH-45/Echoo",
    demo: "https://www.youtube.com/watch?v=YOUR_VIDEO_ID",
    tag: "Realtime App",
  },
  {
    id: 7,
    title: "Hackathon Management",
    description:
      "Platform for organizing and managing hackathons with participant workflows, event tracking, and admin control features.",
    image: "/projects/hackfest.png",
    technologies: ["Next.js", "Node.js", "MongoDB"],
    link: "https://hackfest-nu-three.vercel.app/",
    repo: "https://github.com/MITHELESH-45/hackfest",
    demo: "https://www.youtube.com/watch?v=YOUR_VIDEO_ID",
    tag: "Full Stack",
  },
   {
    id: 8,
    title: "GitHub AI Assistant",
    description:
      "RAG-based AI assistant that retrieves and summarizes relevant GitHub code, documentation, and best practices for developers.",
    image: "/projects/github.png",
    technologies: ["Python", "LangChain", "OpenAI"],
    link: "https://git-hub-ai-assistant.vercel.app/",
    repo: "https://github.com/MITHELESH-45/GitHub-Ai-Assistant",
    demo: "https://www.youtube.com/watch?v=YOUR_VIDEO_ID",
    tag: "AI Tool",
  },
  {
    id: 9,
    title: "Netflix GPT",
    description:
      "AI-based movie recommendation interface with modern UI, allowing users to discover movies based on input queries.",
    image: "/projects/netflix.png",
    technologies: ["React", "HTML", "CSS"],
    link: "https://netflix-gpt-alpha-plum.vercel.app/",
    repo: "https://github.com/MITHELESH-45/Netflix-gpt",
    demo: "https://www.youtube.com/watch?v=YOUR_VIDEO_ID",
    tag: "AI UI",
  },
  {
    id: 10,
    title: "YouTube Clone",
    description:
      "Frontend clone of YouTube with responsive design, video browsing interface, and UI similar to real-world streaming platforms.",
    image: "/projects/youtube.png",
    technologies: ["React", "HTML", "CSS"],
    link: "https://youtube-react-sable.vercel.app/",
    repo: "https://github.com/MITHELESH-45/youtube-react",
    demo: "https://www.youtube.com/watch?v=YOUR_VIDEO_ID",
    tag: "Frontend",
  },
 

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
