import { createBrowserRouter } from 'react-router-dom';
import { Layout } from './components/Layout/Layout';
import { Home } from './pages/Home/Home';
import { About } from './pages/About/About';
import { Contact } from './pages/Contact/Contact';
import { CV } from './pages/CV/CV';
import { Questions } from './pages/Questions/Questions';
import { ProjectPage } from './pages/ProjectPage/ProjectPage';
import { NotFound } from './pages/NotFound/NotFound';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'about', element: <About /> },
      { path: 'cv', element: <CV /> },
      { path: 'contact', element: <Contact /> },
      { path: 'questions', element: <Questions /> },
      { path: 'projects/:projectId', element: <ProjectPage /> },
      { path: '*', element: <NotFound /> },
    ],
  },
]);

