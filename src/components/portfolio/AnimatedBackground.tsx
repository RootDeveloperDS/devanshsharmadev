import { useEffect, useRef } from "react";
import { useTheme } from "./ThemeProvider";

/**
 * Animated background:
 * - Sci-Fi: drifting cyan particles + cursor glow over CSS grid
 * - Executive: silent (CSS handles the soft hero gradient)
 * Respects prefers-reduced-motion.
 */
export function AnimatedBackground() {
  const { theme } = useTheme();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -9999, y: -9999 });

  useEffect(() => {
    if (theme !== "visar") return;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf = 0;
    let particles: { x: number; y: number; vx: number; vy: number; r: number }[] = [];

    const resize = () => {
      canvas.width = window.innerWidth * window.devicePixelRatio;
      canvas.height = window.innerHeight * window.devicePixelRatio;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      const count = Math.min(80, Math.floor((window.innerWidth * window.innerHeight) / 22000));
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        r: Math.random() * 1.5 + 0.4,
      }));
    };

    const onMove = (e: MouseEvent) => {
      mouseRef.current.x = e.clientX * window.devicePixelRatio;
      mouseRef.current.y = e.clientY * window.devicePixelRatio;
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // cursor glow
      const { x, y } = mouseRef.current;
      if (x > -1000) {
        const gradient = ctx.createRadialGradient(x, y, 0, x, y, 280 * window.devicePixelRatio);
        gradient.addColorStop(0, "rgba(0, 247, 255, 0.18)");
        gradient.addColorStop(1, "rgba(0, 247, 255, 0)");
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      }

      // particles
      ctx.fillStyle = "rgba(0, 247, 255, 0.6)";
      ctx.beginPath(); // ⚡ Bolt: Batch particle paths to minimize Canvas API overhead
      for (const p of particles) {
        if (!reduceMotion) {
          p.x += p.vx;
          p.y += p.vy;
          if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
          if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
        }
        const pr = p.r * window.devicePixelRatio;
        ctx.moveTo(p.x + pr, p.y);
        ctx.arc(p.x, p.y, pr, 0, Math.PI * 2);
      }
      ctx.fill();

      raf = requestAnimationFrame(draw);
    };

    resize();
    draw();
    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", onMove);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMove);
    };
  }, [theme]);

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-100" />
      <div
        className="absolute inset-0"
        style={{ background: "var(--gradient-hero)" }}
      />
      {theme === "visar" && (
        <canvas ref={canvasRef} className="absolute inset-0" />
      )}
    </div>
  );
}
