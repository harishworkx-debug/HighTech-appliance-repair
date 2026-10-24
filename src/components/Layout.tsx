import { Outlet, ScrollRestoration } from 'react-router-dom';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { MobileCallBar } from '@/components/MobileCallBar';

export function Layout() {
  return (
    <div className="flex min-h-screen flex-col bg-[#070f1f]">
      <Header />
      <main className="flex-1 pb-16 lg:pb-0">
        <Outlet />
      </main>
      <Footer />
      <MobileCallBar />
      <ScrollRestoration />
    </div>
  );
}
