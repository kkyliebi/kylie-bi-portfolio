import { NavLink, Outlet } from 'react-router-dom';
import styles from './Layout.module.css';

export function Layout() {
  return (
    <div className={styles.shell}>
      <header className={styles.header}>
        <NavLink className={styles.logo} to="/" aria-label="Kylie Bi home">
          Kylie Bi
        </NavLink>
      </header>
      <main className={styles.main}>
        <Outlet />
      </main>
    </div>
  );
}
