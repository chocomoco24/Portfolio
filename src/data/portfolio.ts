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
    twitter: "https://x.com/_pyaaz_",
    instagram: "https://www.instagram.com/pyaaz._/",
    available: true,
  },

  resume:
    "https://drive.google.com/file/d/12DGXsUFLWHafjXfV-WAELfYzQbvgobY5/view?usp=drive_link",

  summary:
    "Final-year B.Tech Computer Science student at KIIT University specialising in full-stack development across Spring Boot, React, Node.js/Express, and Python/FastAPI. Built and deployed AI-integrated applications including a stroke prediction platform and an F1 analytics system with Groq LLM integration. Strong foundation in OOP, DBMS, and REST API design, with hands-on experience shipping to production via Vercel and Render.",

  education: [
    {
      institution: "Kalinga Institute of Industrial Technology",
      location: "Bhubaneswar, India",
      degree: "B.Tech in Computer Science & Engineering",
      period: "2022 – 2026",
      gpa: "7.06 / 10",
    },
  ],

  skills: {
    languages: ["Java", "PHP", "JavaScript", "SQL"],
    frontend: ["React.js", "HTML5", "CSS3", "Blade"],
    backend: ["Node.js", "Express", "Laravel"],
    databases: ["MySQL", "PostgreSQL", "MongoDB"],
    tools: ["Git", "GitHub", "Docker", "Postman", "GithubActions"],
    concepts: [
      "API Design",
      "OOPS",
      "DBMS",
      "Microservices",
      "Data Structures",
    ],
  },

  projects: [
    {
      id: "neural-stroke-care",
      number: "01",
      title: "Neural Stroke Care",
      category: "Full-Stack · ML",
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
      demo: "https://neural-stroke-care.vercel.app/",
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
      tech: [
        "React",
        "Node.js",
        "Express",
        "MySQL",
        "Groq LLM",
        "Vercel",
        "Render",
      ],
      github: "https://github.com/chocomoco24/F1Race",
      demo: "https://f1-race-report-omega.vercel.app/",
    },
    {
      id: "nitro_mail",
      number: "03",
      title: "Nitro Mail",
      category: "Full-Stack",
      description:
        "Built a full-stack webmail client using Laravel 12, MySQL, and Tailwind CSS with SMTP, IMAP, Queues, and Scheduler integration. Implemented real-time email sync, scheduled/recurring emails, encrypted authentication, and read receipts. Developed a production-ready platform with CC/BCC, attachments, task reminders, and folder management.",
      highlights: [
        "Built a full-stack webmail client using Laravel 12, MySQL, and Tailwind CSS",
        "Implemented SMTP, IMAP, Laravel Queues, and Scheduler for email automation",
        "Developed scheduled/recurring emails, reminders, and real-time inbox sync",
        "Added CC/BCC, attachments, folder management, read receipts, and secure authentication",
      ],
      tech: ["PHP", "Laravel", "Blade", "MySQL"],
      github: "https://github.com/chocomoco24/NitroMail",
      demo: "",
    },
  ],

  experience: [
    {
      company: "iLogitron Technologies Private Limited",
      role: "Software Development Engineer Intern",
      type: "Certificate",
      period: "May 2026 – July 2026",
      points: [
        "Implemented Python, HTML, CSS, JavaScript, and SQL across real-world project tasks.",
        "Applied user authentication, REST APIs, and database management concepts.",
        "Strengthened coding practices through debugging and version control with Git/GitHub.",
        "Solved industry-level assignments and coding challenges throughout the internship.",
      ],
    }
  ],

  certifications: [
    {
      title: "Project Initiation",
      issuer: "Google",
      link: "https://drive.google.com/file/d/1qNBldyQgVVrkGMw03j5kbzCYrNzzVh8a/view?usp=sharing",
    },
    {
      title: "Project Planning",
      issuer: "Google",
      link: "https://drive.google.com/file/d/11OqfrmWDT2WMClZCk3UClPUXgNY5TJM3/view?usp=sharing",
    },
  ],

  extracurricular: [
    { role: "Graphic Designer", org: "IoT Lab (Technical Society)" },
    { role: "Photographer", org: "Kzarshion (Fashion Society)" },
    { role: "Volunteer", org: "Khwaab (Social Welfare Society)" },
  ],
};
