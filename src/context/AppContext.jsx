import { createContext, useContext, useState } from "react";
import { categories, defaultProfile } from "../data/courses";

const AppContext = createContext(null);
let toastTimeoutId;

export function AppProvider({ children }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [filters, setFilters] = useState({
    category: "All",
    level: "All",
  });
  const [enrollmentState, setEnrollmentState] = useState({
    "react-foundations": 48,
    "api-engineering": 22,
    "career-launch": 76,
  });
  const [profile, setProfile] = useState(defaultProfile);
  const [toast, setToast] = useState(null);

  const enrolledCourseIds = Object.keys(enrollmentState);

  function showToast(message) {
    setToast(message);

    window.clearTimeout(toastTimeoutId);
    toastTimeoutId = window.setTimeout(() => {
      setToast(null);
    }, 2600);
  }

  function enrollInCourse(courseId) {
    setEnrollmentState((current) => {
      if (current[courseId] !== undefined) {
        return current;
      }

      return {
        ...current,
        [courseId]: 0,
      };
    });
    showToast("Course enrolled successfully.");
  }

  function updateCourseProgress(courseId, progressValue) {
    setEnrollmentState((current) => ({
      ...current,
      [courseId]: Number(progressValue),
    }));
  }

  function saveProfile(nextProfile) {
    setProfile(nextProfile);
    showToast("Profile saved successfully.");
  }

  const value = {
    categories,
    searchTerm,
    setSearchTerm,
    filters,
    setFilters,
    enrollmentState,
    enrolledCourseIds,
    enrollInCourse,
    updateCourseProgress,
    profile,
    saveProfile,
    toast,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useAppContext() {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error("useAppContext must be used inside AppProvider.");
  }

  return context;
}
