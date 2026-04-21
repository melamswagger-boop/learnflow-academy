function PageHeader({ eyebrow, title, description, actions }) {
  return (
    <section className="page-header">
      <p className="eyebrow">{eyebrow}</p>
      <div className="page-header__row">
        <div>
          <h1>{title}</h1>
          <p>{description}</p>
        </div>
        {actions ? <div className="page-header__actions">{actions}</div> : null}
      </div>
    </section>
  );
}

export default PageHeader;
