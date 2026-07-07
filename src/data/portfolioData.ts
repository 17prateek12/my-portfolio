export interface Skill {
  name: string;
  category: 'Languages' | 'Frontend' | 'Backend' | 'Databases & Caching' | 'DevOps & Cloud' | 'AI & Agents' | 'Tools & Other';
}

export interface Experience {
  id: number;
  company: string;
  role: string;
  duration: string;
  location: string;
  contractType: 'Full-time' | 'Contract' | 'Intern' | 'Freelance';
  client?: string;
  description: string[];
  techStack: string[];
}

export interface Project {
  id: number;
  title: string;
  description: string[];
  techStack: string[];
  gitLink: string;
  liveLink?: string;
  isOpenSource: boolean;
  contribution?: string;
}

export interface Publication {
  id: number;
  title: string;
  date: string;
  link?: string;
  description: string;
}

export interface Achievement {
  id: number;
  title: string;
  date: string;
  description?: string;
}

export interface Education {
  id: number;
  institution: string;
  degree: string;
  location: string;
  duration: string;
  description?: string;
}

export interface PersonalInfo {
  name: string;
  titles: string[];
  email: string;
  phone: string;
  whatsapp: string;
  location: string;
  github: string;
  linkedin: string;
  twitter: string;
  bio: string;
  resumeUrl: string;
}

export interface PortfolioData {
  personalInfo: PersonalInfo;
  skills: Skill[];
  experience: Experience[];
  projects: Project[];
  publications: Publication[];
  achievements: Achievement[];
  education: Education[];
}

