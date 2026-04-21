import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Button from "../components/Button";
import ErrorState from "../components/ErrorState";
import LoadingState from "../components/LoadingState";
import Modal from "../components/Modal";
import PageHeader from "../components/PageHeader";
import ProgressBar from "../components/ProgressBar";
import { useAppContext } from "../context/AppContext";
import { getCourseById } from "../services/courseService";

function CourseDetailsPage() {
  const { courseId } = useParams();
  const { enrollInCourse, enrollmentState, updateCourseProgress } = useAppContext();
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [modalOpen, setModalOpen] = useState(false);

  const progress = enrollmentState[courseId] ?? 0;
  const isEnrolled = enrollmentState[courseId] !== undefined;

  useEffect(() => {
    let isActive = true;

    async function loadCourse() {
      setLoading(true);
      setError("");

      try {
        const data = await getCourseById(courseId);

        if (isActive) {
          setCourse(data);
        }
      } catch (loadError) {
        if (isActive) {
          setError(loadError.message);
        }
      } finally {
        if (isActive) {
          setLoading(false);
        }
      }
    }

    loadCourse();

    return () => {
      isActive = false;
    };
  }, [courseId]);

  if (loading) {
    return (
      <div className="container page-stack">
        <LoadingState message="Loading course details..." />
      </div>
    );
  }

  if (error || !course) {
    return (
      <div className="container page-stack">
        <ErrorState message={error || "Course not found."} />
      </div>
    );
  }

  return (
    <div className="container page-stack">
      <PageHeader
        eyebrow={course.category}
        title={course.title}
        description={course.longDescription}
        actions={
          <Button variant="secondary" onClick={() => setModalOpen(true)}>
            Course overview
          </Button>
        }
      />

      <section className="details-grid">
        <article className="details-card details-card--hero">
          <div className="course-card__banner course-card__banner--large" aria-hidden="true">
            <span>{course.image}</span>
          </div>
          <div className="details-card__content">
            <div className="course-card__meta">
              <span>{course.level}</span>
              <span>{course.duration}</span>
              <span>{course.rating} rating</span>
            </div>
            <p>{course.description}</p>
            <p>
              Instructor: <strong>{course.instructor}</strong>
            </p>
            {isEnrolled ? (
              <div className="progress-editor">
                <ProgressBar value={progress} />
                <label htmlFor="progress-range">Adjust your progress</label>
                <input
                  id="progress-range"
                  type="range"
                  min="0"
                  max="100"
                  value={progress}
                  onChange={(event) => updateCourseProgress(course.id, event.target.value)}
                />
              </div>
            ) : (
              <Button onClick={() => enrollInCourse(course.id)}>Enrol in this course</Button>
            )}
          </div>
        </article>

        <article className="details-card">
          <h2>What you will learn</h2>
          <ul className="outcome-list">
            {course.outcomes.map((outcome) => (
              <li key={outcome}>{outcome}</li>
            ))}
          </ul>
        </article>

        <article className="details-card">
          <h2>Quick info</h2>
          <dl className="detail-list">
            <div>
              <dt>Lessons</dt>
              <dd>{course.lessons}</dd>
            </div>
            <div>
              <dt>Skill level</dt>
              <dd>{course.level}</dd>
            </div>
            <div>
              <dt>Status</dt>
              <dd>{isEnrolled ? "Currently enrolled" : "Open for enrolment"}</dd>
            </div>
          </dl>
          <Link className="button button--ghost" to="/dashboard">
            Go to dashboard
          </Link>
        </article>
      </section>

      <Modal title="Course overview" isOpen={modalOpen} onClose={() => setModalOpen(false)}>
        <p>{course.longDescription}</p>
        <p>
          This course includes <strong>{course.lessons}</strong> practical lessons over <strong>{course.duration}</strong>.
        </p>
      </Modal>
    </div>
  );
}

export default CourseDetailsPage;
