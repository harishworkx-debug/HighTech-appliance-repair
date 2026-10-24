import { Star, ArrowRight, Phone } from 'lucide-react';
import { SEO, Breadcrumbs, BreadcrumbJsonLd } from '@/components/SEO';
import { CallButton } from '@/components/Header';
import { business } from '@/data/business';

export default function Reviews() {
  const crumbs = [
    { name: 'Home', path: '/' },
    { name: 'Reviews' },
  ];
  return (
    <>
      <SEO
        title={`Reviews | ${business.name} San Diego Appliance Repair`}
        description={`${business.name} has a ${business.rating}-star rating from ${business.reviewCount} Google reviews. Read reviews on Google and call ${business.phoneDisplay} for appliance repair.`}
        canonicalPath="/reviews"
      />
      <BreadcrumbJsonLd items={crumbs} />
      <Breadcrumbs items={crumbs} />

      <section className="mx-auto max-w-4xl px-4 py-12">
        <h1 className="text-4xl font-extrabold text-white">Reviews</h1>

        <div className="mt-8 rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900 to-[#0a1628] p-8 text-center sm:p-12">
          <div className="flex items-center justify-center gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className="h-8 w-8 fill-amber-400 text-amber-400"
                aria-hidden="true"
              />
            ))}
          </div>
          <p className="mt-4 text-4xl font-extrabold text-white">
            {business.rating} / 5
          </p>
          <p className="mt-2 text-slate-400">
            Based on {business.reviewCount} Google reviews
          </p>
          <p className="mt-4 text-sm text-slate-500">
            Rating and review count are provided by the business owner and
            should be verified on Google before publishing.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
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

        <div className="mt-8 rounded-2xl border border-white/10 bg-slate-900/60 p-6">
          <h2 className="text-xl font-bold text-white">
            Leave a Review
          </h2>
          <p className="mt-2 text-slate-400">
            If {business.name} has helped you with an appliance repair,
            sharing your experience on Google helps other San Diego-area
            households find reliable service.
          </p>
          <div className="mt-4">
            <a
              href={business.mapsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-semibold text-sky-400 hover:text-sky-300"
            >
              Open the Google listing
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </div>

        <p className="mt-8 flex items-center gap-2 text-sm text-slate-500">
          <Phone className="h-4 w-4" aria-hidden="true" />
          To discuss an appliance problem, call {business.phoneDisplay}.
        </p>
      </section>
    </>
  );
}
