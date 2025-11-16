import { FiMail, FiUser } from 'react-icons/fi';

export function ContactSection() {
  return (
    <section
      id="contact"
      className="mt-24 rounded-3xl border border-white/10 bg-gradient-to-br from-gray-900 via-gray-950 to-gray-900 px-8 py-12"
    >
      <div className="grid gap-10 md:grid-cols-2 md:items-center">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-purple-300">Contact</p>
          <h2 className="mt-4 text-3xl font-semibold text-white">Let&apos;s build something luminous.</h2>
          <p className="mt-4 text-gray-300">
            Send a short brief or drop a line about your next launch. I typically reply within 24 hours and can hop on a
            call most evenings IST.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-gray-950/60 p-5">
            <FiUser className="text-purple-300" size={20} />
            <p className="mt-3 text-sm text-gray-400">Availability</p>
            <p className="text-lg font-semibold text-white">Q1 · 2026</p>
            <p className="text-sm text-gray-400">Product & marketing engagements</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-gray-950/60 p-5">
            <FiMail className="text-purple-300" size={20} />
            <p className="mt-3 text-sm text-gray-400">Email</p>
            <a href="mailto:hello@sujal.design" className="text-lg font-semibold text-white hover:text-purple-200">
              hello@sujal.design
            </a>
            <p className="text-sm text-gray-400">Drop me a note anytime</p>
          </div>
        </div>
      </div>
    </section>
  );
}
