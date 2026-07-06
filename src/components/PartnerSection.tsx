import React, { useCallback, useRef } from 'react';
import Button from './Button';
import { useInViewAnimation } from '../hooks/useInViewAnimation';
import wijayaImg from '../assets/wijaya.jpeg';

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

interface SpawnedGif {
  id: number;
  src: string;
  x: number;
  y: number;
  rotation: number;
}

let gifIdCounter = 0;

const PartnerSection: React.FC = () => {
  const { ref: sectionRef, inView } = useInViewAnimation();
  const containerRef = useRef<HTMLDivElement>(null);
  const spawnedGifsRef = useRef<SpawnedGif[]>([]);
  const lastSpawnTimeRef = useRef(0);
  const domContainerRef = useRef<HTMLDivElement>(null);

  const spawnGif = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const now = Date.now();
    if (now - lastSpawnTimeRef.current < 80) return;
    lastSpawnTimeRef.current = now;

    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const rotation = Math.random() * 20 - 10;
    const src = marqueeImages[Math.floor(Math.random() * marqueeImages.length)];
    const id = gifIdCounter++;

    const gif: SpawnedGif = { id, src, x, y, rotation };
    spawnedGifsRef.current.push(gif);

    // Create DOM element directly for performance
    const container = domContainerRef.current;
    if (!container) return;

    const el = document.createElement('img');
    el.src = src;
    el.className = 'partner-gif-spawn';
    el.style.left = `${x - 60}px`;
    el.style.top = `${y - 45}px`;
    el.style.setProperty('--gif-rotation', `rotate(${rotation}deg)`);
    el.style.transform = `rotate(${rotation}deg)`;

    container.appendChild(el);

    // Remove after animation
    setTimeout(() => {
      el.remove();
      spawnedGifsRef.current = spawnedGifsRef.current.filter((g) => g.id !== id);
    }, 1000);
  }, []);

  return (
    <section
      className="w-full py-12 px-6"
      id="partner"
    >
      <div
        ref={(el) => {
          (sectionRef as React.MutableRefObject<HTMLElement | null>).current = el;
          containerRef.current = el;
        }}
        className="max-w-7xl mx-auto py-48 rounded-[40px] relative overflow-hidden cursor-crosshair"
        style={{
          boxShadow: '0 2px 40px rgba(0,0,0,0.06)',
          background: 'white',
        }}
        onMouseMove={spawnGif}
      >
        {/* GIF spawn container */}
        <div ref={domContainerRef} className="absolute inset-0 pointer-events-none" />

        {/* Content */}
        <div
          className={`${inView ? 'animate-fade-in-up' : 'opacity-0'} relative z-10 flex flex-col items-center justify-center gap-12`}
          style={{ animationDelay: inView ? '0.1s' : '0s' }}
        >
          <h2 className="font-mondwest text-[48px] md:text-[64px] lg:text-[80px] text-[#0D212C] text-center leading-[1] tracking-tight">
            Partner with us
          </h2>

          <Button
            variant="primary"
            href="https://www.instagram.com/haswaltch_/"
            className="!px-6 !py-3 !rounded-full"
          >
            <img
              src={wijayaImg}
              alt="Wijaya Kusuma"
              className="w-10 h-10 rounded-full object-cover flex-shrink-0 -ml-2"
            />
            <span>Start chat with Wijaya Kusuma</span>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PartnerSection;
