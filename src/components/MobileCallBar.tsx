import { Phone } from 'lucide-react';
import { business } from '@/data/business';

export function MobileCallBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-white/10 bg-[#0a1628]/95 backdrop-blur lg:hidden">
      <a
        href={business.phoneHref}
        className="flex w-full items-center justify-center gap-2 py-3.5 font-semibold text-white"
        style={{ background: 'linear-gradient(90deg,#0284c7,#38bdf8)' }}
      >
        <Phone className="h-5 w-5 animate-pulse" aria-hidden="true" />
        Call {business.phoneDisplay}
      </a>
    </div>
  );
}
