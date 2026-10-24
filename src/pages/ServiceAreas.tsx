import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { MapPin, ArrowRight, Sparkles, Phone, ShieldCheck } from 'lucide-react';
import { SEO, Breadcrumbs, BreadcrumbJsonLd } from '@/components/SEO';
import { CallButton } from '@/components/Header';
import { ServiceDropdown } from '@/components/ServiceDropdown';
import { business, locations, services, serviceLocationPath } from '@/data/business';

export default function ServiceAreas() {
  const navigate = useNavigate();
  const [selectedService, setSelectedService] = useState(services[0].slug);
  const [selectedLocation, setSelectedLocation] = useState(locations[0].slug);

  const crumbs = [
    { name: 'Home', path: '/' },
    { name: 'Service Areas' },
  ];

  const handleQuickJump = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedService && selectedLocation) {
      navigate(serviceLocationPath(selectedService, selectedLocation));
    }
  };

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
        {/* Header */}
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-sky-500/30 bg-sky-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-sky-300">
            <ShieldCheck className="h-4 w-4" />
            San Diego County Coverage
          </span>
          <h1 className="mt-4 text-4xl font-extrabold text-white sm:text-5xl">
            Service Areas
          </h1>
          <p className="mt-4 text-lg text-slate-300 leading-relaxed">
            {business.name} serves residential neighborhoods across San Diego County.
            Select your city below, then use the service dropdown to go directly to that repair service
            in your city.
          </p>
        </div>

        {/* Quick Service & Location Selector Bar */}
        <div className="mt-8 rounded-2xl border border-sky-500/30 bg-gradient-to-r from-slate-900 via-[#0a1628] to-slate-900 p-6 shadow-xl">
          <div className="flex items-center gap-2 text-sm font-semibold text-sky-400">
            <Sparkles className="h-4 w-4" />
            <span>Quick Selector: Select Appliance & City</span>
          </div>

          <form onSubmit={handleQuickJump} className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
            <div>
              <label htmlFor="service-jump" className="block text-xs font-medium text-slate-400 mb-1">
                Select Appliance Service
              </label>
              <select
                id="service-jump"
                value={selectedService}
                onChange={(e) => setSelectedService(e.target.value)}
                className="w-full rounded-xl border border-white/10 bg-slate-800/90 px-4 py-2.5 text-sm text-white focus:border-sky-400 focus:outline-none focus:ring-1 focus:ring-sky-400"
              >
                {services.map((s) => (
                  <option key={s.slug} value={s.slug}>
                    {s.name}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="location-jump" className="block text-xs font-medium text-slate-400 mb-1">
                Select Location
              </label>
              <select
                id="location-jump"
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
                className="w-full rounded-xl border border-white/10 bg-slate-800/90 px-4 py-2.5 text-sm text-white focus:border-sky-400 focus:outline-none focus:ring-1 focus:ring-sky-400"
              >
                {locations.map((l) => (
                  <option key={l.slug} value={l.slug}>
                    {l.name}, CA
                  </option>
                ))}
              </select>
            </div>

            <div className="flex items-end">
              <button
                type="submit"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-sky-500 px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-sky-500/25 transition-all hover:bg-sky-400"
              >
                <span>Find Local Service</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </form>
        </div>

        {/* Locations Grid */}
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {locations.map((l) => {
            const isPrimary = l.slug === 'san-diego-ca';
            return (
              <div
                key={l.slug}
                className="group relative flex flex-col rounded-2xl border border-white/10 bg-slate-900/60 p-6 shadow-lg transition-all duration-300 hover:border-sky-500/40 hover:shadow-xl hover:shadow-sky-500/10"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-sky-500/10 px-2.5 py-0.5 text-xs font-medium text-sky-400 border border-sky-500/20">
                      <MapPin className="h-3 w-3" />
                      {l.county}
                    </span>
                    <h2 className="mt-2.5 text-2xl font-bold text-white transition-colors group-hover:text-sky-300">
                      <Link to={`/appliance-repair-${l.slug}`} className="hover:underline">
                        {l.name}, CA
                      </Link>
                    </h2>
                  </div>
                  {isPrimary && (
                    <span className="rounded-full bg-sky-500/20 px-2.5 py-1 text-xs font-semibold text-sky-300 border border-sky-400/30">
                      Primary Hub
                    </span>
                  )}
                </div>

                <p className="mt-4 flex-1 text-sm text-slate-300 leading-relaxed line-clamp-3">
                  {l.blurb}
                </p>

                {/* Dropdown & Area Navigation */}
                <div className="mt-6 space-y-3">
                  <ServiceDropdown location={l} services={services} />

                  <Link
                    to={`/appliance-repair-${l.slug}`}
                    className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-white/10 px-4 py-2.5 text-sm font-medium text-slate-300 transition-colors hover:border-sky-500/40 hover:bg-white/5 hover:text-sky-300"
                  >
                    <span>View all services in {l.name}</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Box */}
        <div className="mt-16 rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900 to-[#0a1628] p-8 text-center sm:p-12">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            Don't see your specific zip code listed?
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-slate-400">
            Call our dispatch desk directly to confirm service availability for your exact address.
          </p>
          <div className="mt-6 flex justify-center">
            <CallButton label={`Call ${business.phoneDisplay}`} />
          </div>
        </div>
      </section>
    </>
  );
}
