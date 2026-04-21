import { levels } from "../data/courses";

function FilterPanel({ categories, filters, onChange }) {
  return (
    <section className="filter-panel" aria-label="Course filters">
      <div className="field">
        <label htmlFor="category-filter">Category</label>
        <select
          id="category-filter"
          className="field__control"
          value={filters.category}
          onChange={(event) => onChange({ ...filters, category: event.target.value })}
        >
          <option value="All">All categories</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      <div className="field">
        <label htmlFor="level-filter">Level</label>
        <select
          id="level-filter"
          className="field__control"
          value={filters.level}
          onChange={(event) => onChange({ ...filters, level: event.target.value })}
        >
          <option value="All">All levels</option>
          {levels.map((level) => (
            <option key={level} value={level}>
              {level}
            </option>
          ))}
        </select>
      </div>
    </section>
  );
}

export default FilterPanel;
