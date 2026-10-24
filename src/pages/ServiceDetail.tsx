import { useParams, Link, Navigate } from 'react-router-dom';
import {
  Phone,
  AlertTriangle,
  Wrench,
  Info,
  HelpCircle,
  ArrowRight,
  MapPin,
} from 'lucide-react';
import {
  SEO,
  Breadcrumbs,
  BreadcrumbJsonLd,
} from '@/components/SEO';
import { CallButton } from '@/components/Header';
import {
  business,
  getService,
  getServicesRelated,
  locations,
} from '@/data/business';
import { ScrollToTop } from '@/components/ScrollToTop';

export default function ServiceDetail() {
  const { slug } = useParams();
  const service = getService(slug || '');
  if (!service) return <Navigate to="/404" replace />;
  const related = getServicesRelated(service.slug);

  const crumbs = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: service.name },
  ];

  return (
    <>
      <ScrollToTop />
      <SEO
        title={service.metaTitle}
        description={service.metaDescription}
        canonicalPath={`/${service.slug}`}
      />
      <BreadcrumbJsonLd items={crumbs} />
      <Breadcrumbs items={crumbs} />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={service.image}
            alt={service.imageAlt}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#070f1f] via-[#070f1f]/90 to-[#070f1f]/40" />
        </div>
        <div className="relative mx-auto max-w-6xl px-4 py-16 sm:py-20">
          <div className="max-w-2xl">
            <h1 className="text-4xl font-extrabold text-white sm:text-5xl">
              {service.name} in San Diego
            </h1>
            <p className="mt-5 text-lg text-slate-300">{service.intro}</p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <CallButton
                label={`Call for ${service.name}`}
                className="!px-7 !py-4"
              />
              <Link
                to="/service-areas"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/20 px-6 py-4 font-semibold text-white transition-colors hover:border-sky-400 hover:bg-white/5"
              >
                Check Service Areas
                <ArrowRight className="h-5 w-5" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">
          <div className="space-y-12 lg:col-span-2">
            {/* Symptoms */}
            <section>
              <h2 className="flex items-center gap-2 text-2xl font-bold text-white">
                <AlertTriangle className="h-6 w-6 text-sky-400" aria-hidden="true" />
                Common Symptoms
              </h2>
              <ul className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {service.symptoms.map((s) => (
                  <li
                    key={s}
                    className="rounded-xl border border-white/10 bg-slate-900/60 p-4 text-sm text-slate-300"
                  >
                    {s}
                  </li>
                ))}
              </ul>
            </section>

            {/* Causes */}
            <section>
              <h2 className="flex items-center gap-2 text-2xl font-bold text-white">
                <Info className="h-6 w-6 text-sky-400" aria-hidden="true" />
                Possible Causes
              </h2>
              <ul className="mt-5 space-y-3">
                {service.causes.map((c) => (
                  <li
                    key={c}
                    className="flex gap-3 rounded-xl border border-white/10 bg-slate-900/60 p-4 text-sm text-slate-300"
                  >
                    <span
                      className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-sky-400"
                      aria-hidden="true"
                    />
                    {c}
                  </li>
                ))}
              </ul>
            </section>

            {/* Process */}
            <section>
              <h2 className="flex items-center gap-2 text-2xl font-bold text-white">
                <Wrench className="h-6 w-6 text-sky-400" aria-hidden="true" />
                The Repair Process
              </h2>
              <ol className="mt-5 space-y-4">
                {service.process.map((p, i) => (
                  <li
                    key={p}
                    className="flex gap-4 rounded-xl border border-white/10 bg-slate-900/60 p-5"
                  >
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-sky-500/15 text-sm font-bold text-sky-400">
                      {i + 1}
                    </span>
                    <p className="text-sm text-slate-300">{p}</p>
                  </li>
                ))}
              </ol>
            </section>

            {/* Considerations */}
            <section>
              <h2 className="text-2xl font-bold text-white">
                Things to Keep in Mind
              </h2>
              <ul className="mt-5 space-y-3">
                {service.considerations.map((c) => (
                  <li
                    key={c}
                    className="flex gap-3 text-sm text-slate-300"
                  >
                    <span
                      className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-sky-400"
                      aria-hidden="true"
                    />
                    {c}
                  </li>
                ))}
              </ul>
            </section>

            {/* FAQs */}
            <section>
              <h2 className="flex items-center gap-2 text-2xl font-bold text-white">
                <HelpCircle className="h-6 w-6 text-sky-400" aria-hidden="true" />
                {service.name} FAQs
              </h2>
              <div className="mt-5 space-y-4">
                {service.faqs.map((f) => (
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
            </section>
          </div>

          {/* Sidebar */}
          <aside className="space-y-6">
            <div className="sticky top-24 rounded-2xl border border-white/10 bg-gradient-to-br from-slate-900 to-[#0a1628] p-6">
              <p className="text-sm text-slate-400">Need help now?</p>
              <p className="mt-1 text-2xl font-extrabold text-white">
                {service.name}
              </p>
              <p className="mt-1 text-sm text-slate-400">
                Call to describe the symptom and check availability.
              </p>
              <div className="mt-4">
                <CallButton
                  label={`Call ${business.phoneDisplay}`}
                  className="w-full"
                />
              </div>
            </div>

            {related.length > 0 && (
              <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-6">
                <h3 className="font-bold text-white">Related Services</h3>
                <ul className="mt-3 space-y-2 text-sm">
                  {related.map((r) => (
                    <li key={r.slug}>
                      <Link
                        to={`/${r.slug}`}
                        className="inline-flex items-center gap-1.5 text-slate-300 hover:text-sky-400"
                      >
                        <ArrowRight
                          className="h-4 w-4"
                          aria-hidden="true"
                        />
                        {r.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-6">
              <h3 className="font-bold text-white">Service Areas</h3>
              <ul className="mt-3 space-y-2 text-sm">
                {locations.slice(0, 6).map((l) => (
                  <li key={l.slug}>
                    <Link
                      to={`/${service.slug}-${l.slug}`}
                      className="inline-flex items-center gap-1.5 text-slate-300 hover:text-sky-400"
                    >
                      <MapPin
                        className="h-4 w-4"
                        aria-hidden="true"
                      />
                      {service.name} in {l.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </>
  );
}
