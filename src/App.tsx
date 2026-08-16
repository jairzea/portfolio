import { motion, useReducedMotion, useScroll, useSpring } from 'motion/react'
import { useMemo, useState } from 'react'
import type { ReactNode } from 'react'
import { certifications, experience, focus, me, projects, skills, stats } from './data'

/**
 * Aparece al entrar en viewport. `once` evita re-animar al volver a subir.
 * `as` existe porque dentro de un <ol> el hijo directo debe ser <li>: un div
 * intermedio rompe la semántica de la lista para lectores de pantalla.
 */
function Reveal({
  children,
  delay = 0,
  as = 'div',
}: {
  children: ReactNode
  delay?: number
  as?: 'div' | 'li'
}) {
  const still = useReducedMotion()
  const Tag = as === 'li' ? motion.li : motion.div
  return (
    <Tag
      initial={still ? undefined : { opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </Tag>
  )
}

function Section({ id, title, children }: { id: string; title: string; children: ReactNode }) {
  return (
    <section id={id} className="mx-auto max-w-5xl scroll-mt-24 px-6 py-24">
      <Reveal>
        <h2 className="mb-12 text-sm font-medium tracking-[0.2em] text-cyan-400 uppercase">
          {title}
        </h2>
      </Reveal>
      {children}
    </section>
  )
}

function Chip({ children }: { children: ReactNode }) {
  return (
    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-200">
      {children}
    </span>
  )
}

const FILTERS = ['Todos', 'Plataformas', 'IA', 'Herramientas', 'Móvil'] as const

export default function App() {
  const { scrollYProgress } = useScroll()
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 })
  const [filter, setFilter] = useState<(typeof FILTERS)[number]>('Todos')
  const shown = useMemo(
    () => (filter === 'Todos' ? projects : projects.filter((p) => p.tag === filter)),
    [filter],
  )

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:rounded-lg focus:bg-cyan-500 focus:px-4 focus:py-2 focus:font-medium focus:text-slate-950"
      >
        Saltar al contenido
      </a>

      <motion.div
        style={{ scaleX: progress }}
        className="fixed inset-x-0 top-0 z-40 h-0.5 origin-left bg-gradient-to-r from-cyan-400 to-violet-500"
        aria-hidden="true"
      />

      <nav className="fixed inset-x-0 top-0 z-30 border-b border-white/5 bg-[#05070d]/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <span className="font-semibold tracking-tight">JZ</span>
          <div className="flex gap-6 text-sm text-slate-400">
            <a href="#enfoque" className="hidden transition-colors hover:text-white sm:inline">
              Cómo trabajo
            </a>
            <a href="#proyectos" className="transition-colors hover:text-white">
              Proyectos
            </a>
            <a href="#experiencia" className="transition-colors hover:text-white">
              Experiencia
            </a>
            <a href="#contacto" className="transition-colors hover:text-white">
              Contacto
            </a>
          </div>
        </div>
      </nav>

      <main id="main">
        {/* Hero */}
        <header className="relative flex min-h-screen items-center overflow-hidden px-6">
          <div aria-hidden="true" className="pointer-events-none absolute inset-0">
            <div className="aurora absolute -top-32 -left-32 h-[32rem] w-[32rem] rounded-full bg-cyan-500/20 blur-[120px]" />
            <div className="aurora absolute -right-32 bottom-0 h-[32rem] w-[32rem] rounded-full bg-violet-600/20 blur-[120px] [animation-delay:-9s]" />
          </div>

          <div className="relative mx-auto w-full max-w-5xl">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-6 text-sm tracking-[0.2em] text-cyan-400 uppercase"
            >
              {me.role}
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-3xl text-5xl leading-[0.95] font-semibold tracking-tight text-balance sm:text-7xl"
            >
              {me.name}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="mt-8 max-w-xl text-lg leading-relaxed text-slate-400"
            >
              {me.intro}
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              <a
                href="#proyectos"
                className="rounded-full bg-white px-6 py-3 text-sm font-medium text-slate-950 transition-transform hover:scale-105"
              >
                Ver proyectos
              </a>
              <a
                href={`mailto:${me.email}`}
                className="rounded-full border border-white/15 px-6 py-3 text-sm font-medium transition-colors hover:bg-white/5"
              >
                Hablemos
              </a>
              <span className="text-sm text-slate-400">{me.location}</span>
            </motion.div>
          </div>
        </header>

        {/* Cifras */}
        <section className="border-y border-white/5 bg-white/[0.02]">
          <dl className="mx-auto grid max-w-5xl grid-cols-2 gap-10 px-6 py-16 md:grid-cols-4">
            {stats.map((s, i) => (
              <Reveal key={s.label} delay={i * 0.08}>
                <dt className="bg-gradient-to-br from-cyan-300 to-violet-400 bg-clip-text text-4xl font-semibold text-transparent">
                  {s.value}
                </dt>
                <dd className="mt-2 text-sm leading-snug text-slate-300">{s.label}</dd>
              </Reveal>
            ))}
          </dl>
        </section>

        <Section id="enfoque" title="Cómo trabajo">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {focus.map((f, i) => (
              <Reveal key={f.title} delay={(i % 3) * 0.08}>
                <div className="h-full rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                  <h3 className="mb-3 text-lg font-semibold tracking-tight">{f.title}</h3>
                  <p className="leading-relaxed text-slate-300">{f.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Section>

        <Section id="proyectos" title="Proyectos">
          <Reveal>
            <div
              role="group"
              aria-label="Filtrar proyectos por categoría"
              className="mb-10 flex flex-wrap gap-2"
            >
              {FILTERS.map((f) => (
                <button
                  key={f}
                  type="button"
                  onClick={() => setFilter(f)}
                  aria-pressed={filter === f}
                  className={`rounded-full border px-4 py-2 text-sm transition-colors ${
                    filter === f
                      ? 'border-cyan-400/40 bg-cyan-400/15 text-cyan-200'
                      : 'border-white/10 text-slate-300 hover:bg-white/5'
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>
          </Reveal>

          <div className="grid gap-6 md:grid-cols-2">
            {shown.map((p, i) => (
              <Reveal key={p.name} delay={(i % 2) * 0.1}>
                <motion.article
                  whileHover={{ y: -6 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 24 }}
                  className="group relative h-full overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-7"
                >
                  <div
                    aria-hidden="true"
                    className={`absolute inset-x-0 top-0 h-px bg-gradient-to-r ${p.accent}`}
                  />
                  <div
                    aria-hidden="true"
                    className={`absolute -top-24 -right-24 h-48 w-48 rounded-full bg-gradient-to-br ${p.accent} opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-20`}
                  />

                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-2xl font-semibold tracking-tight">{p.name}</h3>
                    <span className="shrink-0 rounded-full border border-white/10 px-2.5 py-1 text-xs text-slate-300">
                      {p.tag}
                    </span>
                  </div>
                  <p className="mt-1 text-sm text-cyan-400">{p.role}</p>
                  <p className="mt-4 leading-relaxed text-slate-300">{p.blurb}</p>

                  <ul className="mt-6 flex flex-wrap gap-2">
                    {p.stack.map((t) => (
                      <li key={t}>
                        <Chip>{t}</Chip>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2">
                    {p.url && (
                      <a
                        href={p.url}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="inline-flex items-center gap-2 text-sm font-medium text-white hover:text-cyan-400"
                      >
                        Visitar
                        <span aria-hidden="true">→</span>
                        <span className="sr-only">{p.name}, se abre en una pestaña nueva</span>
                      </a>
                    )}
                    {p.repo && (
                      <a
                        href={p.repo}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="inline-flex items-center gap-2 text-sm font-medium text-slate-300 hover:text-cyan-400"
                      >
                        Código
                        <span aria-hidden="true">↗</span>
                        <span className="sr-only">
                          Repositorio de {p.name}, se abre en una pestaña nueva
                        </span>
                      </a>
                    )}
                  </div>
                </motion.article>
              </Reveal>
            ))}
          </div>
        </Section>

        <Section id="experiencia" title="Experiencia">
          <ol className="relative space-y-12 border-l border-white/10 pl-8">
            {experience.map((job, i) => (
              <Reveal key={job.company} delay={i * 0.05} as="li">
                <span
                  aria-hidden="true"
                  className="absolute -left-[5px] mt-2 h-2.5 w-2.5 rounded-full bg-cyan-400 ring-4 ring-[#05070d]"
                />
                <div className="flex flex-wrap items-baseline gap-x-3">
                  <h3 className="text-xl font-semibold tracking-tight">{job.company}</h3>
                  <span className="text-sm text-slate-400">{job.place}</span>
                </div>
                <p className="mt-1 text-cyan-400">{job.role}</p>
                <p className="mt-1 text-sm text-slate-400">{job.period}</p>
                <ul className="mt-4 space-y-2 text-slate-300">
                  {job.points.map((pt) => (
                    <li key={pt} className="flex gap-3 leading-relaxed">
                      <span aria-hidden="true" className="mt-2 text-cyan-400/70">
                        ·
                      </span>
                      {pt}
                    </li>
                  ))}
                </ul>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {job.stack.map((t) => (
                    <li key={t}>
                      <Chip>{t}</Chip>
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </ol>
        </Section>

        <Section id="skills" title="Stack">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {skills.map((s, i) => (
              <Reveal key={s.group} delay={(i % 3) * 0.08}>
                <div className="h-full rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                  <h3 className="mb-4 font-medium">{s.group}</h3>
                  <ul className="flex flex-wrap gap-2">
                    {s.items.map((t) => (
                      <li key={t}>
                        <Chip>{t}</Chip>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </Section>

        <Section id="certificaciones" title="Certificaciones">
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {certifications.map((c, i) => (
              <Reveal key={c.name} delay={(i % 3) * 0.08} as="li">
                <div className="h-full rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                  <h3 className="font-medium">{c.name}</h3>
                  <p className="mt-2 text-sm text-slate-300">{c.issuer}</p>
                  <p className="mt-1 text-sm text-slate-400">{c.year}</p>
                </div>
              </Reveal>
            ))}
          </ul>
        </Section>

        <Section id="contacto" title="Contacto">
          <Reveal>
            <p className="max-w-xl text-3xl leading-tight font-semibold tracking-tight text-balance sm:text-4xl">
              ¿Tienes un proyecto en mente? Escríbeme.
            </p>
            <div className="mt-10 flex flex-wrap gap-x-8 gap-y-4">
              <a
                href={`mailto:${me.email}`}
                className="text-lg text-cyan-400 underline-offset-4 hover:underline"
              >
                {me.email}
              </a>
              <a
                href={me.github}
                target="_blank"
                rel="noreferrer noopener"
                className="text-lg text-slate-400 hover:text-white"
              >
                GitHub
              </a>
              <a
                href={me.linkedin}
                target="_blank"
                rel="noreferrer noopener"
                className="text-lg text-slate-400 hover:text-white"
              >
                LinkedIn
              </a>
            </div>
          </Reveal>
        </Section>
      </main>

      <footer className="border-t border-white/5 px-6 py-10 text-center text-sm text-slate-400">
        {me.name} · {me.location}
      </footer>
    </>
  )
}
