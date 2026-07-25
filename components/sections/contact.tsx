'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { Send, CheckCircle2, MapPin } from 'lucide-react'
import { SectionTitle } from '@/components/section-title'

const serviceOptions = ['Mobile App', 'Web App', 'Machine Learning', 'QA Testing']

export function ContactSection() {
  const [selectedServices, setSelectedServices] = useState<string[]>([])
  const [submitted, setSubmitted] = useState(false)

  function toggleService(service: string) {
    setSelectedServices((prev) =>
      prev.includes(service)
        ? prev.filter((s) => s !== service)
        : [...prev, service],
    )
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section aria-labelledby="contact-title">
      <SectionTitle id="contact-title">Contact</SectionTitle>

      <div className="grid gap-8 lg:grid-cols-2">
        {/* Map iframe */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
          className="border-border/80 relative overflow-hidden rounded-2xl border shadow-sm min-h-[260px] lg:min-h-full"
        >
          <iframe
            title="Map of Sector 15-B Buffer Zone, Karachi, Pakistan"
            src="https://www.google.com/maps?q=24.9638952,67.0727372&z=16&output=embed"
            className="absolute inset-0 h-full w-full grayscale invert opacity-90"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
          <div className="bg-card/70 border-border/80 absolute bottom-3 left-3 right-3 flex items-center gap-2 rounded-xl border p-3 backdrop-blur-md">
            <MapPin className="text-primary size-4 shrink-0" />
            <p className="text-foreground truncate text-xs font-medium">Sector 15-B Buffer Zone, Karachi, Pakistan</p>
          </div>
        </motion.div>

        {/* Form Container */}
        <div>
          <h3 className="text-foreground mb-6 text-lg font-semibold sm:text-xl">
            Send a Message
          </h3>

          <AnimatePresence mode="wait">
            {submitted ? (
              <motion.div 
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="bg-card-raised/50 border-primary/30 flex flex-col items-center gap-3 rounded-2xl border p-8 text-center sm:p-10"
              >
                <div className="bg-primary/10 text-primary flex size-14 items-center justify-center rounded-2xl">
                  <CheckCircle2 className="size-8" aria-hidden="true" />
                </div>
                <p className="text-foreground text-lg font-semibold">
                  Message Sent!
                </p>
                <p className="text-muted-foreground text-xs leading-relaxed sm:text-sm">
                  Thanks for reaching out. I&apos;ve received your message and will get back to you shortly.
                </p>
              </motion.div>
            ) : (
              <motion.form 
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                onSubmit={handleSubmit} 
                className="flex flex-col gap-4 sm:gap-5"
              >
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="sr-only">
                      Full name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      placeholder="Full name"
                      className="bg-card-raised/50 border-border/80 text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-1 focus:ring-primary w-full rounded-xl border px-4 py-3 text-xs outline-none transition-all sm:text-sm"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="sr-only">
                      Email address
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="Email address"
                      className="bg-card-raised/50 border-border/80 text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-1 focus:ring-primary w-full rounded-xl border px-4 py-3 text-xs outline-none transition-all sm:text-sm"
                    />
                  </div>
                </div>

                <fieldset>
                  <legend className="text-foreground mb-2.5 text-xs font-medium sm:text-sm">
                    What services are you interested in?
                  </legend>
                  <div className="flex flex-wrap gap-2">
                    {serviceOptions.map((service) => {
                      const selected = selectedServices.includes(service)
                      return (
                        <button
                          key={service}
                          type="button"
                          onClick={() => toggleService(service)}
                          aria-pressed={selected}
                          className={`rounded-xl border px-3.5 py-2 text-xs font-medium transition-all active:scale-95 sm:px-4 ${
                            selected
                              ? 'bg-primary text-primary-foreground border-primary shadow-sm'
                              : 'bg-card-raised/40 border-border/80 text-muted-foreground hover:border-primary/40 hover:text-foreground'
                          }`}
                        >
                          {service}
                        </button>
                      )
                    })}
                  </div>
                </fieldset>

                <div>
                  <label htmlFor="message" className="sr-only">
                    Your message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    placeholder="Your Message..."
                    className="bg-card-raised/50 border-border/80 text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-1 focus:ring-primary w-full resize-none rounded-xl border px-4 py-3 text-xs outline-none transition-all sm:text-sm"
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="bg-primary text-primary-foreground shadow-primary/20 hover:shadow-primary/35 flex w-full items-center justify-center gap-2 rounded-xl px-6 py-3 text-xs font-semibold shadow-md transition-all sm:ml-auto sm:w-auto sm:text-sm"
                >
                  <Send className="size-4" aria-hidden="true" />
                  <span>Send Message</span>
                </motion.button>
              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
