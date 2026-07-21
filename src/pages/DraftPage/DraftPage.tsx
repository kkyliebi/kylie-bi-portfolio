import type { ReactNode } from 'react';
import { SectionHeader } from '../../components/design-system';
import styles from './DraftPage.module.css';

type DraftPageProps = {
  eyebrow?: string;
  title: string;
  description: string;
  children?: ReactNode;
};

export function DraftPage({ eyebrow = 'Draft', title, description, children }: DraftPageProps) {
  return (
    <section className={styles.page}>
      <SectionHeader description={description} eyebrow={eyebrow} headingLevel={1} title={title} />
      {children}
    </section>
  );
}

export { styles as draftPageStyles };
