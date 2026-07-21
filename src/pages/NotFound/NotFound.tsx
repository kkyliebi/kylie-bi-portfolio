import { Link } from 'react-router-dom';

export function NotFound() {
  return (
    <section>
      <h1>Page not found</h1>
      <p>The requested page is not part of this portfolio archive.</p>
      <Link to="/">Return home</Link>
    </section>
  );
}
