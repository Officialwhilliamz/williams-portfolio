import { motion } from 'framer-motion'
import { Link } from 'react-scroll'

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center relative overflow-hidden"
    >
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `linear-gradient(#F5A623 1px, transparent 1px), linear-gradient(90deg, #F5A623 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Glow blob */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-gold/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 py-32 w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Left — Text */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-block border border-gold/40 text-gold text-xs font-semibold tracking-[0.2em] uppercase px-3 py-1 rounded-full mb-6">
                Data Analyst
              </span>
            </motion.div>

            <motion.h1
              className="text-4xl md:text-6xl font-extrabold leading-tight mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Hi, I'm{' '}
              <span className="text-gold">Williams<br />Warmate</span>
            </motion.h1>

            <motion.p
              className="text-lg text-white/60 mb-10 max-w-md leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              I turn <span className="text-gold font-medium">raw data</span> into decisions that matter.
              Aspiring analyst based in Port Harcourt, Nigeria — open to internship and entry-level opportunities.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Link to="projects" smooth={true} duration={500} offset={-80}>
                <button className="btn-primary">
                  View My Work
                </button>
              </Link>
              <button
                className="btn-secondary opacity-50 cursor-not-allowed"
                disabled
                title="Resume coming soon"
              >
                Download Resume
              </button>
            </motion.div>
          </div>

          {/* Right — Visual */}
          <motion.div
            className="hidden md:flex justify-center"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative w-full max-w-md aspect-square">
              {/* Outer ring */}
              <div className="absolute inset-0 rounded-2xl border border-gold/20" />
              {/* Inner card */}
              <div className="absolute inset-4 rounded-xl bg-navy-light border border-white/5 flex items-center justify-center overflow-hidden">
                {/* Abstract data art */}
                <svg viewBox="0 0 400 400" className="w-full h-full p-8 opacity-80">
                  {/* Bar chart */}
                  {[60, 100, 80, 140, 110, 160, 130, 180, 150, 200].map((h, i) => (
                    <rect
                      key={i}
                      x={30 + i * 34}
                      y={260 - h}
                      width={20}
                      height={h}
                      fill={i % 3 === 0 ? '#F5A623' : '#1E3A5F'}
                      rx={3}
                    />
                  ))}
                  {/* Trend line */}
                  <polyline
                    points="40,220 74,180 108,200 142,140 176,165 210,110 244,135 278,85 312,110 346,60"
                    fill="none"
                    stroke="#F5A623"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    opacity="0.7"
                  />
                  {/* Dots on line */}
                  {[[40,220],[142,140],[210,110],[278,85],[346,60]].map(([cx, cy], i) => (
                    <circle key={i} cx={cx} cy={cy} r={4} fill="#F5A623" />
                  ))}
                  {/* Label */}
                  <text x="30" y="300" fill="#94A3B8" fontSize="11" fontFamily="Inter">H1 2026 Transaction Trends</text>
                  <text x="30" y="318" fill="#F5A623" fontSize="13" fontWeight="600" fontFamily="Inter">↑ 23% YoY Growth</text>
                </svg>
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30"
        animate={{ y: [0, 6, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M8 3v10M4 9l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </motion.div>
    </section>
  )
}
