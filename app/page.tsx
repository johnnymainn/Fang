"use client";

import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [absoluteMousePosition, setAbsoluteMousePosition] = useState({ x: 0, y: 0 });
  const [formStatus, setFormStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Normalized position for grid movement
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 2,
        y: (e.clientY / window.innerHeight - 0.5) * 2,
      });
      // Absolute position for spotlight effect
      setAbsoluteMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus('loading');

    const formData = new FormData(e.currentTarget);
    const data = {
      email: formData.get('email'),
      subject: formData.get('subject'),
      message: formData.get('message'),
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      console.log('Response status:', response.status);
      console.log('Response ok:', response.ok);

      const responseData = await response.json();
      console.log('Response data:', responseData);

      if (response.ok && responseData.success) {
        setFormStatus('success');
        e.currentTarget.reset();
        setTimeout(() => setFormStatus('idle'), 5000);
      } else {
        console.error('Form submission failed:', responseData.error || 'Unknown error');
        setFormStatus('error');
        setTimeout(() => setFormStatus('idle'), 5000);
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setFormStatus('error');
      setTimeout(() => setFormStatus('idle'), 5000);
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen bg-background text-foreground overflow-hidden flex flex-col">
        {/* Decorative background layers */}
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
          {/* Plain black background */}
          <div className="absolute inset-0 bg-black" />

          {/* Single tighter grid - very subtle */}
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `linear-gradient(rgba(100, 200, 255, 0.8) 1px, transparent 1px),
                                linear-gradient(90deg, rgba(100, 200, 255, 0.8) 1px, transparent 1px)`,
              backgroundSize: '30px 30px',
              transform: `translate(${mousePosition.x * 30}px, ${mousePosition.y * 30}px)`,
              transition: 'transform 0.1s ease-out',
            }}
          />

          {/* Mouse spotlight effect - lights up grid on hover */}
          <div
            className="absolute inset-0 opacity-40 transition-opacity duration-300"
            style={{
              background: `radial-gradient(600px circle at ${absoluteMousePosition.x}px ${absoluteMousePosition.y}px, rgba(100, 200, 255, 0.15), transparent 40%)`,
            }}
          />
        </div>

        {/* Header */}
        <header className="relative z-50 flex items-center justify-between px-4 md:px-8 py-6">
          <a href="/" className="text-sm md:text-base font-medium tracking-wider uppercase text-white hover:text-primary transition-colors">
            Fang Dynamics
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-6 lg:gap-10">
            <a href="/brands" className="text-xs lg:text-sm font-medium tracking-widest uppercase text-white hover:text-primary transition-colors">
              Brands
            </a>
            <a href="/about" className="text-xs lg:text-sm font-medium tracking-widest uppercase text-white hover:text-primary transition-colors">
              About
            </a>
            <a href="#contact" className="text-xs lg:text-sm font-medium tracking-widest uppercase text-white hover:text-primary transition-colors">
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
                  className="text-sm font-medium tracking-widest uppercase text-white hover:text-primary transition-colors py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  About
                </a>
                <a
                  href="#contact"
                  className="text-sm font-medium tracking-widest uppercase text-white hover:text-primary transition-colors py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Contact / Inquiries
                </a>
              </nav>
            </div>
          )}
        </header>

        {/* Main composition area */}
        <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-4 md:px-8 pb-20">
          {/* Logo and text - text positioned halfway down */}
          <div className="text-center mb-4 flex flex-col items-center gap-0">
            <Image
              src="/FangLogo.png"
              alt="Fang Dynamics Logo"
              width={250}
              height={250}
              className="object-contain w-[40vw] md:w-[250px] md:max-w-[45vw] h-auto"
              priority
            />
            <Image
              src="/LogoText.jpeg"
              alt="Fang Dynamics"
              width={765}
              height={255}
              className="object-contain w-[85vw] md:w-auto md:max-w-[80vw] h-auto"
            />
          </div>

          {/* Supporting content cluster - closer to logo */}
          <div className="max-w-md text-center mb-8 mt-4 md:mt-15 px-4">
            <p className="text-base md:text-xl leading-relaxed text-white mb-6 md:mb-8 font-poppins">
              Premium European vehicle parts.
              Engineered for precision, curated for excellence.
            </p>
            <Button
              size="lg"
              className="uppercase tracking-wider font-medium text-xs md:text-sm font-poppins hover:scale-105 transition-transform duration-200"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Submit Inquiry
            </Button>
          </div>

          {/* Bottom micro-elements */}
          <div className="absolute bottom-4 md:bottom-8 left-4 md:left-8">
            {/* Bottom-left status */}
            <div className="text-xs md:text-sm uppercase tracking-widest text-white font-poppins">
              Accepting inquiries
            </div>
          </div>
        </div>

        {/* Right-edge vertical tab - accent affordance (hidden on mobile) */}
        <button
          onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          className="hidden md:block fixed right-0 top-1/2 -translate-y-1/2 bg-primary text-primary-foreground px-4 py-6 text-xs uppercase tracking-widest font-medium hover:brightness-110 hover:scale-105 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background z-50 font-poppins"
          style={{ writingMode: 'vertical-rl' }}
        >
          Get Quote
        </button>

      </section>

      {/* Contact Section */}
      <section id="contact" className="relative min-h-screen bg-black text-white py-12 md:py-24 px-4 md:px-8 flex items-center justify-center">
        <div className="max-w-2xl mx-auto w-full">
          <h2 className="text-3xl md:text-5xl lg:text-7xl font-bold uppercase tracking-tighter mb-6 md:mb-8 text-center font-poppins">
            Get in Touch
          </h2>

          <p className="text-base md:text-xl text-white mb-8 md:mb-12 leading-relaxed text-center font-poppins">
            Ready to source premium parts for your European vehicle?
            Submit your inquiry below for a personalized consultation.
          </p>

          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="space-y-6 mb-12"
          >
            <div>
              <label htmlFor="email" className="block text-sm uppercase tracking-widest text-primary mb-2 font-poppins">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-3 bg-gray-800 border-2 border-gray-700 rounded-md text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all font-poppins"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm uppercase tracking-widest text-primary mb-2 font-poppins">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                required
                className="w-full px-4 py-3 bg-gray-800 border-2 border-gray-700 rounded-md text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all font-poppins"
                placeholder="Parts inquiry for..."
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm uppercase tracking-widest text-primary mb-2 font-poppins">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={6}
                className="w-full px-4 py-3 bg-gray-800 border-2 border-gray-700 rounded-md text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all resize-none font-poppins"
                placeholder="Please describe your vehicle and the parts you're looking for..."
              />
            </div>

            <Button
              type="submit"
              size="lg"
              disabled={formStatus === 'loading'}
              className="w-full uppercase tracking-wider font-medium text-sm font-poppins hover:scale-105 transition-transform duration-200"
            >
              {formStatus === 'loading' ? 'Sending...' : 'Send Inquiry'}
            </Button>

            {formStatus === 'success' && (
              <div className="p-4 bg-green-900/50 border border-green-500 rounded-md text-white text-center font-poppins">
                Message sent successfully! We'll get back to you soon.
              </div>
            )}
          </form>

          <div className="text-center space-y-6 mb-12">
            <div>
              <h3 className="text-xs md:text-sm uppercase tracking-widest text-primary mb-2 font-poppins">Direct Email</h3>
              <a href="mailto:fangdynamics@gmail.com" className="text-base md:text-xl text-white hover:text-primary transition-colors font-poppins break-all">
                fangdynamics@gmail.com
              </a>
            </div>

            <div>
              <h3 className="text-xs md:text-sm uppercase tracking-widest text-primary mb-2 font-poppins">Hours</h3>
              <p className="text-sm md:text-base text-white font-poppins">
                Monday - Friday: 9:00 AM - 6:00 PM EST<br />
                Saturday: By Appointment Only
              </p>
            </div>
          </div>

          <div className="mt-8 md:mt-16 pt-6 md:pt-8 border-t border-gray-700 text-center">
            <p className="text-xs md:text-sm uppercase tracking-widest text-white font-poppins">
              © 2026 Fang Dynamics. Premium European Vehicle Parts.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
