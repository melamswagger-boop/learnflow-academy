import { courses } from "../data/courses";

const delay = (ms) => new Promise((resolve) => {
  window.setTimeout(resolve, ms);
});

export async function getCourses({ shouldFail = false } = {}) {
  await delay(700);

  if (shouldFail) {
    throw new Error("We could not load the course catalogue. Please try again.");
  }

  return structuredClone(courses);
}

export async function getCourseById(courseId, { shouldFail = false } = {}) {
  await delay(500);

  if (shouldFail) {
    throw new Error("We could not load that course right now.");
  }

  const course = courses.find((item) => item.id === courseId);

  if (!course) {
    throw new Error("Course not found.");
  }

  return structuredClone(course);
}
