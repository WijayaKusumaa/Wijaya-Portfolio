import React from 'react';
import './index.css';
import { useInViewAnimation } from './hooks/useInViewAnimation';
import Button from './components/Button';
import TestimonialSection from './components/TestimonialSection';
import PricingSection from './components/PricingSection';
import TestimonialCarousel from './components/TestimonialCarousel';
import ProjectsSection from './components/ProjectsSection';
import PartnerSection from './components/PartnerSection';
import Footer from './components/Footer';
import CopyrightBar from './components/CopyrightBar';
import BottomNav from './components/BottomNav';

const marqueeImages = [
  'https://motionsites.ai/assets/hero-space-voyage-preview-eECLH3Yc.gif',
  'https://motionsites.ai/assets/hero-portfolio-cosmic-preview-BpvWJ3Nc.gif',
  'https://motionsites.ai/assets/hero-velorah-preview-CJNTtbpd.gif',
  'https://motionsites.ai/assets/hero-asme-preview-B_nGDnTP.gif',
  'https://motionsites.ai/assets/hero-transform-data-preview-Cx5OU29N.gif',
  'https://motionsites.ai/assets/hero-aethera-preview-DknSlcTa.gif',
  'https://motionsites.ai/assets/hero-orbit-web3-preview-BXt4OttD.gif',
  'https://motionsites.ai/assets/hero-nexora-preview-cx5HmUgo.gif',
];

const allMarqueeImages = [...marqueeImages, ...marqueeImages];

function App() {
  const { ref: heroRef, inView: heroInView } = useInViewAnimation(0.05);

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* ==================== HERO SECTION ==================== */}
      <section
        ref={heroRef as React.RefObject<HTMLElement>}
        className="flex justify-center px-6 pt-12 md:pt-16"
        id="hero"
      >
        <div className="w-full max-w-[440px] flex flex-col">
          {/* Logo */}
          <h1
            className={`${heroInView ? 'animate-fade-in-up' : 'opacity-0'} font-mondwest text-[32px] md:text-[40px] lg:text-[44px] font-semibold text-[#051A24] tracking-tight mb-4`}
            style={{ animationDelay: heroInView ? '0.1s' : '0s' }}
          >
            Wijaya Kusuma
          </h1>

          {/* Tagline */}
          <p
            className={`${heroInView ? 'animate-fade-in-up' : 'opacity-0'} font-mono text-xs md:text-sm text-[#051A24] mb-2`}
            style={{ animationDelay: heroInView ? '0.2s' : '0s' }}
          >
            The creative studio of Wijaya Kusuma
          </p>

          {/* Main Heading */}
          <div
            className={`${heroInView ? 'animate-fade-in-up' : 'opacity-0'} text-[32px] md:text-[40px] lg:text-[44px] leading-[1.1] text-[#0D212C] tracking-tight font-semibold`}
            style={{ animationDelay: heroInView ? '0.3s' : '0s' }}
          >
            <p className="whitespace-nowrap">
              Build the{' '}
              <span className="font-mondwest font-normal">next wave,</span>
            </p>
            <p className="whitespace-nowrap">
              the{' '}
              <span className="font-mondwest font-normal">bold way.</span>
            </p>
          </div>

          {/* Description */}
          <div
            className={`${heroInView ? 'animate-fade-in-up' : 'opacity-0'} flex flex-col gap-6 mt-5 md:mt-6 text-sm md:text-base text-[#051A24] leading-relaxed`}
            style={{ animationDelay: heroInView ? '0.4s' : '0s' }}
          >
            <p>
              I craft digital solutions that bridge the gap between aesthetic design
              and functional performance. As an independent freelancer, my process is
              built on clarity, technical rigor, and personal accountability. I don’t
              just write code; I architect environments that resonate with users.
            </p>
            <p>
              Whether it’s building high-performance web applications, developing premium
              corporate platforms with smooth physics-based scrolling, or crafting immersive
              user interfaces featuring custom cursors and micro-interactions, I provide a
              boutique service that moves fast and delivers long-term impact.
            </p>
            <p>Projects start at $??? per month.</p>
          </div>

          {/* CTA Buttons */}
          <div
            className={`${heroInView ? 'animate-fade-in-up' : 'opacity-0'} flex flex-col sm:flex-row gap-3 md:gap-4 mt-5 md:mt-6`}
            style={{ animationDelay: heroInView ? '0.5s' : '0s' }}
          >
            <Button variant="primary" href="https://www.instagram.com/haswaltch_/">
              Start a chat
            </Button>
            <Button variant="secondary" href="#work">
              View projects
            </Button>
          </div>
        </div>
      </section>

      {/* ==================== INFINITE MARQUEE ==================== */}
      <div className="mt-16 md:mt-20 mb-16 overflow-hidden w-full">
        <div className="animate-marquee">
          {allMarqueeImages.map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`Project preview ${(i % marqueeImages.length) + 1}`}
              className="h-[280px] md:h-[500px] object-cover mx-3 rounded-2xl shadow-lg flex-shrink-0"
              loading={i < 4 ? 'eager' : 'lazy'}
            />
          ))}
        </div>
      </div>

      {/* ==================== TESTIMONIAL QUOTE SECTION ==================== */}
      <TestimonialSection />

      {/* ==================== PRICING SECTION ==================== */}
      <PricingSection />

      {/* ==================== TESTIMONIAL CAROUSEL ==================== */}
      <TestimonialCarousel />

      {/* ==================== PROJECTS SECTION ==================== */}
      <ProjectsSection />

      {/* ==================== PARTNER SECTION ==================== */}
      <PartnerSection />

      {/* ==================== FOOTER ==================== */}
      <Footer />

      {/* ==================== COPYRIGHT BAR ==================== */}
      <CopyrightBar />

      {/* ==================== FIXED BOTTOM NAV ==================== */}
      <BottomNav />

      {/* Bottom padding to prevent content hidden behind bottom nav */}
      <div className="h-24" />
    </div>
  );
}

export default App;
