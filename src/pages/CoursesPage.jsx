import { useState } from "react";
import CourseCard from "../components/CourseCard";
import EmptyState from "../components/EmptyState";
import ErrorState from "../components/ErrorState";
import FilterPanel from "../components/FilterPanel";
import LoadingState from "../components/LoadingState";
import PageHeader from "../components/PageHeader";
import SearchBar from "../components/SearchBar";
import Button from "../components/Button";
import { useAppContext } from "../context/AppContext";
import { useCourses } from "../hooks/useCourses";

function CoursesPage() {
  const [simulateError, setSimulateError] = useState(false);
  const [reloadKey, setReloadKey] = useState(0);
  const { searchTerm, setSearchTerm, filters, setFilters, enrollInCourse, enrollmentState, categories } =
    useAppContext();
  const { courses, loading, error } = useCourses(simulateError && reloadKey >= 0);

  const filteredCourses = courses.filter((course) => {
    const searchMatch = course.title.toLowerCase().includes(searchTerm.toLowerCase());
    const categoryMatch = filters.category === "All" || course.category === filters.category;
    const levelMatch = filters.level === "All" || course.level === filters.level;

    return searchMatch && categoryMatch && levelMatch;
  });

  function handleRetry() {
    setSimulateError(false);
    setReloadKey((current) => current + 1);
  }

  return (
    <div className="container page-stack">
      <PageHeader
        eyebrow="Course catalogue"
        title="Browse practical learning paths for modern web teams."
        description="Discover beginner-friendly and career-focused courses, then filter the catalogue to match your goals."
        actions={
          <Button variant="ghost" onClick={() => setSimulateError(true)}>
            Simulate load error
          </Button>
        }
      />

      <section className="toolbar">
        <SearchBar value={searchTerm} onChange={setSearchTerm} />
        <FilterPanel categories={categories} filters={filters} onChange={setFilters} />
      </section>

      {loading ? <LoadingState message="Loading available courses..." key={reloadKey} /> : null}
      {!loading && error ? <ErrorState message={error} onRetry={handleRetry} /> : null}
      {!loading && !error && filteredCourses.length === 0 ? (
        <EmptyState title="No matching courses" message="Try another search term or reset your filters." />
      ) : null}

      {!loading && !error ? (
        <section className="course-grid">
          {filteredCourses.map((course) => (
            <CourseCard
              key={course.id}
              course={course}
              isEnrolled={enrollmentState[course.id] !== undefined}
              progress={enrollmentState[course.id] ?? 0}
              onEnroll={enrollInCourse}
            />
          ))}
        </section>
      ) : null}
    </div>
  );
}

export default CoursesPage;
