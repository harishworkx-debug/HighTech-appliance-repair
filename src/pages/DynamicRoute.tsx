import { useParams, Navigate } from 'react-router-dom';
import { services, locations, getLocation } from '@/data/business';
import ServiceDetail from '@/pages/ServiceDetail';
import ServiceArea from '@/pages/ServiceArea';
import ServiceLocation from '@/pages/ServiceLocation';
import NotFound from '@/pages/NotFound';

export default function DynamicRoute() {
  const { slug } = useParams();
  const raw = slug || '';

  if (raw.startsWith('appliance-repair-')) {
    const areaSlug = raw.replace(/^appliance-repair-/, '');
    const location = getLocation(areaSlug);
    if (location) return <ServiceArea />;
    return <NotFound />;
  }

  // Also check if slug directly matches a location (e.g. /san-diego-ca)
  const directLocation = getLocation(raw);
  if (directLocation) {
    return <ServiceArea />;
  }

  if (services.some((s) => s.slug === raw)) {
    return <ServiceDetail />;
  }

  for (const s of services) {
    if (raw.startsWith(`${s.slug}-`)) {
      const rest = raw.slice(s.slug.length + 1);
      if (locations.some((l) => l.slug === rest)) {
        return <ServiceLocation />;
      }
    }
  }

  return <NotFound />;
}
