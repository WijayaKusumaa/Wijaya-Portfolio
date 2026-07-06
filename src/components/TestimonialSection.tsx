import React, { useEffect, useRef, useState } from 'react';
import { Quote } from 'lucide-react';
import { useInViewAnimation } from '../hooks/useInViewAnimation';

const TestimonialSection: React.FC = () => {
  const { ref: sectionRef, inView } = useInViewAnimation();
  const imageRef = useRef<HTMLImageElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [parallaxY, setParallaxY] = useState(0);
  const rafRef = useRef<number>(0);
  const isVisible = useRef(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible.current = entry.isIntersecting;
      },
      { threshold: 0 }
    );
    observer.observe(container);

    const handleScroll = () => {
      if (!isVisible.current || !container) return;
      cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => {
        const rect = container.getBoundingClientRect();
        const windowH = window.innerHeight;
        const progress = (windowH - rect.top) / (windowH + rect.height);
        const offset = (progress - 0.5) * 200;
        setParallaxY(Math.max(-100, Math.min(100, offset)));
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  const delayClass = (_delay: string) =>
    inView ? 'animate-fade-in-up' : 'opacity-0';

  return (
    <section
      ref={sectionRef as React.RefObject<HTMLElement>}
      className="py-12 px-6 flex flex-col items-center"
      id="about"
    >
      <div className="max-w-2xl w-full mx-auto flex flex-col items-start gap-6">
        {/* Quote Icon */}
        <div
          className={delayClass('0.1s')}
          style={{ animationDelay: inView ? '0.1s' : '0s' }}
        >
          <Quote className="w-6 h-6 text-slate-900" />
        </div>

        {/* Quote Text */}
        <h2
          className={`${delayClass('0.2s')} text-[32px] md:text-[40px] lg:text-[44px] leading-[1.1] text-[#0D212C] tracking-tight font-semibold`}
          style={{ animationDelay: inView ? '0.2s' : '0s' }}
        >
          I architect digital spaces where{' '}
          <span className="font-mondwest font-normal">aesthetic design</span>{' '}
          meets technical rigor
        </h2>

        {/* Author */}
        <p
          className={`${delayClass('0.3s')} italic text-sm text-[#273C46]`}
          style={{ animationDelay: inView ? '0.3s' : '0s' }}
        >
          Wijaya Kusuma
        </p>

        {/* Company logos as text */}
        <div
          className={`${delayClass('0.4s')} flex items-center gap-8`}
          style={{ animationDelay: inView ? '0.4s' : '0s' }}
        >
          <span
            className="font-medium text-slate-900"
            style={{ width: '80px', fontSize: '24px' }}
          >
            Apple
          </span>
          <span
            className="font-medium text-slate-900"
            style={{ width: '83px', fontSize: '24px' }}
          >
            IDEO
          </span>
          <span
            className="font-medium text-slate-900"
            style={{ width: '110px', fontSize: '24px' }}
          >
            Polygon
          </span>
        </div>

        {/* Parallax Image */}
        <div
          ref={containerRef}
          className={`${delayClass('0.5s')} w-full flex justify-start`}
          style={{ animationDelay: inView ? '0.5s' : '0s' }}
        >
          <img
            ref={imageRef}
            src={`${import.meta.env.BASE_URL}profile.jpg`}
            alt="Wijaya Kusuma"
            className="w-full max-w-xs aspect-[3/4] rounded-2xl shadow-lg object-cover parallax-image"
            style={{ transform: `translateY(${parallaxY}px)` }}
          />
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
