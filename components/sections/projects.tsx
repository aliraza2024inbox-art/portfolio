'use client'

import Image from 'next/image'
import { motion } from 'motion/react'
import { ExternalLink, Sparkles } from 'lucide-react'
import { projects } from '@/lib/data'
import { SectionTitle } from '@/components/section-title'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
}

export function ProjectsSection() {
  return (
    <section aria-labelledby="projects-title">
      <SectionTitle id="projects-title">Projects</SectionTitle>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid gap-6 sm:grid-cols-2"
      >
        {projects.map((project) => (
          <motion.article
            key={project.title}
            variants={itemVariants}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            className="bg-card-raised/40 border-border/80 hover:border-primary/50 group flex flex-col overflow-hidden rounded-2xl border shadow-sm transition-all hover:shadow-lg"
          >
            <div className="relative overflow-hidden">
              <Image
                src={project.image || '/placeholder.svg'}
                alt={`Screenshot of ${project.title}`}
                width={640}
                height={400}
                className="aspect-[16/10] w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {project.link && (
                <div className="absolute top-3 right-3">
                  <span className="bg-card/80 text-primary border-primary/30 flex size-8 items-center justify-center rounded-xl border backdrop-blur-md">
                    <Sparkles className="size-4" />
                  </span>
                </div>
              )}
            </div>

            <div className="flex flex-1 flex-col p-5 sm:p-6">
              <h3 className="text-foreground text-base font-semibold sm:text-lg text-pretty group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-primary mt-1 text-xs font-medium tracking-wide">
                {project.subtitle}
              </p>
              <p className="text-muted-foreground mt-3 flex-1 text-xs leading-relaxed sm:text-sm">
                {project.description}
              </p>

              <ul className="mt-4 flex flex-wrap gap-1.5 sm:gap-2">
                {project.tags.map((tag) => (
                  <li
                    key={tag}
                    className="bg-card/90 text-muted-foreground border-border/70 rounded-lg border px-2.5 py-1 text-[11px] font-medium sm:text-xs"
                  >
                    {tag}
                  </li>
                ))}
              </ul>

              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground border-primary/30 mt-5 inline-flex items-center justify-center gap-2 rounded-xl border px-4 py-2.5 text-xs font-semibold transition-all active:scale-95 sm:text-sm"
                >
                  <span>Visit Live Project</span>
                  <ExternalLink className="size-4" aria-hidden="true" />
                </a>
              )}
            </div>
          </motion.article>
        ))}
      </motion.div>
    </section>
  )
}
