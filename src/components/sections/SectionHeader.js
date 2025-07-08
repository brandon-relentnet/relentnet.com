export default function SectionHeader({
  title,
  subtitle,
  className = "",
  children,
}) {
  return (
    <section className="relative bg-base-200 py-section">
      <span className="bg-mask-left" />
      <div className="container mx-auto px-4 py-block"></div>
      <div className={`mb-12 text-center ${className}`}>
        {subtitle && <div className="section-subtitle">{subtitle}</div>}
        <h2 className="section-title">{title}</h2>
      </div>
      {children}
    </section>
  );
}
