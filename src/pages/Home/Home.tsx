import { projects } from '../../data/projects';
import styles from './Home.module.css';

export function Home() {
  return (
    <section className={styles.hero} data-scroll-section>
      <p className={styles.kicker}>Architecture first</p>
      <h1>Kylie Bi Portfolio</h1>
      <p className={styles.copy}>
        Placeholder home route for the portfolio architecture. The design, content, and animation layers will be added after this foundation is approved.
      </p>
      <p className={styles.meta}>{projects.length} project routes are prepared for future content.</p>
    </section>
  );
}
