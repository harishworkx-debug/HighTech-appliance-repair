import { Link } from 'react-router-dom';
import { Phone, Wrench } from 'lucide-react';
import { business } from '@/data/business';

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/services', label: 'Services' },
  { to: '/service-areas', label: 'Service Areas' },
  { to: '/about', label: 'About' },
  { to: '/reviews', label: 'Reviews' },
  { to: '/contact', label: 'Contact' },
];

export function CallButton({
  label = `Call ${business.phoneDisplay}`,
  className = '',
}: {
  label?: string;
  className?: string;
}) {
  return (
    <a
      href={business.phoneHref}
      className={`inline-flex items-center justify-center gap-2 rounded-lg bg-sky-500 px-5 py-3 font-semibold text-white shadow-lg shadow-sky-500/25 transition-all hover:bg-sky-400 hover:shadow-sky-400/30 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-400 ${className}`}
    >
      <Phone className="h-5 w-5" aria-hidden="true" />
      {label}
    </a>
  );
}

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-[#0a1628]/95 backdrop-blur supports-[backdrop-filter]:bg-[#0a1628]/80">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link to="/" className="flex items-center gap-2 text-white">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-sky-500">
            <Wrench className="h-5 w-5 text-white" aria-hidden="true" />
          </span>
          <span className="text-base font-bold leading-tight sm:text-lg">
            HighTech
            <span className="block text-xs font-medium text-sky-400">
              Appliance Repair
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {navLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="rounded-md px-3 py-2 text-sm font-medium text-slate-300 transition-colors hover:bg-white/5 hover:text-white"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <CallButton label="Call Now" className="!px-4 !py-2 text-sm" />
      </div>

      <nav className="flex items-center gap-1 overflow-x-auto px-4 pb-2 lg:hidden">
        {navLinks.map((l) => (
          <Link
            key={l.to}
            to={l.to}
            className="whitespace-nowrap rounded-md px-3 py-1.5 text-xs font-medium text-slate-300 transition-colors hover:bg-white/5 hover:text-white"
          >
            {l.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
