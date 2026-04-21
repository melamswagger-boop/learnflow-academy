import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <div className="container page-stack">
      <section className="state-card">
        <p className="eyebrow">404 page</p>
        <h1>We could not find that page.</h1>
        <p>The route may be incorrect, or the content may have moved.</p>
        <Link className="button button--primary" to="/">
          Back to home
        </Link>
      </section>
    </div>
  );
}

export default NotFoundPage;
