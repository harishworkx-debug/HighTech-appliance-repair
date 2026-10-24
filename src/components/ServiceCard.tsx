import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Phone, ChevronDown, MapPin } from 'lucide-react';
import { business, type Service, type Location, serviceLocationPath } from '@/data/business';

export function LocationDropdown({
  service,
  locations,
}: {
  service: Service;
  locations: Location[];
}) {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        onBlur={() => setTimeout(() => setOpen(false), 150)}
        className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-sky-500/40 bg-sky-500/10 px-4 py-2.5 text-sm font-medium text-sky-300 transition-colors hover:bg-sky-500/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-400"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={`Choose a service area for ${service.name}`}
      >
        <MapPin className="h-4 w-4" aria-hidden="true" />
        Select your area
        <ChevronDown
          className={`h-4 w-4 transition-transform ${open ? 'rotate-180' : ''}`}
          aria-hidden="true"
        />
      </button>
      {open && (
        <ul
          role="listbox"
          className="absolute bottom-full left-0 z-20 mb-2 max-h-64 w-full overflow-auto rounded-xl border border-white/10 bg-[#0a1628] py-1 shadow-2xl shadow-black/50"
        >
          {locations.map((l) => (
            <li key={l.slug}>
              <button
                type="button"
                onMouseDown={() => {
                  setOpen(false);
                  navigate(serviceLocationPath(service.slug, l.slug));
                }}
                className="flex w-full items-center gap-2 px-4 py-2.5 text-left text-sm text-slate-300 transition-colors hover:bg-sky-500/15 hover:text-sky-300"
              >
                <MapPin className="h-3.5 w-3.5 shrink-0 text-sky-400" aria-hidden="true" />
                {service.name} in {l.name}, CA
              </button>
            </li>
          ))}
        </ul>
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
  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-slate-900/60 transition-all hover:border-sky-500/40 hover:shadow-xl hover:shadow-sky-500/10">
      <Link to={`/${service.slug}`} className="block overflow-hidden">
        <img
          src={service.image}
          alt={service.imageAlt}
          loading="lazy"
          className="h-44 w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </Link>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-lg font-bold text-white">
          <Link to={`/${service.slug}`} className="hover:text-sky-400">
            {service.name}
          </Link>
        </h3>
        <p className="mt-2 flex-1 text-sm text-slate-400">{service.short}</p>
        <div className="mt-4 space-y-2.5">
          <a
            href={business.phoneHref}
            className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-sky-500 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-sky-400"
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
            Call for {service.name}
          </a>
          <LocationDropdown service={service} locations={locations} />
        </div>
      </div>
    </article>
  );
}
