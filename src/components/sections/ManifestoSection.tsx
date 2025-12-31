export default function ManifestoSection() {
  return (
    <section className="relative bg-base-200 py-section">
      <div className="container relative py-block">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-8 text-xs font-medium uppercase tracking-[0.2em] text-primary/80">
            Our Manifesto
          </div>
          <p className="mb-8 text-2xl font-light leading-relaxed text-white md:text-3xl">
            "In an age of automated mediocrity, true luxury is found in the
            human touch."
          </p>
          <div className="space-y-6 text-lg font-light leading-relaxed text-base-content/70">
            <p>
              We founded RelentNet on a simple premise: that your digital home
              should be treated with the same reverence as your physical one. It
              is not merely a utility; it is an extension of your identity.
            </p>
            <p>
              We reject the assembly-line approach to web design. We do not use
              templates. We do not outsource our craft. We are a small,
              dedicated studio of artisans who believe that every line of code
              and every pixel serves a purpose.
            </p>
            <p>
              When you choose us, you are not buying a product. You are entering
              into a partnership with a team that cares as deeply about your
              legacy as you do.
            </p>
          </div>
          <div className="mt-12">
            <img
              src="/logo.svg"
              alt="RelentNet Signature"
              className="mx-auto h-12 opacity-50"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
