"use client";

import Image from "next/image";
import { useState } from "react";

export default function About() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-700 to-white">
      {/* Header */}
      <header className="relative z-50 flex items-center justify-between px-4 md:px-8 py-6">
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
          <a href="/brands" className="text-xs lg:text-sm font-medium tracking-widest uppercase text-white hover:text-primary transition-colors">
            Brands
          </a>
          <a href="/about" className="text-xs lg:text-sm font-medium tracking-widest uppercase text-primary transition-colors">
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
          <div className="absolute top-full left-0 right-0 bg-black/95 backdrop-blur-sm border-t border-gray-800 md:hidden z-50">
            <nav className="flex flex-col p-4 space-y-4">
              <a
                href="/brands"
                className="text-sm font-medium tracking-widest uppercase text-white hover:text-primary transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Brands
              </a>
              <a
                href="/about"
                className="text-sm font-medium tracking-widest uppercase text-primary transition-colors py-2"
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

      {/* About Section */}
      <section className="relative text-foreground py-12 md:py-24 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold uppercase font-poppins tracking-tighter mb-8 md:mb-16 text-center">
            About Fang Dynamics
          </h1>

          <div className="prose prose-invert max-w-none mb-8 md:mb-16">
            <p className="text-lg md:text-2xl text-white leading-relaxed text-center mb-8 md:mb-16">
              We are dedicated to providing premium European vehicle parts through a curated,
              direct-to-consumer approach that prioritizes quality, authenticity, and personalized service.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12 mb-12 md:mb-16">
            <div className="space-y-3 md:space-y-4">
              <h2 className="text-xl md:text-2xl font-semibold uppercase font-poppins tracking-wide text-primary">
                Trusted Quality
              </h2>
              <p className="text-sm md:text-base text-white leading-relaxed">
                We partner exclusively with premium, trusted brands known for their engineering excellence.
                Every component meets our rigorous standards for performance and reliability. No compromises,
                no substitutes - only the finest parts for discerning vehicle owners.
              </p>
            </div>

            <div className="space-y-3 md:space-y-4">
              <h2 className="text-xl md:text-2xl font-semibold uppercase font-poppins tracking-wide text-primary">
                Bespoke Service
              </h2>
              <p className="text-sm md:text-base text-white leading-relaxed">
                All parts and services are available by inquiry only. This ensures personalized attention
                to your specific vehicle requirements and guarantees authenticity. We take the time to understand
                your needs and source exactly what your vehicle demands.
              </p>
            </div>

            <div className="space-y-3 md:space-y-4">
              <h2 className="text-xl md:text-2xl font-semibold uppercase font-poppins tracking-wide text-primary">
                European Focus
              </h2>
              <p className="text-sm md:text-base text-white leading-relaxed">
                Specializing in premium European marques, we understand the unique demands of high-performance
                vehicles. From German precision to Japanese craftsmanship, we source parts that maintain
                the exceptional standards these vehicles were built to uphold.
              </p>
            </div>

            <div className="space-y-3 md:space-y-4">
              <h2 className="text-xl md:text-2xl font-semibold uppercase font-poppins tracking-wide text-primary">
                Direct Excellence
              </h2>
              <p className="text-sm md:text-base text-white leading-relaxed">
                Our direct-to-consumer model eliminates middlemen, ensuring competitive pricing without
                compromising on the premium quality our clients expect. You get authentic parts at fair prices,
                with the assurance that comes from dealing directly with specialists.
              </p>
            </div>
          </div>

          <div className="border-t border-border pt-8 md:pt-12 mt-8 md:mt-12">
            <h2 className="text-2xl md:text-3xl font-bold uppercase font-poppins tracking-tighter mb-6 md:mb-8 text-center">
              Our Philosophy
            </h2>
            <div className="space-y-4 md:space-y-6 text-sm md:text-base text-white leading-relaxed max-w-2xl mx-auto">
              <p>
                At Fang Dynamics, we believe that maintaining a premium European vehicle requires more than
                just parts - it demands expertise, authenticity, and an unwavering commitment to quality.
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

          <div className="text-center mt-12 md:mt-16">
            <p className="text-xs md:text-sm uppercase tracking-widest text-primary mb-6 md:mb-8">
              Premium parts. Expert curation. Uncompromising standards.
            </p>
            <a
              href="/#contact"
              className="inline-block px-6 md:px-8 py-3 md:py-4 bg-primary text-primary-foreground uppercase tracking-wider font-medium text-xs md:text-sm hover:brightness-110 transition-all rounded-md"
            >
              Start Your Inquiry
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
