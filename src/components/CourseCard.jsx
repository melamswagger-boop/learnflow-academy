import { Link } from "react-router-dom";
import Button from "./Button";
import ProgressBar from "./ProgressBar";

function CourseCard({ course, isEnrolled, progress, onEnroll }) {
  return (
    <article className="course-card">
      <div className="course-card__banner" aria-hidden="true">
        <span>{course.image}</span>
      </div>
      <div className="course-card__content">
        <div className="course-card__meta">
          <span>{course.category}</span>
          <span>{course.level}</span>
        </div>
        <h2>{course.title}</h2>
        <p>{course.description}</p>
        <ul className="course-card__details">
          <li>{course.duration}</li>
          <li>{course.lessons} lessons</li>
          <li>{course.instructor}</li>
        </ul>
        {isEnrolled ? <ProgressBar value={progress} /> : null}
        <div className="course-card__actions">
          <Link className="button button--secondary" to={`/courses/${course.id}`}>
            View details
          </Link>
          {isEnrolled ? (
            <span className="status-pill">Enrolled</span>
          ) : (
            <Button onClick={() => onEnroll(course.id)}>Enrol now</Button>
          )}
        </div>
      </div>
    </article>
  );
}

export default CourseCard;
