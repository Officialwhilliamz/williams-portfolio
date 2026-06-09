import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

function FadeIn({ children, delay = 0 }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay }}
    >
      {children}
    </motion.div>
  )
}

export default function Contact() {
  // ✏️ REPLACE THESE with your real details
  const EMAIL = 'warmatewilliams09@yahoo.com'
  const LINKEDIN = 'https://linkedin.com/in/your-handlehttps://www.linkedin.com/in/williams-warmate-7739493b1?utm_source=share_via&utm_content=profile&utm_medium=member_ios'

  return (
    <section id="contact" className="py-28 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-64 bg-gold/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 text-center">

        <FadeIn>
          <span className="section-label">Get In Touch</span>
          <h2 className="section-title mt-2 mb-4">Let's Connect</h2>
          <p className="text-white/50 max-w-md mx-auto mb-12 leading-relaxed">
            Open to internship and entry-level analyst opportunities. If you have a role, a project,
            or just want to talk data — reach out.
          </p>
        </FadeIn>

        <FadeIn delay={0.15}>
          <div className="flex flex-wrap justify-center gap-4">

            {/* Email */}
            <a
              href={`mailto:${EMAIL}`}
              className="btn-primary flex items-center gap-2.5"
            >
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M2 4a1 1 0 011-1h12a1 1 0 011 1v10a1 1 0 01-1 1H3a1 1 0 01-1-1V4z"
                  stroke="currentColor" strokeWidth="1.5" />
                <path d="M2 5l7 5 7-5" stroke="currentColor" strokeWidth="1.5"
                  strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Email Me
            </a>

            {/* LinkedIn */}
            <a
              href={LINKEDIN}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary flex items-center gap-2.5"
            >
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <rect x="2" y="2" width="14" height="14" rx="3"
                  stroke="currentColor" strokeWidth="1.5" />
                <path d="M6 8v5M6 6v.01M9 13v-3a1.5 1.5 0 013 0v3M9 10v3"
                  stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
              LinkedIn
            </a>

          </div>
        </FadeIn>

        {/* Location badge */}
        <FadeIn delay={0.25}>
          <p className="mt-12 text-white/25 text-sm flex items-center justify-center gap-2">
            <span>📍</span>
            Port Harcourt, Nigeria · Available for remote roles
          </p>
        </FadeIn>

      </div>
    </section>
  )
}
