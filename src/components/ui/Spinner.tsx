import React from 'react';

export const Spinner: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-[200px] w-full">
      <div className="relative w-12 h-12">
        <div className="absolute inset-0 rounded-full border-t-2 border-primary animate-spin filter drop-shadow-[0_0_8px_rgba(0,240,255,0.8)]"></div>
        <div className="absolute inset-2 rounded-full border-b-2 border-secondary animate-[spin_1.5s_linear_infinite_reverse] filter drop-shadow-[0_0_8px_rgba(0,51,255,0.8)]"></div>
      </div>
    </div>
  );
};
