import { FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi';

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-gray-950/80">
      <div className="container mx-auto flex flex-col gap-6 px-6 py-8 md:flex-row md:items-center md:justify-between">
        <p className="text-sm text-gray-400">© {new Date().getFullYear()} Sujal Rooge · Crafted in dark mode.</p>
        <div className="flex items-center gap-5 text-gray-400">
          <a href="https://github.com" target="_blank" rel="noreferrer" className="transition hover:text-white">
            <FiGithub size={20} />
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" className="transition hover:text-white">
            <FiLinkedin size={20} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer" className="transition hover:text-white">
            <FiTwitter size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}
