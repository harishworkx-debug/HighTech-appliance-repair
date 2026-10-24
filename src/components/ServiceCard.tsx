import { useState, useRef, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Phone, ChevronDown, MapPin, ExternalLink, CheckCircle } from 'lucide-react';
import { business, type Service, type Location, serviceLocationPath } from '@/data/business';

export function LocationDropdown({
  service,
  locations,
}: {
  service: Service;
  locations: Location[];
}) {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }
    if (open) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [open]);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="inline-flex w-full items-center justify-between rounded-xl border border-sky-500/40 bg-sky-500/10 px-4 py-2.5 text-sm font-semibold text-sky-300 transition-all hover:bg-sky-500/20 hover:border-sky-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-400"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={`Select service area for ${service.name}`}
      >
        <span className="flex items-center gap-2">
          <MapPin className="h-4 w-4 text-sky-400" aria-hidden="true" />
          <span>Choose Area / City</span>
        </span>
        <ChevronDown
          className={`h-4 w-4 text-sky-400 transition-transform duration-200 ${
            open ? 'rotate-180' : ''
          }`}
          aria-hidden="true"
        />
      </button>

      {open && (
        <div className="absolute left-0 top-full z-50 mt-2 max-h-72 w-full overflow-hidden rounded-2xl border border-sky-500/30 bg-[#0a1628] shadow-2xl shadow-black/80 backdrop-blur-md">
          <div className="border-b border-white/10 bg-slate-900/80 px-3.5 py-2 text-xs font-semibold uppercase tracking-wider text-slate-400">
            Available Service Areas ({locations.length})
          </div>
          <ul
            role="listbox"
            className="max-h-56 divide-y divide-white/5 overflow-y-auto py-1 scrollbar-thin scrollbar-thumb-sky-500/20"
          >
            {locations.map((loc) => {
              const isPrimary = loc.slug === 'san-diego-ca';
              return (
                <li key={loc.slug}>
                  <button
                    type="button"
                    onClick={() => {
                      setOpen(false);
                      navigate(serviceLocationPath(service.slug, loc.slug));
                    }}
                    className="flex w-full items-center justify-between px-3.5 py-2.5 text-left text-sm text-slate-200 transition-colors hover:bg-sky-500/20 hover:text-white"
                  >
                    <span className="flex items-center gap-2 truncate">
                      <MapPin className="h-3.5 w-3.5 shrink-0 text-sky-400" aria-hidden="true" />
                      <span className="truncate">{service.name} in {loc.name}</span>
                    </span>
                    {isPrimary && (
                      <span className="ml-2 inline-flex shrink-0 items-center rounded-full bg-sky-500/20 px-2 py-0.5 text-[10px] font-semibold text-sky-300">
                        Primary
                      </span>
                    )}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}

export function ServiceCard({
  service,
  locations,
}: {
  service: Service;
  locations: Location[];
}) {
  const primaryLoc = locations[0] || { slug: 'san-diego-ca', name: 'San Diego' };
  // Pattern: /{service-slug}-{primary-location-slug}
  const primaryLocationUrl = serviceLocationPath(service.slug, primaryLoc.slug);
  const generalServiceUrl = `/${service.slug}`;

  return (
    <article className="group relative flex flex-col rounded-2xl border border-white/10 bg-slate-900/60 shadow-lg transition-all duration-300 hover:border-sky-500/40 hover:shadow-xl hover:shadow-sky-500/10">
      {/* Image with hover zoom */}
      <div className="relative overflow-hidden rounded-t-2xl">
        <Link to={primaryLocationUrl} className="block overflow-hidden">
          <img
            src={service.image}
            alt={service.imageAlt}
            loading="lazy"
            className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </Link>
        <div className="absolute top-3 left-3 flex gap-2">
          <span className="inline-flex items-center gap-1 rounded-full bg-slate-900/90 px-3 py-1 text-xs font-semibold text-sky-400 shadow-md backdrop-blur-sm border border-sky-500/30">
            <CheckCircle className="h-3.5 w-3.5" />
            Verified Service
          </span>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <div className="mb-1 flex items-center justify-between text-xs text-sky-400 font-medium">
          <span>Primary Area: {primaryLoc.name}, CA</span>
        </div>

        <h3 className="text-xl font-bold text-white transition-colors group-hover:text-sky-300">
          <Link to={primaryLocationUrl} className="hover:underline">
            {service.name}
          </Link>
        </h3>

        <p className="mt-2.5 flex-1 text-sm text-slate-300 leading-relaxed">
          {service.short}
        </p>

        {/* Action and Dropdown links */}
        <div className="mt-5 space-y-3">
          <a
            href={business.phoneHref}
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-sky-500 px-4 py-2.5 text-sm font-semibold text-white shadow-md shadow-sky-500/20 transition-all hover:bg-sky-400 hover:shadow-sky-400/30"
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
            Call for {service.name}
          </a>

          {/* Location Dropdown */}
          <LocationDropdown service={service} locations={locations} />

          <div className="flex items-center justify-between pt-1 text-xs text-slate-400">
            <Link
              to={primaryLocationUrl}
              className="font-medium text-sky-400 hover:text-sky-300 hover:underline"
            >
              {service.name} in San Diego &rarr;
            </Link>
            <Link
              to={generalServiceUrl}
              className="inline-flex items-center gap-1 text-slate-400 hover:text-slate-200"
            >
              Overview <ExternalLink className="h-3 w-3" />
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
