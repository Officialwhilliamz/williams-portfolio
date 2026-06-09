import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { projects } from '../data/projects'

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

function ProjectCard({ project, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className="gold-border-card bg-navy-light overflow-hidden flex flex-col"
    >
      {/* Cover */}
      <div className={`h-48 bg-gradient-to-br ${project.coverColor} relative overflow-hidden`}>
        {/* Abstract SVG cover per project */}
        {project.id === 1 ? (
          <svg viewBox="0 0 400 200" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
            <rect width="400" height="200" fill="#0F2040" />
            {[40,80,60,110,90,140,115,160,130,175].map((h, i) => (
              <rect key={i} x={20 + i * 36} y={200 - h} width={22} height={h}
                fill={i % 3 === 0 ? '#F5A623' : '#1E3A5F'} rx={3} />
            ))}
            <polyline
              points="31,160 67,120 103,140 139,90 175,110 211,60 247,80 283,42 319,62 355,28"
              fill="none" stroke="#F5A623" strokeWidth="2" opacity="0.8"
              strokeLinecap="round" strokeLinejoin="round"
            />
            <text x="20" y="185" fill="#F5A623" fontSize="10" fontFamily="Inter" fontWeight="600" opacity="0.6">
              ZEPHYR BANK · H1 2026
            </text>
          </svg>
        ) : (
          <svg viewBox="0 0 400 200" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
            <rect width="400" height="200" fill="#1A0F20" />
            {/* Scatter plot style */}
            {[
              [60,80],[90,120],[130,60],[160,100],[200,70],[240,130],[280,90],[320,50],[350,110],[80,150],
              [110,40],[170,160],[210,45],[260,155],[300,35],[340,140]
            ].map(([cx,cy], i) => (
              <circle key={i} cx={cx} cy={cy} r={i % 4 === 0 ? 8 : 5}
                fill={i % 4 === 0 ? '#F5A623' : '#9333EA'} opacity={0.6} />
            ))}
            <line x1="30" y1="170" x2="370" y2="30" stroke="#F5A623" strokeWidth="1.5" strokeDasharray="6 4" opacity="0.4" />
            <text x="20" y="185" fill="#F5A623" fontSize="10" fontFamily="Inter" fontWeight="600" opacity="0.6">
              AIRBNB NYC · MARKET ANALYSIS
            </text>
          </svg>
        )}
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-lg font-bold text-white mb-2 leading-snug">
          {project.title}
        </h3>
        <p className="text-sm text-white/50 mb-4 leading-relaxed flex-1">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs text-gold border border-gold/30 px-2.5 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* CTA */}
        <a
          href={project.notionUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-semibold text-gold hover:text-gold-light transition-colors duration-200 group"
        >
          View Case Study
          <svg
            width="16" height="16" viewBox="0 0 16 16" fill="none"
            className="group-hover:translate-x-1 transition-transform duration-200"
          >
            <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5"
              strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
      </div>
    </motion.div>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="py-28 relative">
      {/* Section divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="max-w-6xl mx-auto px-6">

        <FadeIn>
          <span className="section-label">My Work</span>
          <h2 className="section-title mt-2 mb-3">Projects</h2>
          <p className="text-white/50 mb-16 max-w-lg">
            Click any project to read the full case study — including the problem, approach, findings, and recommendations.
          </p>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>

      </div>
    </section>
  )
}
