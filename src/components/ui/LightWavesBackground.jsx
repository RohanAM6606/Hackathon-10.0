
import { useEffect, useRef } from "react";

function hexToRgb(hex) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  if (!result) return { r: 255, g: 255, b: 255 };
  return {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16),
  };
}

export default function LightWavesBackground() {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const wavesRef = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext("2d");
    let animationFrameId;

    const resize = () => {
      let width = container.offsetWidth;
      let height = container.offsetHeight;
      canvas.width = width;
      canvas.height = height;

      const colors = ["#0284c7", "#0ea5e9", "#38bdf8", "#60a5fa", "#3b82f6"];

      wavesRef.current = Array.from({ length: 8 }).map((_, i) => ({
        y: height * (0.5 + (i / 8) * 0.4),
        amplitude: height * (0.12 + Math.random() * 0.15),
        frequency: 0.001 + Math.random() * 0.001,
        speed: (0.09 + Math.random() * 0.02) * (i % 2 ? -1 : 1),
        phase: Math.random() * Math.PI * 2,
        color: colors[i % colors.length],
        opacity: 0.08 + Math.random() * 0.2,
      }));
    };

    resize();
    window.addEventListener("resize", resize);

    let start = Date.now();

    const draw = () => {
      const time = (Date.now() - start) * 0.001;
      let width = container.offsetWidth;
      let height = container.offsetHeight;

      const gradient = ctx.createLinearGradient(0, 0, 0, height);
      gradient.addColorStop(0, "#00030a");
      gradient.addColorStop(0.5, "#00081a");
      gradient.addColorStop(1, "#011233");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);

      wavesRef.current.forEach((wave) => {
        const rgb = hexToRgb(wave.color);

        ctx.beginPath();
        for (let x = 0; x <= width; x += 6) {
          const y =
            wave.y +
            Math.sin(x * wave.frequency + time * wave.speed + wave.phase) * wave.amplitude +
            Math.sin(x * wave.frequency * 2 + time * wave.speed * 1.5) * (wave.amplitude * 0.3);

          x === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
        }

        ctx.strokeStyle = `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${wave.opacity * 2})`;
        ctx.lineWidth = 2;
        ctx.stroke();

        ctx.lineTo(width, height);
        ctx.lineTo(0, height);
        ctx.closePath();

        const g = ctx.createLinearGradient(0, wave.y - wave.amplitude, 0, height);
        g.addColorStop(0, `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${wave.opacity})`);
        g.addColorStop(1, "transparent");

        ctx.fillStyle = g;
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div ref={containerRef} className="absolute inset-0">
      <canvas ref={canvasRef} className="w-full h-full" />
    </div>
  );
}
