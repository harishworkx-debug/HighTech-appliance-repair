import { Phone, MapPin, ExternalLink, Clock } from 'lucide-react';
import { SEO, Breadcrumbs, BreadcrumbJsonLd } from '@/components/SEO';
import { CallButton } from '@/components/Header';
import { business } from '@/data/business';

export default function Contact() {
  const crumbs = [
    { name: 'Home', path: '/' },
    { name: 'Contact' },
  ];
  return (
    <>
      <SEO
        title={`Contact ${business.name} | San Diego Appliance Repair`}
        description={`Call ${business.phoneDisplay} to speak with ${business.name} about your appliance problem. Find our Google Maps listing and service area information here.`}
        canonicalPath="/contact"
      />
      <BreadcrumbJsonLd items={crumbs} />
      <Breadcrumbs items={crumbs} />

      <section className="mx-auto max-w-5xl px-4 py-12">
        <h1 className="text-4xl font-extrabold text-white">
          Contact Information
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-slate-400">
          The fastest way to reach {business.name} is by phone. Call to
          describe your appliance problem and check service availability in
          your area.
        </p>

        <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {/* Call card */}
          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900 to-[#0a1628] p-8">
            <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-sky-500/15 text-sky-400">
              <Phone className="h-7 w-7" aria-hidden="true" />
            </span>
            <h2 className="mt-5 text-xl font-bold text-white">Call Us</h2>
            <p className="mt-2 text-slate-400">
              Speak directly with {business.name} about your appliance.
            </p>
            <a
              href={business.phoneHref}
              className="mt-4 block text-3xl font-extrabold text-white hover:text-sky-400"
            >
              {business.phoneDisplay}
            </a>
            <div className="mt-6">
              <CallButton
                label={`Call ${business.phoneDisplay}`}
                className="w-full"
              />
            </div>
            <p className="mt-4 flex items-center gap-2 text-sm text-slate-500">
              <Clock className="h-4 w-4" aria-hidden="true" />
              Call to check availability for your area
            </p>
          </div>

          {/* Map card */}
          <div className="rounded-3xl border border-white/10 bg-slate-900/60 p-8">
            <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-sky-500/15 text-sky-400">
              <MapPin className="h-7 w-7" aria-hidden="true" />
            </span>
            <h2 className="mt-5 text-xl font-bold text-white">Find Us</h2>
            <p className="mt-2 text-slate-400">
              View the {business.name} listing on Google Maps.
            </p>
            <a
              href={business.mapsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 font-semibold text-sky-400 hover:text-sky-300"
            >
              Open Google Maps listing
              <ExternalLink className="h-4 w-4" aria-hidden="true" />
            </a>

            <div className="mt-6 overflow-hidden rounded-xl border border-white/10">
              <iframe
                src={business.mapsEmbed}
                width="100%"
                height="350"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                title={`${business.name} location on Google Maps`}
                className="h-[350px] w-full"
              />
            </div>
          </div>
        </div>

        <div className="mt-8 rounded-2xl border border-white/10 bg-slate-900/60 p-6 text-sm text-slate-400">
          <p className="font-semibold text-white">A note on contact</p>
          <p className="mt-2">
            {business.name} handles all inquiries by phone. We do not use
            contact forms, email, chat, or online booking — calling is the
            quickest way to get help with your appliance.
          </p>
        </div>
      </section>
    </>
  );
}
