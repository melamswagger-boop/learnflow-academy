import { Link } from "react-router-dom";
import EmptyState from "../components/EmptyState";
import PageHeader from "../components/PageHeader";
import ProgressBar from "../components/ProgressBar";
import { useAppContext } from "../context/AppContext";
import { courses } from "../data/courses";

function DashboardPage() {
  const { enrollmentState, profile } = useAppContext();

  const enrolledCourses = courses.filter((course) => enrollmentState[course.id] !== undefined);
  const averageProgress =
    enrolledCourses.length === 0
      ? 0
      : Math.round(
          enrolledCourses.reduce((total, course) => total + enrollmentState[course.id], 0) / enrolledCourses.length,
        );

  return (
    <div className="container page-stack">
      <PageHeader
        eyebrow="My learning dashboard"
        title={`Welcome back, ${profile.name.split(" ")[0]}.`}
        description="Review active courses, progress, and study rhythm across your current learning plan."
      />

      <section className="dashboard-grid">
        <article className="info-card info-card--highlight">
          <h2>Average progress</h2>
          <strong>{averageProgress}%</strong>
          <p>Balanced completion across your active enrolments.</p>
        </article>
        <article className="info-card">
          <h2>Weekly study target</h2>
          <strong>{profile.studyHours} hours</strong>
          <p>Set in your profile to help maintain steady momentum.</p>
        </article>
        <article className="info-card">
          <h2>Preferred track</h2>
          <strong>{profile.preferredTrack}</strong>
          <p>Used to tailor future recommendations and focus areas.</p>
        </article>
      </section>

      {enrolledCourses.length === 0 ? (
        <EmptyState title="No active enrolments yet" message="Start by exploring the course catalogue." />
      ) : (
        <section className="dashboard-list">
          {enrolledCourses.map((course) => (
            <article key={course.id} className="details-card">
              <div className="dashboard-list__row">
                <div>
                  <p className="eyebrow">{course.category}</p>
                  <h2>{course.title}</h2>
                  <p>{course.instructor}</p>
                </div>
                <Link className="button button--secondary" to={`/courses/${course.id}`}>
                  Open course
                </Link>
              </div>
              <ProgressBar value={enrollmentState[course.id]} />
            </article>
          ))}
        </section>
      )}
    </div>
  );
}

export default DashboardPage;
