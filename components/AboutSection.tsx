const aboutHighlights = [
  {
    title: 'Design Systems',
    label: 'Focus',
    description: 'Composable UI kits powering consistent teams.',
  },
  {
    title: 'Micro-interactions',
    label: 'Superpower',
    description: 'Motion that elevates usability and delight.',
  },
];

export function AboutSection() {
  return (
    <section id="about" className="mt-24 grid gap-10 rounded-3xl border border-white/10 bg-gray-900/40 px-8 py-12 md:grid-cols-2">
      <div>
        <p className="text-sm uppercase tracking-[0.3em] text-purple-300">About</p>
        <h2 className="mt-3 text-3xl font-semibold text-white">Human-centered craft.</h2>
        <p className="mt-4 text-gray-300">
          I pair UX instincts with engineering rigor to ship experiences that feel inevitable. I thrive at the
          intersection of design systems, delightful motion, and robust front-end architecture.
        </p>
      </div>
      <div className="grid gap-6 sm:grid-cols-2">
        {aboutHighlights.map((item) => (
          <div key={item.title} className="rounded-2xl border border-white/10 bg-gray-950/60 p-5">
            <p className="text-sm text-gray-400">{item.label}</p>
            <p className="mt-2 text-lg font-semibold text-white">{item.title}</p>
            <p className="mt-1 text-sm text-gray-400">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
