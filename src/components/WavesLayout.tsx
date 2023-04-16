import React, { useEffect } from 'react';
import { waves } from '@/animations/waves';

const WavesLayout = ({ children, className = '' }) => {
  useEffect(() => {
    waves();
  }, []);

  return (
    <div
      className={`${className} w-full h-full inline-block z-0 p-32 xl:p-24 lg:p-16 md:p-12 sm:p-8`}
    >
      <div className="waves" />
      {children}
    </div>
  );
};

export default WavesLayout;
