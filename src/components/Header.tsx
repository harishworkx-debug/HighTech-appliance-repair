import { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Phone,
  Wrench,
  ChevronDown,
  MapPin,
  ArrowRight,
  Menu,
  X,
  Sparkles,
} from 'lucide-react';
import { business, services, locations, serviceLocationPath } from '@/data/business';

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
      className={`inline-flex items-center justify-center gap-2 rounded-xl bg-sky-500 px-4 py-2.5 font-semibold text-white shadow-lg shadow-sky-500/25 transition-all hover:bg-sky-400 hover:shadow-sky-400/35 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-400 ${className}`}
    >
      <Phone className="h-4 w-4" aria-hidden="true" />
      <span>{label}</span>
    </a>
  );
}

export function Header() {
  const [servicesOpen, setServicesOpen] = useState(false);
  const [areasOpen, setAreasOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileAreasOpen, setMobileAreasOpen] = useState(false);

  const servicesRef = useRef<HTMLDivElement>(null);
  const areasRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  // Close menus on route change
  useEffect(() => {
    setServicesOpen(false);
    setAreasOpen(false);
    setMobileMenuOpen(false);
  }, [location.pathname]);

  // Click outside listener for desktop dropdowns
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        servicesRef.current &&
        !servicesRef.current.contains(event.target as Node)
      ) {
        setServicesOpen(false);
      }
      if (
        areasRef.current &&
        !areasRef.current.contains(event.target as Node)
      ) {
        setAreasOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0a1628]/95 backdrop-blur-md supports-[backdrop-filter]:bg-[#0a1628]/85">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        {/* Brand Logo */}
        <Link to="/" className="flex items-center gap-2.5 text-white group">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-sky-400 to-sky-600 shadow-md shadow-sky-500/25 transition-transform group-hover:scale-105">
            <Wrench className="h-5 w-5 text-white" aria-hidden="true" />
          </span>
          <span className="text-base font-extrabold leading-tight sm:text-lg tracking-tight">
            HighTech
            <span className="block text-xs font-semibold text-sky-400 tracking-normal">
              Appliance Repair
            </span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main Navigation">
          <Link
            to="/"
            className="rounded-lg px-3 py-2 text-sm font-medium text-slate-300 transition-colors hover:bg-white/5 hover:text-white"
          >
            Home
          </Link>

          {/* Services Dropdown */}
          <div
            className="relative"
            ref={servicesRef}
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button
              type="button"
              onClick={() => setServicesOpen((prev) => !prev)}
              className={`inline-flex items-center gap-1.5 rounded-lg px-3 py-2 text-sm font-medium transition-colors hover:bg-white/5 hover:text-white ${
                servicesOpen || location.pathname.startsWith('/services')
                  ? 'text-sky-400 bg-white/5'
                  : 'text-slate-300'
              }`}
              aria-expanded={servicesOpen}
              aria-haspopup="true"
            >
              <span>Services</span>
              <ChevronDown
                className={`h-4 w-4 transition-transform duration-200 ${
                  servicesOpen ? 'rotate-180 text-sky-400' : ''
                }`}
                aria-hidden="true"
              />
            </button>

            {servicesOpen && (
              <div className="absolute left-0 top-full z-50 mt-1 w-[460px] rounded-2xl border border-sky-500/30 bg-[#0a1628] p-4 shadow-2xl shadow-black/90 backdrop-blur-xl">
                <div className="flex items-center justify-between border-b border-white/10 pb-2.5 px-2">
                  <span className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-sky-400">
                    <Sparkles className="h-3.5 w-3.5" />
                    Appliance Repair Services
                  </span>
                  <Link
                    to="/services"
                    className="text-xs font-semibold text-sky-400 hover:text-sky-300 hover:underline"
                  >
                    View All &rarr;
                  </Link>
                </div>

                <div className="mt-3 grid grid-cols-2 gap-1.5 max-h-[360px] overflow-y-auto pr-1 scrollbar-thin scrollbar-thumb-sky-500/20">
                  {services.map((s) => (
                    <Link
                      key={s.slug}
                      to={serviceLocationPath(s.slug, 'san-diego-ca')}
                      className="group flex flex-col rounded-xl p-2.5 transition-colors hover:bg-sky-500/15"
                    >
                      <span className="flex items-center gap-2 text-sm font-semibold text-slate-200 group-hover:text-white">
                        <Wrench className="h-3.5 w-3.5 text-sky-400 shrink-0" />
                        <span className="truncate">{s.name}</span>
                      </span>
                      <span className="mt-0.5 text-[11px] text-slate-400 truncate">
                        San Diego & surrounding
                      </span>
                    </Link>
                  ))}
                </div>

                <div className="mt-3 border-t border-white/10 pt-2.5 px-2 flex justify-between items-center text-xs text-slate-400">
                  <span>Fast diagnosis & genuine replacement parts</span>
                  <Link
                    to="/services"
                    className="font-semibold text-sky-400 hover:text-sky-300"
                  >
                    All Services Directory
                  </Link>
                </div>
              </div>
            )}
          </div>

          {/* Service Areas Dropdown */}
          <div
            className="relative"
            ref={areasRef}
            onMouseEnter={() => setAreasOpen(true)}
            onMouseLeave={() => setAreasOpen(false)}
          >
            <button
              type="button"
              onClick={() => setAreasOpen((prev) => !prev)}
              className={`inline-flex items-center gap-1.5 rounded-lg px-3 py-2 text-sm font-medium transition-colors hover:bg-white/5 hover:text-white ${
                areasOpen || location.pathname.startsWith('/service-areas')
                  ? 'text-sky-400 bg-white/5'
                  : 'text-slate-300'
              }`}
              aria-expanded={areasOpen}
              aria-haspopup="true"
            >
              <span>Service Areas</span>
              <ChevronDown
                className={`h-4 w-4 transition-transform duration-200 ${
                  areasOpen ? 'rotate-180 text-sky-400' : ''
                }`}
                aria-hidden="true"
              />
            </button>

            {areasOpen && (
              <div className="absolute left-0 top-full z-50 mt-1 w-[420px] rounded-2xl border border-sky-500/30 bg-[#0a1628] p-4 shadow-2xl shadow-black/90 backdrop-blur-xl">
                <div className="flex items-center justify-between border-b border-white/10 pb-2.5 px-2">
                  <span className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-sky-400">
                    <MapPin className="h-3.5 w-3.5" />
                    San Diego County Coverage
                  </span>
                  <Link
                    to="/service-areas"
                    className="text-xs font-semibold text-sky-400 hover:text-sky-300 hover:underline"
                  >
                    View All &rarr;
                  </Link>
                </div>

                <div className="mt-3 grid grid-cols-2 gap-1.5 max-h-[360px] overflow-y-auto pr-1 scrollbar-thin scrollbar-thumb-sky-500/20">
                  {locations.map((loc) => {
                    const isPrimary = loc.slug === 'san-diego-ca';
                    return (
                      <Link
                        key={loc.slug}
                        to={`/appliance-repair-${loc.slug}`}
                        className="group flex items-center justify-between rounded-xl p-2.5 transition-colors hover:bg-sky-500/15"
                      >
                        <span className="flex items-center gap-2 text-sm font-semibold text-slate-200 group-hover:text-white">
                          <MapPin className="h-3.5 w-3.5 text-sky-400 shrink-0" />
                          <span className="truncate">{loc.name}, CA</span>
                        </span>
                        {isPrimary && (
                          <span className="rounded bg-sky-500/20 px-1.5 py-0.5 text-[10px] font-semibold text-sky-300">
                            Primary
                          </span>
                        )}
                      </Link>
                    );
                  })}
                </div>

                <div className="mt-3 border-t border-white/10 pt-2.5 px-2 flex justify-between items-center text-xs text-slate-400">
                  <span>Serving entire Greater San Diego</span>
                  <Link
                    to="/service-areas"
                    className="font-semibold text-sky-400 hover:text-sky-300"
                  >
                    All Service Areas
                  </Link>
                </div>
              </div>
            )}
          </div>

          <Link
            to="/about"
            className="rounded-lg px-3 py-2 text-sm font-medium text-slate-300 transition-colors hover:bg-white/5 hover:text-white"
          >
            About
          </Link>
          <Link
            to="/reviews"
            className="rounded-lg px-3 py-2 text-sm font-medium text-slate-300 transition-colors hover:bg-white/5 hover:text-white"
          >
            Reviews
          </Link>
          <Link
            to="/contact"
            className="rounded-lg px-3 py-2 text-sm font-medium text-slate-300 transition-colors hover:bg-white/5 hover:text-white"
          >
            Contact
          </Link>
        </nav>

        {/* CTA Button and Mobile Menu Toggle */}
        <div className="flex items-center gap-2.5">
          <CallButton label="Call Now" className="!px-4 !py-2 text-sm" />

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 text-slate-300 hover:bg-white/5 hover:text-white lg:hidden"
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="border-t border-white/10 bg-[#0a1628] px-4 py-4 lg:hidden max-h-[80vh] overflow-y-auto">
          <nav className="flex flex-col space-y-2">
            <Link
              to="/"
              className="rounded-xl px-3.5 py-2.5 text-base font-medium text-slate-200 hover:bg-white/5"
            >
              Home
            </Link>

            {/* Mobile Services Accordion */}
            <div>
              <button
                type="button"
                onClick={() => setMobileServicesOpen((prev) => !prev)}
                className="flex w-full items-center justify-between rounded-xl px-3.5 py-2.5 text-base font-medium text-slate-200 hover:bg-white/5"
              >
                <span className="flex items-center gap-2">
                  <Wrench className="h-4 w-4 text-sky-400" />
                  <span>Services ({services.length})</span>
                </span>
                <ChevronDown
                  className={`h-4 w-4 text-sky-400 transition-transform ${
                    mobileServicesOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {mobileServicesOpen && (
                <div className="ml-4 mt-1 space-y-1 border-l-2 border-sky-500/30 pl-3">
                  <Link
                    to="/services"
                    className="block py-2 text-sm font-semibold text-sky-400"
                  >
                    View All Services &rarr;
                  </Link>
                  {services.map((s) => (
                    <Link
                      key={s.slug}
                      to={serviceLocationPath(s.slug, 'san-diego-ca')}
                      className="block py-1.5 text-sm text-slate-300 hover:text-white"
                    >
                      {s.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile Service Areas Accordion */}
            <div>
              <button
                type="button"
                onClick={() => setMobileAreasOpen((prev) => !prev)}
                className="flex w-full items-center justify-between rounded-xl px-3.5 py-2.5 text-base font-medium text-slate-200 hover:bg-white/5"
              >
                <span className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-sky-400" />
                  <span>Service Areas ({locations.length})</span>
                </span>
                <ChevronDown
                  className={`h-4 w-4 text-sky-400 transition-transform ${
                    mobileAreasOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {mobileAreasOpen && (
                <div className="ml-4 mt-1 space-y-1 border-l-2 border-sky-500/30 pl-3">
                  <Link
                    to="/service-areas"
                    className="block py-2 text-sm font-semibold text-sky-400"
                  >
                    View All Service Areas &rarr;
                  </Link>
                  {locations.map((loc) => (
                    <Link
                      key={loc.slug}
                      to={`/appliance-repair-${loc.slug}`}
                      className="block py-1.5 text-sm text-slate-300 hover:text-white"
                    >
                      {loc.name}, CA
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              to="/about"
              className="rounded-xl px-3.5 py-2.5 text-base font-medium text-slate-200 hover:bg-white/5"
            >
              About
            </Link>
            <Link
              to="/reviews"
              className="rounded-xl px-3.5 py-2.5 text-base font-medium text-slate-200 hover:bg-white/5"
            >
              Reviews
            </Link>
            <Link
              to="/contact"
              className="rounded-xl px-3.5 py-2.5 text-base font-medium text-slate-200 hover:bg-white/5"
            >
              Contact
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
