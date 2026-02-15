export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-950 to-blue-950">
      {/* Header */}
      <header className="relative z-10 flex items-center justify-between px-8 py-6">
        <a href="/" className="text-base font-medium tracking-wider uppercase text-white hover:text-primary transition-colors">
          Fang Dynamics
        </a>
        <nav className="flex gap-10">
          <a href="/about" className="text-sm font-medium tracking-widest uppercase text-primary transition-colors">
            About
          </a>
          <a href="/#contact" className="text-sm font-medium tracking-widest uppercase text-white hover:text-primary transition-colors">
            Contact / Inquiries
          </a>
        </nav>
      </header>

      {/* About Section */}
      <section className="relative text-foreground py-24 px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold uppercase tracking-tighter mb-16 text-center">
            About Fang Dynamics
          </h1>

          <div className="prose prose-invert max-w-none mb-16">
            <p className="text-xl text-muted-foreground leading-relaxed text-center mb-16">
              We are dedicated to providing premium European vehicle parts through a curated,
              direct-to-consumer approach that prioritizes quality, authenticity, and personalized service.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold uppercase tracking-wide text-primary">
                Trusted Quality
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                We partner exclusively with premium, trusted brands known for their engineering excellence.
                Every component meets our rigorous standards for performance and reliability. No compromises,
                no substitutes—only the finest parts for discerning vehicle owners.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-semibold uppercase tracking-wide text-primary">
                Bespoke Service
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                All parts and services are available by inquiry only. This ensures personalized attention
                to your specific vehicle requirements and guarantees authenticity. We take the time to understand
                your needs and source exactly what your vehicle demands.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-semibold uppercase tracking-wide text-primary">
                European Focus
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Specializing in premium European marques, we understand the unique demands of high-performance
                vehicles. From German precision to Italian craftsmanship, we source parts that maintain
                the exceptional standards these vehicles were built to uphold.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-semibold uppercase tracking-wide text-primary">
                Direct Excellence
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Our direct-to-consumer model eliminates middlemen, ensuring competitive pricing without
                compromising on the premium quality our clients expect. You get authentic parts at fair prices,
                with the assurance that comes from dealing directly with specialists.
              </p>
            </div>
          </div>

          <div className="border-t border-border pt-12 mt-12">
            <h2 className="text-3xl font-bold uppercase tracking-tighter mb-8 text-center">
              Our Philosophy
            </h2>
            <div className="space-y-6 text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              <p>
                At Fang Dynamics, we believe that maintaining a premium European vehicle requires more than
                just parts—it demands expertise, authenticity, and an unwavering commitment to quality.
              </p>
              <p>
                We've built our business on the principle that vehicle owners who invest in excellence
                deserve a parts supplier who shares their standards. Every inquiry we receive is treated
                with the attention and care it deserves.
              </p>
              <p>
                Whether you're restoring a classic, maintaining a daily driver, or building something
                exceptional, we're here to ensure you have access to the finest components available.
              </p>
            </div>
          </div>

          <div className="text-center mt-16">
            <p className="text-sm uppercase tracking-widest text-primary mb-8">
              Premium parts. Expert curation. Uncompromising standards.
            </p>
            <a
              href="/#contact"
              className="inline-block px-8 py-4 bg-primary text-primary-foreground uppercase tracking-wider font-medium text-sm hover:brightness-110 transition-all rounded-md"
            >
              Start Your Inquiry
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
