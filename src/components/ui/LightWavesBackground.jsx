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

    let width = container.offsetWidth;
    let height = container.offsetHeight;

    canvas.width = width;
    canvas.height = height;

    const colors = ["#0ea5e9", "#8b5cf6", "#06b6d4"];

    // create waves
    wavesRef.current = Array.from({ length: 5 }).map((_, i) => ({
      y: height * (0.3 + (i / 5) * 0.5),
      amplitude: height * (0.1 + Math.random() * 0.1),
      frequency: 0.002 + Math.random() * 0.002,
      speed: (0.2 + Math.random() * 0.3) * (i % 2 ? -1 : 1),
      phase: Math.random() * Math.PI * 2,
      color: colors[i % colors.length],
      opacity: 0.1 + Math.random() * 0.1,
    }));

    let start = Date.now();

    const draw = () => {
      const time = (Date.now() - start) * 0.001;

      // background
      const gradient = ctx.createLinearGradient(0, 0, 0, height);
      gradient.addColorStop(0, "#030712");
      gradient.addColorStop(1, "#020617");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);

      wavesRef.current.forEach((wave) => {
        const rgb = hexToRgb(wave.color);

        ctx.beginPath();
        for (let x = 0; x <= width; x += 5) {
          const y =
            wave.y +
            Math.sin(x * wave.frequency + time * wave.speed + wave.phase) *
              wave.amplitude;

          x === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
        }

        ctx.lineTo(width, height);
        ctx.lineTo(0, height);
        ctx.closePath();

        const g = ctx.createLinearGradient(
          0,
          wave.y - wave.amplitude,
          0,
          height
        );

        g.addColorStop(
          0,
          `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${wave.opacity})`
        );
        g.addColorStop(1, "transparent");

        ctx.fillStyle = g;
        ctx.fill();
      });

      requestAnimationFrame(draw);
    };

    draw();
  }, []);

  return (
    <div ref={containerRef} className="absolute inset-0">
      <canvas ref={canvasRef} className="w-full h-full" />
    </div>
  );
}