'use client';
import React, { useEffect, useRef } from 'react';

interface Dot {
  rad_x: number;
  rad_y: number;
  alpha: number;
  color: number;
  size: number;
  speed: number;
  draw: (context: CanvasRenderingContext2D, halfx: number, halfy: number) => void;
  move: () => void;
}

const BackgroundEffect: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const dotsRef = useRef<Dot[]>([]);

  useEffect(() => {
    const canvas: any = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext('2d');
    if (!context) return;

    const halfx = canvas.width / 2;
    const halfy = canvas.height / 2;

    class DotClass implements Dot {
      rad_x: number;
      rad_y: number;
      alpha: number;
      color: number;
      size: number;
      speed: number;

      constructor() {
        this.rad_x = Math.random() * canvas.width;
        this.rad_y = Math.random() * canvas.height;
        this.alpha = Math.random() * 360;
        this.color = Math.random() * 255;
        this.size = Math.random() * 3 + 1;
        this.speed = Math.random() * 2 - 1;
      }

      draw(context: CanvasRenderingContext2D, halfx: number, halfy: number) {
        const dx = halfx + this.rad_x * Math.cos((this.alpha / 180) * Math.PI);
        const dy = halfy + this.rad_y * Math.sin((this.alpha / 180) * Math.PI);
        context.fillStyle = `rgb(${this.color}, ${this.color}, ${this.color})`;
        context.fillRect(dx, dy, this.size, this.size);
      }

      move() {
        this.alpha += this.speed;
        this.color += Math.random() * 100 < 50 ? 1 : -1;
      }
    }

    const createDots = (numDots: number) => {
      const dots: Dot[] = [];
      for (let i = 0; i < numDots; i++) {
        dots.push(new DotClass());
      }
      return dots;
    };

    const render = () => {
      if (!context) return;
      context.clearRect(0, 0, canvas.width, canvas.height);

      dotsRef.current.forEach((dot) => {
        dot.move();
        dot.draw(context, halfx, halfy);
      });

      requestAnimationFrame(render);
    };

    dotsRef.current = createDots(100);
    render();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return <canvas className='blurBackground canvasStyle' ref={canvasRef} />;
};

export default BackgroundEffect;
