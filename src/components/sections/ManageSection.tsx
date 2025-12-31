export default function ManageSection() {
  return (
    <section className="relative py-section">
      <span className="bg-mask-right" />
      <div className="container relative py-block">
        <div className="flex flex-col items-center justify-center gap-12 lg:flex-row">
          <div className="text-center lg:w-1/2 lg:text-left">
            <div className="mb-2 text-sm font-bold uppercase tracking-widest text-primary">
              Manage
            </div>
            <h2 className="mb-6 text-4xl font-medium md:text-5xl">
              <span className="italic">Simplify</span> your online management.
            </h2>
            <p className="mb-12 text-base-content/80">
              RelentNet&apos;s all-in-one website management platform simplifies
              your digital operations, from design and development to hosting,
              updates, and ongoing support.
            </p>
            <div className="mb-4 text-sm font-bold uppercase tracking-widest text-primary">
              Benefits
            </div>
            <p className="mb-4 text-base-content/80">
              <strong>- Centralized Control</strong>
              <br />
              Manage all aspects of your website from a single, user-friendly
              dashboard.
            </p>
            <p className="mb-4 text-base-content/80">
              <strong>- Comprehensive Tools</strong>
              <br />
              Access a full suite of tools for design, content, e-commerce, and
              analytics, all in one place.
            </p>
            <p className="mb-12 text-base-content/80">
              <strong>- 24/7 Support</strong>
              <br />
              Our dedicated team is always available to assist with any issues.
            </p>
            <a
              href="https://clients.relentnet.com/index.php?rp=/login"
              className="gradient-button inline-flex items-center gap-2"
            >
              Access your account
            </a>
          </div>
          <img
            src="/images/software-23.png"
            alt="Simplify Online Management"
            className="max-w-md object-contain"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  )
}
