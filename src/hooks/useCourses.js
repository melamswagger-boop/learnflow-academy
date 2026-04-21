import { useEffect, useState } from "react";
import { getCourses } from "../services/courseService";

export function useCourses(shouldFail = false) {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let isActive = true;

    async function loadCourses() {
      setLoading(true);
      setError("");

      try {
        const data = await getCourses({ shouldFail });

        if (isActive) {
          setCourses(data);
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

    loadCourses();

    return () => {
      isActive = false;
    };
  }, [shouldFail]);

  return {
    courses,
    loading,
    error,
  };
}
