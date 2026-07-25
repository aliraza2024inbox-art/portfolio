'use client'

import { motion } from 'motion/react'
import { experiences } from '@/lib/data'
import { SectionTitle } from '@/components/section-title'
import { Briefcase } from 'lucide-react'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.35 } },
}

export function ExperienceSection() {
  return (
    <section aria-labelledby="experience-title">
      <SectionTitle id="experience-title">Experience</SectionTitle>

      <motion.ol 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="border-primary/30 ml-4 flex flex-col gap-6 border-l pl-5 sm:ml-5 sm:pl-8"
      >
        {experiences.map((exp) => (
          <motion.li
            key={exp.role + exp.company}
            variants={itemVariants}
            className="relative"
          >
            <span
              className="bg-primary ring-background absolute top-2.5 -left-[25px] size-2.5 rounded-full ring-4 sm:-left-[37px]"
              aria-hidden="true"
            />
            <div className="bg-card-raised/40 border-border/80 hover:border-primary/40 rounded-2xl border p-5 transition-all sm:p-6">
              <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
                <div className="flex flex-wrap items-center gap-2.5">
                  <h3 className="text-foreground text-sm font-semibold sm:text-base text-pretty">
                    {exp.role} — {exp.company}
                  </h3>
                  <span className="rounded-md border border-sky-400/40 bg-sky-500/10 px-2 py-0.5 text-[10px] font-semibold tracking-wider text-sky-400">
                    {exp.type}
                  </span>
                </div>
                <span className="bg-primary/10 text-primary border-primary/20 inline-block w-fit rounded-md border px-2.5 py-0.5 text-xs font-medium">
                  {exp.period}
                </span>
              </div>

              <ul className="mt-4 space-y-2">
                {exp.bullets.map((bullet, idx) => (
                  <li
                    key={idx}
                    className="text-muted-foreground flex items-start gap-2.5 text-xs leading-relaxed sm:text-sm"
                  >
                    <span className="bg-primary mt-1.5 size-1.5 shrink-0 rounded-full" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>

              <hr className="border-border/60 my-4" />

              <ul className="flex flex-wrap gap-1.5 sm:gap-2">
                {exp.tags.map((tag) => (
                  <li
                    key={tag}
                    className="bg-card/90 text-muted-foreground border-border/70 rounded-lg border px-2.5 py-1 text-[11px] font-medium sm:text-xs"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            </div>
          </motion.li>
        ))}
      </motion.ol>
    </section>
  )
}
