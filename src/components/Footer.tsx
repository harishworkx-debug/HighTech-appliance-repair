import { Link } from 'react-router-dom';
import { Phone, Star, MapPin } from 'lucide-react';
import { business, services, locations } from '@/data/business';

export function Footer() {
  return (
    <footer className="mt-20 border-t border-white/10 bg-[#0a1628] text-slate-400">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-4 py-12 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="font-bold text-white">{business.name}</p>
          <p className="mt-2 text-sm">Appliance Repair Service</p>
          <p className="mt-2 text-sm">{business.primaryArea}</p>
          <div className="mt-3 flex items-center gap-2 text-sm">
            <Star className="h-4 w-4 fill-amber-400 text-amber-400" aria-hidden="true" />
            <span className="text-slate-300">
              {business.rating} stars · {business.reviewCount} reviews
            </span>
          </div>
          <a
            href={business.phoneHref}
            className="mt-4 inline-flex items-center gap-2 rounded-lg bg-sky-500 px-4 py-2 font-semibold text-white transition-colors hover:bg-sky-400"
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
            {business.phoneDisplay}
          </a>
        </div>

        <div>
          <p className="font-semibold text-white">Services</p>
          <ul className="mt-3 space-y-1.5 text-sm">
            {services.slice(0, 7).map((s) => (
              <li key={s.slug}>
                <Link to={`/${s.slug}`} className="hover:text-sky-400">
                  {s.name}
                </Link>
              </li>
            ))}
            <li>
              <Link to="/services" className="hover:text-sky-400">
                View all services
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="font-semibold text-white">Service Areas</p>
          <ul className="mt-3 space-y-1.5 text-sm">
            {locations.slice(0, 6).map((l) => (
              <li key={l.slug}>
                <Link to={`/appliance-repair-${l.slug}`} className="hover:text-sky-400">
                  {l.name}, CA
                </Link>
              </li>
            ))}
            <li>
              <Link to="/service-areas" className="hover:text-sky-400">
                View all areas
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="font-semibold text-white">Contact</p>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <a href={business.phoneHref} className="hover:text-sky-400">
                {business.phoneDisplay}
              </a>
            </li>
            <li>
              <a
                href={business.mapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 hover:text-sky-400"
              >
                <MapPin className="h-4 w-4" aria-hidden="true" /> Google Maps
              </a>
            </li>
            <li>
              <Link to="/contact" className="hover:text-sky-400">
                Contact Information
              </Link>
            </li>
            <li>
              <Link to="/reviews" className="hover:text-sky-400">
                Reviews
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 px-4 py-5 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} {business.name}. All rights reserved.
      </div>
    </footer>
  );
}
