import { useState } from 'react';
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
  CheckCircle2,
  Sparkles,
  Zap,
  Droplet,
  Flame,
  ThermometerSnowflake,
  ShieldAlert,
  Calendar,
  ThumbsUp,
  Truck,
  Layers,
  DollarSign,
  FileText,
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
  serviceLocationPath,
} from '@/data/business';
import { reviews, reviewSummary } from '@/data/reviews';

export default function Home() {
  const [activeTab, setActiveTab] = useState<'refrigeration' | 'laundry' | 'cooking' | 'dishwasher'>('refrigeration');

  return (
    <>
      <SEO
        title={`${business.name} | Reliable Appliance Repair in San Diego, CA`}
        description={`Fast, reliable household appliance repair in San Diego. Refrigerator, washer, dryer, dishwasher, and oven repair. Direct phone dispatch: ${business.phoneDisplay}. Rated ${business.rating} stars.`}
        canonicalPath="/"
      />
      <LocalBusinessJsonLd />

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="HighTech appliance technician troubleshooting residential kitchen appliances"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#070f1f] via-[#070f1f]/95 to-[#070f1f]/60" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#070f1f] via-transparent to-transparent" />
        </div>

        <div className="relative mx-auto max-w-6xl px-4 py-20 sm:py-28 lg:py-36">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-sky-500/30 bg-sky-500/10 px-4 py-1.5 text-sm font-semibold text-sky-300 backdrop-blur-md">
              <MapPin className="h-4 w-4 text-sky-400" aria-hidden="true" />
              Serving Greater San Diego County, CA
            </span>

            <h1 className="mt-5 text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl tracking-tight">
              Expert Appliance Repair in{' '}
              <span className="bg-gradient-to-r from-sky-400 to-cyan-300 bg-clip-text text-transparent">
                San Diego
              </span>
            </h1>

            <p className="mt-5 text-lg text-slate-300 leading-relaxed">
              When your refrigerator stops cooling, washer refuses to drain, or oven won’t heat,
              {business.name} provides direct telephone diagnostic dispatch and swift repair
              across San Diego and surrounding communities.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <CallButton
                label={`Call ${business.phoneDisplay}`}
                className="!px-7 !py-4 text-base"
              />
              <Link
                to="/services"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-slate-900/60 px-7 py-4 font-semibold text-white backdrop-blur-sm transition-all hover:border-sky-400 hover:bg-white/10"
              >
                Browse All Services
                <ArrowRight className="h-5 w-5" aria-hidden="true" />
              </Link>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-slate-300">
              <span className="inline-flex items-center gap-1.5 font-medium">
                <Star className="h-4 w-4 fill-amber-400 text-amber-400" aria-hidden="true" />
                <strong className="text-white">{business.rating} Stars</strong> · {business.reviewCount} Verified Reviews
              </span>
              <span className="inline-flex items-center gap-1.5 font-medium">
                <Clock className="h-4 w-4 text-sky-400" aria-hidden="true" />
                Prompt Scheduling Available
              </span>
              <span className="inline-flex items-center gap-1.5 font-medium">
                <ShieldCheck className="h-4 w-4 text-sky-400" aria-hidden="true" />
                OEM Replacement Parts
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="border-y border-white/10 bg-slate-900/60 backdrop-blur-md">
        <div className="mx-auto grid max-w-6xl grid-cols-1 divide-y divide-white/10 px-4 sm:grid-cols-4 sm:divide-x sm:divide-y-0">
          {[
            {
              icon: Star,
              title: `${business.rating}-Star Excellence`,
              text: 'Backed by verified Google reviews',
            },
            {
              icon: Phone,
              title: 'Direct Phone Dispatch',
              text: 'Speak directly with our team',
            },
            {
              icon: Wrench,
              title: 'All Major Brands',
              text: 'Whirlpool, Samsung, LG, GE & more',
            },
            {
              icon: MapPin,
              title: '10 Local Service Areas',
              text: 'San Diego to North County & East County',
            },
          ].map((item) => (
            <div key={item.title} className="flex items-center gap-3.5 px-3 py-6 sm:px-5">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-sky-500/15 text-sky-400 shadow-sm border border-sky-500/20">
                <item.icon className="h-6 w-6" aria-hidden="true" />
              </span>
              <div>
                <p className="font-bold text-white text-sm">{item.title}</p>
                <p className="text-xs text-slate-400 mt-0.5">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Emergency & Urgent Notice Banner */}
      <section className="mx-auto max-w-6xl px-4 pt-12">
        <div className="rounded-2xl border border-sky-500/30 bg-gradient-to-r from-sky-950/40 via-slate-900 to-sky-950/40 p-6 shadow-xl">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="flex items-start gap-3.5">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-amber-500/15 text-amber-400 border border-amber-500/30">
                <AlertTriangle className="h-6 w-6" />
              </span>
              <div>
                <h2 className="text-lg font-bold text-white">
                  Facing an Urgent Appliance Breakdown?
                </h2>
                <p className="text-sm text-slate-300 mt-1">
                  Water leaking across hardwood floors, burning electrical odors, or rapid food thawing in a warm freezer require prompt action. Call our dispatch desk immediately.
                </p>
              </div>
            </div>
            <div className="shrink-0">
              <a
                href={business.phoneHref}
                className="inline-flex w-full md:w-auto items-center justify-center gap-2 rounded-xl bg-amber-500 hover:bg-amber-400 px-6 py-3 font-bold text-slate-950 transition-all shadow-lg shadow-amber-500/20"
              >
                <Phone className="h-4 w-4" />
                Emergency Call: {business.phoneDisplay}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Comprehensive Services Grid with Dropdowns */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:py-20">
        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-sky-500/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-sky-400 border border-sky-500/20">
            <Wrench className="h-3.5 w-3.5" />
            Verified Repair Services
          </span>
          <h2 className="mt-3 text-3xl font-extrabold text-white sm:text-4xl">
            Major Household Appliance Services
          </h2>
          <p className="mt-3 text-slate-300 leading-relaxed">
            Every card below connects directly to our primary San Diego service hub and includes a city dropdown to view coverage in your neighborhood.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <ServiceCard key={s.slug} service={s} locations={locations} />
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 font-bold text-sky-400 hover:text-sky-300 hover:underline text-base"
          >
            Explore all appliance services and technical overviews
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </section>

      {/* Interactive Symptom Diagnosis Matrix (Tabs) */}
      <section className="bg-slate-900/60 py-16 sm:py-20 border-y border-white/10">
        <div className="mx-auto max-w-6xl px-4">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-sky-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-sky-400 border border-sky-500/20">
              <Info className="h-3.5 w-3.5" />
              Symptom Guide
            </span>
            <h2 className="mt-3 text-3xl font-extrabold text-white sm:text-4xl">
              Diagnose What’s Wrong With Your Appliance
            </h2>
            <p className="mt-3 text-slate-300">
              Select your appliance category below to identify typical symptoms, probable root causes, and our proven repair steps.
            </p>
          </div>

          {/* Category Tabs */}
          <div className="mt-8 flex flex-wrap justify-center gap-2">
            {[
              { id: 'refrigeration', label: 'Refrigerators & Freezers', icon: ThermometerSnowflake },
              { id: 'laundry', label: 'Washers & Dryers', icon: Droplet },
              { id: 'cooking', label: 'Ovens, Ranges & Stoves', icon: Flame },
              { id: 'dishwasher', label: 'Dishwashers & Ice Makers', icon: Wrench },
            ].map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id as any)}
                className={`inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold transition-all ${
                  activeTab === tab.id
                    ? 'bg-sky-500 text-white shadow-lg shadow-sky-500/30'
                    : 'bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white'
                }`}
              >
                <tab.icon className="h-4 w-4" />
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab Content Panels */}
          <div className="mt-8 rounded-3xl border border-white/10 bg-[#0a1628] p-6 sm:p-10 shadow-2xl">
            {activeTab === 'refrigeration' && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="rounded-2xl border border-white/5 bg-slate-900/80 p-6">
                  <h3 className="text-lg font-bold text-white flex items-center gap-2">
                    <AlertTriangle className="h-4 w-4 text-amber-400" />
                    Not Cooling or Warm Fresh Food
                  </h3>
                  <p className="text-sm text-slate-300 mt-2">
                    Often caused by dirty condenser coils, failed evaporator fan motor, defrost system malfunction, or faulty inverter board.
                  </p>
                  <Link
                    to={serviceLocationPath('refrigerator-repair', 'san-diego-ca')}
                    className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-sky-400 hover:underline"
                  >
                    Refrigerator Repair Details &rarr;
                  </Link>
                </div>

                <div className="rounded-2xl border border-white/5 bg-slate-900/80 p-6">
                  <h3 className="text-lg font-bold text-white flex items-center gap-2">
                    <AlertTriangle className="h-4 w-4 text-amber-400" />
                    Heavy Frost or Ice Sheet on Floor
                  </h3>
                  <p className="text-sm text-slate-300 mt-2">
                    Indicates a frozen defrost drain tube, cracked drain pan, torn door seal gasket, or a bimetal defrost thermostat defect.
                  </p>
                  <Link
                    to={serviceLocationPath('freezer-repair', 'san-diego-ca')}
                    className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-sky-400 hover:underline"
                  >
                    Freezer Repair Details &rarr;
                  </Link>
                </div>

                <div className="rounded-2xl border border-white/5 bg-slate-900/80 p-6">
                  <h3 className="text-lg font-bold text-white flex items-center gap-2">
                    <AlertTriangle className="h-4 w-4 text-amber-400" />
                    Clicking or Loud Humming Noise
                  </h3>
                  <p className="text-sm text-slate-300 mt-2">
                    Clicking every 2-3 minutes usually signals an overheating compressor struggling with a burned PTC start relay or capacitor.
                  </p>
                  <Link
                    to="/contact"
                    className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-sky-400 hover:underline"
                  >
                    Speak with a Technician &rarr;
                  </Link>
                </div>
              </div>
            )}

            {activeTab === 'laundry' && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="rounded-2xl border border-white/5 bg-slate-900/80 p-6">
                  <h3 className="text-lg font-bold text-white flex items-center gap-2">
                    <AlertTriangle className="h-4 w-4 text-amber-400" />
                    Washer Standing Water / No Drain
                  </h3>
                  <p className="text-sm text-slate-300 mt-2">
                    Common in front-load & top-load machines when coins, socks, or debris jam the impeller, or the drain pump motor burns out.
                  </p>
                  <Link
                    to={serviceLocationPath('washer-repair', 'san-diego-ca')}
                    className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-sky-400 hover:underline"
                  >
                    Washer Repair Details &rarr;
                  </Link>
                </div>

                <div className="rounded-2xl border border-white/5 bg-slate-900/80 p-6">
                  <h3 className="text-lg font-bold text-white flex items-center gap-2">
                    <AlertTriangle className="h-4 w-4 text-amber-400" />
                    Dryer Runs But No Heat
                  </h3>
                  <p className="text-sm text-slate-300 mt-2">
                    Frequent in electric dryers with a blown thermal fuse or broken heating element, and in gas dryers with dead solenoid coils or igniters.
                  </p>
                  <Link
                    to={serviceLocationPath('dryer-repair', 'san-diego-ca')}
                    className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-sky-400 hover:underline"
                  >
                    Dryer Repair Details &rarr;
                  </Link>
                </div>

                <div className="rounded-2xl border border-white/5 bg-slate-900/80 p-6">
                  <h3 className="text-lg font-bold text-white flex items-center gap-2">
                    <AlertTriangle className="h-4 w-4 text-amber-400" />
                    Violent Shaking or Squealing Belt
                  </h3>
                  <p className="text-sm text-slate-300 mt-2">
                    Worn suspension rods, failed tub bearings, or loose drive belts cause alarming thumping noises during high-speed spin cycles.
                  </p>
                  <Link
                    to={serviceLocationPath('washer-repair', 'san-diego-ca')}
                    className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-sky-400 hover:underline"
                  >
                    Washer Inspection Guide &rarr;
                  </Link>
                </div>
              </div>
            )}

            {activeTab === 'cooking' && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="rounded-2xl border border-white/5 bg-slate-900/80 p-6">
                  <h3 className="text-lg font-bold text-white flex items-center gap-2">
                    <AlertTriangle className="h-4 w-4 text-amber-400" />
                    Oven Not Reaching Set Temperature
                  </h3>
                  <p className="text-sm text-slate-300 mt-2">
                    A weakened gas igniter, burnt bake element, or drifting RTD temperature sensor will leave food undercooked or take an hour to preheat.
                  </p>
                  <Link
                    to={serviceLocationPath('oven-repair', 'san-diego-ca')}
                    className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-sky-400 hover:underline"
                  >
                    Oven Repair Details &rarr;
                  </Link>
                </div>

                <div className="rounded-2xl border border-white/5 bg-slate-900/80 p-6">
                  <h3 className="text-lg font-bold text-white flex items-center gap-2">
                    <AlertTriangle className="h-4 w-4 text-amber-400" />
                    Range Burner Clicking Non-Stop
                  </h3>
                  <p className="text-sm text-slate-300 mt-2">
                    Gas stovetop clicking continuously even when knobs are off is caused by moisture in the spark switch harness or a shorted spark module.
                  </p>
                  <Link
                    to={serviceLocationPath('stove-and-range-repair', 'san-diego-ca')}
                    className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-sky-400 hover:underline"
                  >
                    Stove & Range Details &rarr;
                  </Link>
                </div>

                <div className="rounded-2xl border border-white/5 bg-slate-900/80 p-6">
                  <h3 className="text-lg font-bold text-white flex items-center gap-2">
                    <AlertTriangle className="h-4 w-4 text-amber-400" />
                    Microwave Turntable Spins But No Heat
                  </h3>
                  <p className="text-sm text-slate-300 mt-2">
                    Points to a blown high-voltage diode, failed magnetron, or defective door microswitch interlock assembly.
                  </p>
                  <Link
                    to={serviceLocationPath('microwave-repair', 'san-diego-ca')}
                    className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-sky-400 hover:underline"
                  >
                    Microwave Repair Details &rarr;
                  </Link>
                </div>
              </div>
            )}

            {activeTab === 'dishwasher' && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="rounded-2xl border border-white/5 bg-slate-900/80 p-6">
                  <h3 className="text-lg font-bold text-white flex items-center gap-2">
                    <AlertTriangle className="h-4 w-4 text-amber-400" />
                    Dishwasher Not Draining After Cycle
                  </h3>
                  <p className="text-sm text-slate-300 mt-2">
                    Dirty standing water at the bottom is usually caused by a clogged air gap, blocked filter mesh, or failed drain circulation pump.
                  </p>
                  <Link
                    to={serviceLocationPath('dishwasher-repair', 'san-diego-ca')}
                    className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-sky-400 hover:underline"
                  >
                    Dishwasher Repair Details &rarr;
                  </Link>
                </div>

                <div className="rounded-2xl border border-white/5 bg-slate-900/80 p-6">
                  <h3 className="text-lg font-bold text-white flex items-center gap-2">
                    <AlertTriangle className="h-4 w-4 text-amber-400" />
                    Ice Maker Stopped Producing Cubes
                  </h3>
                  <p className="text-sm text-slate-300 mt-2">
                    Often a frozen water fill tube, defective dual water inlet valve, jammed ejector blades, or bad optical bin sensor.
                  </p>
                  <Link
                    to={serviceLocationPath('ice-maker-repair', 'san-diego-ca')}
                    className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-sky-400 hover:underline"
                  >
                    Ice Maker Repair Details &rarr;
                  </Link>
                </div>

                <div className="rounded-2xl border border-white/5 bg-slate-900/80 p-6">
                  <h3 className="text-lg font-bold text-white flex items-center gap-2">
                    <AlertTriangle className="h-4 w-4 text-amber-400" />
                    Cloudy Film on Glasses & Dishes
                  </h3>
                  <p className="text-sm text-slate-300 mt-2">
                    Weak spray arm pressure, broken diverter valve, or defective heating element failing to reach sanitizing rinse temperatures.
                  </p>
                  <Link
                    to={serviceLocationPath('dishwasher-repair', 'san-diego-ca')}
                    className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-sky-400 hover:underline"
                  >
                    Troubleshoot Dishwashers &rarr;
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Repair vs Replace Guide Table */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:py-20">
        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-sky-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-sky-400 border border-sky-500/20">
            <DollarSign className="h-3.5 w-3.5" />
            Decision Framework
          </span>
          <h2 className="mt-3 text-3xl font-extrabold text-white sm:text-4xl">
            Should You Repair or Replace Your Appliance?
          </h2>
          <p className="mt-3 text-slate-300">
            We believe in honest recommendations. We apply the industry-standard <strong>50% Rule</strong>:
            If the repair cost is less than 50% of buying a new machine and your appliance is within its expected lifespan, repairing is almost always the smart economic choice.
          </p>
        </div>

        <div className="mt-10 overflow-x-auto rounded-3xl border border-white/10 bg-slate-900/60 shadow-xl">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-white/10 bg-[#0a1628] text-xs font-bold uppercase tracking-wider text-sky-400">
                <th className="py-4 px-6">Appliance Type</th>
                <th className="py-4 px-6">Average Lifespan</th>
                <th className="py-4 px-6">When to Repair</th>
                <th className="py-4 px-6">When to Replace</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5 text-sm text-slate-300">
              <tr className="hover:bg-white/5 transition-colors">
                <td className="py-4 px-6 font-bold text-white flex items-center gap-2">
                  <ThermometerSnowflake className="h-4 w-4 text-sky-400" /> Refrigerator
                </td>
                <td className="py-4 px-6 font-medium text-slate-200">10 – 15 Years</td>
                <td className="py-4 px-6 text-emerald-400">Under 8 years old; fan, relay, gasket, or defrost issues</td>
                <td className="py-4 px-6 text-slate-400">Over 12 years with a sealed system compressor failure</td>
              </tr>
              <tr className="hover:bg-white/5 transition-colors">
                <td className="py-4 px-6 font-bold text-white flex items-center gap-2">
                  <Droplet className="h-4 w-4 text-sky-400" /> Washing Machine
                </td>
                <td className="py-4 px-6 font-medium text-slate-200">10 – 13 Years</td>
                <td className="py-4 px-6 text-emerald-400">Drain pump, belt, lid switch, water valve, suspension rods</td>
                <td className="py-4 px-6 text-slate-400">Cracked outer tub or severe transmission gear failure on older units</td>
              </tr>
              <tr className="hover:bg-white/5 transition-colors">
                <td className="py-4 px-6 font-bold text-white flex items-center gap-2">
                  <Flame className="h-4 w-4 text-sky-400" /> Clothes Dryer
                </td>
                <td className="py-4 px-6 font-medium text-slate-200">11 – 14 Years</td>
                <td className="py-4 px-6 text-emerald-400">Heating element, thermal fuse, rollers, drive belt, igniter</td>
                <td className="py-4 px-6 text-slate-400">Excessive motor burned smell with corroded internal chassis</td>
              </tr>
              <tr className="hover:bg-white/5 transition-colors">
                <td className="py-4 px-6 font-bold text-white flex items-center gap-2">
                  <Wrench className="h-4 w-4 text-sky-400" /> Dishwasher
                </td>
                <td className="py-4 px-6 font-medium text-slate-200">9 – 12 Years</td>
                <td className="py-4 px-6 text-emerald-400">Door latch, drain pump, spray arms, inlet valve, float switch</td>
                <td className="py-4 px-6 text-slate-400">Severe tub leaks or rusted electronic motherboards</td>
              </tr>
              <tr className="hover:bg-white/5 transition-colors">
                <td className="py-4 px-6 font-bold text-white flex items-center gap-2">
                  <Flame className="h-4 w-4 text-sky-400" /> Oven & Range
                </td>
                <td className="py-4 px-6 font-medium text-slate-200">13 – 16 Years</td>
                <td className="py-4 px-6 text-emerald-400">Bake/broil element, gas igniters, surface burners, thermostat</td>
                <td className="py-4 px-6 text-slate-400">Obsolete control boards no longer manufactured for vintage models</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* How It Works: Step-by-Step Transparency */}
      <section className="bg-slate-900/60 py-16 sm:py-20 border-t border-white/10">
        <div className="mx-auto max-w-6xl px-4">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-sky-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-sky-400 border border-sky-500/20">
              <Layers className="h-3.5 w-3.5" />
              Straightforward Process
            </span>
            <h2 className="mt-3 text-3xl font-extrabold text-white sm:text-4xl">
              How We Solve Your Appliance Problem
            </h2>
            <p className="mt-3 text-slate-300">
              No endless automated phone menus or waiting days for email replies. We make service straightforward.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-4">
            {[
              {
                step: '01',
                title: 'Phone Consultation',
                text: `Dial ${business.phoneDisplay}. Tell us the brand, model, and symptoms you’ve noticed. We verify parts & scheduling immediately.`,
              },
              {
                step: '02',
                title: 'On-Site Diagnostic',
                text: 'A technician arrives with diagnostic instruments to inspect voltages, motor windings, sensors, and structural integrity.',
              },
              {
                step: '03',
                title: 'Upfront Estimate',
                text: 'You get a clear, transparent explanation of what failed and an exact quote before any tools touch your machine.',
              },
              {
                step: '04',
                title: 'Professional Repair',
                text: 'Repairs are completed with verified OEM replacement parts, followed by complete operational test cycles.',
              },
            ].map((item) => (
              <div
                key={item.step}
                className="relative rounded-2xl border border-white/10 bg-slate-900/90 p-6 shadow-lg hover:border-sky-500/40 transition-all"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-sky-400 to-sky-600 text-lg font-black text-slate-950 shadow-md shadow-sky-500/20">
                  {item.step}
                </span>
                <h3 className="mt-5 text-xl font-bold text-white">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-slate-300 leading-relaxed">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* San Diego Regional Micro-Climate & Appliance Care Tips */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:py-20">
        <div className="rounded-3xl border border-sky-500/25 bg-gradient-to-br from-[#0a1628] via-slate-900 to-[#070f1f] p-8 sm:p-12 shadow-2xl">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-sky-500/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-sky-300 border border-sky-500/20">
              <MapPin className="h-3.5 w-3.5 text-sky-400" />
              Local San Diego Insights
            </span>
            <h2 className="mt-4 text-3xl font-extrabold text-white sm:text-4xl">
              Why Appliances in San Diego Face Unique Strains
            </h2>
            <p className="mt-4 text-slate-300 leading-relaxed">
              Living in Southern California brings distinct environmental challenges that affect home appliances differently across our region:
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-6">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <Droplet className="h-5 w-5 text-sky-400" />
                Coastal Salt Air & Humidity
              </h3>
              <p className="mt-2 text-sm text-slate-300 leading-relaxed">
                In beach communities like <strong>La Jolla, Encinitas, and Ocean Beach</strong>, airborne salt accelerates rust on outdoor dryer vents, oxidizes electronic connectors, and deteriorates door rubber gaskets.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-6">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <Flame className="h-5 w-5 text-amber-400" />
                Inland Valley Summer Heat
              </h3>
              <p className="mt-2 text-sm text-slate-300 leading-relaxed">
                In East County cities like <strong>El Cajon, Santee, and Poway</strong>, scorching summer ambient temperatures force refrigerators and freezers to run overtime, putting extreme heat stress on compressor start relays and condenser fan motors.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-6">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <Sparkles className="h-5 w-5 text-cyan-400" />
                Mineral & Hard Water Buildup
              </h3>
              <p className="mt-2 text-sm text-slate-300 leading-relaxed">
                San Diego’s hard municipal water frequently causes calcium and magnesium mineral scale to clog dishwasher spray jets, ice maker solenoids, and washing machine water inlet valves.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Major Brands Supported */}
      <section className="bg-slate-900/60 py-16 sm:py-20 border-y border-white/10">
        <div className="mx-auto max-w-6xl px-4">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              Major Appliance Brands We Service
            </h2>
            <p className="mt-3 text-slate-300">
              Our technicians troubleshoot both domestic and imported appliances across popular residential makes.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {[
              { name: 'Whirlpool', note: 'Refrigerators & Washers' },
              { name: 'Samsung', note: 'Digital Inverter & French Door' },
              { name: 'LG', note: 'Linear Compressors & Steam' },
              { name: 'GE & GE Profile', note: 'Kitchen Suites & Dryers' },
              { name: 'Maytag', note: 'Commercial Technology' },
              { name: 'KitchenAid', note: 'Dishwashers & Built-In' },
              { name: 'Bosch', note: 'Quiet Series Dishwashers' },
              { name: 'Frigidaire', note: 'Gallery & Professional' },
              { name: 'Kenmore', note: 'Elite Series Models' },
              { name: 'Sub-Zero', note: 'Built-in Refrigeration' },
              { name: 'Viking', note: 'Professional Ranges' },
              { name: 'Amana', note: 'Cooling & Laundry' },
            ].map((brand) => (
              <div
                key={brand.name}
                className="flex flex-col items-center justify-center rounded-2xl border border-white/10 bg-slate-900/80 p-4 text-center transition-all hover:border-sky-500/40 hover:bg-slate-900"
              >
                <p className="font-bold text-white text-base">{brand.name}</p>
                <p className="text-[11px] text-slate-400 mt-1">{brand.note}</p>
              </div>
            ))}
          </div>

          <p className="mt-8 text-center text-xs text-slate-400">
            Have a different brand or specialty European unit? Call {business.phoneDisplay} with your model number sticker details to confirm compatibility.
          </p>
        </div>
      </section>

      {/* Real Google Maps Reviews Showcase */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:py-20">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-500/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-amber-300 border border-amber-500/20">
              <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
              Real Google Maps Reviews
            </span>
            <h2 className="mt-3 text-3xl font-extrabold text-white sm:text-4xl">
              What San Diego Homeowners Say About Us
            </h2>
            <p className="mt-3 text-slate-300">
              Rated <strong>{reviewSummary.rating} out of 5 stars</strong> across {reviewSummary.totalReviews} verified Google reviews. Real feedback from local customers.
            </p>
          </div>

          <div className="shrink-0 flex items-center gap-3">
            <Link
              to="/reviews"
              className="inline-flex items-center gap-2 rounded-xl bg-slate-800 border border-white/10 px-5 py-3 text-sm font-semibold text-white hover:border-sky-400 hover:bg-slate-700 transition-all"
            >
              <span>View All {reviewSummary.totalReviews} Reviews</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.slice(0, 6).map((rev) => (
            <div
              key={rev.id}
              className="flex flex-col justify-between rounded-2xl border border-white/10 bg-slate-900/70 p-6 shadow-lg hover:border-sky-500/30 hover:bg-slate-900/90 transition-all"
            >
              <div>
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-bold text-white text-base">{rev.author}</h3>
                    <p className="text-xs text-slate-400">{rev.badges}</p>
                  </div>
                  <span className="text-xs text-slate-400">{rev.date}</span>
                </div>

                <div className="mt-3 flex items-center gap-1.5">
                  <div className="flex items-center gap-0.5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < rev.rating
                            ? 'fill-amber-400 text-amber-400'
                            : 'text-slate-700'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded border border-emerald-500/20">
                    <CheckCircle2 className="h-3 w-3" />
                    Verified
                  </span>
                </div>

                <p className="mt-3 text-sm text-slate-300 leading-relaxed line-clamp-4">
                  "{rev.content}"
                </p>
              </div>

              {rev.ownerResponse && (
                <div className="mt-4 pt-3 border-t border-white/5 text-xs text-slate-400">
                  <span className="font-semibold text-sky-400">Response from Owner: </span>
                  <span className="line-clamp-2">{rev.ownerResponse.text}</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Coverage Service Areas Grid */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:py-20">
        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-sky-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-sky-400 border border-sky-500/20">
            <MapPin className="h-3.5 w-3.5" />
            Local Communities
          </span>
          <h2 className="mt-3 text-3xl font-extrabold text-white sm:text-4xl">
            Serving 10 Neighborhoods Across San Diego
          </h2>
          <p className="mt-3 text-slate-300">
            Click on any community below to view localized service coverage, common neighborhood calls, and dispatch information:
          </p>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {locations.map((l) => (
            <Link
              key={l.slug}
              to={`/appliance-repair-${l.slug}`}
              className="group rounded-2xl border border-white/10 bg-slate-900/60 p-5 text-center transition-all duration-200 hover:border-sky-500/40 hover:bg-slate-800/80 hover:shadow-lg"
            >
              <MapPin className="mx-auto h-6 w-6 text-sky-400 transition-transform group-hover:scale-110" aria-hidden="true" />
              <p className="mt-3 font-bold text-white group-hover:text-sky-300">
                {l.name}
              </p>
              <p className="text-xs text-slate-400 mt-0.5">{l.county}</p>
            </Link>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link
            to="/service-areas"
            className="inline-flex items-center gap-2 font-bold text-sky-400 hover:text-sky-300 hover:underline"
          >
            Explore all service area profiles & directory
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </section>

      {/* Expanded FAQ Section */}
      <section className="bg-slate-900/60 py-16 sm:py-20 border-t border-white/10">
        <div className="mx-auto max-w-4xl px-4">
          <div className="text-center max-w-2xl mx-auto">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-sky-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-sky-400 border border-sky-500/20">
              <HelpCircle className="h-3.5 w-3.5" />
              Frequently Asked Questions
            </span>
            <h2 className="mt-3 text-3xl font-extrabold text-white sm:text-4xl">
              Common Questions About Appliance Repair
            </h2>
            <p className="mt-3 text-slate-300">
              Everything you need to know about our scheduling, diagnostic visits, and warranty terms.
            </p>
          </div>

          <div className="mt-10 space-y-4">
            {[
              {
                q: 'How do I schedule an appliance repair with HighTech?',
                a: `Direct phone scheduling is the fastest and most reliable way. Simply call ${business.phoneDisplay}. Tell us what appliance is broken and the symptoms you are experiencing. We will check technician availability for your neighborhood on the spot.`,
              },
              {
                q: 'What occurs during a diagnostic service call?',
                a: 'A qualified technician examines the appliance, performs electrical continuity tests, inspects mechanical linkages, reads stored error codes, and diagnoses the root cause. You receive an upfront written estimate before any repair work commences.',
              },
              {
                q: 'Do your technicians carry common replacement parts?',
                a: 'Yes. Our service vehicles carry a broad stock of universal and high-failure components, including thermostats, thermal fuses, start relays, drain pumps, igniters, and inlet valves. This enables us to resolve many repairs during the very first visit.',
              },
              {
                q: 'Should I unplug my refrigerator if it stops cooling?',
                a: 'If you hear loud clicking or buzzing noises, unplugging prevents further electrical strain on the compressor start relay. Keep the doors tightly shut to preserve internal temperatures until your technician arrives.',
              },
              {
                q: 'Where do I find my appliance model number sticker?',
                a: 'For refrigerators, look on the upper inside wall or door frame. For washers and dryers, check inside the door rim or back panel. For ovens, check behind the lower storage drawer or inside the door jamb.',
              },
              {
                q: 'Do you work on luxury built-in brands like Sub-Zero or Viking?',
                a: 'We service select built-in and luxury brands depending on the specific model and part availability. Call us with your model number to confirm our technical coverage.',
              },
              {
                q: 'Why does my dishwasher leave a white cloudy film on glassware?',
                a: 'San Diego has notably hard water. This cloudy film is caused by mineral calcification combined with ineffective wash arm water pressure or a malfunctioning heating element that fails to reach the 140°F sanitizing threshold.',
              },
              {
                q: 'Why do you handle scheduling by phone rather than online forms?',
                a: 'Appliance breakdowns are nuanced. A brief 2-minute conversation allows us to ask diagnostic questions, identify your exact model, and verify truck parts availability immediately, eliminating frustrating back-and-forth email delays.',
              },
            ].map((f) => (
              <details
                key={f.q}
                className="group rounded-2xl border border-white/10 bg-[#0a1628] p-5 transition-all hover:border-sky-500/30"
              >
                <summary className="cursor-pointer list-none font-bold text-white marker:content-none text-base">
                  <span className="flex items-center justify-between gap-4">
                    {f.q}
                    <ChevronDown
                      className="h-5 w-5 shrink-0 text-sky-400 transition-transform duration-200 group-open:rotate-180"
                      aria-hidden="true"
                    />
                  </span>
                </summary>
                <p className="mt-3 text-sm text-slate-300 leading-relaxed border-t border-white/5 pt-3">
                  {f.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Final Call to Action */}
      <section className="relative overflow-hidden">
        <img
          src={sanDiegoImage}
          alt="San Diego skyline at twilight"
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#070f1f] via-[#070f1f]/90 to-[#070f1f]/75" />
        <div className="relative mx-auto max-w-4xl px-4 py-20 text-center sm:py-28">
          <span className="inline-flex items-center gap-2 rounded-full border border-sky-400/30 bg-sky-500/20 px-4 py-1.5 text-xs font-bold text-sky-300 uppercase tracking-widest backdrop-blur-md">
            Direct Dispatch
          </span>
          <h2 className="mt-4 text-3xl font-black text-white sm:text-5xl tracking-tight">
            Ready to Get Your Appliance Working Again?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-300 leading-relaxed">
            Call {business.name} directly to describe your appliance issue and confirm service availability in your neighborhood.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <CallButton
              label={`Call ${business.phoneDisplay}`}
              className="!px-8 !py-4 text-base font-bold shadow-xl shadow-sky-500/30"
            />
            <Link
              to="/service-areas"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-slate-900/80 px-7 py-4 text-base font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/10 hover:border-sky-400"
            >
              <MapPin className="h-5 w-5 text-sky-400" />
              Check Service Areas
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
