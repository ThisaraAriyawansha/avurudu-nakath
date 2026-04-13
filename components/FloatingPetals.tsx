"use client";

import { useEffect, useState } from "react";

interface Petal {
  id: number;
  x: number;
  size: number;
  delay: number;
  duration: number;
  color: string;
  shape: "circle" | "diamond" | "teardrop";
}

const colors = [
  "rgba(255,170,0,0.25)",
  "rgba(255,102,51,0.2)",
  "rgba(255,216,120,0.2)",
  "rgba(26,166,155,0.15)",
  "rgba(116,168,46,0.15)",
];

export default function FloatingPetals() {
  const [petals, setPetals] = useState<Petal[]>([]);

  useEffect(() => {
    const generated: Petal[] = Array.from({ length: 18 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      size: 4 + Math.random() * 10,
      delay: Math.random() * 12,
      duration: 10 + Math.random() * 14,
      color: colors[Math.floor(Math.random() * colors.length)],
      shape: (["circle", "diamond", "teardrop"] as const)[Math.floor(Math.random() * 3)],
    }));
    setPetals(generated);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      <style>{`
        @keyframes floatUp {
          0% { transform: translateY(110vh) rotate(0deg); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 0.8; }
          100% { transform: translateY(-20vh) rotate(360deg); opacity: 0; }
        }
        .petal { position: absolute; bottom: -20px; animation: floatUp linear infinite; }
        .petal-diamond { transform: rotate(45deg); border-radius: 2px; }
      `}</style>
      {petals.map((p) => (
        <div
          key={p.id}
          className="petal"
          style={{
            left: `${p.x}%`,
            width: p.size,
            height: p.size,
            background: p.color,
            borderRadius: p.shape === "circle" ? "50%" : p.shape === "diamond" ? "2px" : "50% 50% 50% 0",
            transform: p.shape === "diamond" ? "rotate(45deg)" : p.shape === "teardrop" ? "rotate(-45deg)" : undefined,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
          }}
        />
      ))}
    </div>
  );
}
