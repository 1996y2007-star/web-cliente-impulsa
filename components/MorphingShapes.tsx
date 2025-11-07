
import React from 'react';
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion';

const MorphingShapes: React.FC = () => {
  const prefersReducedMotion = usePrefersReducedMotion();

  if (prefersReducedMotion) {
    return null;
  }

  return (
    <div className="fixed top-0 left-0 w-full h-full -z-20 overflow-hidden">
      <div className="absolute w-96 h-96 bg-primary-purple-500/10 rounded-full filter blur-3xl opacity-50 animate-morph top-1/4 left-1/4"></div>
      <div className="absolute w-80 h-80 bg-primary-blue-500/10 rounded-full filter blur-3xl opacity-50 animate-morph2 bottom-1/4 right-1/4"></div>
      <div className="absolute w-72 h-72 bg-purple-400/10 rounded-full filter blur-3xl opacity-50 animate-morph3 bottom-1/2 right-1/2"></div>
    </div>
  );
};

export default MorphingShapes;
