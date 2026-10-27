import { Link } from 'react-router-dom';
import { Home as HomeIcon, Phone } from 'lucide-react';
import { SEO } from '@/components/SEO';
import { business } from '@/data/business';

export default function NotFound() {
  return (
    <>
      <SEO
        title="Page Not Found | HighTech Appliance Repair"
        description={`The page you were looking for could not be found. Call HighTech Appliance Repair at ${business.phoneDisplay} for appliance repair in San Diego.`}
      />
      <section className="mx-auto flex max-w-2xl flex-col items-center px-4 py-24 text-center">
        <p className="text-7xl font-extrabold text-sky-500">404</p>
        <h1 className="mt-4 text-3xl font-bold text-white">
          Page Not Found
        </h1>
        <p className="mt-3 text-slate-400">
          The page you were looking for may have moved or no longer exists.
          You can head back home, or call us directly for appliance repair
          help.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link
            to="/"
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/20 px-6 py-3 font-semibold text-white transition-colors hover:border-sky-400 hover:bg-white/5"
          >
            <HomeIcon className="h-5 w-5" aria-hidden="true" />
            Back to Home
          </Link>
          <a
            href={business.phoneHref}
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-sky-500 px-6 py-3 font-semibold text-white transition-colors hover:bg-sky-400"
          >
            <Phone className="h-5 w-5" aria-hidden="true" />
            Call {business.phoneDisplay}
          </a>
        </div>
      </section>
    </>
  );
}
