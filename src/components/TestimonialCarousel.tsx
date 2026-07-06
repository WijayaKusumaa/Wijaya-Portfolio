import React, { useState, useEffect, useRef, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { useInViewAnimation } from '../hooks/useInViewAnimation';

interface Testimonial {
  id: number;
  quote: string;
  name: string;
  role: string;
  avatarUrl: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    quote:
      'With very little guidance the team delivered designs that were consistently spot on. They have an exceptional ability to translate abstract ideas into polished, production-ready visuals.',
    name: 'Marcus Anderson',
    role: 'CEO, Data.storage',
    avatarUrl: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=100',
  },
  {
    id: 2,
    quote:
      'Wijaya led the creation of our best fundraising deck to date! The work was thoughtful, beautiful, and delivered ahead of schedule.',
    name: 'alexwu',
    role: 'Founder, Nexgate',
    avatarUrl: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100',
  },
  {
    id: 3,
    quote:
      'Working with Wijaya transformed our product vision into a stunning reality. The attention to detail and design quality is unlike anything I\'ve seen.',
    name: 'James Mitchell',
    role: 'VP Product, LaunchPad',
    avatarUrl: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=100',
  },
  {
    id: 4,
    quote:
      'The design quality exceeded our expectations at every milestone. Wijaya truly understands how to translate strategy into visual storytelling.',
    name: 'Rachel Foster',
    role: 'Co-founder, Nexus Labs',
    avatarUrl: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=100',
  },
  {
    id: 5,
    quote:
      'Incredible work from start to finish. The team is fast, communicative, and produces designs that feel premium and intentional.',
    name: 'David Zhang',
    role: 'Head of Design, Paradigm Labs',
    avatarUrl: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=100',
  },
];

// Triple the array for infinite loop effect
const allTestimonials = [...testimonials, ...testimonials, ...testimonials];

const TestimonialCarousel: React.FC = () => {
  const { ref: sectionRef, inView } = useInViewAnimation();
  const [currentIndex, setCurrentIndex] = useState(testimonials.length); // start at middle set
  const [isPaused, setIsPaused] = useState(false);
  const trackRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  const CARD_WIDTH = 427.5;
  const GAP = 24;

  const goTo = useCallback((index: number) => {
    setCurrentIndex(index);
  }, []);

  const next = useCallback(() => {
    setCurrentIndex((prev) => {
      const next = prev + 1;
      if (next >= testimonials.length * 2) {
        return testimonials.length;
      }
      return next;
    });
  }, []);

  const prev = useCallback(() => {
    setCurrentIndex((prev) => {
      const next = prev - 1;
      if (next < testimonials.length) {
        return testimonials.length * 2 - 1;
      }
      return next;
    });
  }, []);

  useEffect(() => {
    if (isPaused) return;
    intervalRef.current = setInterval(() => {
      next();
    }, 3000);
    return () => clearInterval(intervalRef.current);
  }, [isPaused, next]);

  const translateX = -(currentIndex * (CARD_WIDTH + GAP));

  return (
    <section
      ref={sectionRef as React.RefObject<HTMLElement>}
      className="w-full py-20"
      id="testimonials"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div
        className={`${inView ? 'animate-fade-in-up' : 'opacity-0'} max-w-[1200px] mx-auto px-6 mb-12 flex items-center justify-between`}
        style={{ animationDelay: inView ? '0.1s' : '0s' }}
      >
        <h2 className="text-[32px] md:text-[40px] lg:text-[44px] leading-[1.1] text-[#0D212C] tracking-tight font-semibold">
          What{' '}
          <span className="font-mondwest font-normal">builders</span>{' '}
          say
        </h2>

        <div className="flex items-center gap-3 flex-shrink-0">
          <div className="flex items-center gap-0.5">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="w-5 h-5 text-black star-filled" fill="black" />
            ))}
          </div>
          <span className="text-sm font-medium text-[#051A24]">Clutch 5/5</span>
        </div>
      </div>

      {/* Carousel + Controls */}
      <div
        className={`${inView ? 'animate-fade-in-up' : 'opacity-0'} flex items-center gap-4 px-6`}
        style={{ animationDelay: inView ? '0.2s' : '0s' }}
      >
        {/* Prev button */}
        <button
          onClick={prev}
          className="w-12 h-12 rounded-full border border-[#0D212C]/20 flex items-center justify-center flex-shrink-0 hover:bg-gray-50 transition-colors"
        >
          <ChevronLeft className="w-5 h-5 text-[#051A24]" />
        </button>

        {/* Track wrapper */}
        <div className="flex-1 overflow-hidden">
          <div
            ref={trackRef}
            className="flex testimonial-carousel-track"
            style={{
              transform: `translateX(${translateX}px)`,
              gap: `${GAP}px`,
            }}
          >
            {allTestimonials.map((t, i) => (
              <div
                key={`${t.id}-${i}`}
                className="flex-shrink-0 bg-white rounded-[32px] md:rounded-[40px] px-6 md:pl-10 md:pr-24 py-8"
                style={{
                  width: `${CARD_WIDTH}px`,
                  boxShadow: '0 4px 16px rgba(0,0,0,0.08)',
                }}
              >
                {/* Quote icon */}
                <svg
                  width="32"
                  height="24"
                  viewBox="0 0 32 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mb-4 opacity-20"
                >
                  <path
                    d="M0 24V14.4C0 10.56 0.96 7.36 2.88 4.8C4.8 2.24 7.68 0.64 11.52 0L13.44 2.88C11.2 3.36 9.44 4.32 8.16 5.76C6.88 7.2 6.08 8.96 5.76 11.04H10.08V24H0ZM18.56 24V14.4C18.56 10.56 19.52 7.36 21.44 4.8C23.36 2.24 26.24 0.64 30.08 0L32 2.88C29.76 3.36 28 4.32 26.72 5.76C25.44 7.2 24.64 8.96 24.32 11.04H28.64V24H18.56Z"
                    fill="#051A24"
                  />
                </svg>

                {/* Quote text */}
                <p className="text-base text-[#0D212C] leading-relaxed mb-6">
                  "{t.quote}"
                </p>

                {/* Author row */}
                <div className="flex items-center gap-3">
                  <img
                    src={t.avatarUrl}
                    alt={t.name}
                    className="w-12 h-12 rounded-full object-cover flex-shrink-0"
                  />
                  <div>
                    <p className="font-semibold text-sm text-[#051A24]">{t.name}</p>
                    <p className="text-xs text-[#273C46]">
                      → {t.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Next button */}
        <button
          onClick={next}
          className="w-12 h-12 rounded-full border border-[#0D212C]/20 flex items-center justify-center flex-shrink-0 hover:bg-gray-50 transition-colors"
        >
          <ChevronRight className="w-5 h-5 text-[#051A24]" />
        </button>
      </div>

      {/* Dot indicators */}
      <div
        className={`${inView ? 'animate-fade-in-up' : 'opacity-0'} flex items-center justify-center gap-2 mt-8`}
        style={{ animationDelay: inView ? '0.3s' : '0s' }}
      >
        {testimonials.map((_, i) => {
          const normalizedIndex = ((currentIndex - testimonials.length) % testimonials.length + testimonials.length) % testimonials.length;
          return (
            <button
              key={i}
              onClick={() => goTo(i + testimonials.length)}
              className={`rounded-full transition-all duration-300 ${
                normalizedIndex === i
                  ? 'w-6 h-2 bg-[#051A24]'
                  : 'w-2 h-2 bg-[#051A24]/20'
              }`}
            />
          );
        })}
      </div>
    </section>
  );
};

export default TestimonialCarousel;
