import { useEffect } from 'react';
import { createBrowserRouter, useLocation } from 'react-router-dom';
import { Layout } from './components/Layout/Layout';
import { About } from './pages/About/About';
import { Contact } from './pages/Contact/Contact';
import { CV } from './pages/CV/CV';
import { Home } from './pages/Home/Home';
import { NotFound } from './pages/NotFound/NotFound';
import { ProjectPage } from './pages/ProjectPage/ProjectPage';
import { Questions } from './pages/Questions/Questions';

function ScrollToTop() {
  const { hash, pathname } = useLocation();

  useEffect(() => {
    if (hash) {
      window.requestAnimationFrame(() => {
        document.getElementById(hash.slice(1))?.scrollIntoView({ block: 'start' });
      });
      return;
    }

    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, [hash, pathname]);

  return null;
}

function AppLayout() {
  return (
    <>
      <ScrollToTop />
      <Layout />
    </>
  );
}

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'questions', element: <Questions /> },
      {
        path: 'work',
        children: [
          { path: ':slug', element: <ProjectPage /> },
        ],
      },
      { path: 'about', element: <About /> },
      { path: 'cv', element: <CV /> },
      { path: 'contact', element: <Contact /> },
      { path: '*', element: <NotFound /> },
    ],
  },
]);
