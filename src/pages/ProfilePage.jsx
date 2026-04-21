import { useState } from "react";
import Button from "../components/Button";
import InputField from "../components/InputField";
import PageHeader from "../components/PageHeader";
import { useAppContext } from "../context/AppContext";

function validateProfile(values) {
  const nextErrors = {};

  if (!values.name.trim()) {
    nextErrors.name = "Name is required.";
  }

  if (!values.email.trim()) {
    nextErrors.email = "Email is required.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    nextErrors.email = "Enter a valid email address.";
  }

  if (!values.learningGoal.trim()) {
    nextErrors.learningGoal = "Learning goal is required.";
  }

  if (!values.studyHours) {
    nextErrors.studyHours = "Study hours are required.";
  }

  return nextErrors;
}

function ProfilePage() {
  const { profile, categories, saveProfile } = useAppContext();
  const [formValues, setFormValues] = useState(profile);
  const [errors, setErrors] = useState({});

  function updateField(event) {
    const { name, value } = event.target;
    setFormValues((current) => ({
      ...current,
      [name]: value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    const validationErrors = validateProfile(formValues);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    saveProfile(formValues);
  }

  return (
    <div className="container page-stack">
      <PageHeader
        eyebrow="Profile settings"
        title="Personalise your learning plan."
        description="Update your learning goals, weekly study target, and preferred track with clear form validation."
      />

      <section className="form-layout">
        <article className="details-card">
          <form className="profile-form" onSubmit={handleSubmit} noValidate>
            <InputField
              id="name"
              label="Full name"
              name="name"
              value={formValues.name}
              onChange={updateField}
              error={errors.name}
            />

            <InputField
              id="email"
              label="Email address"
              name="email"
              type="email"
              value={formValues.email}
              onChange={updateField}
              error={errors.email}
            />

            <InputField
              id="learningGoal"
              label="Learning goal"
              name="learningGoal"
              as="textarea"
              rows="4"
              value={formValues.learningGoal}
              onChange={updateField}
              error={errors.learningGoal}
            />

            <InputField
              id="studyHours"
              label="Study hours per week"
              name="studyHours"
              type="number"
              min="1"
              max="40"
              value={formValues.studyHours}
              onChange={updateField}
              error={errors.studyHours}
            />

            <div className="field">
              <label htmlFor="preferredTrack">Preferred track</label>
              <select
                id="preferredTrack"
                className="field__control"
                name="preferredTrack"
                value={formValues.preferredTrack}
                onChange={updateField}
              >
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>

            <Button type="submit">Save profile</Button>
          </form>
        </article>

        <article className="details-card">
          <h2>Why this matters</h2>
          <p>
            Strong learning interfaces should support user input with helpful validation, clear labels, accessible
            controls, and immediate feedback after successful actions.
          </p>
          <p>
            This page demonstrates controlled form fields, local validation logic, and shared state updates that flow
            back into the dashboard.
          </p>
        </article>
      </section>
    </div>
  );
}

export default ProfilePage;
