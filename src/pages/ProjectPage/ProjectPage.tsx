import { Navigate, useParams } from 'react-router-dom';
import { ProjectLayout } from '../../components/ProjectLayout/ProjectLayout';
import { getProjectBySlug } from '../../data/projects';

export function ProjectPage() {
  const { slug } = useParams();
  const project = getProjectBySlug(slug);

  if (!project) {
    return <Navigate to="/" replace />;
  }

  return <ProjectLayout project={project} />;
}
