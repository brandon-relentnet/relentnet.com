export default function SectionHeader({
  title,
  subtitle,
  children,
  desc,
  id = "",
  maskRight = true,
}) {
  return (
    <section
      id={id}
      className={`${maskRight ? "" : "bg-base-200"} relative scroll-mt-40 py-section`}
    >
      <span className={`${maskRight ? "bg-mask-right" : "bg-mask-left"}`} />
      <div className="relative container mx-auto flex flex-col items-center justify-center px-4 py-block text-center">
        <div className="mb-8 text-center">
          {subtitle && <div className="section-subtitle">{subtitle}</div>}
          <h2 className="section-title">{title}</h2>
          {desc && <p className="section-desc">{desc}</p>}
        </div>
        {children}
      </div>
    </section>
  );
}
