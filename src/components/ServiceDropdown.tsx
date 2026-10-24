import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronDown, Wrench, CheckCircle } from 'lucide-react';
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
        aria-label={`Choose a service for ${location.name}`}
      >
        <span className="flex items-center gap-2">
          <Wrench className="h-4 w-4 text-sky-400" aria-hidden="true" />
          <span>Choose a Service</span>
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
            Services in {location.name} ({services.length})
          </div>
          <ul
            role="listbox"
            className="max-h-56 divide-y divide-white/5 overflow-y-auto py-1 scrollbar-thin scrollbar-thumb-sky-500/20"
          >
            {services.map((s) => (
              <li key={s.slug}>
                <button
                  type="button"
                  onClick={() => {
                    setOpen(false);
                    navigate(serviceLocationPath(s.slug, location.slug));
                  }}
                  className="flex w-full items-center justify-between px-3.5 py-2.5 text-left text-sm text-slate-200 transition-colors hover:bg-sky-500/20 hover:text-white"
                >
                  <span className="flex items-center gap-2 truncate">
                    <Wrench className="h-3.5 w-3.5 shrink-0 text-sky-400" aria-hidden="true" />
                    <span className="truncate">{s.name}</span>
                  </span>
                  <CheckCircle className="h-3.5 w-3.5 shrink-0 text-sky-500/60" />
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
