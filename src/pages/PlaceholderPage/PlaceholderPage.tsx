import type { ReactNode } from 'react';
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
      <p className={styles.eyebrow}>{eyebrow}</p>
      <h1>{title}</h1>
      <p>{description}</p>
      {children}
    </section>
  );
}

export { styles as placeholderPageStyles };
