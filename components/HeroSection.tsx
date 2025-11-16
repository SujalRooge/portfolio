export function HeroSection() {
  return (
    <section className="grid min-h-screen items-center gap-12 md:grid-cols-2" id="home">
      <div>
        <p className="text-sm uppercase tracking-[0.3em] text-purple-300">Frontend Engineer</p>
        <h1 className="mt-6 text-4xl font-bold leading-tight text-white md:text-5xl">
          Crafting slick, high-performance experiences for ambitious teams.
        </h1>
        <p className="mt-6 text-lg text-gray-300">
          I design and build immersive product surfaces that feel at home on any device. From design systems to
          high-impact marketing sites, I obsess over polish and performance.
        </p>
        <div className="mt-8 flex flex-col gap-4 sm:flex-row">
          <a
            href="#projects"
            className="inline-flex items-center justify-center rounded-full bg-purple-600 px-8 py-3 text-sm font-semibold text-white transition hover:bg-purple-500"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-full border border-white/20 px-8 py-3 text-sm font-semibold text-gray-200 transition hover:border-white hover:text-white"
          >
            Book a Call
          </a>
        </div>
        <div className="mt-10 grid gap-6 rounded-2xl border border-white/10 bg-gray-900/60 p-6 sm:grid-cols-2">
          <div>
            <p className="text-3xl font-semibold text-white">6+</p>
            <p className="text-sm text-gray-400">Years shipping production-grade interfaces</p>
          </div>
          <div>
            <p className="text-3xl font-semibold text-white">40+</p>
            <p className="text-sm text-gray-400">High-touch collaborations with product teams</p>
          </div>
        </div>
      </div>
      <div className="relative mx-auto h-80 w-80 max-w-sm overflow-hidden rounded-[3rem] border border-white/10 bg-gradient-to-br from-purple-900 via-gray-900 to-gray-900 p-6">
        <div className="absolute inset-6 rounded-[2.4rem] border border-white/5"></div>
        <div className="absolute inset-10 rounded-[2rem] bg-gradient-to-b from-white/10 to-transparent backdrop-blur"></div>
        <div className="relative flex h-full flex-col justify-end text-gray-200">
          <p className="text-sm text-gray-400">Currently at</p>
          <p className="text-2xl font-semibold text-white">Nebula Labs</p>
          <p className="mt-2 text-sm text-gray-400">Leading the web experience team · Remote</p>
        </div>
      </div>
    </section>
  );
}
