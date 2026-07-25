'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'motion/react'
import { Mail, Phone, MapPin, Download, ChevronDown, ChevronUp, Copy, Check, ExternalLink } from 'lucide-react'
import { profile } from '@/lib/data'

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  )
}

const contactItems = [
  {
    icon: Mail,
    label: 'EMAIL',
    value: profile.email,
    href: `mailto:${profile.email}`,
  },
  {
    icon: Phone,
    label: 'PHONE',
    value: profile.phone,
    href: `tel:${profile.phone.replace(/[^+\d]/g, '')}`,
  },
  {
    icon: MapPin,
    label: 'LOCATION',
    value: profile.location,
    href: null,
  },
  {
    icon: LinkedinIcon,
    label: 'LINKEDIN',
    value: 'syed-ali-raza',
    href: profile.linkedin,
  },
  {
    icon: GithubIcon,
    label: 'GITHUB',
    value: 'aliraza2024inbox-art',
    href: profile.github,
  },
]

export function Sidebar() {
  const [mobileExpanded, setMobileExpanded] = useState(false)
  const [copied, setCopied] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20
      setScrolled(isScrolled)
      // Auto-collapse contacts panel when user scrolls down on mobile
      if (isScrolled && mobileExpanded) {
        setMobileExpanded(false)
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [mobileExpanded])

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault()
    navigator.clipboard.writeText(profile.email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <aside
      className={`bg-card/90 border-border/80 glass-panel sticky top-2 z-30 flex w-full flex-col rounded-2xl border p-4 shadow-xl backdrop-blur-xl transition-shadow duration-300 md:p-6 lg:top-8 lg:w-72 lg:shrink-0 lg:p-8 ${
        scrolled ? 'shadow-2xl shadow-black/30' : 'shadow-xl'
      }`}
    >
      {/* Mobile Top Header Card (< lg) */}
      <div className="flex items-center justify-between gap-3 lg:flex-col lg:items-center lg:justify-start">
        <div className="flex min-w-0 flex-1 items-center gap-3.5 lg:w-full lg:flex-col lg:items-center lg:gap-0">
          <div className="from-primary/20 via-primary/40 to-primary/10 shrink-0 rounded-2xl bg-gradient-to-br p-1 shadow-md">
            <Image
              src={profile.avatar || '/placeholder.svg'}
              alt={`Portrait of ${profile.name}`}
              width={140}
              height={140}
              priority
              className="size-14 rounded-xl object-cover lg:size-32"
            />
          </div>

          <div className="flex min-w-0 flex-col lg:items-center">
            <h1 className="text-foreground truncate text-base font-semibold tracking-tight lg:mt-5 lg:text-center lg:text-2xl">
              {profile.name}
            </h1>
            <p className="bg-card-raised/80 text-primary border-primary/20 mt-1 inline-block w-fit max-w-full truncate rounded-md border px-2.5 py-1 text-xs font-medium lg:mt-3 lg:rounded-lg lg:px-4 lg:py-1.5">
              {profile.title}
            </p>
          </div>
        </div>

        {/* Action Toggle for Mobile */}
        <div className="flex items-center gap-2 lg:hidden">
          <a
            href={profile.cv}
            download="Syed_Ali_Raza_Full_Stack_Developer_CV.docx"
            className="bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground border-primary/30 flex size-9 items-center justify-center rounded-xl border transition-all active:scale-95"
            title="Download CV"
          >
            <Download className="size-4" aria-hidden="true" />
          </a>

          <button
            type="button"
            onClick={() => setMobileExpanded(!mobileExpanded)}
            className="bg-card-raised text-muted-foreground hover:text-foreground border-border/80 flex items-center gap-1.5 rounded-xl border px-3 py-2 text-xs font-medium transition-colors"
          >
            <span>{mobileExpanded ? 'Less' : 'Contacts'}</span>
            {mobileExpanded ? (
              <ChevronUp className="size-3.5 text-primary" />
            ) : (
              <ChevronDown className="size-3.5 text-primary" />
            )}
          </button>
        </div>
      </div>

      {/* Desktop Download CV button */}
      <a
        href={profile.cv}
        download="Syed_Ali_Raza_Full_Stack_Developer_CV.docx"
        className="bg-primary text-primary-foreground shadow-primary/25 hover:shadow-primary/40 mt-5 hidden w-full items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold shadow-lg transition-all hover:opacity-95 active:scale-[0.98] lg:flex"
      >
        <Download className="size-4" aria-hidden="true" />
        Download CV
      </a>

      {/* Divider - visible on desktop always, visible on mobile when expanded */}
      <hr className={`border-border/60 my-4 w-full ${mobileExpanded ? 'block' : 'hidden lg:block'} lg:my-6`} />

      {/* Contact details list: Collapsible on mobile, always visible on desktop */}
      <div className={`${mobileExpanded ? 'block' : 'hidden'} lg:block`}>
        <motion.ul 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
          className="flex w-full flex-col gap-4 lg:gap-5"
        >
          {contactItems.map((item) => (
            <li key={item.label} className="group flex items-center gap-3.5">
              <span className="bg-card-raised/90 text-primary border-border/60 group-hover:border-primary/50 group-hover:bg-primary/10 flex size-10 shrink-0 items-center justify-center rounded-xl border shadow-sm transition-all lg:size-11">
                <item.icon className="size-4 lg:size-4.5" aria-hidden="true" />
              </span>
              <div className="min-w-0 flex-1">
                <div className="flex items-center justify-between">
                  <p className="text-muted-foreground text-[10px] font-medium tracking-wider uppercase lg:text-[11px]">
                    {item.label}
                  </p>
                  {item.label === 'EMAIL' && (
                    <button
                      type="button"
                      onClick={handleCopyEmail}
                      className="text-muted-foreground hover:text-primary transition-colors"
                      title="Copy email address"
                    >
                      {copied ? (
                        <Check className="size-3 text-emerald-400" />
                      ) : (
                        <Copy className="size-3" />
                      )}
                    </button>
                  )}
                </div>

                {item.href ? (
                  <a
                    href={item.href}
                    target={item.href.startsWith('http') ? '_blank' : undefined}
                    rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="text-foreground hover:text-primary flex items-center gap-1 truncate text-xs font-medium transition-colors lg:text-sm"
                  >
                    <span className="truncate">{item.value}</span>
                    {item.href.startsWith('http') && (
                      <ExternalLink className="size-3 shrink-0 opacity-60 group-hover:opacity-100" />
                    )}
                  </a>
                ) : (
                  <p className="text-foreground truncate text-xs font-medium lg:text-sm">{item.value}</p>
                )}
              </div>
            </li>
          ))}
        </motion.ul>
      </div>
    </aside>
  )
}
