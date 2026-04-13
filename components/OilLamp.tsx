"use client";

export default function OilLamp({ size = 80 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size * 1.4}
      viewBox="0 0 80 112"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Traditional Sri Lankan oil lamp"
    >
      {/* Flame */}
      <g className="lamp-flame">
        <ellipse cx="40" cy="18" rx="5" ry="9" fill="#FF8C5F" opacity="0.9" />
        <ellipse cx="40" cy="22" rx="3" ry="6" fill="#FFD97A" opacity="0.95" />
        <ellipse cx="40" cy="25" rx="1.5" ry="3" fill="white" opacity="0.8" />
      </g>
      {/* Wick holder */}
      <ellipse cx="40" cy="35" rx="6" ry="2" fill="#E8950A" />
      {/* Oil bowl */}
      <path
        d="M22 38 Q22 52 40 54 Q58 52 58 38 Q58 34 40 34 Q22 34 22 38Z"
        fill="url(#lampGold)"
        stroke="#C47800"
        strokeWidth="0.5"
      />
      {/* Bowl rim */}
      <ellipse cx="40" cy="38" rx="18" ry="4" fill="#FFD97A" opacity="0.6" />
      {/* Spout */}
      <path d="M58 42 Q66 40 68 36 Q66 38 58 40Z" fill="#E8950A" />
      {/* Stand neck */}
      <path d="M36 54 Q36 64 34 68 L46 68 Q44 64 44 54Z" fill="#C47800" />
      {/* Stand base */}
      <path d="M28 68 Q28 76 40 78 Q52 76 52 68Z" fill="url(#lampBase)" stroke="#C47800" strokeWidth="0.5" />
      {/* Base disc */}
      <ellipse cx="40" cy="78" rx="14" ry="3.5" fill="#9A5C00" />
      {/* Foot ring */}
      <path d="M26 79 Q26 88 40 90 Q54 88 54 79" stroke="#C47800" strokeWidth="1" fill="none" />
      <ellipse cx="40" cy="90" rx="16" ry="3" fill="#714200" />
      {/* Oil reflection */}
      <ellipse cx="38" cy="45" rx="6" ry="2" fill="#FFD97A" opacity="0.2" />
      {/* Glow */}
      <ellipse cx="40" cy="20" rx="14" ry="14" fill="#FFAA00" opacity="0.07" />
      <defs>
        <radialGradient id="lampGold" cx="50%" cy="30%" r="60%">
          <stop offset="0%" stopColor="#FFD97A" />
          <stop offset="60%" stopColor="#E8950A" />
          <stop offset="100%" stopColor="#9A5C00" />
        </radialGradient>
        <linearGradient id="lampBase" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#E8950A" />
          <stop offset="100%" stopColor="#714200" />
        </linearGradient>
      </defs>
    </svg>
  );
}
