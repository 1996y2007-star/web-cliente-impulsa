
import React, { useRef, useEffect, useCallback } from 'react';
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion';

const ParticlesCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  const draw = useCallback((ctx: CanvasRenderingContext2D, frameCount: number, particles: any[]) => {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

    particles.forEach((particle, i) => {
      // Update particle position
      particle.y += Math.sin(frameCount * 0.01 + i) * 0.2;
      particle.x += Math.cos(frameCount * 0.01 + i) * 0.1;

      if (particle.y > ctx.canvas.height) particle.y = 0;
      if (particle.x > ctx.canvas.width) particle.x = 0;
      if (particle.y < 0) particle.y = ctx.canvas.height;
      if (particle.x < 0) particle.x = ctx.canvas.width;

      // Draw particle
      ctx.beginPath();
      ctx.arc(particle.x, particle.y, particle.size, 0, 2 * Math.PI);
      ctx.fillStyle = `hsla(${particle.hue}, 100%, 70%, ${particle.opacity})`;
      ctx.fill();
    });

    // Connect particles
    for (let i = 0; i < particles.length; i++) {
        for (let j = i; j < particles.length; j++) {
            const dx = particles[i].x - particles[j].x;
            const dy = particles[i].y - particles[j].y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < 120) {
                ctx.beginPath();
                ctx.strokeStyle = `hsla(${particles[i].hue}, 100%, 70%, 0.12)`;
                ctx.lineWidth = 0.5;
                ctx.moveTo(particles[i].x, particles[i].y);
                ctx.lineTo(particles[j].x, particles[j].y);
                ctx.stroke();
            }
        }
    }
  }, []);

  useEffect(() => {
    if (prefersReducedMotion) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: any[] = [];
    
    const resizeCanvas = () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        
        const particleCount = window.innerWidth < 768 ? 40 : 80;
        particles = [];
        for (let i = 0; i < particleCount; i++) {
            particles.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                size: Math.random() * 2 + 0.8,
                opacity: Math.random() * 0.4 + 0.1,
                hue: Math.floor(Math.random() * 60) + 240, // 240-300 range (blue/purple)
            });
        }
    };
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    
    let frameCount = 0;
    const render = () => {
      frameCount++;
      draw(ctx, frameCount, particles);
      animationFrameId = window.requestAnimationFrame(render);
    };
    render();

    return () => {
      window.cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, [draw, prefersReducedMotion]);
  
  if (prefersReducedMotion) return null;

  return <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full -z-10" />;
};

export default ParticlesCanvas;
