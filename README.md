# Syed Ali Raza — Portfolio

Personal portfolio website showcasing my work as a Full-Stack Developer, built with Next.js, TypeScript, and Tailwind CSS.

**Live site:** [add your Vercel URL here once deployed]

## About

Final-year Computer Science student from Karachi, Pakistan, specializing in full-stack web development, Flutter mobile apps, and applied machine learning. This portfolio highlights production projects, skills, experience, and education.

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animation:** Motion (Framer Motion)
- **Icons:** Lucide React
- **Deployment:** Vercel

## Features

- Single-page tabbed layout (About, Resume, Experience, Projects, Contact)
- Fully responsive — desktop sidebar navigation and mobile bottom tab bar
- Smooth animated tab transitions
- Downloadable CV
- Dark theme with glassmorphism UI panels

## Getting Started

Clone the repo and install dependencies:

```bash
git clone https://github.com/aliraza2024inbox-art/portfolio.git
cd portfolio
npm install
```

Run the development server:

```bash
npm run dev
```

To access the dev server from another device on your local network:

```bash
npm run dev:network
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Build for Production

```bash
npm run build
npm run start
```

## Project Structure

```
├── app/                  # Next.js App Router pages and layout
├── components/
│   ├── sections/         # About, Resume, Experience, Projects, Contact
│   ├── ui/                # Reusable UI primitives
│   ├── portfolio.tsx      # Main tabbed layout
│   └── sidebar.tsx         # Profile sidebar
├── lib/
│   └── data.ts            # Content: profile, skills, experience, projects
└── public/                 # Static assets (images, CV, icons)
```

## Featured Projects

- **[TohfaBox](https://tohfabox.vercel.app)** — Full-stack e-commerce gift delivery platform (Next.js, Prisma, PostgreSQL, NextAuth.js)
- **[Cake Lane](https://cakelane.vercel.app)** — MERN-stack bakery e-commerce platform with Stripe Checkout
- **Flood Risk Prediction System** — Final year project predicting flood risk across 440+ Pakistani cities (Flutter, Python ML, Firebase)

## Contact

- **Email:** aliraza2024inbox@gmail.com
- **LinkedIn:** [syed-ali-raza-software-engineer](https://www.linkedin.com/in/syed-ali-raza-software-engineer)
- **GitHub:** [@aliraza2024inbox-art](https://github.com/aliraza2024inbox-art)

## License

This project is for personal portfolio use. Feel free to reference the structure, but please don't reuse the content or design as-is.
