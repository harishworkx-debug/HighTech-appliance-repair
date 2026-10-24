import { useParams, Link, Navigate } from 'react-router-dom';
import {
  Phone,
  AlertTriangle,
  Info,
  HelpCircle,
  ArrowRight,
  MapPin,
  Wrench,
} from 'lucide-react';
import { SEO, Breadcrumbs, BreadcrumbJsonLd } from '@/components/SEO';
import { CallButton } from '@/components/Header';
import {
  business,
  getService,
  getLocation,
  getServicesRelated,
  locations,
  services,
  serviceLocationPath,
} from '@/data/business';
import { ScrollToTop } from '@/components/ScrollToTop';
import ServiceDetail from '@/pages/ServiceDetail';

export default function ServiceLocation() {
  const { slug } = useParams();
  const raw = slug || '';

  // If the slug is exactly a service slug, render the service detail page.
  if (services.some((s) => s.slug === raw)) {
    return <ServiceDetail />;
  }

  let serviceSlug = '';
  let locationSlug = '';
  for (const s of services.map((s) => s.slug)) {
    if (raw.startsWith(`${s}-`)) {
      const rest = raw.slice(s.length + 1);
      if (locations.some((l) => l.slug === rest)) {
        serviceSlug = s;
        locationSlug = rest;
        break;
      }
    }
  }

  const service = getService(serviceSlug);
  const location = getLocation(locationSlug);
  if (!service || !location) return <Navigate to="/404" replace />;

  const related = getServicesRelated(service.slug).slice(0, 3);
  const otherAreas = locations
    .filter((l) => l.slug !== location.slug)
    .slice(0, 6);

  const crumbs = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: service.name, path: `/${service.slug}` },
    { name: `${service.name} in ${location.name}` },
  ];

  const title = `${service.name} in ${location.name}, CA | ${business.name}`;
  const description = `${service.name} in ${location.name}, CA. ${service.short} Call ${business.phoneDisplay} to discuss the problem and check service availability.`;

  const faqJson = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      ...service.faqs,
      ...location.faqs,
    ].map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };

  return (
    <>
      <ScrollToTop />
      <SEO
        title={title}
        description={description}
        canonicalPath={serviceLocationPath(service.slug, location.slug)}
      />
      <BreadcrumbJsonLd items={crumbs} />
      <script type="application/ld+json">
        {JSON.stringify(faqJson)}
      </script>
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
            <span className="inline-flex items-center gap-2 rounded-full border border-sky-500/30 bg-sky-500/10 px-4 py-1.5 text-sm font-medium text-sky-300">
              <MapPin className="h-4 w-4" aria-hidden="true" />
              {location.name}, CA
            </span>
            <h1 className="mt-4 text-4xl font-extrabold text-white sm:text-5xl">
              {service.name} in {location.name}, CA
            </h1>
            <p className="mt-5 text-lg text-slate-300">
              {business.name} helps {location.name} households address{' '}
              {service.name.toLowerCase()} issues. {service.short}
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <CallButton
                label={`Call for ${service.name}`}
                className="!px-7 !py-4"
              />
              <Link
                to={`/${service.slug}`}
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/20 px-6 py-4 font-semibold text-white transition-colors hover:border-sky-400 hover:bg-white/5"
              >
                About {service.name}
                <ArrowRight className="h-5 w-5" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">
          <div className="space-y-12 lg:col-span-2">
            {/* Location intro */}
            <section>
              <h2 className="text-2xl font-bold text-white">
                {service.name} Help in {location.name}
              </h2>
              <p className="mt-4 text-slate-400">
                {location.localInfo} If you are dealing with a{' '}
                {service.name.toLowerCase()} problem in {location.name}, call{' '}
                <a
                  href={business.phoneHref}
                  className="font-semibold text-sky-400 hover:text-sky-300"
                >
                  {business.phoneDisplay}
                </a>{' '}
                to describe the symptom and confirm service availability.
              </p>
            </section>

            {/* Symptoms */}
            <section>
              <h2 className="flex items-center gap-2 text-2xl font-bold text-white">
                <AlertTriangle className="h-6 w-6 text-sky-400" aria-hidden="true" />
                Common {service.name} Symptoms
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

            {/* FAQs */}
            <section>
              <h2 className="flex items-center gap-2 text-2xl font-bold text-white">
                <HelpCircle className="h-6 w-6 text-sky-400" aria-hidden="true" />
                {service.name} in {location.name} FAQs
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
            </section>
          </div>

          {/* Sidebar */}
          <aside className="space-y-6">
            <div className="sticky top-24 rounded-2xl border border-white/10 bg-gradient-to-br from-slate-900 to-[#0a1628] p-6">
              <p className="text-sm text-slate-400">
                {service.name} in {location.name}
              </p>
              <p className="mt-1 text-2xl font-extrabold text-white">
                Call to check availability
              </p>
              <div className="mt-4">
                <CallButton
                  label={`Call ${business.phoneDisplay}`}
                  className="w-full"
                />
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-6">
              <h3 className="font-bold text-white">Related Services</h3>
              <ul className="mt-3 space-y-2 text-sm">
                {related.map((r) => (
                  <li key={r.slug}>
                    <Link
                      to={serviceLocationPath(r.slug, location.slug)}
                      className="inline-flex items-center gap-1.5 text-slate-300 hover:text-sky-400"
                    >
                      <ArrowRight className="h-4 w-4" aria-hidden="true" />
                      {r.name} in {location.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-6">
              <h3 className="font-bold text-white">
                {service.name} Nearby
              </h3>
              <ul className="mt-3 space-y-2 text-sm">
                {otherAreas.map((l) => (
                  <li key={l.slug}>
                    <Link
                      to={serviceLocationPath(service.slug, l.slug)}
                      className="inline-flex items-center gap-1.5 text-slate-300 hover:text-sky-400"
                    >
                      <MapPin className="h-4 w-4" aria-hidden="true" />
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
