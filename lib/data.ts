export const profile = {
  name: 'Syed Ali Raza',
  title: 'Full-Stack Developer',
  email: 'aliraza2024inbox@gmail.com',
  phone: '+92 332 2158601',
  location: 'Sector 15-B Buffer Zone, Karachi, Pakistan',
  linkedin: 'https://www.linkedin.com/in/syed-ali-raza-software-engineer',
  github: 'https://github.com/aliraza2024inbox-art',
  avatar: '/images/avatar.png',
  cv: '/Syed_Ali_Raza_Full_Stack_Developer_CV.docx',
}

export const aboutText = [
  "I'm a Full-Stack Developer and final-year Computer Science student from Karachi, Pakistan, experienced in building and deploying production web applications with React, Next.js, Node.js, and TypeScript.",
  'I independently architected and shipped two full-stack e-commerce platforms end-to-end — covering database design, REST API development, authentication, payment integration, and cloud deployment. Both are live in production today.',
  "Alongside web development, I bring hands-on enterprise IT experience from my internship at Pakistan Refinery Limited, plus a background in mobile development with Flutter and applied machine learning with Python. If you have an idea for a web platform or product, let's connect and build it.",
]

export const services = [
  {
    icon: 'code',
    title: 'Full-Stack Web Development',
    description:
      'Production web apps built with React, Next.js, Node.js, Express, and TypeScript — from database to deployment.',
  },
  {
    icon: 'shield',
    title: 'E-Commerce & Payments',
    description:
      'Complete storefronts with authentication, admin dashboards, Stripe Checkout, and secure server-side order logic.',
  },
  {
    icon: 'smartphone',
    title: 'Mobile App Development',
    description:
      'Cross-platform mobile apps for Android and iOS using Flutter, Dart, and Firebase.',
  },
  {
    icon: 'brain',
    title: 'Machine Learning',
    description:
      'Predictive models and data analysis using Python and scikit-learn, applied to real-world problems.',
  },
]

export const education = [
  {
    degree: 'Bachelor of Science in Computer Science',
    school: 'PAF-KIET University, Karachi',
    period: '2022 — 2026 (Expected)',
    description:
      'Final-year Computer Science student focused on full-stack web development, mobile apps, and machine learning. Leading a 4-member team building an AI-powered flood prediction system as the final year project.',
  },
  {
    degree: 'Intermediate',
    school: 'College for Advanced Studies, Karachi',
    period: '2020 — 2022',
    description:
      'Built a solid foundation in mathematics, logic, and core computer science fundamentals.',
  },
  {
    degree: 'O-Levels',
    school: 'Beaconhouse Cambridge Branch, Karachi',
    period: '2017 — 2020',
    description:
      'Completed Cambridge O-Levels with a focus on sciences and computing.',
  },
]

export const skillGroups = [
  {
    icon: 'globe',
    title: 'Frontend',
    subtitle: 'Modern Web UIs',
    skills: ['React.js', 'Next.js (App Router)', 'TypeScript', 'Tailwind CSS', 'Bootstrap', 'HTML5/CSS3'],
  },
  {
    icon: 'code',
    title: 'Backend',
    subtitle: 'APIs & Servers',
    skills: ['Node.js', 'Express.js', 'ASP.NET Core', 'RESTful APIs', 'Prisma ORM', 'Entity Framework'],
  },
  {
    icon: 'database',
    title: 'Databases',
    subtitle: 'Relational & NoSQL',
    skills: ['PostgreSQL', 'MongoDB', 'MySQL', 'SQL Server', 'Firebase'],
  },
  {
    icon: 'shield',
    title: 'Auth & Payments',
    subtitle: 'Security & Checkout',
    skills: ['JWT', 'NextAuth.js', 'bcrypt', 'Stripe Checkout'],
  },
  {
    icon: 'pen',
    title: 'Tools & Platforms',
    subtitle: 'Workflow & Deployment',
    skills: ['Git', 'GitHub', 'Vercel', 'Railway', 'Figma', 'VS Code'],
  },
  {
    icon: 'smartphone',
    title: 'Additional',
    subtitle: 'Mobile & ML',
    skills: ['Flutter', 'Dart', 'Python', 'scikit-learn', 'C#'],
  },
]

