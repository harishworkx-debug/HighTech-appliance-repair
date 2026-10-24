import { Phone, MapPin, Star, HelpCircle } from 'lucide-react';
import { SEO, Breadcrumbs, BreadcrumbJsonLd } from '@/components/SEO';
import { CallButton } from '@/components/Header';
import { business, aboutImage } from '@/data/business';

export default function About() {
  const crumbs = [
    { name: 'Home', path: '/' },
    { name: 'About' },
  ];
  return (
    <>
      <SEO
        title={`About ${business.name} | San Diego Appliance Repair`}
        description={`Learn about HighTech Appliance Repair, an appliance repair service serving the San Diego area. Call ${business.phoneDisplay} to discuss your appliance problem.`}
        canonicalPath="/about"
      />
      <BreadcrumbJsonLd items={crumbs} />
      <Breadcrumbs items={crumbs} />

      <section className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
          <div>
            <h1 className="text-4xl font-extrabold text-white">
              About {business.name}
            </h1>
            <p className="mt-5 text-lg text-slate-300">
              {business.name} is an appliance repair service serving
              households in the {business.primaryArea} area. We help customers
              understand what is going wrong with their appliances and what
              repair options are available.
            </p>
            <p className="mt-4 text-slate-400">
              Every conversation starts with a phone call. When you call, you
              can describe the symptom, confirm service availability for your
              area, and talk through next steps — no forms, no waiting on a
              callback request.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <CallButton label={`Call ${business.phoneDisplay}`} />
              <span className="inline-flex items-center gap-2 text-sm text-slate-400">
                <Star className="h-4 w-4 fill-amber-400 text-amber-400" aria-hidden="true" />
                {business.rating} stars · {business.reviewCount} reviews
              </span>
            </div>
          </div>

          <div className="overflow-hidden rounded-3xl border border-white/10">
            <img
              src={aboutImage}
              alt="Appliance repair technician at work"
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
          {[
            {
              icon: Phone,
              title: 'Call-First Approach',
              text: 'Phone calls are the fastest way to reach us. Describe the problem and check availability in one conversation.',
            },
            {
              icon: HelpCircle,
              title: 'Clear Explanations',
              text: 'A technician can walk you through the likely cause and the repair options so you can make an informed decision.',
            },
            {
              icon: MapPin,
              title: 'San Diego Area',
              text: `We serve households across the ${business.primaryArea} region. Call to confirm your neighborhood is covered.`,
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-white/10 bg-slate-900/60 p-6"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-sky-500/15 text-sky-400">
                <item.icon className="h-6 w-6" aria-hidden="true" />
              </span>
              <h2 className="mt-4 text-lg font-bold text-white">
                {item.title}
              </h2>
              <p className="mt-2 text-sm text-slate-400">{item.text}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
