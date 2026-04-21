# LearnFlow Academy

LearnFlow Academy is a production-style frontend education platform built for **ICT930 Advanced Web Application Development**. The application demonstrates how a modern React interface can support course discovery, enrolment, progress tracking, and profile management with accessible and responsive design.

## Project Overview

This project simulates the work of a frontend team building a polished learning platform while the backend is assumed to already exist. To keep the project reliable for assessment, the app uses mock course data with asynchronous service functions so loading, success, empty, and error states can all be demonstrated clearly.

## Technology Stack

- React
- Vite
- React Router
- Context API
- Plain CSS
- ESLint

## Key Features

- Multi-page navigation with React Router
- Reusable component architecture
- Course catalogue with search and filters
- Course detail pages with enrolment flow
- Dashboard with progress tracking
- Profile form with validation
- Loading, empty, and error states
- Modal and toast feedback
- Responsive layouts for desktop and mobile
- Accessibility-minded HTML, labels, and focus states

## Folder Structure

```text
src/
  components/
  context/
  data/
  hooks/
  layouts/
  pages/
  services/
  styles/
```

## Installation

1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm run dev
```

3. Build for production:

```bash
npm run build
```

## Design Decisions

- **React + Context API** was chosen to keep shared state simple and readable for a frontend assessment.
- **Mock JSON with async service helpers** allows the app to demonstrate real-world loading and error handling without depending on an external API.
- **Reusable components** such as `CourseCard`, `PageHeader`, `ProgressBar`, and `InputField` reduce duplication and improve maintainability.
- **Plain CSS** was used to keep the visual system easy to understand and clearly authored for the assignment.
- **Responsive layout patterns** were built into each page so the project can be shown on both desktop and mobile screenshots.

## Assessment Deliverables Checklist

- Source code included
- README included
- Ready for screenshots of at least 5 key screens
- Reflection draft included in `reflection.md`

## Notes

The workspace environment used to generate this project did not include a package manager binary, so dependencies were not installed in-session. The project files and configuration are ready for a normal `npm install` workflow on a standard Node.js setup.
