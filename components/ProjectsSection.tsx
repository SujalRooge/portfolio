const projects = [
  {
    title: 'Neon Commerce',
    description: 'E-commerce experience with immersive 3D product previews and real-time stock updates.',
    tags: ['React', 'Three.js', 'Stripe'],
    link: 'https://github.com/your-handle/neon-commerce',
  },
  {
    title: 'Pulse Dashboard',
    description: 'Analytics cockpit with theme-able components and live data visualizations for ops teams.',
    tags: ['Next.js', 'Tailwind', 'Recharts'],
    link: 'https://github.com/your-handle/pulse-dashboard',
  },
  {
    title: 'Collab Studio',
    description: 'Collaborative workspace that blends chat, kanban, and asset reviews in one surface.',
    tags: ['TypeScript', 'Supabase', 'Framer Motion'],
    link: 'https://github.com/your-handle/collab-studio',
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="mt-24">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-purple-300">Selected Work</p>
          <h2 className="mt-3 text-3xl font-semibold text-white">Projects built for dark surfaces.</h2>
        </div>
        <a href="#contact" className="text-sm font-semibold text-purple-300 hover:text-purple-200">
          Request full case study →
        </a>
      </div>
      <div className="mt-12 grid gap-8 md:grid-cols-3">
        {projects.map((project) => (
          <a
            key={project.title}
            href={project.link}
            target="_blank"
            rel="noreferrer"
            className="rounded-3xl border border-white/10 bg-gray-900/60 p-6 transition hover:border-white/30 hover:-translate-y-1 hover:bg-gray-900"
          >
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-semibold text-white">{project.title}</h3>
              <span className="text-xs uppercase tracking-widest text-gray-500">2024</span>
            </div>
            <p className="mt-4 text-gray-400">{project.description}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              {project.tags.map((tag) => (
                <span key={tag} className="rounded-full border border-white/10 px-3 py-1 text-xs text-gray-300">
                  {tag}
                </span>
              ))}
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
