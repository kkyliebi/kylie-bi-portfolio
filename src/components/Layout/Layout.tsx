import { NavLink, Outlet } from 'react-router-dom';
import { navigationItems } from '../../data/navigation';
import styles from './Layout.module.css';

export function Layout() {
  return (
    <div className={styles.shell}>
      <a className={styles.skipLink} href="#main-content">
        Skip to content
      </a>
      <header className={styles.header}>
        <NavLink className={styles.logo} to="/" aria-label="Kylie Bi home">
          Kylie Bi
        </NavLink>
        <nav className={styles.nav} aria-label="Primary navigation">
          {navigationItems.map((item) => (
            <NavLink
              className={({ isActive }) => (isActive ? `${styles.navLink} ${styles.active}` : styles.navLink)}
              key={item.path}
              to={item.path}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </header>
      <div className={styles.progress} aria-hidden="true" />
      <main className={styles.main} id="main-content">
        <div className={styles.container} data-scroll-container>
          <Outlet />
        </div>
      </main>
    </div>
  );
}
