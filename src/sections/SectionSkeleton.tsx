import type { ReactNode } from 'react';
import type { ExperienceSection } from '../data/experienceBlueprint';
import styles from './SectionSkeleton.module.css';

type SectionSkeletonProps = {
  section: ExperienceSection;
  children?: ReactNode;
};

export function SectionSkeleton({ section, children }: SectionSkeletonProps) {
  const { id, label, narrative } = section;
  const titleId = `${id}-title`;

  return (
    <section aria-labelledby={titleId} className={styles.section} id={id}>
      <div className={styles.inner}>
        <p className={styles.label}>{label}</p>
        <h2 className={styles.title} id={titleId}>
          {label}
        </h2>
        {children ?? (
          <dl className={styles.blueprint}>
            <div>
              <dt>Mission</dt>
              <dd>{narrative.mission}</dd>
            </div>
            <div>
              <dt>Current Question</dt>
              <dd>{narrative.currentQuestion}</dd>
            </div>
            <div>
              <dt>What this page reveals</dt>
              <dd>{narrative.reveals}</dd>
            </div>
            <div>
              <dt>What it leaves unresolved</dt>
              <dd>{narrative.leavesUnresolved}</dd>
            </div>
            <div>
              <dt>Next destination</dt>
              <dd>{narrative.nextDestination}</dd>
            </div>
          </dl>
        )}
        <p className={styles.status}>Narrative blueprint</p>
      </div>
    </section>
  );
}
