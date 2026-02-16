"use client";

import Image from "next/image";
import { useState } from "react";

export default function Brands() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const brands = [
    { name: "AWE Tuning", specialty: "Performance Exhaust & Tuning", logo: "/AWElogo.png" },
    { name: "Bilstein", specialty: "Suspension Systems", logo: "/Bilsteinlogo.png" },
    { name: "Brembo", specialty: "Brake Systems", logo: "/Brembologo.png" },
    { name: "K&N", specialty: "Air Filtration", logo: "/KandNlogo.png" },
    { name: "HKS", specialty: "Performance Tuning", logo: "/HKSlogo.png" },
    { name: "GReddy", specialty: "Turbo & Exhaust", logo: "/GreddyLogo.png" },
    { name: "Eibach", specialty: "Springs & Sway Bars", logo: "/Eibacklogo.png" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-700 to-white">
      {/* Header */}
      <header className="relative z-10 flex items-center justify-between px-4 md:px-8 py-6">
        <a href="/" className="text-sm md:text-base font-medium tracking-wider uppercase text-white hover:text-primary transition-colors">
          Fang Dynamics
        </a>

        {/* Logo in center (hidden on mobile to prevent nav wrapping) */}
        <div className="hidden md:block absolute left-1/2 -translate-x-1/2">
          <Image
            src="/FangLogo.png"
            alt="Fang Dynamics Logo"
            width={60}
            height={60}
            className="object-contain"
          />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6 lg:gap-10">
          <a href="/brands" className="text-xs lg:text-sm font-medium tracking-widest uppercase text-primary transition-colors">
            Brands
          </a>
          <a href="/about" className="text-xs lg:text-sm font-medium tracking-widest uppercase text-white hover:text-primary transition-colors">
            About
          </a>
          <a href="/#contact" className="text-xs lg:text-sm font-medium tracking-widest uppercase text-white hover:text-primary transition-colors">
            Contact
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-white hover:text-primary transition-colors p-2"
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-black/95 backdrop-blur-sm border-t border-gray-800 md:hidden">
            <nav className="flex flex-col p-4 space-y-4">
              <a
                href="/brands"
                className="text-sm font-medium tracking-widest uppercase text-primary transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Brands
              </a>
              <a
                href="/about"
                className="text-sm font-medium tracking-widest uppercase text-white hover:text-primary transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </a>
              <a
                href="/#contact"
                className="text-sm font-medium tracking-widest uppercase text-white hover:text-primary transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact / Inquiries
              </a>
            </nav>
          </div>
        )}
      </header>

      {/* Brands Section */}
      <section className="relative text-foreground py-12 md:py-24 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold uppercase font-poppins tracking-tighter mb-6 md:mb-8 text-center">
            Brands We Work With
          </h1>

          <p className="text-base md:text-xl text-white leading-relaxed text-center mb-8 md:mb-16 max-w-2xl mx-auto">
            We partner exclusively with industry-leading manufacturers known for their
            engineering excellence and unwavering commitment to quality.
          </p>

          {/* Brand Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 mb-12 md:mb-16">
            {brands.map((brand) => (
              <div
                key={brand.name}
                className="group relative bg-background/20 backdrop-blur-sm border-2 border-gray-700 hover:border-primary rounded-lg p-6 md:p-8 transition-all duration-300 hover:scale-105 hover:bg-background/30"
              >
                <div className="text-center">
                  {/* Brand logo */}
                  <div className="mb-3 md:mb-4 flex items-center justify-center">
                    <div className="w-24 h-24 md:w-32 md:h-32 bg-white rounded-lg flex items-center justify-center p-3 md:p-4">
                      <Image
                        src={brand.logo}
                        alt={`${brand.name} logo`}
                        width={120}
                        height={120}
                        className="object-contain w-full h-full"
                      />
                    </div>
                  </div>
                  <h3 className="text-lg md:text-2xl font-bold uppercase font-poppins tracking-tight mb-2 md:mb-3 text-white group-hover:text-primary transition-colors">
                    {brand.name}
                  </h3>
                  <p className="text-xs md:text-sm text-white uppercase tracking-wider font-poppins">
                    {brand.specialty}
                  </p>
                </div>
                {/* Accent corner */}
                <div className="absolute top-0 right-0 w-8 h-8 md:w-12 md:h-12 border-t-2 border-r-2 border-primary/0 group-hover:border-primary/50 rounded-tr-lg transition-all duration-300" />
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="text-center pt-8 md:pt-12 border-t border-border">
            <h2 className="text-2xl md:text-3xl font-bold uppercase font-poppins tracking-tighter mb-4 md:mb-6">
              Looking for a Specific Brand?
            </h2>
            <p className="text-base md:text-lg text-white mb-6 md:mb-8 max-w-xl mx-auto">
              If you're seeking parts from a brand not listed here, reach out to us.
              Our network extends beyond these trusted partners.
            </p>
            <a
              href="/#contact"
              className="inline-block px-6 md:px-8 py-3 md:py-4 bg-primary text-primary-foreground uppercase tracking-wider font-medium text-xs md:text-sm hover:brightness-110 transition-all rounded-md"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
