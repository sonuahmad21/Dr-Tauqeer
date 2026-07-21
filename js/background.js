(() => {
  const canvas = document.getElementById("bg-canvas");
  if (!canvas) return;

  const ctx = canvas.getContext("2d", { alpha: true });
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  let width = 0;
  let height = 0;
  let dpr = 1;
  let nodes = [];
  let orbs = [];
  let raf = 0;
  let t = 0;

  const resize = () => {
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = Math.floor(width * dpr);
    canvas.height = Math.floor(height * dpr);
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    seed();
  };

  const seed = () => {
    const count = Math.max(28, Math.floor((width * height) / 28000));
    nodes = Array.from({ length: count }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.22,
      vy: (Math.random() - 0.5) * 0.22,
      r: 1.2 + Math.random() * 1.8,
    }));

    orbs = [
      { x: width * 0.18, y: height * 0.28, r: 90, hue: 168, phase: 0.0007 },
      { x: width * 0.78, y: height * 0.22, r: 120, hue: 198, speed: 0.0005 },
      { x: width * 0.62, y: height * 0.72, r: 150, hue: 155, speed: 0.0004 },
    ];
  };

  const drawStatic = () => {
    ctx.clearRect(0, 0, width, height);
    const g = ctx.createLinearGradient(0, 0, width, height);
    g.addColorStop(0, "#eaf7f4");
    g.addColorStop(0.45, "#f4fbf9");
    g.addColorStop(1, "#e7f2f6");
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, width, height);

    orbs.forEach((orb) => {
      const grad = ctx.createRadialGradient(orb.x, orb.y, 0, orb.x, orb.y, orb.r);
      grad.addColorStop(0, `hsla(${orb.hue}, 55%, 62%, 0.22)`);
      grad.addColorStop(1, `hsla(${orb.hue}, 55%, 62%, 0)`);
      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.arc(orb.x, orb.y, orb.r, 0, Math.PI * 2);
      ctx.fill();
    });
  };

  const draw = (now) => {
    t = now * 0.001;
    ctx.clearRect(0, 0, width, height);

    const base = ctx.createLinearGradient(0, 0, width, height);
    base.addColorStop(0, "#e8f6f2");
    base.addColorStop(0.5, "#f5fcfa");
    base.addColorStop(1, "#e6f1f6");
    ctx.fillStyle = base;
    ctx.fillRect(0, 0, width, height);

    orbs.forEach((orb, i) => {
      const ox = orb.x + Math.cos(t * orb.speed * 600 + i) * 24;
      const oy = orb.y + Math.sin(t * orb.speed * 500 + i * 1.4) * 18;
      const grad = ctx.createRadialGradient(ox, oy, 0, ox, oy, orb.r);
      grad.addColorStop(0, `hsla(${orb.hue}, 58%, 60%, 0.28)`);
      grad.addColorStop(1, `hsla(${orb.hue}, 58%, 60%, 0)`);
      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.arc(ox, oy, orb.r, 0, Math.PI * 2);
      ctx.fill();
    });

    // Planetary orbital arcs
    ctx.save();
    ctx.translate(width * 0.72, height * 0.28);
    ctx.rotate(t * 0.08);
    ctx.strokeStyle = "rgba(15, 122, 108, 0.14)";
    ctx.lineWidth = 1;
    for (let i = 0; i < 3; i++) {
      ctx.beginPath();
      ctx.ellipse(0, 0, 70 + i * 42, 34 + i * 18, i * 0.4, 0, Math.PI * 2);
      ctx.stroke();
    }
    ctx.restore();

    // Soft heartbeat waveform near bottom
    ctx.beginPath();
    const waveY = height * 0.86;
    for (let x = 0; x <= width; x += 8) {
      const n = Math.sin(x * 0.018 + t * 1.6) * 6;
      const pulse =
        Math.abs(((x / width) * 4 + t * 0.35) % 1 - 0.5) < 0.04
          ? Math.sin(((x / width) * 40 + t * 4) * Math.PI) * 18
          : 0;
      const y = waveY + n + pulse;
      if (x === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    }
    ctx.strokeStyle = "rgba(15, 122, 108, 0.16)";
    ctx.lineWidth = 1.5;
    ctx.stroke();

    // Network of health nodes
    for (let i = 0; i < nodes.length; i++) {
      const a = nodes[i];
      a.x += a.vx;
      a.y += a.vy;
      if (a.x < 0 || a.x > width) a.vx *= -1;
      if (a.y < 0 || a.y > height) a.vy *= -1;

      for (let j = i + 1; j < nodes.length; j++) {
        const b = nodes[j];
        const dx = a.x - b.x;
        const dy = a.y - b.y;
        const dist = Math.hypot(dx, dy);
        if (dist < 120) {
          ctx.strokeStyle = `rgba(15, 122, 108, ${0.14 * (1 - dist / 120)})`;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.stroke();
        }
      }

      ctx.fillStyle = "rgba(15, 122, 108, 0.45)";
      ctx.beginPath();
      ctx.arc(a.x, a.y, a.r, 0, Math.PI * 2);
      ctx.fill();
    }

    raf = requestAnimationFrame(draw);
  };

  resize();
  window.addEventListener("resize", resize);

  if (reduceMotion) {
    drawStatic();
  } else {
    raf = requestAnimationFrame(draw);
  }

  document.addEventListener("visibilitychange", () => {
    if (document.hidden) {
      cancelAnimationFrame(raf);
    } else if (!reduceMotion) {
      raf = requestAnimationFrame(draw);
    }
  });
})();
