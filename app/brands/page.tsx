export default function Brands() {
  const brands = [
    { name: "AWE Tuning", specialty: "Performance Exhaust & Tuning" },
    { name: "Bilstein", specialty: "Suspension Systems" },
    { name: "Brembo", specialty: "Brake Systems" },
    { name: "K&N", specialty: "Air Filtration" },
    { name: "HKS", specialty: "Performance Tuning" },
    { name: "Mishimoto", specialty: "Cooling Systems" },
    { name: "StopTech", specialty: "Brake Performance" },
    { name: "GReddy", specialty: "Turbo & Exhaust" },
    { name: "Eibach", specialty: "Springs & Sway Bars" },
    { name: "Forge Motorsport", specialty: "Boost & Diverter Valves" },
    { name: "APR", specialty: "ECU Tuning & Parts" },
    { name: "Tein", specialty: "Coilovers & Dampers" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-950 to-blue-950">
      {/* Header */}
      <header className="relative z-10 flex items-center justify-between px-8 py-6">
        <a href="/" className="text-base font-medium tracking-wider uppercase text-white hover:text-primary transition-colors">
          Fang Dynamics
        </a>
        <nav className="flex gap-10">
          <a href="/brands" className="text-sm font-medium tracking-widest uppercase text-primary transition-colors">
            Brands
          </a>
          <a href="/about" className="text-sm font-medium tracking-widest uppercase text-white hover:text-primary transition-colors">
            About
          </a>
          <a href="/#contact" className="text-sm font-medium tracking-widest uppercase text-white hover:text-primary transition-colors">
            Contact / Inquiries
          </a>
        </nav>
      </header>

      {/* Brands Section */}
      <section className="relative text-foreground py-24 px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold uppercase tracking-tighter mb-8 text-center">
            Brands We Work With
          </h1>

          <p className="text-lg text-muted-foreground leading-relaxed text-center mb-16 max-w-2xl mx-auto">
            We partner exclusively with industry-leading manufacturers known for their
            engineering excellence and unwavering commitment to quality.
          </p>

          {/* Brand Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
            {brands.map((brand) => (
              <div
                key={brand.name}
                className="group relative bg-background/20 backdrop-blur-sm border-2 border-gray-700 hover:border-primary rounded-lg p-8 transition-all duration-300 hover:scale-105 hover:bg-background/30"
              >
                <div className="text-center">
                  <h3 className="text-2xl font-bold uppercase tracking-tight mb-3 text-white group-hover:text-primary transition-colors">
                    {brand.name}
                  </h3>
                  <p className="text-sm text-muted-foreground uppercase tracking-wider">
                    {brand.specialty}
                  </p>
                </div>
                {/* Accent corner */}
                <div className="absolute top-0 right-0 w-12 h-12 border-t-2 border-r-2 border-primary/0 group-hover:border-primary/50 rounded-tr-lg transition-all duration-300" />
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="text-center pt-12 border-t border-border">
            <h2 className="text-3xl font-bold uppercase tracking-tighter mb-6">
              Looking for a Specific Brand?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              If you're seeking parts from a brand not listed here, reach out to us.
              Our network extends beyond these trusted partners.
            </p>
            <a
              href="/#contact"
              className="inline-block px-8 py-4 bg-primary text-primary-foreground uppercase tracking-wider font-medium text-sm hover:brightness-110 transition-all rounded-md"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
