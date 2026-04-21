function ProgressBar({ value }) {
  return (
    <div className="progress" aria-label={`Course progress ${value}%`}>
      <div className="progress__track">
        <div className="progress__fill" style={{ width: `${value}%` }} />
      </div>
      <span>{value}%</span>
    </div>
  );
}

export default ProgressBar;
