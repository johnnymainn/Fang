"use client";

import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [absoluteMousePosition, setAbsoluteMousePosition] = useState({ x: 0, y: 0 });

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

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen bg-background text-foreground overflow-hidden flex flex-col">
        {/* Decorative background layers */}
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
          {/* Animated gradient from black to dark blue - diagonal */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_black_0%,_black_30%,_#0a0a0f_50%,_#0f1428_80%,_#1e3a8a_100%)]" />

          {/* Moving grid pattern - very subtle base */}
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `linear-gradient(rgba(100, 200, 255, 0.8) 1px, transparent 1px),
                                linear-gradient(90deg, rgba(100, 200, 255, 0.8) 1px, transparent 1px)`,
              backgroundSize: '60px 60px',
              transform: `translate(${mousePosition.x * 40}px, ${mousePosition.y * 40}px)`,
              transition: 'transform 0.1s ease-out',
            }}
          />

          {/* Second layer - opposite movement */}
          <div
            className="absolute inset-0 opacity-[0.02]"
            style={{
              backgroundImage: `linear-gradient(rgba(100, 200, 255, 0.8) 1px, transparent 1px),
                                linear-gradient(90deg, rgba(100, 200, 255, 0.8) 1px, transparent 1px)`,
              backgroundSize: '30px 30px',
              transform: `translate(${mousePosition.x * -30}px, ${mousePosition.y * -30}px)`,
              transition: 'transform 0.15s ease-out',
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
        <header className="relative z-10 flex items-center justify-between px-8 py-6">
          <a href="/" className="text-base font-medium tracking-wider uppercase text-white hover:text-primary transition-colors">
            Fang Dynamics
          </a>
          <nav className="flex gap-10">
            <a href="/about" className="text-sm font-medium tracking-widest uppercase text-white hover:text-primary transition-colors">
              About
            </a>
            <a href="#contact" className="text-sm font-medium tracking-widest uppercase text-white hover:text-primary transition-colors">
              Contact / Inquiries
            </a>
          </nav>
        </header>

        {/* Main composition area */}
        <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-8 pb-20">
          {/* Title region - centered */}
          <div className="text-center mb-16">
            <h1 className="text-[clamp(4rem,15vw,12rem)] font-bold leading-[0.85] tracking-tighter uppercase">
              Fang<br />
              Dynamics
            </h1>
          </div>

          {/* Supporting content cluster - centered below title */}
          <div className="max-w-md text-center mb-8">
            <p className="text-lg leading-relaxed text-muted-foreground mb-8">
              Premium European vehicle parts.
              Engineered for precision, curated for excellence.
            </p>
            <Button
              size="lg"
              className="uppercase tracking-wider font-medium text-sm"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Request Inquiry
            </Button>
          </div>

          {/* Bottom micro-elements */}
          <div className="absolute bottom-8 left-8">
            {/* Bottom-left status */}
            <div className="text-xs uppercase tracking-widest text-muted-foreground">
              Accepting inquiries
            </div>
          </div>
        </div>

        {/* Right-edge vertical tab - accent affordance */}
        <button
          onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          className="fixed right-0 top-1/2 -translate-y-1/2 bg-primary text-primary-foreground px-4 py-6 text-xs uppercase tracking-widest font-medium hover:brightness-110 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background z-50"
          style={{ writingMode: 'vertical-rl' }}
        >
          Get Quote
        </button>

        {/* Gradient fade transition element */}
        <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-b from-transparent via-blue-950/50 to-blue-950 pointer-events-none" />
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative min-h-screen bg-black text-foreground py-24 px-8 flex items-center justify-center">
        <div className="max-w-2xl mx-auto w-full">
          <h2 className="text-5xl md:text-7xl font-bold uppercase tracking-tighter mb-8 text-center">
            Get in Touch
          </h2>

          <p className="text-lg text-muted-foreground mb-12 leading-relaxed text-center">
            Ready to source premium parts for your European vehicle?
            Submit your inquiry below for a personalized consultation.
          </p>

          {/* Contact Form */}
          <form
            action={`mailto:fangdynamics@gmail.com`}
            method="POST"
            encType="text/plain"
            className="space-y-6 mb-12"
          >
            <div>
              <label htmlFor="email" className="block text-sm uppercase tracking-widest text-primary mb-2">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-3 bg-background/30 border-2 border-gray-700 rounded-md text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm uppercase tracking-widest text-primary mb-2">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                required
                className="w-full px-4 py-3 bg-background/30 border-2 border-gray-700 rounded-md text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all"
                placeholder="Parts inquiry for..."
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm uppercase tracking-widest text-primary mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={6}
                className="w-full px-4 py-3 bg-background/30 border-2 border-gray-700 rounded-md text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all resize-none"
                placeholder="Please describe your vehicle and the parts you're looking for..."
              />
            </div>

            <Button
              type="submit"
              size="lg"
              className="w-full uppercase tracking-wider font-medium text-sm"
            >
              Send Inquiry
            </Button>
          </form>

          <div className="text-center space-y-6 mb-12">
            <div>
              <h3 className="text-sm uppercase tracking-widest text-primary mb-2">Direct Email</h3>
              <a href="mailto:fangdynamics@gmail.com" className="text-xl text-white hover:text-primary transition-colors">
                fangdynamics@gmail.com
              </a>
            </div>

            <div>
              <h3 className="text-sm uppercase tracking-widest text-primary mb-2">Hours</h3>
              <p className="text-muted-foreground">
                Monday - Friday: 9:00 AM - 6:00 PM EST<br />
                Saturday: By Appointment Only
              </p>
            </div>
          </div>

          <div className="mt-16 pt-8 border-t border-border text-center">
            <p className="text-xs uppercase tracking-widest text-muted-foreground">
              © 2026 Fang Dynamics. Premium European Vehicle Parts.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
