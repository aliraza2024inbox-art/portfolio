'use client'

import { useState, useRef } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { Sidebar } from '@/components/sidebar'
import { AboutSection } from '@/components/sections/about'
import { ResumeSection } from '@/components/sections/resume'
import { ExperienceSection } from '@/components/sections/experience'
import { ProjectsSection } from '@/components/sections/projects'
import { ContactSection } from '@/components/sections/contact'
import { User, FileText, Briefcase, FolderGit2, Mail } from 'lucide-react'

const tabs = [
  { name: 'About', shortName: 'About', icon: User },
  { name: 'Resume', shortName: 'Resume', icon: FileText },
  { name: 'Experience', shortName: 'Exp', icon: Briefcase },
  { name: 'Projects', shortName: 'Work', icon: FolderGit2 },
  { name: 'Contact', shortName: 'Contact', icon: Mail },
] as const

type Tab = (typeof tabs)[number]['name']

export function Portfolio() {
  const [activeTab, setActiveTab] = useState<Tab>('About')
  const contentRef = useRef<HTMLDivElement>(null)

  const handleTabChange = (tabName: Tab) => {
    setActiveTab(tabName)
    // On mobile, scroll the content area into view when switching tabs
    if (typeof window !== 'undefined' && window.innerWidth < 1024) {
      setTimeout(() => {
        contentRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' })
      }, 50)
    }
  }

  return (
    <main className="mx-auto flex max-w-7xl flex-col gap-4 p-2.5 sm:p-5 md:p-8 lg:flex-row lg:items-start"
      style={{ paddingBottom: 'calc(5.5rem + env(safe-area-inset-bottom, 0px))' }}
    >
      <Sidebar />

      {/* Main content card */}
      <div
        ref={contentRef}
        className="bg-card/80 border-border/80 glass-panel relative flex-1 rounded-2xl border p-3.5 shadow-xl sm:p-6 md:p-10"
        style={{ minHeight: '60vh' }}
      >
        {/* ── Desktop nav (top-right corner of the card) ── */}
        <nav
          aria-label="Portfolio sections"
          className="hidden lg:block absolute top-0 right-0 z-10 rounded-tr-2xl rounded-bl-2xl border-b border-l border-border/80 bg-card-raised/95 p-2 backdrop-blur-xl"
        >
          <ul className="flex items-center gap-2">
            {tabs.map((tab) => {
              const Icon = tab.icon
              const isActive = activeTab === tab.name
              return (
                <li key={tab.name}>
                  <button
                    type="button"
                    onClick={() => handleTabChange(tab.name)}
                    aria-current={isActive ? 'page' : undefined}
                    className={`relative flex items-center gap-1.5 rounded-xl px-3 py-2 text-xs font-semibold transition-colors md:px-4 md:py-2.5 md:text-sm ${
                      isActive
                        ? 'text-primary'
                        : 'text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    <Icon className="size-4 shrink-0" aria-hidden="true" />
                    <span>{tab.name}</span>
                    {isActive && (
                      <motion.span
                        layoutId="desktopTabPill"
                        className="pointer-events-none absolute inset-0 rounded-xl border border-primary/40 bg-primary/15"
                        transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                      />
                    )}
                  </button>
                </li>
              )
            })}
          </ul>
        </nav>

        {/* ── Content ── */}
        <div className="pt-1 lg:pt-14">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
            >
              {activeTab === 'About' && <AboutSection />}
              {activeTab === 'Resume' && <ResumeSection />}
              {activeTab === 'Experience' && <ExperienceSection />}
              {activeTab === 'Projects' && <ProjectsSection />}
              {activeTab === 'Contact' && <ContactSection />}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* ── Mobile bottom navigation bar (fixed, outside all card stacking contexts) ── */}
      <nav
        aria-label="Portfolio sections"
        className="lg:hidden fixed bottom-0 left-0 right-0 z-50 border-t border-border/80 backdrop-blur-xl"
        style={{
          backgroundColor: 'oklch(0.26 0.004 80 / 0.97)',
          paddingBottom: 'env(safe-area-inset-bottom, 0px)',
        }}
      >
        <ul className="grid grid-cols-5 items-center">
          {tabs.map((tab) => {
            const Icon = tab.icon
            const isActive = activeTab === tab.name
            return (
              <li key={tab.name} className="w-full">
                <button
                  type="button"
                  onClick={() => handleTabChange(tab.name)}
                  aria-current={isActive ? 'page' : undefined}
                  className={`relative flex w-full flex-col items-center justify-center gap-0.5 px-1 py-3 text-[10px] font-semibold transition-colors ${
                    isActive
                      ? 'text-primary'
                      : 'text-muted-foreground'
                  }`}
                >
                  {isActive && (
                    <span className="absolute top-0 left-1/2 -translate-x-1/2 h-0.5 w-8 rounded-b-full bg-primary" />
                  )}
                  <Icon className="size-5 shrink-0" aria-hidden="true" />
                  <span>{tab.shortName}</span>
                </button>
              </li>
            )
          })}
        </ul>
      </nav>
    </main>
  )
}
