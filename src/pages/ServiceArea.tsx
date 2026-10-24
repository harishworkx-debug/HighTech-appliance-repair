import { useParams, Link, Navigate } from 'react-router-dom';
import {
  MapPin,
  HelpCircle,
  ArrowRight,
  Wrench,
} from 'lucide-react';
import { SEO, Breadcrumbs, BreadcrumbJsonLd } from '@/components/SEO';
import { CallButton } from '@/components/Header';
import {
  business,
  getLocation,
  locations,
  services,
  serviceLocationPath,
} from '@/data/business';
import { ScrollToTop } from '@/components/ScrollToTop';

export default function ServiceArea() {
  const { slug } = useParams();
  const areaSlug = slug?.replace(/^appliance-repair-/, '') || '';
  const location = getLocation(areaSlug);
  if (!location) return <Navigate to="/404" replace />;

  const crumbs = [
    { name: 'Home', path: '/' },
    { name: 'Service Areas', path: '/service-areas' },
    { name: `${location.name}, CA` },
  ];

  return (
    <>
      <ScrollToTop />
      <SEO
        title={location.metaTitle}
        description={location.metaDescription}
        canonicalPath={`/appliance-repair-${location.slug}`}
      />
      <BreadcrumbJsonLd items={crumbs} />
      <Breadcrumbs items={crumbs} />

      <section className="mx-auto max-w-6xl px-4 py-12">
        <span className="inline-flex items-center gap-2 rounded-full border border-sky-500/30 bg-sky-500/10 px-4 py-1.5 text-sm font-medium text-sky-300">
          <MapPin className="h-4 w-4" aria-hidden="true" />
          {location.county}
        </span>
        <h1 className="mt-4 text-4xl font-extrabold text-white sm:text-5xl">
          Appliance Repair in {location.name}, CA
        </h1>
        <p className="mt-5 max-w-3xl text-lg text-slate-300">
          {location.blurb}
        </p>
        <div className="mt-7 flex flex-col gap-3 sm:flex-row">
          <CallButton
            label={`Call ${business.phoneDisplay}`}
            className="!px-7 !py-4"
          />
          <Link
            to="/services"
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/20 px-6 py-4 font-semibold text-white transition-colors hover:border-sky-400 hover:bg-white/5"
          >
            Browse Services
            <ArrowRight className="h-5 w-5" aria-hidden="true" />
          </Link>
        </div>

        {/* Local info */}
        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-white">
              About Appliance Repair in {location.name}
            </h2>
            <p className="mt-4 text-slate-400">{location.localInfo}</p>

            <h2 className="mt-10 flex items-center gap-2 text-2xl font-bold text-white">
              <Wrench className="h-6 w-6 text-sky-400" aria-hidden="true" />
              Services Available in {location.name}
            </h2>
            <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {services.map((s) => (
                <Link
                  key={s.slug}
                  to={serviceLocationPath(s.slug, location.slug)}
                  className="group rounded-xl border border-white/10 bg-slate-900/60 p-5 transition-all hover:border-sky-500/40"
                >
                  <p className="font-semibold text-white group-hover:text-sky-400">
                    {s.name} in {location.name}
                  </p>
                  <p className="mt-2 text-sm text-slate-400 line-clamp-2">
                    {s.short}
                  </p>
                </Link>
              ))}
            </div>

            {/* FAQs */}
            <h2 className="mt-12 flex items-center gap-2 text-2xl font-bold text-white">
              <HelpCircle className="h-6 w-6 text-sky-400" aria-hidden="true" />
              {location.name} Appliance Repair FAQs
            </h2>
            <div className="mt-5 space-y-4">
              {location.faqs.map((f) => (
                <details
                  key={f.q}
                  className="group rounded-xl border border-white/10 bg-slate-900/60 p-5"
                >
                  <summary className="cursor-pointer list-none font-semibold text-white marker:content-none">
                    <span className="flex items-center justify-between gap-4">
                      {f.q}
                      <span className="text-sky-400 transition-transform group-open:rotate-45">
                        +
                      </span>
                    </span>
                  </summary>
                  <p className="mt-3 text-sm text-slate-400">{f.a}</p>
                </details>
              ))}
            </div>
          </div>

          <aside className="space-y-6">
            <div className="sticky top-24 rounded-2xl border border-white/10 bg-gradient-to-br from-slate-900 to-[#0a1628] p-6">
              <p className="text-sm text-slate-400">In {location.name}?</p>
              <p className="mt-1 text-2xl font-extrabold text-white">
                Call to confirm availability
              </p>
              <div className="mt-4">
                <CallButton
                  label={`Call ${business.phoneDisplay}`}
                  className="w-full"
                />
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-6">
              <h3 className="font-bold text-white">Other Service Areas</h3>
              <ul className="mt-3 space-y-2 text-sm">
                {locations
                  .filter((l) => l.slug !== location.slug)
                  .slice(0, 6)
                  .map((l) => (
                    <li key={l.slug}>
                      <Link
                        to={`/appliance-repair-${l.slug}`}
                        className="inline-flex items-center gap-1.5 text-slate-300 hover:text-sky-400"
                      >
                        <MapPin className="h-4 w-4" aria-hidden="true" />
                        {l.name}, CA
                      </Link>
                    </li>
                  ))}
              </ul>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
