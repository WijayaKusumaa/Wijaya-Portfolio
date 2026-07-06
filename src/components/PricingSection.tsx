import React, { useState } from 'react';
import Button from './Button';
import { useInViewAnimation } from '../hooks/useInViewAnimation';

const PricingSection: React.FC = () => {
  const { ref: sectionRef, inView } = useInViewAnimation();
  const [activeCard, setActiveCard] = useState<number | null>(null);

  const bookUrl = 'https://www.instagram.com/haswaltch_/';

  const handleCardClick = (id: number) => {
    setActiveCard((prev) => (prev === id ? null : id));
  };

  return (
    <section
      ref={sectionRef as React.RefObject<HTMLElement>}
      className="w-full py-12 px-6"
      id="pricing"
    >
      <div className="max-w-[1200px] mx-auto">
        {/* Section title */}
        <div
          className={`${inView ? 'animate-fade-in-up' : 'opacity-0'} mb-12`}
          style={{ animationDelay: inView ? '0.05s' : '0s' }}
        >
          <p className="text-xs font-mono text-[#273C46] mb-2 uppercase tracking-widest">
            Pricing & Services
          </p>
          <h2 className="text-[32px] md:text-[40px] lg:text-[44px] leading-[1.1] text-[#0D212C] tracking-tight font-semibold">
            Boutique services, <span className="font-mondwest font-normal">transparent</span> rates
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {/* Card 1 - Audit & Strategy (Light) */}
          <div
            onClick={() => handleCardClick(1)}
            className={`cursor-pointer transition-all duration-500 ease-out bg-white rounded-[40px] pl-10 pr-10 md:pr-14 pt-3 pb-10 flex flex-col justify-between ${
              activeCard === 1
                ? 'scale-[1.03] ring-2 ring-[#051A24] shadow-2xl z-10'
                : activeCard !== null
                ? 'opacity-40 scale-[0.97] blur-[0.5px]'
                : 'hover:scale-[1.01] hover:shadow-lg'
            } ${inView ? 'animate-fade-in-up' : 'opacity-0'}`}
            style={{
              boxShadow: activeCard === 1 ? '0 20px 40px rgba(0,0,0,0.12)' : '0 4px 16px rgba(0,0,0,0.08)',
              animationDelay: inView ? '0.1s' : '0s',
            }}
          >
            <div className="flex flex-col gap-6 pt-8 h-full justify-between">
              <div>
                {/* Badge */}
                <span
                  className="self-start inline-block text-xs font-medium px-3 py-1 rounded-full mb-6"
                  style={{ background: 'rgba(5,26,36,0.06)', color: '#051A24' }}
                >
                  One-Time
                </span>

                {/* Title */}
                <div className="mb-6">
                  <h3
                    className="font-medium mb-2"
                    style={{ fontSize: '22px', color: '#0D212C' }}
                  >
                    UX & Code Audit
                  </h3>
                  <p style={{ color: '#273C46' }} className="text-sm leading-relaxed">
                    Deep-dive analysis of your web product.<br />
                    Identify design and code bottlenecks.
                  </p>
                </div>

                {/* Price */}
                <div className="mb-6">
                  <span className="text-2xl font-semibold" style={{ color: '#0D212C' }}>
                    $1,500
                  </span>
                  <p className="text-sm mt-1" style={{ color: '#273C46' }}>
                    Flat Rate
                  </p>
                </div>

                {/* Divider */}
                <div
                  className="w-full h-px mb-6"
                  style={{ background: 'rgba(5,26,36,0.06)' }}
                />

                {/* Features */}
                <ul className="flex flex-col gap-3">
                  {[
                    'UX/UI audit report',
                    'Performance & SEO analysis',
                    'Vite & React architecture review',
                    '2-hour strategic roadmap session',
                  ].map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-2 text-sm"
                      style={{ color: '#051A24' }}
                    >
                      <span
                        className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0"
                        style={{ background: 'rgba(5,26,36,0.08)' }}
                      >
                        <svg
                          width="8"
                          height="6"
                          viewBox="0 0 8 6"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M1 3L3 5L7 1"
                            stroke="#051A24"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Button */}
              <div className="mt-8" onClick={(e) => e.stopPropagation()}>
                <Button variant="tertiary" href={bookUrl} className="w-full">
                  Start a chat
                </Button>
              </div>
            </div>
          </div>

          {/* Card 2 - Monthly Partnership (Dark) */}
          <div
            onClick={() => handleCardClick(2)}
            className={`cursor-pointer transition-all duration-500 ease-out rounded-[40px] pl-10 pr-10 md:pr-14 pt-3 pb-10 flex flex-col justify-between ${
              activeCard === 2
                ? 'scale-[1.03] ring-2 ring-white shadow-2xl z-10'
                : activeCard !== null
                ? 'opacity-40 scale-[0.97] blur-[0.5px]'
                : 'hover:scale-[1.01] hover:shadow-lg'
            } ${inView ? 'animate-fade-in-up' : 'opacity-0'}`}
            style={{
              backgroundColor: '#051A24',
              boxShadow: activeCard === 2 
                ? '0 20px 40px rgba(5,26,36,0.3), inset 0 1px 0 rgba(255,255,255,0.06)' 
                : 'inset 0 1px 0 rgba(255,255,255,0.06), inset 0 -1px 0 rgba(0,0,0,0.2)',
              animationDelay: inView ? '0.2s' : '0s',
            }}
          >
            <div className="flex flex-col gap-6 pt-8 h-full justify-between">
              <div>
                {/* Badge */}
                <span
                  className="self-start inline-block text-xs font-medium px-3 py-1 rounded-full mb-6"
                  style={{ background: 'rgba(246,252,255,0.1)', color: '#E0EBF0' }}
                >
                  Most Popular
                </span>

                {/* Title */}
                <div className="mb-6">
                  <h3
                    className="font-medium mb-2"
                    style={{ fontSize: '22px', color: '#F6FCFF' }}
                  >
                    Monthly Partnership
                  </h3>
                  <p style={{ color: '#E0EBF0' }} className="text-sm leading-relaxed">
                    A dedicated creative design team.<br />
                    You work directly with Wijaya.
                  </p>
                </div>

                {/* Price */}
                <div className="mb-6">
                  <span className="text-2xl font-semibold" style={{ color: '#F6FCFF' }}>
                    $5,000
                  </span>
                  <p className="text-sm mt-1" style={{ color: '#E0EBF0' }}>
                    Monthly
                  </p>
                </div>

                {/* Divider */}
                <div
                  className="w-full h-px"
                  style={{ background: 'rgba(255,255,255,0.08)' }}
                />

                {/* Features */}
                <ul className="flex flex-col gap-3 mt-6">
                  {[
                    'Unlimited design requests',
                    'Direct access to Wijaya',
                    'Weekly strategy calls',
                    'Pause or cancel anytime',
                  ].map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-2 text-sm"
                      style={{ color: '#E0EBF0' }}
                    >
                      <span
                        className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0"
                        style={{ background: 'rgba(246,252,255,0.15)' }}
                      >
                        <svg
                          width="8"
                          height="6"
                          viewBox="0 0 8 6"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M1 3L3 5L7 1"
                            stroke="#F6FCFF"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 mt-8" onClick={(e) => e.stopPropagation()}>
                <Button variant="secondary" href={bookUrl} className="flex-1">
                  Start a chat
                </Button>
                <Button variant="tertiary" href={bookUrl} className="flex-1">
                  How it works
                </Button>
              </div>
            </div>
          </div>

          {/* Card 3 - Custom Project (Light) */}
          <div
            onClick={() => handleCardClick(3)}
            className={`cursor-pointer transition-all duration-500 ease-out bg-white rounded-[40px] pl-10 pr-10 md:pr-14 pt-3 pb-10 flex flex-col justify-between ${
              activeCard === 3
                ? 'scale-[1.03] ring-2 ring-[#051A24] shadow-2xl z-10'
                : activeCard !== null
                ? 'opacity-40 scale-[0.97] blur-[0.5px]'
                : 'hover:scale-[1.01] hover:shadow-lg'
            } ${inView ? 'animate-fade-in-up' : 'opacity-0'}`}
            style={{
              boxShadow: activeCard === 3 ? '0 20px 40px rgba(0,0,0,0.12)' : '0 4px 16px rgba(0,0,0,0.08)',
              animationDelay: inView ? '0.3s' : '0s',
            }}
          >
            <div className="flex flex-col gap-6 pt-8 h-full justify-between">
              <div>
                {/* Badge */}
                <span
                  className="self-start inline-block text-xs font-medium px-3 py-1 rounded-full mb-6"
                  style={{ background: 'rgba(5,26,36,0.06)', color: '#051A24' }}
                >
                  Fixed Scope
                </span>

                {/* Title */}
                <div className="mb-6">
                  <h3
                    className="font-medium mb-2"
                    style={{ fontSize: '22px', color: '#0D212C' }}
                  >
                    Custom Project
                  </h3>
                  <p style={{ color: '#273C46' }} className="text-sm leading-relaxed">
                    Fixed scope, fixed timeline.<br />
                    Same team, same standards.
                  </p>
                </div>

                {/* Price */}
                <div className="mb-6">
                  <span className="text-2xl font-semibold" style={{ color: '#0D212C' }}>
                    $5,000
                  </span>
                  <p className="text-sm mt-1" style={{ color: '#273C46' }}>
                    Minimum
                  </p>
                </div>

                {/* Divider */}
                <div
                  className="w-full h-px"
                  style={{ background: 'rgba(5,26,36,0.06)' }}
                />

                {/* Features */}
                <ul className="flex flex-col gap-3 mt-6">
                  {[
                    'Defined deliverables',
                    'Fixed price & timeline',
                    'Direct Wijaya involvement',
                    'Post-launch support',
                  ].map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-2 text-sm"
                      style={{ color: '#051A24' }}
                    >
                      <span
                        className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0"
                        style={{ background: 'rgba(5,26,36,0.08)' }}
                      >
                        <svg
                          width="8"
                          height="6"
                          viewBox="0 0 8 6"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M1 3L3 5L7 1"
                            stroke="#051A24"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Button */}
              <div className="mt-8" onClick={(e) => e.stopPropagation()}>
                <Button variant="primary" href={bookUrl} className="w-full">
                  Start a chat
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
