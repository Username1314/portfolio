export const portfolioData = {
  personal: {
    name: "Abhay",
    role: "Frontend Developer",
    subRole: "B.Tech CSE Student (2nd Year, 3rd Sem)",
    college: "Government Engineering College Bharatpur",
    degree: "B.Tech in Computer Science & Engineering",
    duration: "2024 - 2028",
    location: "Bharatpur, Rajasthan, India",
    email: "Abhayjatt112007@gmail.com",
    github: "https://github.com/Username1314",
    linkedin: "https://www.linkedin.com/in/abhay-singh-5565aa379",
    resumeUrl: "/resume.pdf", // public/resume.pdf me apna resume daalein
    status: "Open for Internships & Opportunities",
    bio: "Passionate 2nd-year CSE student at Govt. Engineering College Bharatpur, dedicated to building responsive, pixel-perfect, and user-centric web applications using modern React and JavaScript.",
    highlights: [
      "Building high-performance, responsive Single Page Applications (SPAs) with modern React.",
      "Strong foundation in Computer Science fundamentals: Data Structures, Algorithms, and OOPs.",
      "Focus on clean code, accessible UI/UX, and industry-standard developer workflows."
    ]
  },

  skills: {
    frontend: [
      { name: "React.js", level: "Advanced", icon: "Code2" },
      { name: "JavaScript (ES6+)", level: "Advanced", icon: "Cpu" },
      { name: "Tailwind CSS", level: "Advanced", icon: "Palette" },
      { name: "HTML5 & CSS3", level: "Expert", icon: "Layout" },
      { name: "Responsive Web Design", level: "Expert", icon: "Smartphone" },
      { name: "REST APIs & JSON", level: "Intermediate", icon: "Globe" },
    ],
    csFundamentals: [
      { name: "Data Structures & Algorithms", level: "Intermediate", icon: "Binary" },
      { name: "C / C++ Programming", level: "Intermediate", icon: "Terminal" },
      { name: "Object Oriented Programming (OOP)", level: "Intermediate", icon: "Layers" },
      { name: "Database Management (DBMS basics)", level: "Familiar", icon: "Database" },
    ],
    tools: [
      { name: "Git & GitHub", level: "Version Control", icon: "GitBranch" },
      { name: "Vite", level: "Build Tool", icon: "Zap" },
      { name: "VS Code", level: "Editor", icon: "Laptop" },
      { name: "Vercel / Netlify", level: "Deployment", icon: "Cloud" },
      { name: "Chrome DevTools", level: "Debugging", icon: "Search" },
    ]
  },

  projects: [
    {
      id: 1,
      title: "Interactive Dev Workspace & Task Dashboard",
      category: "Productivity & UI",
      description: "A feature-rich productivity suite designed for developers. Features real-time state management, customizable kanban boards, task filtering, and persistent local storage.",
      features: [
        "Dynamic task organization with category filters & search",
        "Persistent client-side state using React hooks and LocalStorage",
        "Sleek dark mode glassmorphism UI with Tailwind CSS"
      ],
      techStack: ["React 19", "JavaScript", "Tailwind CSS", "Lucide Icons", "Vite"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      featured: true
    },
    {
      id: 2,
      title: "Real-Time Weather & Climate Analytics",
      category: "API Integration",
      description: "A dynamic weather application fetching live meteorological data, hourly forecasts, and air quality indices with automatic location detection and interactive metric visualizers.",
      features: [
        "Live asynchronous API calls with loading states & error boundaries",
        "Search autocomplete for global cities with geo-coordinates",
        "Fully responsive mobile-first interface"
      ],
      techStack: ["React", "REST API", "Tailwind CSS", "JavaScript"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      featured: true
    },
    {
      id: 3,
      title: "Modern E-Commerce Storefront",
      category: "Web Application",
      description: "A high-performance online store UI featuring product catalogs, category filtering, cart management, toast notifications, and seamless checkout workflow.",
      features: [
        "Instant search and category-wise sorting",
        "Stateful shopping cart with quantity updates and subtotal calculations",
        "Optimized asset loading and smooth animated transitions"
      ],
      techStack: ["React", "Context API", "Tailwind CSS", "Vite"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      featured: true
    }
  ],

  education: [
    {
      institution: "Government Engineering College Bharatpur",
      degree: "Bachelor of Technology (B.Tech)",
      field: "Computer Science & Engineering",
      year: "2024 - 2028 (Currently in 2nd Year / 3rd Semester)",
      location: "Bharatpur, Rajasthan",
      description: "Focusing on core Computer Science subjects including Data Structures, Object-Oriented Programming, Operating Systems, and modern Web Technologies.",
      badge: "Current"
    },
    {
      institution: "Senior Secondary School",
      degree: "Higher Secondary Certificate (12th Grade)",
      field: "Science & Mathematics (PCM)",
      year: "Completed",
      location: "Rajasthan",
      description: "Built strong fundamentals in analytical reasoning, mathematics, and physics.",
      badge: "Completed"
    }
  ]
};

