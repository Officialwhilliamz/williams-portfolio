import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const stats = [
  { value: '2', label: 'Projects Completed', icon: '📊' },
  { value: 'PH', label: 'Port Harcourt, Nigeria', icon: '📍' },
  { value: 'Open', label: 'Available for Internships', icon: '✅' },
]

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

export default function About() {
  return (
    <section id="about" className="py-28 relative">
      <div className="max-w-6xl mx-auto px-6">

        <FadeIn>
          <span className="section-label">Who I Am</span>
          <h2 className="section-title mt-2 mb-16">About Me</h2>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-16 items-start">

          {/* Left — Bio */}
          <FadeIn delay={0.1}>
            <div className="space-y-5 text-white/70 leading-relaxed">
              <p>
                I'm <span className="text-white font-semibold">Williams Warmate</span>, an aspiring
                data analyst based in Port Harcourt, Nigeria, with a focus on turning messy,
                real-world data into clear business narratives.
              </p>
              <p>
                My work sits at the intersection of <span className="text-gold">finance, risk,
                and product analytics</span> — I enjoy digging into transaction data, spotting
                patterns that aren't obvious, and translating them into recommendations that
                decision-makers can actually act on.
              </p>
              <p>
                I build my analyses in <span className="text-white font-medium">Excel</span>,
                present them in structured decks, and document every project as a full case study
                so my thinking is always visible. I'm actively seeking internship and entry-level
                analyst roles where I can contribute and grow.
              </p>

              {/* Skills preview */}
              <div className="pt-4 flex flex-wrap gap-2">
                {['Excel', 'Data Cleaning', 'Pivot Tables', 'Data Visualization', 'Google Sheets'].map(s => (
                  <span
                    key={s}
                    className="text-xs text-gold border border-gold/30 px-3 py-1 rounded-full"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* Right — Stat cards */}
          <div className="grid grid-cols-1 gap-4">
            {stats.map((stat, i) => (
              <FadeIn key={stat.label} delay={0.15 + i * 0.1}>
                <div className="gold-border-card bg-navy-light p-6 flex items-center gap-5">
                  <div className="w-12 h-12 rounded-lg bg-gold/10 border border-gold/20 flex items-center justify-center text-xl flex-shrink-0">
                    {stat.icon}
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-gold">{stat.value}</p>
                    <p className="text-sm text-white/50 mt-0.5">{stat.label}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
