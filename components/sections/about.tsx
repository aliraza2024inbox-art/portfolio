'use client'

import { motion } from 'motion/react'
import { Smartphone, Code2, Brain, ShieldCheck } from 'lucide-react'
import { aboutText, services } from '@/lib/data'
import { SectionTitle } from '@/components/section-title'

const iconMap = {
  smartphone: Smartphone,
  code: Code2,
  brain: Brain,
  shield: ShieldCheck,
} as const

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.35, ease: 'easeOut' } },
}

export function AboutSection() {
  return (
    <section aria-labelledby="about-title">
      <SectionTitle id="about-title">About Me</SectionTitle>

      <div className="text-muted-foreground space-y-4 text-sm leading-relaxed sm:text-base">
        {aboutText.map((paragraph, i) => (
          <p key={i} className="text-pretty">
            {paragraph}
          </p>
        ))}
      </div>

      <h3 className="text-foreground mt-8 mb-4 text-lg font-semibold sm:mt-10 sm:mb-6 sm:text-xl">
        What I&apos;m Doing
      </h3>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid gap-4 sm:grid-cols-2"
      >
        {services.map((service) => {
          const Icon = iconMap[service.icon as keyof typeof iconMap] ?? Code2
          return (
            <motion.div
              key={service.title}
              variants={itemVariants}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="bg-card-raised/40 border-border/80 hover:border-primary/50 group relative flex gap-4 rounded-2xl border p-5 shadow-sm transition-all hover:shadow-md sm:p-6"
            >
              <div className="bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground flex size-12 shrink-0 items-center justify-center rounded-xl transition-colors">
                <Icon className="size-6" strokeWidth={1.75} aria-hidden="true" />
              </div>
              <div>
                <h4 className="text-foreground text-base font-semibold group-hover:text-primary transition-colors">
                  {service.title}
                </h4>
                <p className="text-muted-foreground mt-1.5 text-xs leading-relaxed sm:text-sm">
                  {service.description}
                </p>
              </div>
            </motion.div>
          )
        })}
      </motion.div>
    </section>
  )
}
