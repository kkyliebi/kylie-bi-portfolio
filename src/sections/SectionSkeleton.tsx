import type { ReactNode } from 'react';
import styles from './SectionSkeleton.module.css';

type SectionSkeletonProps = {
  id: string;
  label: string;
  title: string;
  children?: ReactNode;
};

export function SectionSkeleton({ id, label, title, children }: SectionSkeletonProps) {
  const titleId = `${id}-title`;

  return (
    <section aria-labelledby={titleId} className={styles.section} id={id}>
      <div className={styles.inner}>
        <p className={styles.label}>{label}</p>
        <h2 className={styles.title} id={titleId}>
          {title}
        </h2>
        {children ?? <div className={styles.placeholder} aria-hidden="true" />}
        <p className={styles.status}>Content pending</p>
      </div>
    </section>
  );
}
