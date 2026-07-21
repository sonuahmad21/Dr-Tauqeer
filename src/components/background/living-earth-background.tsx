"use client";

import { useEffect, useRef } from "react";

type Node = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
};

/**
 * Living Earth canvas — aurora, life-network particles, satellite arcs.
 * Communicates life, intelligence, and planetary scale — never hospitals.
 */
export function LivingEarthBackground() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let nodes: Node[] = [];
    let w = 0;
    let h = 0;
    let raf = 0;
    let t = 0;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const count = Math.max(36, Math.floor((w * h) / 22000));
      nodes = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.28,
        vy: (Math.random() - 0.5) * 0.28,
        r: 0.8 + Math.random() * 1.8,
      }));
    };

    const draw = (now: number) => {
      t = now * 0.001;
      ctx.clearRect(0, 0, w, h);

      const sky = ctx.createLinearGradient(0, 0, 0, h);
      sky.addColorStop(0, "#050807");
      sky.addColorStop(0.45, "#07130f");
      sky.addColorStop(1, "#04080c");
      ctx.fillStyle = sky;
      ctx.fillRect(0, 0, w, h);

      const auroraStops: Array<[number, number, number, string]> = [
        [0.2, 0.12, 280, "rgba(16,185,129,0.22)"],
        [0.75, 0.08, 320, "rgba(14,165,233,0.18)"],
        [0.5, 0.55, 260, "rgba(212,175,55,0.08)"],
      ];
      auroraStops.forEach(([nx, ny, radius, color], i) => {
        const x = w * nx + Math.sin(t * 0.25 + i) * 30;
        const y = h * ny + Math.cos(t * 0.2 + i) * 20;
        const g = ctx.createRadialGradient(x, y, 0, x, y, radius);
        g.addColorStop(0, color);
        g.addColorStop(1, "transparent");
        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, Math.PI * 2);
        ctx.fill();
      });

      // Soft terrain silhouette
      ctx.beginPath();
      ctx.moveTo(0, h * 0.78);
      for (let x = 0; x <= w; x += 12) {
        const y =
          h * 0.78 +
          Math.sin(x * 0.004 + t * 0.15) * 18 +
          Math.sin(x * 0.01 + 1.4) * 10;
        ctx.lineTo(x, y);
      }
      ctx.lineTo(w, h);
      ctx.lineTo(0, h);
      ctx.closePath();
      const land = ctx.createLinearGradient(0, h * 0.7, 0, h);
      land.addColorStop(0, "rgba(13,59,46,0.55)");
      land.addColorStop(1, "rgba(5,8,7,0.95)");
      ctx.fillStyle = land;
      ctx.fill();

      // Satellite path
      ctx.save();
      ctx.translate(w * 0.7, h * 0.28);
      ctx.rotate(t * 0.05);
      ctx.strokeStyle = "rgba(125,211,252,0.22)";
      ctx.lineWidth = 1;
      for (let i = 0; i < 3; i += 1) {
        ctx.beginPath();
        ctx.ellipse(0, 0, 90 + i * 42, 34 + i * 16, i * 0.4, 0, Math.PI * 2);
        ctx.stroke();
      }
      const satX = Math.cos(t * 0.8) * 130;
      const satY = Math.sin(t * 0.8) * 48;
      ctx.fillStyle = "rgba(240,215,140,0.95)";
      ctx.beginPath();
      ctx.arc(satX, satY, 2.4, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();

      for (let i = 0; i < nodes.length; i += 1) {
        const a = nodes[i];
        a.x += a.vx;
        a.y += a.vy;
        if (a.x < 0 || a.x > w) a.vx *= -1;
        if (a.y < 0 || a.y > h) a.vy *= -1;

        for (let j = i + 1; j < nodes.length; j += 1) {
          const b = nodes[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.hypot(dx, dy);
          if (dist < 120) {
            ctx.strokeStyle = `rgba(52,211,153,${0.12 * (1 - dist / 120)})`;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }

        ctx.fillStyle = "rgba(110,231,183,0.7)";
        ctx.beginPath();
        ctx.arc(a.x, a.y, a.r, 0, Math.PI * 2);
        ctx.fill();
      }

      raf = requestAnimationFrame(draw);
    };

    resize();
    window.addEventListener("resize", resize);
    if (reduce) {
      draw(0);
    } else {
      raf = requestAnimationFrame(draw);
    }

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={ref}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-20 h-full w-full"
    />
  );
}
