import { NavLink, Outlet } from 'react-router-dom';
import styles from './Layout.module.css';

const navItems = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/cv', label: 'CV' },
  { path: '/contact', label: 'Contact' },
  { path: '/questions', label: 'Questions' },
];

export function Layout() {
  return (
    <div className={styles.shell}>
      <header className={styles.header}>
        <NavLink className={styles.logo} to="/" aria-label="Kylie Bi home">
          Kylie Bi
        </NavLink>
        <nav className={styles.nav} aria-label="Primary navigation">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                isActive ? `${styles.navLink} ${styles.navLinkActive}` : styles.navLink
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </header>
      <main className={styles.main}>
        <Outlet />
      </main>
    </div>
  );
}

