import React, { useEffect, useRef, useState } from 'react';
import { useInViewAnimation } from '../hooks/useInViewAnimation';

interface Project {
  name: string;
  description: string;
  gifUrl: string;
}

const projects: Project[] = [
  {
    name: 'evr',
    description: 'From idea to millions raised for a web3 AI product',
    gifUrl: 'https://motionsites.ai/assets/hero-evr-ventures-preview-DZxeVFEX.gif',
  },
  {
    name: 'Automation Machines',
    description: 'Streamlining industrial automation processes',
    gifUrl: 'https://motionsites.ai/assets/hero-automation-machines-preview-DlTveRIN.gif',
  },
  {
    name: 'xPortfolio',
    description: 'Modern portfolio management platform',
    gifUrl: 'https://motionsites.ai/assets/hero-xportfolio-preview-D4A8maiC.gif',
  },
];

const ProjectItem: React.FC<{ project: Project; index: number }> = ({
  project,
  index,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`${visible ? 'animate-fade-in-up' : 'opacity-0'} flex flex-col gap-4`}
      style={{ animationDelay: visible ? `${index * 0.15}s` : '0s' }}
    >
      {/* Text block */}
      <div className="ml-20 md:ml-28">
        <h3 className="font-mondwest text-2xl md:text-3xl font-semibold text-[#051A24] mb-2">
          {project.name}
        </h3>
        <p className="text-sm md:text-base text-[#051A24]/70">{project.description}</p>
      </div>

      {/* Image */}
      <div className="w-full rounded-2xl overflow-hidden shadow-lg">
        <img
          src={project.gifUrl}
          alt={project.name}
          className="w-full object-cover"
          loading="lazy"
        />
      </div>
    </div>
  );
};

const ProjectsSection: React.FC = () => {
  const { ref: sectionRef, inView } = useInViewAnimation();

  return (
    <section
      ref={sectionRef as React.RefObject<HTMLElement>}
      className="max-w-[1200px] mx-auto px-6 py-12"
      id="work"
    >
      {/* Section header */}
      <div
        className={`${inView ? 'animate-fade-in-up' : 'opacity-0'} mb-12 ml-20 md:ml-28`}
        style={{ animationDelay: inView ? '0.1s' : '0s' }}
      >
        <p className="text-xs font-mono text-[#273C46] mb-2 uppercase tracking-widest">
          Selected Work
        </p>
        <h2 className="text-[32px] md:text-[40px] lg:text-[44px] leading-[1.1] text-[#0D212C] tracking-tight font-semibold">
          Projects that <span className="font-mondwest font-normal">moved</span> the needle
        </h2>
      </div>

      <div className="flex flex-col gap-16 md:gap-20">
        {projects.map((project, i) => (
          <ProjectItem key={project.name} project={project} index={i} />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
