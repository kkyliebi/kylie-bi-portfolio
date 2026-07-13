import styles from './Home.module.css';

export function Home() {
  return (
    <section className={styles.hero} data-scroll-section>
      <p className={styles.kicker}>Portfolio foundation</p>
      <h1>Kylie Bi Portfolio</h1>
      <p className={styles.copy}>
        Initial React, TypeScript, Vite, React Router, CSS Modules, and GSAP ScrollTrigger setup is ready for the next design phase.
      </p>
    </section>
  );
}
