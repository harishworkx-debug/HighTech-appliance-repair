import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { business } from '@/data/business';

type SEOProps = {
  title: string;
  description: string;
  canonicalPath?: string;
  ogImage?: string;
};

const BASE_URL = `https://${business.domain}`;

function setTag(attr: 'name' | 'property', key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(
    `meta[${attr}="${key}"]`,
  );
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function setLink(rel: string, href: string) {
  let el = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', rel);
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
}

function setJsonLd(id: string, json: object) {
  let el = document.getElementById(id) as HTMLScriptElement | null;
  if (!el) {
    el = document.createElement('script');
    el.id = id;
    el.setAttribute('type', 'application/ld+json');
    document.head.appendChild(el);
  }
  el.textContent = JSON.stringify(json);
}

export function SEO({ title, description, canonicalPath, ogImage }: SEOProps) {
  const canonical = canonicalPath
    ? `${BASE_URL}${canonicalPath}`
    : BASE_URL;
  const image = ogImage || business.website;

  useEffect(() => {
    document.title = title;
    setTag('name', 'description', description);
    setLink('canonical', canonical);
    setTag('property', 'og:title', title);
    setTag('property', 'og:description', description);
    setTag('property', 'og:url', canonical);
    setTag('property', 'og:type', 'website');
    setTag('property', 'og:image', image);
    setTag('property', 'og:site_name', business.name);
    setTag('name', 'twitter:card', 'summary_large_image');
    setTag('name', 'twitter:title', title);
    setTag('name', 'twitter:description', description);
    setTag('name', 'twitter:image', image);
  }, [title, description, canonical, image]);

  return null;
}

export function LocalBusinessJsonLd() {
  useEffect(() => {
    setJsonLd('ld-localbusiness', {
      '@context': 'https://schema.org',
      '@type': 'ApplianceRepair',
      name: business.name,
      telephone: business.phoneDisplay,
      url: BASE_URL,
      image: business.website,
      areaServed: business.primaryArea,
      priceRange: '$$',
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: business.rating,
        reviewCount: business.reviewCount,
      },
      hasMap: business.mapsLink,
    });
  }, []);
  return null;
}

export function BreadcrumbJsonLd({
  items,
}: {
  items: { name: string; path?: string }[];
}) {
  useEffect(() => {
    setJsonLd(
      'ld-breadcrumb',
      {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: items.map((it, i) => ({
          '@type': 'ListItem',
          position: i + 1,
          name: it.name,
          ...(it.path ? { item: `${BASE_URL}${it.path}` } : {}),
        })),
      },
    );
  }, [items]);
  return null;
}

export function Breadcrumbs({
  items,
}: {
  items: { name: string; path?: string }[];
}) {
  return (
    <nav
      aria-label="Breadcrumb"
      className="mx-auto max-w-6xl px-4 pt-6 text-sm text-slate-400"
    >
      <ol className="flex flex-wrap items-center gap-2">
        {items.map((it, i) => (
          <li key={i} className="flex items-center gap-2">
            {i > 0 && <span aria-hidden="true">/</span>}
            {it.path && i < items.length - 1 ? (
              <Link to={it.path} className="hover:text-sky-400">
                {it.name}
              </Link>
            ) : (
              <span className="text-slate-300">{it.name}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
