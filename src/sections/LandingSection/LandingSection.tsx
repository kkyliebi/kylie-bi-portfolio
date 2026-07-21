import type { ExperienceSection } from '../../data/experienceBlueprint';
import { SectionSkeleton } from '../SectionSkeleton';
import styles from './LandingSection.module.css';

type LandingSectionProps = {
  section: ExperienceSection;
};

export function LandingSection({ section }: LandingSectionProps) {
  return (
    <SectionSkeleton section={section} showTitle={false} status="Communication archive">
      <p>Communication Designer &amp; Creative Producer</p>
      <h1 className={styles.proposition} id={`${section.id}-title`}>
        Transforming abstract concepts into narrative-driven communication systems.
      </h1>
      <p>Explore the practice through a connected archive of five selected projects.</p>
    </SectionSkeleton>
  );
}
