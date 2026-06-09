import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const skillGroups = [
  {
    label: 'Analytics',
    icon: '📊',
    skills: [
      'Excel',
      'Data Cleaning',
      'Pivot Tables',
      'Data Visualization',
      'Statistical Analysis',
      'Financial Analysis',
      'Risk Analysis',
    ],
  },
  {
    label: 'Tools & Tech',
    icon: '🛠',
    skills: [
      'PowerPoint',
      'Google Sheets',
      'Notion',
      'PptxGenJS',
      'Node.js (basic)',
      'GitHub (basic)',
    ],
  },
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

export default function Skills() {
  return (
    <section id="skills" className="py-28 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="max-w-6xl mx-auto px-6">

        <FadeIn>
          <span className="section-label">What I Use</span>
          <h2 className="section-title mt-2 mb-16">Tools & Skills</h2>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-10">
          {skillGroups.map((group, gi) => (
            <FadeIn key={group.label} delay={gi * 0.15}>
              <div className="bg-navy-light border border-white/5 rounded-xl p-8">
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-2xl">{group.icon}</span>
                  <h3 className="text-lg font-semibold text-white">{group.label}</h3>
                </div>
                <div className="flex flex-wrap gap-3">
                  {group.skills.map((skill, si) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: gi * 0.1 + si * 0.05 }}
                      className="text-sm text-white/80 border border-gold/25 hover:border-gold/60 hover:text-gold
                                 px-4 py-2 rounded-full transition-all duration-200 cursor-default"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Bottom note */}
        <FadeIn delay={0.3}>
          <p className="text-center text-white/30 text-sm mt-12">
            Currently expanding into SQL and Tableau
          </p>
        </FadeIn>

      </div>
    </section>
  )
}
