const skills = [
  'TypeScript',
  'React / Next.js',
  'Tailwind CSS',
  'Framer Motion',
  'Node.js',
  'GraphQL',
  'REST APIs',
  'Accessibility',
];

export function SkillsSection() {
  return (
    <section id="skills" className="mt-24">
      <p className="text-sm uppercase tracking-[0.3em] text-purple-300">Tooling</p>
      <h2 className="mt-3 text-3xl font-semibold text-white">Stacks I partner with daily.</h2>
      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {skills.map((skill) => (
          <div
            key={skill}
            className="rounded-2xl border border-white/10 bg-gray-900/60 px-5 py-4 text-center text-sm font-semibold text-gray-200"
          >
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}
