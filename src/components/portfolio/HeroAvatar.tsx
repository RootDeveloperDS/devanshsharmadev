import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";
import { useTheme } from "./ThemeProvider";

/**
 * Hexagonal stylized avatar — placeholder geometric DS monogram.
 * Tilts slightly with cursor for a 3D feel. Falls back gracefully if /profile.png exists.
 */
export function HeroAvatar() {
  const { theme } = useTheme();
  const wrapRef = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rx = useSpring(useTransform(my, [-50, 50], [8, -8]), { stiffness: 120, damping: 12 });
  const ry = useSpring(useTransform(mx, [-50, 50], [-8, 8]), { stiffness: 120, damping: 12 });

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      mx.set(((e.clientX - cx) / rect.width) * 100);
      my.set(((e.clientY - cy) / rect.height) * 100);
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [mx, my]);

  const isVisar = theme === "visar";

  return (
    <motion.div
      ref={wrapRef}
      style={{ rotateX: rx, rotateY: ry, transformPerspective: 800 }}
      className="relative mx-auto h-64 w-64 sm:h-80 sm:w-80"
    >
      {/* Rotating outer ring (Sci-Fi only) */}
      {isVisar && (
        <>
          <div
            className="absolute inset-0"
            style={{ animation: "orbit 20s linear infinite" }}
          >
            <svg viewBox="0 0 320 320" className="h-full w-full">
              <circle
                cx="160"
                cy="160"
                r="150"
                fill="none"
                stroke="hsl(var(--primary))"
                strokeWidth="1"
                strokeDasharray="4 12"
                opacity="0.7"
              />
            </svg>
          </div>
          <div
            className="absolute inset-4"
            style={{ animation: "orbit 30s linear infinite reverse" }}
          >
            <svg viewBox="0 0 320 320" className="h-full w-full">
              <circle
                cx="160"
                cy="160"
                r="140"
                fill="none"
                stroke="hsl(var(--primary))"
                strokeWidth="1"
                opacity="0.25"
              />
            </svg>
          </div>
        </>
      )}

      {/* Hexagonal frame */}
      <div className="absolute inset-8 grid place-items-center">
        <svg viewBox="0 0 200 200" className="absolute inset-0 h-full w-full drop-shadow-[0_0_25px_hsl(var(--primary)/0.5)]">
          <defs>
            <linearGradient id="hexGrad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.3" />
              <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0.05" />
            </linearGradient>
          </defs>
          <polygon
            points="100,10 180,55 180,145 100,190 20,145 20,55"
            fill="url(#hexGrad)"
            stroke="hsl(var(--primary))"
            strokeWidth="1.5"
          />
          {isVisar && (
            <polygon
              points="100,25 168,62 168,138 100,175 32,138 32,62"
              fill="none"
              stroke="hsl(var(--primary))"
              strokeWidth="0.5"
              opacity="0.5"
            />
          )}
        </svg>

        {/* Center: profile.png if present, else monogram */}
        <div className="relative z-10 grid h-32 w-32 place-items-center sm:h-40 sm:w-40">
          <img
            src="/profile.png"
            alt="Devansh Sharma - Applied AI Systems Developer Profile Picture"
            onError={(e) => ((e.currentTarget as HTMLImageElement).style.display = "none")}
            className="h-full w-full rounded-2xl object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 -z-10 grid place-items-center">
            <span className="font-display text-5xl font-black text-gradient sm:text-6xl">
              DS
            </span>
          </div>
        </div>
      </div>

      {/* Corner brackets (Sci-Fi) */}
      {isVisar && (
        <>
          {[
            "top-2 left-2 border-t border-l",
            "top-2 right-2 border-t border-r",
            "bottom-2 left-2 border-b border-l",
            "bottom-2 right-2 border-b border-r",
          ].map((c) => (
            <span
              key={c}
              className={`absolute h-4 w-4 border-primary ${c}`}
              aria-hidden
            />
          ))}
        </>
      )}
    </motion.div>
  );
}
