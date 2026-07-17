import { SectionSkeleton } from '../SectionSkeleton';

type ProjectSectionProps = {
  id: string;
  label: string;
};

export function ProjectSection({ id, label }: ProjectSectionProps) {
  return <SectionSkeleton id={id} label={label} title={label} />;
}
