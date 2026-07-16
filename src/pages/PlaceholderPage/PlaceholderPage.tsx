import type { ReactNode } from 'react';
import { SectionHeader } from '../../components/design-system';
import styles from './PlaceholderPage.module.css';

type PlaceholderPageProps = {
  eyebrow?: string;
  title: string;
  description: string;
  children?: ReactNode;
};

export function PlaceholderPage({ eyebrow = 'Architecture placeholder', title, description, children }: PlaceholderPageProps) {
  return (
    <section className={styles.page}>
      <SectionHeader description={description} eyebrow={eyebrow} headingLevel={1} title={title} />
      {children}
    </section>
  );
}

export { styles as placeholderPageStyles };
