import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronDown, Wrench } from 'lucide-react';
import {
  type Service,
  type Location,
  serviceLocationPath,
} from '@/data/business';

export function ServiceDropdown({
  location,
  services,
}: {
  location: Location;
  services: Service[];
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
        aria-label={`Choose a service for ${location.name}`}
      >
        <Wrench className="h-4 w-4" aria-hidden="true" />
        Choose a service
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
          {services.map((s) => (
            <li key={s.slug}>
              <button
                type="button"
                onMouseDown={() => {
                  setOpen(false);
                  navigate(serviceLocationPath(s.slug, location.slug));
                }}
                className="flex w-full items-center gap-2 px-4 py-2.5 text-left text-sm text-slate-300 transition-colors hover:bg-sky-500/15 hover:text-sky-300"
              >
                <Wrench className="h-3.5 w-3.5 shrink-0 text-sky-400" aria-hidden="true" />
                {s.name} in {location.name}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
