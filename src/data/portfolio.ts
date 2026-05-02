export const portfolioData = {
  personal: {
    name: "Debarghya Datta",
    firstName: "Debarghya",
    lastName: "Datta",
    role: "Full-Stack Developer",
    tagline:
      "Someone who enjoys solving real problems,learning along the way, and creating things that feel useful and a little bit different from the usual.",
    email: "debarghyadatta2004@gmail.com",
    phone: "+91-9040179362",
    github: "https://github.com/chocomoco24",
    linkedin: "https://www.linkedin.com/in/debarghya4/",
    twitter: "https://x.com/debarghyadatta4",
    instagram: "https://www.instagram.com/pyaaz._/",
    available: true,
  },

  summary:
    "Final-year B.Tech Computer Science student at KIIT University specialising in full-stack development across Spring Boot, React, Node.js/Express, and Python/FastAPI. Built and deployed AI-integrated applications including a stroke prediction platform and an F1 analytics system with Groq LLM integration. Strong foundation in OOP, DBMS, and REST API design, with hands-on experience shipping to production via Vercel and Render.",

  education: [
    {
      institution: "Kalinga Institute of Industrial Technology",
      location: "Bhubaneswar, India",
      degree: "B.Tech in Computer Science & Engineering",
      period: "2022 – 2026",
      gpa: "6.90 / 10",
    },
  ],

  skills: {
    languages: ["Java", "Python", "JavaScript", "TypeScript", "SQL"],
    frontend: ["React.js", "HTML5", "CSS3"],
    backend: ["Spring Boot", "Node.js", "Express", "FastAPI"],
    databases: ["MySQL", "PostgreSQL", "MongoDB"],
    tools: ["Git", "GitHub", "VS Code", "Figma", "Vercel", "Render"],
    concepts: [
      "REST API Design",
      "OOP",
      "DBMS",
      "JWT Auth",
      "Microservices",
      "Data Structures",
    ],
  },

  projects: [
    {
      id: "neural-stroke-care",
      number: "01",
      title: "Neural Stroke Care",
      category: "Microservices · ML",
      description:
        "A full-stack stroke risk prediction platform with a three-tier microservices architecture — React SPA, Express REST API, and a FastAPI ML service serving a Logistic Regression model. Features JWT-based auth with role-based access control routing patients and doctors to specialised dashboards.",
      highlights: [
        "Three-tier microservices: React, Express, FastAPI",
        "JWT auth with role-based access (patient / doctor)",
        "Real-time prediction pipeline normalising clinical input data",
        "MongoDB persistence for patient history and doctor insights",
      ],
      tech: ["React", "Node.js", "Express", "MongoDB", "Python", "FastAPI"],
      github: "https://github.com/chocomoco24/Neural-Stroke-Care",
      demo: null,
    },
    {
      id: "f1-race-report",
      number: "02",
      title: "F1 Race Report",
      category: "Full-Stack · AI",
      description:
        "A full-stack Formula 1 analytics platform delivering live race data, standings visualisation, and historical race analysis from 1950–2026. Integrated AI-generated journalist-style race reports using Groq LLM APIs with automated report generation, caching, and PDF export.",
      highlights: [
        "Interactive lap charts, podium tracking, and results tables",
        "Groq LLM integration for AI journalist-style reports",
        "PDF export with persistent Neon PostgreSQL report storage",
        "Deployed on Vercel + Render with scalable cloud architecture",
      ],
      tech: ["React", "Spring Boot", "PostgreSQL", "Groq LLM", "Vercel", "Render"],
      github: "https://github.com/chocomoco24/F1Race",
      demo: null,
    }, 
  ],

  experience: [
    {
      company: "AICTE Virtual Internship",
      role: "Python Full Stack Developer",
      type: "Certificate",
      period: "Oct 2024 – Dec 2024",
      points: [
        "Implemented Python, HTML, CSS, JavaScript, and SQL across real-world project tasks.",
        "Applied user authentication, REST APIs, and database management concepts.",
        "Strengthened coding practices through debugging and version control with Git/GitHub.",
        "Solved industry-level assignments and coding challenges throughout the internship.",
      ],
    },
  ],

  certifications: [
    { title: "Project Initiation", issuer: "Coursera" },
    { title: "Project Planning", issuer: "Coursera" },
  ],

  extracurricular: [
    { role: "Graphic Designer", org: "IoT Lab (Technical Society)" },
    { role: "Photographer", org: "Kzarshion (Fashion Society)" },
    { role: "Volunteer", org: "Khwaab (Social Welfare Society)" },
  ],
};
