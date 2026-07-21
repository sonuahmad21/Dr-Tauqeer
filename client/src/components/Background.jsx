import { useEffect, useRef } from "react";

export default function Background() {
  const ref = useRef(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let raf = 0;
    let nodes = [];
    let w = 0;
    let h = 0;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const count = Math.max(24, Math.floor((w * h) / 32000));
      nodes = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
        r: 1 + Math.random() * 1.6,
      }));
    };

    const paintBase = (t = 0) => {
      const g = ctx.createLinearGradient(0, 0, w, h);
      g.addColorStop(0, "#e7f5f1");
      g.addColorStop(0.5, "#f5fbf9");
      g.addColorStop(1, "#e8f1f6");
      ctx.fillStyle = g;
      ctx.fillRect(0, 0, w, h);

      const orbs = [
        [w * 0.15, h * 0.2, 140, 168],
        [w * 0.82, h * 0.18, 160, 198],
        [w * 0.7, h * 0.78, 180, 155],
      ];
      orbs.forEach(([x, y, r, hue], i) => {
        const ox = x + Math.cos(t * 0.4 + i) * 18;
        const oy = y + Math.sin(t * 0.35 + i) * 14;
        const rg = ctx.createRadialGradient(ox, oy, 0, ox, oy, r);
        rg.addColorStop(0, `hsla(${hue}, 55%, 58%, 0.26)`);
        rg.addColorStop(1, `hsla(${hue}, 55%, 58%, 0)`);
        ctx.fillStyle = rg;
        ctx.beginPath();
        ctx.arc(ox, oy, r, 0, Math.PI * 2);
        ctx.fill();
      });
    };

    const draw = (now) => {
      const t = now * 0.001;
      paintBase(t);

      ctx.save();
      ctx.translate(w * 0.78, h * 0.22);
      ctx.rotate(t * 0.07);
      ctx.strokeStyle = "rgba(15, 122, 108, 0.12)";
      for (let i = 0; i < 3; i++) {
        ctx.beginPath();
        ctx.ellipse(0, 0, 55 + i * 36, 28 + i * 14, i * 0.35, 0, Math.PI * 2);
        ctx.stroke();
      }
      ctx.restore();

      for (let i = 0; i < nodes.length; i++) {
        const a = nodes[i];
        a.x += a.vx;
        a.y += a.vy;
        if (a.x < 0 || a.x > w) a.vx *= -1;
        if (a.y < 0 || a.y > h) a.vy *= -1;
        for (let j = i + 1; j < nodes.length; j++) {
          const b = nodes[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.hypot(dx, dy);
          if (dist < 110) {
            ctx.strokeStyle = `rgba(15,122,108,${0.12 * (1 - dist / 110)})`;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
        ctx.fillStyle = "rgba(15,122,108,0.4)";
        ctx.beginPath();
        ctx.arc(a.x, a.y, a.r, 0, Math.PI * 2);
        ctx.fill();
      }

      raf = requestAnimationFrame(draw);
    };

    resize();
    window.addEventListener("resize", resize);
    if (reduce) paintBase();
    else raf = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <>
      <canvas id="bg-canvas" ref={ref} aria-hidden="true" />
      <div className="bg-orbit" aria-hidden="true" />
    </>
  );
}
