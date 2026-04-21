export const categories = [
  "Frontend Development",
  "Backend Engineering",
  "UX Design",
  "Data Analytics",
];

export const levels = ["Beginner", "Intermediate", "Advanced"];

export const courses = [
  {
    id: "react-foundations",
    title: "React Foundations for Modern Teams",
    category: "Frontend Development",
    level: "Beginner",
    duration: "6 weeks",
    instructor: "Ava Chen",
    description:
      "Learn components, props, hooks, and practical UI patterns while building production-style interfaces.",
    longDescription:
      "This course gives new frontend developers a structured introduction to React. Students move from component basics into routing, forms, state handling, and reusable UI patterns that mirror real industry workflows.",
    progress: 48,
    rating: 4.8,
    enrolled: true,
    lessons: 24,
    image: "RF",
    outcomes: [
      "Build reusable React components",
      "Manage local and shared state",
      "Implement accessible forms",
    ],
  },
  {
    id: "design-systems",
    title: "Design Systems and Accessible Interfaces",
    category: "UX Design",
    level: "Intermediate",
    duration: "4 weeks",
    instructor: "Noah Martinez",
    description:
      "Create consistent design languages with reusable tokens, component rules, and accessibility-first patterns.",
    longDescription:
      "Students explore how industry teams design coherent interfaces that scale. The course covers visual hierarchy, design tokens, spacing systems, interaction feedback, and accessibility testing.",
    progress: 0,
    rating: 4.6,
    enrolled: false,
    lessons: 16,
    image: "DS",
    outcomes: [
      "Design inclusive interface patterns",
      "Apply consistent spacing and typography",
      "Document reusable design decisions",
    ],
  },
  {
    id: "api-engineering",
    title: "API Integration and Async Data Handling",
    category: "Backend Engineering",
    level: "Intermediate",
    duration: "5 weeks",
    instructor: "Mia Johnson",
    description:
      "Consume APIs, handle asynchronous loading, and build resilient user experiences with error recovery.",
    longDescription:
      "This course helps students bridge frontend and backend work. Topics include fetch patterns, loading states, optimistic UI ideas, failure recovery, and clean service-layer design.",
    progress: 22,
    rating: 4.7,
    enrolled: true,
    lessons: 18,
    image: "AI",
    outcomes: [
      "Build async data flows cleanly",
      "Display loading and error states",
      "Organise frontend service functions",
    ],
  },
  {
    id: "data-storytelling",
    title: "Data Storytelling for Product Teams",
    category: "Data Analytics",
    level: "Beginner",
    duration: "3 weeks",
    instructor: "Leo Patel",
    description:
      "Turn metrics into decisions using charts, dashboards, and concise explanations for stakeholders.",
    longDescription:
      "Students learn how to interpret metrics and present them visually. The course combines simple analytics practice with dashboard communication techniques used in digital teams.",
    progress: 0,
    rating: 4.5,
    enrolled: false,
    lessons: 12,
    image: "DT",
    outcomes: [
      "Read dashboards critically",
      "Present insights clearly",
      "Choose suitable visual summaries",
    ],
  },
  {
    id: "advanced-routing",
    title: "Advanced Routing and App Architecture",
    category: "Frontend Development",
    level: "Advanced",
    duration: "6 weeks",
    instructor: "Sofia Green",
    description:
      "Plan scalable route structures, nested layouts, and state boundaries for larger applications.",
    longDescription:
      "A practical architecture course focused on scaling frontend projects. Students examine route planning, layout composition, module boundaries, and maintainable code organisation.",
    progress: 0,
    rating: 4.9,
    enrolled: false,
    lessons: 20,
    image: "AR",
    outcomes: [
      "Structure large apps cleanly",
      "Separate layout and feature concerns",
      "Reduce architectural duplication",
    ],
  },
  {
    id: "career-launch",
    title: "Career Launch for Junior Web Developers",
    category: "Frontend Development",
    level: "Beginner",
    duration: "2 weeks",
    instructor: "Grace Kim",
    description:
      "Build confidence with portfolio planning, Git workflows, technical reflection, and presentation skills.",
    longDescription:
      "A short practical course designed to help junior developers prepare coursework and portfolio pieces for industry review. It focuses on clarity, reflection, and professional delivery.",
    progress: 76,
    rating: 4.4,
    enrolled: true,
    lessons: 10,
    image: "CL",
    outcomes: [
      "Present technical work clearly",
      "Use Git meaningfully",
      "Write reflective project summaries",
    ],
  },
];

export const defaultProfile = {
  name: "Jordan Lee",
  email: "jordan.lee@example.com",
  learningGoal: "Build stronger React architecture skills for frontend projects.",
  studyHours: "6",
  preferredTrack: "Frontend Development",
};
