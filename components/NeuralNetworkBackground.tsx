"use client";

import { useEffect, useRef } from "react";

export default function NeuralNetworkBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    const particles: { x: number; y: number; vx: number; vy: number; radius: number }[] = [];
    const particleCount = 80; // Adjust this number for more or fewer nodes
    const connectionDistance = 150; // How close nodes need to be to link

    // Resize canvas to fill the hero section
    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    
    window.addEventListener("resize", resize);
    resize();

    // Initialize random nodes
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.8, // Slow, calm horizontal speed
        vy: (Math.random() - 0.5) * 0.8, // Slow, calm vertical speed
        radius: Math.random() * 2 + 1, // Random node sizes between 1px and 3px
      });
    }

    // Animation loop
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach((p, index) => {
        // Move nodes
        p.x += p.vx;
        p.y += p.vy;

        // Bounce off the edges smoothly
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        // Draw the node (Using your DLM Teal)
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = "#38827a";
        ctx.fill();

        // Check distances to draw connecting lines
        for (let j = index + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < connectionDistance) {
            ctx.beginPath();
            // Line opacity fades out the further apart the nodes get
            ctx.strokeStyle = `rgba(56, 130, 122, ${1 - distance / connectionDistance})`;
            ctx.lineWidth = 1;
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    // Cleanup on unmount
    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      // Opacity at 60% keeps it subtle so your text remains easy to read
      className="absolute inset-0 w-full h-full pointer-events-none z-0 opacity-60"
    />
  );
}