export const experiences = [
  {
    role: 'Freelance Full-Stack Developer',
    company: 'Self-Employed, Remote',
    type: 'FREELANCE',
    period: '2024 — Present',
    bullets: [
      'Designed, built, and deployed full-stack web applications for university students as freelance clients, owning the full lifecycle from requirements gathering through production deployment.',
      'Delivered production platforms including full-stack e-commerce systems with authentication, payment processing, and admin dashboards.',
      'Managed client communication, technical planning, and post-launch support independently, working across the frontend, backend, and database layers.',
    ],
    tags: ['Next.js', 'React', 'Node.js', 'TypeScript', 'PostgreSQL', 'MongoDB'],
  },
  {
    role: 'IT Intern',
    company: 'Pakistan Refinery Limited (PRL), Karachi',
    type: 'INTERNSHIP',
    period: 'Jul 2025 — Aug 2025',
    bullets: [
      'Configured and maintained Windows Server environments, supporting daily network operations across enterprise IT infrastructure.',
      'Assisted with SAP role provisioning, access management workflows, and structured data entry for internal business systems.',
      'Monitored firewall interfaces and access logs to support information security and compliance protocols.',
      'Delivered technical support and troubleshooting for internal system users, resolving server-side and infrastructure issues.',
      'Collaborated with the IT team on infrastructure setup, gaining hands-on exposure to backend and server-side operations in a live enterprise environment.',
    ],
    tags: ['Windows Server', 'SAP', 'Networking', 'Firewall', 'IT Support'],
  },
]

export const projects = [
  {
    title: 'TohfaBox — E-Commerce Gift Delivery Platform',
    subtitle: 'Featured Project · Live at tohfabox.vercel.app',
    image: '/images/project-tohfabox.png',
    link: 'https://tohfabox.vercel.app',
    description:
      'Full-stack e-commerce platform for gift delivery in Pakistan with product browsing, cart, checkout, and phone-based order tracking. Architected the relational schema (products, categories, orders, admin users) with Prisma and PostgreSQL, built RESTful API routes with Zod validation, and implemented secure admin authentication with NextAuth.js and protected middleware routes. Includes promo code validation, stock verification, and server-side logic to prevent price tampering. Deployed on Vercel with a live Neon PostgreSQL database.',
    tags: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL', 'NextAuth.js', 'Tailwind CSS'],
  },
  {
    title: 'GiftWala — Admin Dashboard',
    subtitle: 'Featured Project · Live at tohfabox.vercel.app/admin/dashboard',
    image: '/images/project-tohfabox-admin.png',
    link: 'https://tohfabox.vercel.app/admin/dashboard',
    description:
      'Role-based admin dashboard for a full-stack gift-delivery e-commerce platform. Built secure credentials-based authentication with Auth.js, protected admin routes, and RESTful API routes for order and product management. Backed by a fully relational PostgreSQL schema via Prisma with type-safe queries end to end. Admins can view all orders, update status (Pending → Shipped → Delivered), and manage incoming customer contact messages from one place.',
    tags: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL', 'Auth.js', 'Tailwind CSS'],
  },
  {
    title: 'Cake Lane — Bakery E-Commerce Platform',
    subtitle: 'Featured Project · Live at cakelane.vercel.app',
    image: '/images/project-cakelane.png',
    link: 'https://cakelane.vercel.app',
    description:
      'Full-stack bakery e-commerce platform built on the MERN stack with customer shopping workflows and a role-based admin dashboard for product and order management. Built RESTful APIs with JWT authentication, bcrypt password hashing, and protected routes, and integrated Stripe Checkout with server-side session creation and payment verification. Uses MongoDB Atlas with Mongoose, deployed independently on Vercel (frontend) and Railway (backend).',
    tags: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'Stripe'],
  },
  {
    title: 'Cake Lane — Admin Dashboard',
    subtitle: 'Featured Project · Live at cakelane.vercel.app/admin',
    image: '/images/project-cakelane-admin.png',
    link: 'https://cakelane.vercel.app/admin',
    description:
      'Role-based admin dashboard for managing products and customer orders. Built protected admin routes with JWT authorization and RESTful APIs, with MongoDB and Mongoose for persistent data management.',
    tags: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'RBAC', 'CRUD'],
  },
  {
    title: 'Flood Risk Prediction System for Pakistan',
    subtitle: 'Final Year Project · Jul 2024 — Feb 2026',
    image: '/images/project-flood.png',
    link: null,
    description:
      'Led a 4-member team building a mobile app that predicts flood risk across 440 Pakistani cities using a Python machine learning model with 85-90% accuracy. Integrated 17 weather and mapping APIs for real-time data, used Firebase for fast data storage and retrieval, and designed the UI in Figma with risk-level color coding.',
    tags: ['Flutter', 'Python', 'Machine Learning', 'Firebase', 'Figma'],
  },
  {
    title: 'Hospital Management System',
    subtitle: 'Academic Project',
    image: '/images/project-hospital.png',
    link: null,
    description:
      'Backend system for appointments, billing, and secure patient record handling with role-based access control and data encryption. Wrote modular backend code in C# integrated with SQL Server, focused on data security and privacy in a medical context.',
    tags: ['C#', 'ASP.NET Core', 'SQL Server', 'RBAC', 'Encryption'],
  },
]
