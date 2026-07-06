import React from 'react';
import Button from './Button';
import { ArrowUpRight } from 'lucide-react';
import { useInViewAnimation } from '../hooks/useInViewAnimation';

const Footer: React.FC = () => {
  const { ref: sectionRef, inView } = useInViewAnimation();

  const navLinks = [
    { label: 'Services', href: '#pricing' },
    { label: 'Work', href: '#work' },
    { label: 'About', href: '#about' },
  ];

  const socialLinks = [
    { label: 'Instagram', href: 'https://www.instagram.com/haswaltch_/', external: true },
    { label: 'LinkedIn', href: 'https://linkedin.com', external: true },
  ];

  return (
    <footer
      ref={sectionRef as React.RefObject<HTMLElement>}
      className="max-w-[1200px] mx-auto px-6 py-16 md:py-24"
    >
      <div
        className={`${inView ? 'animate-fade-in-up' : 'opacity-0'} flex flex-col lg:flex-row items-start lg:items-end justify-between gap-12 lg:gap-8`}
        style={{ animationDelay: inView ? '0.1s' : '0s' }}
      >
        {/* Left: Headline & Button */}
        <div className="flex flex-col gap-6 max-w-lg">
          <h2 className="text-[32px] md:text-[40px] leading-[1.1] text-[#0D212C] tracking-tight font-semibold">
            Let’s build the <span className="font-mondwest font-normal italic">next wave</span> together.
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
            <Button
              variant="primary"
              href="https://www.instagram.com/haswaltch_/"
            >
              Start a chat
            </Button>
            <span className="text-xs font-mono text-[#273C46] tracking-wider uppercase">
              // Available for freelance projects
            </span>
          </div>
        </div>

        {/* Right: Directories */}
        <div className="flex items-start gap-4">
          <ArrowUpRight className="w-5 h-5 text-[#273C46]/50 mt-1 flex-shrink-0" />

          <div className="flex gap-16 md:gap-24">
            {/* Column 1 - Index */}
            <div className="flex flex-col gap-4">
              <span className="text-xs font-mono text-[#273C46]/40 uppercase tracking-widest">Index</span>
              <div className="flex flex-col gap-2.5">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="text-base font-medium text-[#051A24] hover:opacity-75 transition-opacity"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>

            {/* Column 2 - Social */}
            <div className="flex flex-col gap-4">
              <span className="text-xs font-mono text-[#273C46]/40 uppercase tracking-widest">Social</span>
              <div className="flex flex-col gap-2.5">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base font-medium text-[#051A24] hover:opacity-75 transition-opacity"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
