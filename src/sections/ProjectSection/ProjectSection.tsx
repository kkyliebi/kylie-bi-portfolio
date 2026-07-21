import type { ExperienceSection } from '../../data/experienceBlueprint';
import { projects } from '../../data/projects';
import { TextLink } from '../../components/design-system';
import { SectionSkeleton } from '../SectionSkeleton';

type ProjectSectionProps = {
  section: ExperienceSection;
};

export function ProjectSection({ section }: ProjectSectionProps) {
  const projectIndex = Number(section.id.replace('project-', '')) - 1;
  const project = projects[projectIndex];

  if (!project) {
    return <SectionSkeleton section={section} status="Project unavailable" />;
  }

  return (
    <SectionSkeleton section={{ ...section, label: project.title }} status={`${project.category} · ${project.contentStatus}`}>
      <p>{project.leadQuestion}</p>
      <p>{project.summary}</p>
      <TextLink to={project.path}>Read project</TextLink>
    </SectionSkeleton>
  );
}