export const portfolioData: PortfolioData = {
  personalInfo: {
    name: "Prateek Sharma",
    titles: ["FULLSTACK DEVELOPER", "AI AGENT BUILDER", "SOFTWARE ENGINEER"],
    email: "17prateek12@gmail.com",
    phone: "+91-8287674188",
    whatsapp: "918287674188",
    location: "Noida, India",
    github: "https://github.com/17prateek12",
    linkedin: "https://www.linkedin.com/in/prateek-sharma1712/",
    twitter: "https://x.com/walkclick",
    bio: "My name is Prateek Sharma, and I am an enthusiastic software developer. With a background in electronics, web programming and AI agents are where my real interests lie. I enjoy creating systems that are aesthetically pleasing, intuitive to use, performant, and intelligent. I graduated in June 2023 with a B.Tech in Electronics and Communication from the Jaypee Institute of Information Technology, Noida. I am currently working as a Full-Stack Software Developer.",
    resumeUrl: ""
  },
  skills: [
    // Languages
    { name: "C++", category: "Languages" },
    { name: "Java", category: "Languages" },
    { name: "Python", category: "Languages" },
    { name: "JavaScript", category: "Languages" },
    { name: "TypeScript", category: "Languages" },
    { name: "SQL", category: "Languages" },

    // Frontend
    { name: "React.JS", category: "Frontend" },
    { name: "Next.JS", category: "Frontend" },
    { name: "Redux", category: "Frontend" },
    { name: "React Query", category: "Frontend" },
    { name: "HTML", category: "Frontend" },
    { name: "CSS", category: "Frontend" },
    { name: "Tailwind CSS", category: "Frontend" },

    // Backend
    { name: "Spring Boot", category: "Backend" },
    { name: "Node.JS", category: "Backend" },
    { name: "Express.JS", category: "Backend" },
    { name: "Django", category: "Backend" },
    { name: "FastAPI", category: "Backend" },
    { name: "Web Sockets", category: "Backend" },

    // Databases & Caching
    { name: "MongoDB", category: "Databases & Caching" },
    { name: "MySQL", category: "Databases & Caching" },
    { name: "Redis", category: "Databases & Caching" },
    { name: "Kafka", category: "Databases & Caching" },

    // DevOps & Cloud
    { name: "Docker", category: "DevOps & Cloud" },
    { name: "Kubernetes", category: "DevOps & Cloud" },
    { name: "AWS", category: "DevOps & Cloud" },
    { name: "GCP", category: "DevOps & Cloud" },

    // AI & Agents
    { name: "LLMs", category: "AI & Agents" },
    { name: "Claude", category: "AI & Agents" },
    { name: "Gemini", category: "AI & Agents" },
    { name: "AI Agents", category: "AI & Agents" },
    { name: "VS Code Extensions", category: "AI & Agents" },

    // Tools & Other
    { name: "Git", category: "Tools & Other" },
    { name: "Github", category: "Tools & Other" },
    { name: "Postman", category: "Tools & Other" }
  ],
  experience: [
    {
      id: 1,
      company: "L&T Technology Services",
      role: "Software Engineer",
      duration: "May 2025 - Present",
      location: "Noida, India",
      contractType: "Contract",
      client: "Thales",
      description: [
        "Designed fault-tolerant background workflows with execution state recovery, ensuring long-running jobs resumed automatically after service interruptions and improving production reliability.",
        "Built event-driven processing and retry workflows using Kafka and Redis to reliably orchestrate notifications, entitlement updates, and asynchronous operations across distributed services.",
        "Improved application performance by optimizing backend APIs, frontend data loading, and caching strategies, reducing response time by 35% while eliminating redundant network requests.",
        "Modernized the Partner Portal by developing reusable UI components, refactoring legacy frontend modules into a modular architecture, and delivering end-to-end features across frontend and backend."
      ],
      techStack: ["Frontend Development", "Backend Development", "Event-Driven Processing", "Distributed Caching", "Reliability Engineering"]
    },
    {
      id: 2,
      company: "Bharattech Tech Eco-System Pvt Ltd",
      role: "Full Stack Developer",
      duration: "April 2024 - December 2024",
      location: "Remote, India",
      contractType: "Full-time",
      description: [
        "Architected a multi-tenant SaaS platform supporting secure authentication, role-based access control, and organization-specific data isolation across four user roles while delivering scalable APIs and backend workflows.",
        "Developed real-time chat, notifications, and college discovery features, enabling seamless communication and low-latency search across 10k+ records while improving overall user experience.",
        "Built and optimized a high-performance Next.js application, improving Lighthouse performance from 50 to 62, reducing API requests by 40%, and enhancing SEO through server-side and static rendering strategies.",
        "Delivered end-to-end product features across frontend and backend, including analytics dashboards, reusable component architecture, and role-aware user experiences for company, college, and student portals."
      ],
      techStack: ["Multi-Tenant Systems", "Real-Time Communications", "Frontend Architecture", "Backend Engineering"]
    },
    {
      id: 3,
      company: "IEEE",
      role: "Contributor & Researcher",
      duration: "June 2023 - Feb 2024",
      location: "Remote, India",
      contractType: "Freelance",
      description: [
        "Conducted an in-depth analysis of autonomous vehicle navigation algorithms, comparing Transformer networks and Convolutional Neural Networks (CNNs).",
        "Engineered a hardware-software prototype autonomous vehicle using Raspberry Pi and a camera to perform self-lane detection and turns.",
        "Achieved a CNN lane-prediction accuracy of approximately 77% using custom TensorFlow models.",
        "Authored and published a research paper in the 9th International Conference on Signal Processing and Communication (ICSC)."
      ],
      techStack: ["Algorithm Analysis", "Embedded Systems", "Computer Vision", "Machine Learning Model Comparison"]
    },
    {
      id: 4,
      company: "Jaypee Institute of Information Technology",
      role: "Machine Learning Intern",
      duration: "June 2022 - July 2022",
      location: "Noida, India",
      contractType: "Intern",
      description: [
        "Engineered and deployed a custom false news detection system using Flask API and four distinct machine learning classifiers.",
        "Achieved a model prediction accuracy rate of 89.91% during testing and validation.",
        "Created custom frontend visualization dashboards representing prediction metrics and dataset statistics."
      ],
      techStack: ["Machine Learning Models", "Backend API Integration", "Data Dashboarding"]
    }
  ],
  projects: [
    {
      id: 1,
      title: "RefTrack",
      description: [
        "Engineered a Career OS for India's referral-first job market — MV3 Chrome extension captures jobs from LinkedIn/Naukri, MERN + TypeScript backend with layered architecture (DTOs, Zod validation, centralized error handling), S3 resume versioning.",
        "Architected a BullMQ + Redis queue scheduling 3-day/7-day outreach follow-up reminders with idempotency flags preventing duplicate sends; integrated Gemini 2.5 Flash (Vertex AI) for ATS scoring, PDF resume parsing, and referral message generation."
      ],
      techStack: ["MERN", "Redis", "BullMQ", "Gemini", "MV3 Chrome", "TypeScript", "AWS S3"],
      gitLink: "https://github.com/17prateek12/RefTrack",
      isOpenSource: false
    },
    {
      id: 2,
      title: "Repository-Aware AI Coding Assistant & RAG Engine (VS Code Extension)",
      description: [
        "Engineered a Hybrid RAG Search Engine combining semantic vector search, path resolution, and syntax-aware AST symbol tables fused via Reciprocal Rank Fusion (RRF) to perform multi-file code search and graph traversals.",
        "Designed an AST Semantic Chunk Extractor that parses source files into logical syntax nodes (classes, methods) to retrieve only query-matching code blocks, reducing prompt context bloat by 85% and cutting average input costs from ~20k to 2.7k tokens.",
        "Formulated an Asymmetric Reinforcement Learning Loop that dynamically weights search channel relevance based on active developer feedback loops (Accept/Reject signals on code edits), achieving highly personalized retrieval metrics.",
        "Built a Multi-File Transactional Refactoring Engine (/refactor) utilizing vscode.WorkspaceEdit to perform concurrent, safe dependency updates and symbol renaming across workspace boundaries with single-keystroke transactional undo.",
        "Implemented an Asynchronous Context Compaction System that dynamically estimates message token weights and runs background summarization on older chat turns, maintaining conversational grounding while preventing context window overflow."
      ],
      techStack: ["TypeScript", "React.js", "VS Code Extension API", "Node.js", "AST Parsing (TS Compiler API)", "Vector Embeddings (Cosine Similarity)", "Reciprocal Rank Fusion (RRF)", "Zustand", "CSS"],
      gitLink: "https://github.com/17prateek12",
      isOpenSource: false
    }
  ],
  publications: [
    {
      id: 1,
      title: "Comparative Study of Transformers and CNNs for Autonomous Vehicle Navigation",
      date: "December 2023",
      description: "Comparative research investigating performance, latency, and training overhead of Vision Transformers versus Convolutional Neural Network architectures for real-time lane detection and path planning. Published in the proceedings of the 9th International Conference on Signal Processing and Communication (ICSC)."
    }
  ],
  achievements: [
    {
      id: 1,
      title: "Co-authored and Published Research Paper at 9th IEEE ICSC",
      date: "Dec 2023",
      description: "Successfully presented research on neural network-based autonomous navigation systems."
    },
    {
      id: 2,
      title: "Top 5% in Flipkart Gridlock 2.0 Hackathon",
      date: "June 2026",
      description: "Selected among top 1,600 out of 30,000+ candidates (top 5%) for June 2026 Round 2 of Flipkart Gridlock 2.0, a national-level engineering hackathon."
    }
  ],
  education: [
    {
      id: 1,
      institution: "Jaypee Institute of Information Technology",
      degree: "B.Tech in Electronics and Communication Engineering",
      location: "Noida, India",
      duration: "August 2019 - June 2023",
      description: "Graduated with first-class honors. Focus on embedded systems, signals, and machine learning."
    }
  ]
};
