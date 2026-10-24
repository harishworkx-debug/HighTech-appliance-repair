import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Layout } from '@/components/Layout';
import Home from '@/pages/Home';
import Services from '@/pages/Services';
import ServiceAreas from '@/pages/ServiceAreas';
import About from '@/pages/About';
import Reviews from '@/pages/Reviews';
import Contact from '@/pages/Contact';
import DynamicRoute from '@/pages/DynamicRoute';
import NotFound from '@/pages/NotFound';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'services', element: <Services /> },
      { path: 'services/:slug', element: <DynamicRoute /> },
      { path: 'service-areas', element: <ServiceAreas /> },
      { path: 'service-areas/:slug', element: <DynamicRoute /> },
      { path: 'about', element: <About /> },
      { path: 'reviews', element: <Reviews /> },
      { path: 'contact', element: <Contact /> },
      { path: ':slug', element: <DynamicRoute /> },
      { path: '*', element: <NotFound /> },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
