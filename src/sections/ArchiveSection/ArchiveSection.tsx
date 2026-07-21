import type { ExperienceSection } from '../../data/experienceBlueprint';
import { projects } from '../../data/projects';
import { ArchiveCard } from '../../components/design-system';
import { SectionSkeleton } from '../SectionSkeleton';

type ArchiveSectionProps = {
  section: ExperienceSection;
};

export function ArchiveSection({ section }: ArchiveSectionProps) {
  return (
    <SectionSkeleton section={section} status={`${projects.length} selected projects · Draft`}>
      {projects.map((project, index) => (
        <ArchiveCard
          description={project.leadQuestion}
          eyebrow={`${String(index + 1).padStart(2, '0')} · ${project.category} · Draft`}
          key={project.slug}
          title={project.title}
          to={project.path}
        />
      ))}
    </SectionSkeleton>
  );
}
