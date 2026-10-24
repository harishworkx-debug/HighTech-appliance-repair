import { useState, useMemo } from 'react';
import {
  Star,
  ArrowRight,
  Phone,
  CheckCircle2,
  Filter,
  MessageSquare,
  ThumbsUp,
  MapPin,
  ExternalLink,
} from 'lucide-react';
import { SEO, Breadcrumbs, BreadcrumbJsonLd } from '@/components/SEO';
import { CallButton } from '@/components/Header';
import { business } from '@/data/business';
import { reviews, reviewSummary, type Review } from '@/data/reviews';

export default function Reviews() {
  const [selectedTag, setSelectedTag] = useState<string>('All');
  const [starFilter, setStarFilter] = useState<number | 'all'>('all');

  const crumbs = [
    { name: 'Home', path: '/' },
    { name: 'Reviews' },
  ];

  const filteredReviews = useMemo(() => {
    return reviews.filter((r) => {
      const matchTag =
        selectedTag === 'All' ||
        (r.tags && r.tags.includes(selectedTag.toLowerCase()));
      const matchStar = starFilter === 'all' || r.rating === starFilter;
      return matchTag && matchStar;
    });
  }, [selectedTag, starFilter]);

  // Colors for reviewer initials
  const avatarColors = [
    'bg-sky-600',
    'bg-emerald-600',
    'bg-indigo-600',
    'bg-amber-600',
    'bg-purple-600',
    'bg-rose-600',
    'bg-cyan-600',
    'bg-blue-600',
  ];

  return (
    <>
      <SEO
        title={`Customer Reviews (4.5 Stars) | ${business.name} San Diego`}
        description={`Read verified Google Maps reviews for ${business.name}. Rated 4.5 stars across 35 authentic reviews for refrigerator, washer, dryer, and oven repair in San Diego.`}
        canonicalPath="/reviews"
      />
      <BreadcrumbJsonLd items={crumbs} />
      <Breadcrumbs items={crumbs} />

      <section className="mx-auto max-w-5xl px-4 py-12">
        {/* Header */}
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-500/30 bg-amber-500/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-amber-300">
            <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
            Verified Google Reviews
          </span>
          <h1 className="mt-3 text-4xl font-extrabold text-white sm:text-5xl">
            Customer Reviews
          </h1>
          <p className="mt-3 text-lg text-slate-300">
            Real experiences from homeowners across San Diego, Chula Vista, La Jolla, and surrounding communities.
          </p>
        </div>

        {/* Google Rating Overview Card */}
        <div className="mt-8 rounded-3xl border border-white/10 bg-gradient-to-br from-[#0a1628] via-slate-900 to-[#070f1f] p-6 sm:p-10 shadow-2xl">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-12 md:items-center">
            {/* Left Score */}
            <div className="text-center md:col-span-5 md:border-r md:border-white/10 md:pr-8">
              <div className="inline-flex items-baseline gap-2">
                <span className="text-6xl font-black text-white">{reviewSummary.rating}</span>
                <span className="text-2xl font-bold text-slate-400">/ 5</span>
              </div>
              <div className="mt-3 flex items-center justify-center gap-1.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`h-6 w-6 ${
                      i < 4
                        ? 'fill-amber-400 text-amber-400'
                        : i === 4
                        ? 'fill-amber-400/60 text-amber-400'
                        : 'text-slate-600'
                    }`}
                    aria-hidden="true"
                  />
                ))}
              </div>
              <p className="mt-2 text-sm font-semibold text-slate-300">
                Based on {reviewSummary.totalReviews} Google Maps reviews
              </p>
              <div className="mt-6 flex flex-col sm:flex-row justify-center gap-3">
                <a
                  href={business.mapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-sky-500 px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-sky-500/20 transition-all hover:bg-sky-400"
                >
                  <ExternalLink className="h-4 w-4" />
                  Write a Review
                </a>
                <CallButton label="Call Dispatch" className="!px-4 !py-2.5 text-sm" />
              </div>
            </div>

            {/* Right Rating Distribution Bars */}
            <div className="space-y-2 md:col-span-7">
              {[5, 4, 3, 2, 1].map((stars) => {
                const count = reviewSummary.breakdown[stars as keyof typeof reviewSummary.breakdown] || 0;
                const percentage = Math.round((count / reviewSummary.totalReviews) * 100);
                return (
                  <div key={stars} className="flex items-center gap-3 text-xs">
                    <span className="w-12 font-semibold text-slate-300 flex items-center gap-1">
                      {stars} <Star className="h-3 w-3 fill-amber-400 text-amber-400" />
                    </span>
                    <div className="flex-1 h-3 rounded-full bg-slate-800 overflow-hidden border border-white/5">
                      <div
                        className="h-full rounded-full bg-amber-400 transition-all duration-500"
                        style={{ width: `${percentage}%` }}
                      />
                    </div>
                    <span className="w-8 text-right font-medium text-slate-400">{count}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Keyword Filter Tags */}
        <div className="mt-10">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3">
            <Filter className="h-3.5 w-3.5 text-sky-400" />
            <span>Filter by Common Topics:</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {reviewSummary.popularKeywords.map((kw) => (
              <button
                key={kw.label}
                type="button"
                onClick={() => setSelectedTag(kw.label)}
                className={`inline-flex items-center gap-1.5 rounded-xl px-3.5 py-1.5 text-xs font-semibold transition-all ${
                  selectedTag === kw.label
                    ? 'bg-sky-500 text-white shadow-md shadow-sky-500/25'
                    : 'bg-slate-900 border border-white/10 text-slate-300 hover:border-sky-500/40 hover:text-white'
                }`}
              >
                <span>{kw.label}</span>
                <span
                  className={`rounded-full px-1.5 py-0.2 text-[10px] ${
                    selectedTag === kw.label ? 'bg-sky-700 text-white' : 'bg-slate-800 text-slate-400'
                  }`}
                >
                  {kw.count}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Reviews List */}
        <div className="mt-8 space-y-4">
          <div className="flex items-center justify-between text-xs text-slate-400 px-1">
            <span>Showing {filteredReviews.length} of {reviews.length} reviews</span>
            {selectedTag !== 'All' && (
              <button
                type="button"
                onClick={() => setSelectedTag('All')}
                className="text-sky-400 hover:underline"
              >
                Reset filter
              </button>
            )}
          </div>

          {filteredReviews.map((review, idx) => {
            const avatarColor = avatarColors[idx % avatarColors.length];
            const initials = review.author
              .split(' ')
              .map((n) => n[0])
              .join('')
              .slice(0, 2)
              .toUpperCase();

            return (
              <article
                key={review.id}
                className="rounded-2xl border border-white/10 bg-slate-900/70 p-6 shadow-md transition-all hover:border-sky-500/30 hover:bg-slate-900/90"
              >
                {/* Author Info */}
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div
                      className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full ${avatarColor} text-sm font-bold text-white shadow-inner`}
                    >
                      {initials}
                    </div>
                    <div>
                      <h3 className="font-bold text-white text-base leading-tight">
                        {review.author}
                      </h3>
                      <p className="text-xs text-slate-400 mt-0.5">{review.badges}</p>
                    </div>
                  </div>

                  <span className="text-xs text-slate-400 shrink-0">{review.date}</span>
                </div>

                {/* Rating Stars */}
                <div className="mt-3 flex items-center gap-2">
                  <div className="flex items-center gap-0.5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < review.rating
                            ? 'fill-amber-400 text-amber-400'
                            : 'text-slate-700'
                        }`}
                        aria-hidden="true"
                      />
                    ))}
                  </div>
                  <span className="inline-flex items-center gap-1 rounded bg-emerald-500/10 px-2 py-0.5 text-[10px] font-semibold text-emerald-400 border border-emerald-500/20">
                    <CheckCircle2 className="h-3 w-3" />
                    Verified Google Review
                  </span>
                </div>

                {/* Review Text */}
                <p className="mt-3 text-sm text-slate-200 leading-relaxed">
                  {review.content}
                </p>

                {/* Tags if any */}
                {review.tags && review.tags.length > 0 && (
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {review.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-md bg-white/5 px-2 py-0.5 text-[11px] font-medium text-slate-400"
                      >
                        #{t}
                      </span>
                    ))}
                  </div>
                )}

                {/* Owner Response */}
                {review.ownerResponse && (
                  <div className="mt-4 rounded-xl border-l-2 border-sky-400 bg-sky-950/20 p-4 pl-4 text-xs">
                    <div className="flex items-center justify-between text-sky-300 font-semibold mb-1">
                      <span className="flex items-center gap-1.5">
                        <MessageSquare className="h-3.5 w-3.5" />
                        Response from {business.name}
                      </span>
                      <span className="text-slate-400 font-normal">
                        {review.ownerResponse.date}
                      </span>
                    </div>
                    <p className="text-slate-300 leading-relaxed">
                      {review.ownerResponse.text}
                    </p>
                  </div>
                )}
              </article>
            );
          })}
        </div>

        {/* Leave a review box */}
        <div className="mt-12 rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900 to-[#0a1628] p-8 text-center sm:p-12 shadow-xl">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            Had Your Appliance Repaired by HighTech?
          </h2>
          <p className="mx-auto mt-2 max-w-xl text-slate-400 text-sm">
            We appreciate your honest feedback. Leaving a review on our Google Maps profile takes less than a minute and helps your San Diego neighbors find dependable service.
          </p>
          <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href={business.mapsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-sky-500 px-6 py-3 font-semibold text-white shadow-md shadow-sky-500/25 transition-all hover:bg-sky-400"
            >
              <Star className="h-4 w-4 fill-white" />
              Leave a Review on Google Maps
              <ArrowRight className="h-4 w-4" />
            </a>
            <CallButton label={`Call ${business.phoneDisplay}`} />
          </div>
        </div>
      </section>
    </>
  );
}
