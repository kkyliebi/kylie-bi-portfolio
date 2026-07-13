import { createBrowserRouter } from 'react-router-dom';
import { Layout } from './components/Layout/Layout';
import { About } from './pages/About/About';
import { Contact } from './pages/Contact/Contact';
import { CV } from './pages/CV/CV';
import { Home } from './pages/Home/Home';
import { NotFound } from './pages/NotFound/NotFound';
import { ProjectPage } from './pages/ProjectPage/ProjectPage';
import { Questions } from './pages/Questions/Questions';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'questions', element: <Questions /> },
      { path: ':slug', element: <ProjectPage /> },
      { path: 'about', element: <About /> },
      { path: 'cv', element: <CV /> },
      { path: 'contact', element: <Contact /> },
      { path: '*', element: <NotFound /> },
    ],
  },
]);
