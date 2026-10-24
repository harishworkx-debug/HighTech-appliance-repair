import { SEO, Breadcrumbs, BreadcrumbJsonLd } from '@/components/SEO';
import { ServiceCard } from '@/components/ServiceCard';
import { business, services, locations } from '@/data/business';

export default function Services() {
  const crumbs = [
    { name: 'Home', path: '/' },
    { name: 'Services' },
  ];
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
        <h1 className="text-4xl font-extrabold text-white">
          Appliance Repair Services
        </h1>
        <p className="mt-4 max-w-3xl text-lg text-slate-400">
          {business.name} helps San Diego-area households troubleshoot and
          repair common household appliances. Each service below has its own
          page with common symptoms and possible causes. Call{' '}
          <a
            href={business.phoneHref}
            className="font-semibold text-sky-400 hover:text-sky-300"
          >
            {business.phoneDisplay}
          </a>{' '}
          to confirm whether your brand and model can be serviced.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <ServiceCard key={s.slug} service={s} locations={locations} />
          ))}
        </div>
      </section>
    </>
  );
}
