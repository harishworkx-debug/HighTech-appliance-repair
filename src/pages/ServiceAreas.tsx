import { Link } from 'react-router-dom';
import { MapPin, ArrowRight } from 'lucide-react';
import { SEO, Breadcrumbs, BreadcrumbJsonLd } from '@/components/SEO';
import { CallButton } from '@/components/Header';
import { ServiceDropdown } from '@/components/ServiceDropdown';
import { business, locations, services } from '@/data/business';

export default function ServiceAreas() {
  const crumbs = [
    { name: 'Home', path: '/' },
    { name: 'Service Areas' },
  ];
  return (
    <>
      <SEO
        title={`Appliance Repair Service Areas | ${business.name}`}
        description={`HighTech Appliance Repair serves households across the San Diego area. Call ${business.phoneDisplay} to confirm service availability in your neighborhood.`}
        canonicalPath="/service-areas"
      />
      <BreadcrumbJsonLd items={crumbs} />
      <Breadcrumbs items={crumbs} />

      <section className="mx-auto max-w-6xl px-4 py-12">
        <h1 className="text-4xl font-extrabold text-white">Service Areas</h1>
        <p className="mt-4 max-w-3xl text-lg text-slate-400">
          {business.name} helps households throughout the San Diego area.
          Select your city below, then choose a service to go straight to that
          service in your area — or call{' '}
          <a
            href={business.phoneHref}
            className="font-semibold text-sky-400 hover:text-sky-300"
          >
            {business.phoneDisplay}
          </a>{' '}
          to confirm whether your neighborhood is covered.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {locations.map((l) => (
            <div
              key={l.slug}
              className="flex flex-col rounded-2xl border border-white/10 bg-slate-900/60 p-6 transition-all hover:border-sky-500/40"
            >
              <Link
                to={`/appliance-repair-${l.slug}`}
                className="group flex items-start justify-between"
              >
                <div>
                  <MapPin className="h-7 w-7 text-sky-400" aria-hidden="true" />
                  <h2 className="mt-3 text-xl font-bold text-white group-hover:text-sky-400">
                    {l.name}, CA
                  </h2>
                  <p className="mt-1 text-sm text-slate-500">{l.county}</p>
                </div>
                <ArrowRight
                  className="h-5 w-5 text-slate-600 transition-colors group-hover:text-sky-400"
                  aria-hidden="true"
                />
              </Link>
              <p className="mt-4 flex-1 text-sm text-slate-400 line-clamp-3">
                {l.blurb}
              </p>
              <div className="mt-4 space-y-2.5">
                <ServiceDropdown location={l} services={services} />
                <Link
                  to={`/appliance-repair-${l.slug}`}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-white/10 px-4 py-2.5 text-sm font-medium text-slate-300 transition-colors hover:border-sky-500/40 hover:text-sky-400"
                >
                  View all services in {l.name}
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900 to-[#0a1628] p-8 text-center">
          <p className="text-lg text-slate-300">
            Not sure whether your area is covered?
          </p>
          <div className="mt-5 flex justify-center">
            <CallButton label={`Call ${business.phoneDisplay}`} />
          </div>
        </div>
      </section>
    </>
  );
}
