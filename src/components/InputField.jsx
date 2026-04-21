function InputField({ label, error, id, as = "input", ...props }) {
  const Component = as;

  return (
    <div className="field">
      <label htmlFor={id}>{label}</label>
      <Component id={id} className={`field__control ${error ? "field__control--error" : ""}`} {...props} />
      {error ? <p className="field__error">{error}</p> : null}
    </div>
  );
}

export default InputField;
