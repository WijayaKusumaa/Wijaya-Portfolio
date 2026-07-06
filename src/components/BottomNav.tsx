import React from 'react';
import Button from './Button';

const BottomNav: React.FC = () => {
  return (
    <div
      className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-4 bg-white rounded-full px-8 py-2"
      style={{
        boxShadow:
          '0 1px 2px 0 rgba(5,26,36,0.1), 0 4px 4px 0 rgba(5,26,36,0.09), 0 9px 6px 0 rgba(5,26,36,0.05), 0 17px 7px 0 rgba(5,26,36,0.01), 0 26px 7px 0 rgba(5,26,36,0)',
      }}
    >
      {/* W Letter */}
      <span className="font-mondwest text-2xl font-semibold text-[#051A24]">W</span>

      {/* Separator */}
      <div className="w-px h-6 bg-[#051A24]/4" />

      {/* CTA Button */}
      <Button
        variant="primary"
        href="https://www.instagram.com/haswaltch_/"
        className="!py-2 !px-5 !text-sm"
      >
        Start a chat
      </Button>
    </div>
  );
};

export default BottomNav;
