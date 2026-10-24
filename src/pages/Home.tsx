import { Link } from 'react-router-dom';
import {
  Phone,
  Star,
  MapPin,
  Wrench,
  ShieldCheck,
  Clock,
  HelpCircle,
  ArrowRight,
  AlertTriangle,
  Info,
  ChevronDown,
} from 'lucide-react';
import { SEO, LocalBusinessJsonLd } from '@/components/SEO';
import { CallButton } from '@/components/Header';
import { ServiceCard } from '@/components/ServiceCard';
import {
  business,
  services,
  locations,
  heroImage,
  sanDiegoImage,
} from '@/data/business';

export default function Home() {
  return (
    <>
      <SEO
        title={`${business.name} | Appliance Repair in San Diego`}
        description={`Reliable appliance repair in San Diego. Call ${business.phoneDisplay} for refrigerator, washer, dryer, dishwasher, and oven repair. Rated ${business.rating} stars.`}
        canonicalPath="/"
      />
      <LocalBusinessJsonLd />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Technician repairing household appliances"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#070f1f] via-[#070f1f]/90 to-[#070f1f]/50" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#070f1f] via-transparent to-transparent" />
        </div>

        <div className="relative mx-auto max-w-6xl px-4 py-20 sm:py-28 lg:py-36">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-sky-500/30 bg-sky-500/10 px-4 py-1.5 text-sm font-medium text-sky-300">
              <MapPin className="h-4 w-4" aria-hidden="true" />
              Serving the San Diego area
            </span>
            <h1 className="mt-5 text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl">
              Reliable Appliance Repair in San Diego
            </h1>
            <p className="mt-5 text-lg text-slate-300">
              Having trouble with a refrigerator, washer, dryer, or another
              household appliance? Call {business.name} to discuss the problem
              and check service availability.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <CallButton
                label={`Call ${business.phoneDisplay}`}
                className="!px-7 !py-4 text-base"
              />
              <Link
                to="/services"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/20 px-7 py-4 font-semibold text-white transition-colors hover:border-sky-400 hover:bg-white/5"
              >
                Explore Appliance Repair Services
                <ArrowRight className="h-5 w-5" aria-hidden="true" />
              </Link>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-slate-300">
              <span className="inline-flex items-center gap-1.5">
                <Star className="h-4 w-4 fill-amber-400 text-amber-400" aria-hidden="true" />
                {business.rating} stars · {business.reviewCount} reviews
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Phone className="h-4 w-4 text-sky-400" aria-hidden="true" />
                {business.phoneDisplay}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <section className="border-y border-white/10 bg-slate-900/50">
        <div className="mx-auto grid max-w-6xl grid-cols-1 divide-y divide-white/10 px-4 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          {[
            {
              icon: Star,
              title: `${business.rating}-Star Rated`,
              text: `${business.reviewCount} Google reviews`,
            },
            {
              icon: Phone,
              title: 'Call Direct',
              text: 'Talk to the business, no forms',
            },
            {
              icon: Wrench,
              title: 'Common Appliances',
              text: 'Refrigerators, washers, dryers, ovens & more',
            },
          ].map((item) => (
            <div key={item.title} className="flex items-center gap-4 px-2 py-6 sm:px-6">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-sky-500/15 text-sky-400">
                <item.icon className="h-6 w-6" aria-hidden="true" />
              </span>
              <div>
                <p className="font-semibold text-white">{item.title}</p>
                <p className="text-sm text-slate-400">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Services grid */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:py-20">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Appliance Repair Services
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-slate-400">
            Common household appliance repairs in the San Diego area. Each card
            lets you pick your city and go straight to that service in your area.
            Call to confirm whether your brand and model can be serviced.
          </p>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <ServiceCard key={s.slug} service={s} locations={locations} />
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 font-semibold text-sky-400 hover:text-sky-300"
          >
            View all services
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-slate-900/40 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              How It Works
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-slate-400">
              Getting help with a broken appliance is simple — it all starts
              with a phone call.
            </p>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-4">
            {[
              {
                step: '1',
                title: 'Call Us',
                text: `Dial ${business.phoneDisplay} and describe the appliance problem you are experiencing.`,
              },
              {
                step: '2',
                title: 'Check Availability',
                text: 'Confirm whether service is available in your neighborhood for your appliance type.',
              },
              {
                step: '3',
                title: 'Technician Visit',
                text: 'A technician inspects the unit, identifies the likely cause, and explains your options.',
              },
              {
                step: '4',
                title: 'Get It Fixed',
                text: 'Common parts can be addressed during the visit when available, so your appliance is back in use.',
              },
            ].map((item) => (
              <div
                key={item.step}
                className="rounded-2xl border border-white/10 bg-slate-900/60 p-6"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-sky-500 text-lg font-bold text-white">
                  {item.step}
                </span>
                <h3 className="mt-4 text-lg font-bold text-white">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-slate-400">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why choose */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:py-20">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Why Call HighTech Appliance Repair
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-slate-400">
            We focus on helping you understand your repair options and making
            it easy to speak with us directly.
          </p>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {[
            {
              icon: Phone,
              title: 'Talk to a Real Person',
              text: 'Every step starts with a phone call. Describe the problem and check service availability directly with the business.',
            },
            {
              icon: HelpCircle,
              title: 'Understand Your Options',
              text: 'A technician can explain the likely cause and the repair options available before you decide what to do next.',
            },
            {
              icon: ShieldCheck,
              title: 'Common Brands Covered',
              text: 'Service covers many common household appliance brands. Call with your brand and model number to confirm.',
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-white/10 bg-slate-900/60 p-6"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-sky-500/15 text-sky-400">
                <item.icon className="h-6 w-6" aria-hidden="true" />
              </span>
              <h3 className="mt-4 text-lg font-bold text-white">
                {item.title}
              </h3>
              <p className="mt-2 text-sm text-slate-400">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Common appliance problems */}
      <section className="bg-slate-900/40 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Common Appliance Problems We Help With
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-slate-400">
              Recognize your symptom? Call to describe it and check whether
              service is available for your appliance.
            </p>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
            {[
              {
                icon: AlertTriangle,
                title: 'Refrigerator Not Cooling',
                text: 'A warm fridge or freezer can spoil food quickly. Common causes include fan motor failure, clogged coils, or a faulty thermostat.',
                link: '/refrigerator-repair',
                linkText: 'Refrigerator Repair',
              },
              {
                icon: AlertTriangle,
                title: 'Washer Will Not Drain',
                text: 'Standing water in your washer often points to a clogged or failed drain pump. A technician can clear or replace it.',
                link: '/washer-repair',
                linkText: 'Washer Repair',
              },
              {
                icon: AlertTriangle,
                title: 'Dryer Not Heating',
                text: 'A dryer that runs but produces no heat often has a failed heating element or blown thermal fuse.',
                link: '/dryer-repair',
                linkText: 'Dryer Repair',
              },
              {
                icon: AlertTriangle,
                title: 'Dishwasher Not Cleaning',
                text: 'Dirty dishes after a full cycle can mean clogged spray arms, a dirty filter, or a failing wash pump.',
                link: '/dishwasher-repair',
                linkText: 'Dishwasher Repair',
              },
              {
                icon: AlertTriangle,
                title: 'Oven Not Heating Evenly',
                text: 'Uneven baking or long preheat times are often caused by a failing bake element or inaccurate temperature sensor.',
                link: '/oven-repair',
                linkText: 'Oven Repair',
              },
              {
                icon: AlertTriangle,
                title: 'Ice Maker Not Producing Ice',
                text: 'No ice can mean a frozen fill tube, low water pressure, or a failed ice maker module.',
                link: '/ice-maker-repair',
                linkText: 'Ice Maker Repair',
              },
            ].map((item) => (
              <div
                key={item.title}
                className="flex gap-4 rounded-2xl border border-white/10 bg-slate-900/60 p-6"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-sky-500/15 text-sky-400">
                  <item.icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="font-bold text-white">{item.title}</h3>
                  <p className="mt-2 text-sm text-slate-400">{item.text}</p>
                  <Link
                    to={item.link}
                    className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-sky-400 hover:text-sky-300"
                  >
                    {item.linkText}
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brands we service */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:py-20">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Common Brands We Service
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-slate-400">
            We help with many major household appliance brands. Call with your
            brand and model number to confirm service availability.
          </p>
        </div>
        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {[
            'Whirlpool',
            'GE',
            'Samsung',
            'LG',
            'Maytag',
            'Kenmore',
            'KitchenAid',
            'Bosch',
            'Frigidaire',
            'Sub-Zero',
          ].map((brand) => (
            <div
              key={brand}
              className="rounded-xl border border-white/10 bg-slate-900/60 px-4 py-5 text-center"
            >
              <p className="font-semibold text-slate-200">{brand}</p>
            </div>
          ))}
        </div>
        <p className="mt-6 text-center text-sm text-slate-500">
          Brand list is not exhaustive. Call to confirm whether your specific
          brand and model can be serviced.
        </p>
      </section>

      {/* Reviews preview */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:py-20">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900 to-[#0a1628] p-8 text-center sm:p-12">
          <div className="flex items-center justify-center gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className="h-7 w-7 fill-amber-400 text-amber-400"
                aria-hidden="true"
              />
            ))}
          </div>
          <p className="mt-4 text-3xl font-bold text-white">
            {business.rating}-Star Rating
          </p>
          <p className="mt-2 text-slate-400">
            Based on {business.reviewCount} Google reviews for {business.name}.
          </p>
          <p className="mt-3 text-xs text-slate-500">
            Rating and review count should be verified on Google before publishing.
          </p>
          <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <CallButton label={`Call ${business.phoneDisplay}`} />
            <a
              href={business.mapsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/20 px-6 py-3 font-semibold text-white transition-colors hover:border-sky-400 hover:bg-white/5"
            >
              Read Reviews on Google
              <ArrowRight className="h-5 w-5" aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>

      {/* Service area preview */}
      <section className="bg-slate-900/40 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Service Areas
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-slate-400">
              We help households across the San Diego area. Select your city to
              see available services in your area, or call to confirm coverage.
            </p>
          </div>
          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {locations.map((l) => (
              <Link
                key={l.slug}
                to={`/appliance-repair-${l.slug}`}
                className="group rounded-xl border border-white/10 bg-slate-900/60 p-5 text-center transition-all hover:border-sky-500/40 hover:bg-slate-900"
              >
                <MapPin
                  className="mx-auto h-6 w-6 text-sky-400"
                  aria-hidden="true"
                />
                <p className="mt-2 font-semibold text-white group-hover:text-sky-400">
                  {l.name}
                </p>
                <p className="text-xs text-slate-500">CA</p>
              </Link>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link
              to="/service-areas"
              className="inline-flex items-center gap-2 font-semibold text-sky-400 hover:text-sky-300"
            >
              View all service areas
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* Quick FAQ */}
      <section className="mx-auto max-w-4xl px-4 py-16 sm:py-20">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-slate-400">
            Quick answers to common questions. For anything else, call{' '}
            <a
              href={business.phoneHref}
              className="font-semibold text-sky-400 hover:text-sky-300"
            >
              {business.phoneDisplay}
            </a>
            .
          </p>
        </div>
        <div className="mt-8 space-y-4">
          {[
            {
              q: 'How do I schedule a repair?',
              a: `Call ${business.phoneDisplay} to describe the problem and check service availability in your area. We do not use online booking forms.`,
            },
            {
              q: 'What areas do you serve?',
              a: 'We serve households across the San Diego area, including San Diego, Chula Vista, La Mesa, El Cajon, and surrounding communities. Call to confirm your neighborhood is covered.',
            },
            {
              q: 'What appliances do you repair?',
              a: 'Common household appliances including refrigerators, freezers, washers, dryers, dishwashers, ovens, stoves, ranges, microwaves, and ice makers. Call to confirm your specific appliance.',
            },
            {
              q: 'Should I repair or replace my appliance?',
              a: 'That depends on the failure, the age of the unit, and the cost of repair. Call to discuss the situation and a technician can help you understand your options.',
            },
            {
              q: 'Do you use contact forms or email?',
              a: 'No. We handle all inquiries by phone so you can describe the problem and get a direct answer. Call us at ' + business.phoneDisplay + '.',
            },
          ].map((f) => (
            <details
              key={f.q}
              className="group rounded-xl border border-white/10 bg-slate-900/60 p-5"
            >
              <summary className="cursor-pointer list-none font-semibold text-white marker:content-none">
                <span className="flex items-center justify-between gap-4">
                  {f.q}
                  <ChevronDown
                    className="h-5 w-5 shrink-0 text-sky-400 transition-transform group-open:rotate-180"
                    aria-hidden="true"
                  />
                </span>
              </summary>
              <p className="mt-3 text-sm text-slate-400">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative overflow-hidden">
        <img
          src={sanDiegoImage}
          alt="San Diego skyline"
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-[#070f1f]/85" />
        <div className="relative mx-auto max-w-4xl px-4 py-20 text-center sm:py-28">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Appliance Not Working? Give Us a Call.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-300">
            Speak directly with {business.name} about your appliance problem
            and service availability.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4">
            <CallButton
              label={`Call ${business.phoneDisplay}`}
              className="!px-8 !py-4 text-base"
            />
            <span className="inline-flex items-center gap-2 text-sm text-slate-400">
              <Clock className="h-4 w-4" aria-hidden="true" />
              Call to check availability for your area
            </span>
          </div>
        </div>
      </section>
    </>
  );
}
