import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MapPin, Sparkles, Phone, ShieldCheck, ArrowRight } from 'lucide-react';
import { SEO, Breadcrumbs, BreadcrumbJsonLd } from '@/components/SEO';
import { ServiceCard } from '@/components/ServiceCard';
import { business, services, locations, serviceLocationPath } from '@/data/business';

export default function Services() {
  const navigate = useNavigate();
  const [selectedLocation, setSelectedLocation] = useState('san-diego-ca');
  const [selectedService, setSelectedService] = useState(services[0].slug);

  const crumbs = [
    { name: 'Home', path: '/' },
    { name: 'Services' },
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
        title={`Appliance Repair Services in San Diego | ${business.name}`}
        description="Browse appliance repair services offered by HighTech Appliance Repair in the San Diego area, including refrigerator, washer, dryer, dishwasher, and oven repair."
        canonicalPath="/services"
      />
      <BreadcrumbJsonLd items={crumbs} />
      <Breadcrumbs items={crumbs} />

      <section className="mx-auto max-w-6xl px-4 py-12">
        {/* Header */}
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-sky-500/30 bg-sky-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-sky-300">
            <ShieldCheck className="h-4 w-4" />
            Verified Appliance Repair Directory
          </span>
          <h1 className="mt-4 text-4xl font-extrabold text-white sm:text-5xl">
            Appliance Repair Services
          </h1>
          <p className="mt-4 text-lg text-slate-300 leading-relaxed">
            {business.name} helps San Diego-area households diagnose and repair
            common major household appliances. Each card below links directly to our primary
            San Diego service hub and includes a city dropdown to view coverage in your exact neighborhood.
          </p>
        </div>

        {/* Quick Location & Service Selector Dropdown Bar */}
        <div className="mt-8 rounded-2xl border border-sky-500/30 bg-gradient-to-r from-slate-900 via-[#0a1628] to-slate-900 p-6 shadow-xl">
          <div className="flex items-center gap-2 text-sm font-semibold text-sky-400">
            <Sparkles className="h-4 w-4" />
            <span>Quick Selector: Jump to Local Service Page</span>
          </div>

          <form onSubmit={handleQuickJump} className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
            <div>
              <label htmlFor="service-select" className="block text-xs font-medium text-slate-400 mb-1">
                Select Service
              </label>
              <select
                id="service-select"
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
              <label htmlFor="location-select" className="block text-xs font-medium text-slate-400 mb-1">
                Select Service Area / City
              </label>
              <select
                id="location-select"
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
                <span>Go to Local Page</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </form>
        </div>

        {/* Services Grid with Dropdowns on each card */}
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <ServiceCard key={s.slug} service={s} locations={locations} />
          ))}
        </div>

        {/* Bottom CTA Box */}
        <div className="mt-16 rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900 to-[#0a1628] p-8 text-center sm:p-12">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            Need Same-Day Appliance Troubleshooting?
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-slate-400">
            Speak directly with our San Diego dispatch team. We’ll verify your appliance brand, model,
            and schedule a qualified technician for your area.
          </p>
          <div className="mt-6 flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href={business.phoneHref}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-sky-500 px-7 py-3.5 text-base font-semibold text-white shadow-lg shadow-sky-500/30 transition-all hover:bg-sky-400"
            >
              <Phone className="h-5 w-5" />
              Call {business.phoneDisplay}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
