import { Link } from "react-router-dom";
import PageHeader from "../components/PageHeader";
import { useAppContext } from "../context/AppContext";

function HomePage() {
  const { enrolledCourseIds } = useAppContext();

  return (
    <div className="container page-stack">
      <section className="hero">
        <div className="hero__content">
          <p className="eyebrow">Education platform</p>
          <h1>Move from course discovery to confident progress tracking.</h1>
          <p>
            LearnFlow Academy helps students discover practical courses, enrol quickly, and track progress inside a
            polished, mobile-friendly learning dashboard.
          </p>
          <div className="hero__actions">
            <Link className="button button--primary" to="/courses">
              Explore courses
            </Link>
            <Link className="button button--secondary" to="/dashboard">
              View dashboard
            </Link>
          </div>
        </div>

        <aside className="hero__panel">
          <h2>Student snapshot</h2>
          <div className="stat-grid">
            <div className="stat-card">
              <strong>18</strong>
              <span>Available modules</span>
            </div>
            <div className="stat-card">
              <strong>{enrolledCourseIds.length}</strong>
              <span>Active enrolments</span>
            </div>
            <div className="stat-card">
              <strong>94%</strong>
              <span>Weekly completion streak</span>
            </div>
            <div className="stat-card">
              <strong>4.8</strong>
              <span>Average learner rating</span>
            </div>
          </div>
        </aside>
      </section>

      <PageHeader
        eyebrow="Platform strengths"
        title="Built for clarity, accessibility, and scalable frontend architecture."
        description="This project demonstrates component reuse, async data handling, responsive design, and helpful feedback across the full student journey."
      />

      <section className="feature-grid">
        <article className="info-card">
          <h2>Discover</h2>
          <p>Search and filter courses by category and skill level without losing context.</p>
        </article>
        <article className="info-card">
          <h2>Enrol</h2>
          <p>Move from exploration into action with clear detail pages and direct enrolment flows.</p>
        </article>
        <article className="info-card">
          <h2>Track</h2>
          <p>Review course progress, upcoming milestones, and learning pace inside one dashboard.</p>
        </article>
      </section>

      <section className="cta-panel">
        <div>
          <h2>Ready to start your next learning sprint?</h2>
          <p>Choose a course and test the real assignment features: routing, forms, filtering, and shared state.</p>
        </div>
        <Link className="button button--primary" to="/courses">
          Browse catalogue
        </Link>
      </section>
    </div>
  );
}

export default HomePage;
