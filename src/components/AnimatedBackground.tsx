'use client';

import { useEffect, useRef } from 'react';
import { useTheme } from 'next-themes';

interface Particle {
    x: number;
    y: number;
    size: number;
    speedX: number;
    speedY: number;
    opacity: number;
    update: (width: number, height: number) => void;
    draw: (ctx: CanvasRenderingContext2D) => void;
}

const AnimatedBackground = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const animationRef = useRef<number | null>(null);
    const { theme } = useTheme();

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let particles: Particle[] = [];
        const particleCount = 80;

        const setCanvasSize = () => {
            if (!canvas) return;
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        setCanvasSize();

        const createParticle = (width: number, height: number): Particle => {
            return {
                x: Math.random() * width,
                y: Math.random() * height,
                size: Math.random() * 2.5 + 0.5,
                speedX: Math.random() * 1.5 - 0.75,
                speedY: Math.random() * 1.5 - 0.75,
                opacity: Math.random() * 0.5 + 0.3,

                update(width: number, height: number) {
                    this.x += this.speedX;
                    this.y += this.speedY;

                    if (this.x > width) this.x = 0;
                    else if (this.x < 0) this.x = width;

                    if (this.y > height) this.y = 0;
                    else if (this.y < 0) this.y = height;
                },

                draw(ctx: CanvasRenderingContext2D) {
                    const isDark = theme === 'dark';
                    ctx.fillStyle = isDark
                        ? `rgba(147, 197, 253, ${this.opacity})`
                        : `rgba(59, 130, 246, ${this.opacity})`;
                    ctx.beginPath();
                    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                    ctx.fill();
                }
            };
        };

        const init = () => {
            if (!canvas) return;
            particles = [];
            for (let i = 0; i < particleCount; i++) {
                particles.push(createParticle(canvas.width, canvas.height));
            }
        };

        const animate = () => {
            if (!ctx || !canvas) return;

            // Fondo según el tema
            const isDark = theme === 'dark';
            ctx.fillStyle = isDark ? '#111827' : '#f3f4f6';
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            // Dibujar partículas
            particles.forEach((particle) => {
                particle.update(canvas.width, canvas.height);
                particle.draw(ctx);
            });

            animationRef.current = requestAnimationFrame(animate);
        };

        const handleResize = () => {
            setCanvasSize();
            init();
        };

        init();
        animate();

        window.addEventListener('resize', handleResize);

        return () => {
            if (animationRef.current) {
                cancelAnimationFrame(animationRef.current);
            }
            window.removeEventListener('resize', handleResize);
        };
    }, [theme]);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 pointer-events-none"
            style={{ zIndex: 0 }}
        />
    );
};

export default AnimatedBackground;
