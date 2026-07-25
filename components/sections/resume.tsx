'use client'

import { motion } from 'motion/react'
import {
  BookOpen,
  LayoutGrid,
  Smartphone,
  Globe,
  Brain,
  Database,
  Bug,
  PenTool,
  Download,
  Code2,
  ShieldCheck,
} from 'lucide-react'
import { education, skillGroups, profile } from '@/lib/data'
import { SectionTitle } from '@/components/section-title'

const iconMap = {
  smartphone: Smartphone,
  globe: Globe,
  brain: Brain,
  database: Database,
  bug: Bug,
  pen: PenTool,
  code: Code2,
  shield: ShieldCheck,
} as const

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 14 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
}

export function ResumeSection() {
  return (
    <section aria-labelledby="resume-title">
      <SectionTitle id="resume-title">Resume</SectionTitle>

      {/* CV Callout Banner */}
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-card-raised/60 border-primary/20 mb-8 flex flex-col items-start justify-between gap-4 rounded-2xl border p-5 shadow-sm sm:flex-row sm:items-center sm:p-6"
      >
        <div>
          <h3 className="text-foreground font-semibold text-base">
            Want full qualifications &amp; history?
          </h3>
          <p className="text-muted-foreground mt-1 text-xs sm:text-sm">
            Download my complete CV including live project architecture and experience.
          </p>
        </div>
        <a
          href={profile.cv}
          download="Syed_Ali_Raza_Full_Stack_Developer_CV.docx"
          className="bg-primary text-primary-foreground shadow-primary/25 hover:shadow-primary/40 inline-flex w-full shrink-0 items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-xs font-semibold shadow-md transition-all hover:opacity-95 active:scale-[0.98] sm:w-auto sm:px-5 sm:py-3 sm:text-sm"
        >
          <Download className="size-4" aria-hidden="true" />
          Download CV
        </a>
      </motion.div>

      {/* Education Header */}
      <div className="mb-6 flex items-center gap-3.5">
        <span className="bg-primary/10 text-primary border-primary/20 flex size-10 items-center justify-center rounded-xl border sm:size-11">
          <BookOpen className="size-5" aria-hidden="true" />
        </span>
        <h3 className="text-foreground text-lg font-semibold sm:text-xl">Education</h3>
      </div>

      {/* Timeline Tree */}
      <motion.ol 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="border-primary/30 ml-4 flex flex-col gap-5 border-l pl-5 sm:ml-5 sm:gap-6 sm:pl-8"
      >
        {education.map((edu) => (
          <motion.li
            key={edu.degree}
            variants={itemVariants}
            className="relative"
          >
            <span
              className="bg-primary ring-background absolute top-2.5 -left-[25px] size-2.5 rounded-full ring-4 sm:-left-[37px]"
              aria-hidden="true"
            />
            <div className="bg-card-raised/40 border-border/80 hover:border-primary/40 rounded-2xl border p-5 transition-colors sm:p-6">
              <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
                <h4 className="text-foreground font-semibold text-sm sm:text-base text-pretty">
                  {edu.degree}
                </h4>
                <span className="bg-primary/10 text-primary border-primary/20 inline-block w-fit rounded-md border px-2.5 py-0.5 text-xs font-medium">
                  {edu.period}
                </span>
              </div>
              <p className="text-muted-foreground mt-1 text-xs font-medium sm:text-sm">{edu.school}</p>
              <p className="text-muted-foreground mt-3 text-xs leading-relaxed sm:text-sm">
                {edu.description}
              </p>
            </div>
          </motion.li>
        ))}
      </motion.ol>

      {/* Skills Header */}
      <div className="mt-10 mb-6 flex items-center gap-3.5 sm:mt-12">
        <span className="bg-primary/10 text-primary border-primary/20 flex size-10 items-center justify-center rounded-xl border sm:size-11">
          <LayoutGrid className="size-5" aria-hidden="true" />
        </span>
        <h3 className="text-foreground text-lg font-semibold sm:text-xl">
          Skills &amp; Expertise
        </h3>
      </div>

      {/* Skills Cards Grid */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
      >
        {skillGroups.map((group) => {
          const Icon = iconMap[group.icon as keyof typeof iconMap] ?? LayoutGrid
          return (
            <motion.div
              key={group.title}
              variants={itemVariants}
              whileHover={{ y: -3 }}
              className="bg-card-raised/40 border-border/80 hover:border-primary/40 rounded-2xl border p-5 transition-all"
            >
              <div className="flex items-center gap-3">
                <div className="bg-primary/10 text-primary flex size-9 items-center justify-center rounded-lg">
                  <Icon className="size-5" strokeWidth={1.75} aria-hidden="true" />
                </div>
                <div>
                  <h4 className="text-foreground text-sm font-semibold sm:text-base">{group.title}</h4>
                  <p className="text-muted-foreground text-[11px] sm:text-xs">{group.subtitle}</p>
                </div>
              </div>
              <ul className="mt-4 flex flex-wrap gap-1.5 sm:gap-2">
                {group.skills.map((skill) => (
                  <motion.li
                    key={skill}
                    whileHover={{ scale: 1.05 }}
                    className="bg-card/90 text-muted-foreground border-border/70 hover:border-primary/50 hover:text-foreground rounded-lg border px-2.5 py-1 text-[11px] font-medium transition-colors sm:text-xs"
                  >
                    {skill}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          )
        })}
      </motion.div>
    </section>
  )
}
