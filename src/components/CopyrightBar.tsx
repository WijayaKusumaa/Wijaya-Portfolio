import React from 'react';

const CopyrightBar: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="max-w-[1200px] mx-auto px-6 py-8 border-t border-[#051A24]/5 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
      {/* Left side */}
      <div className="flex flex-col gap-1">
        <span className="text-sm font-medium text-[#051A24]">
          © {currentYear} W Kusuma. All rights reserved.
        </span>
        <span className="text-xs text-[#273C46]/60">
          Jawa Timur, indonesia / Remote
        </span>
      </div>

      {/* Right side - Builder Credit emphasized */}
      <div className="flex items-center gap-2">
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
        <span className="text-sm text-[#051A24]/90">
          Website fully handcrafted by <span className="font-semibold text-[#051A24]">W for Wijaya</span>
        </span>
      </div>
    </div>
  );
};

export default CopyrightBar;
