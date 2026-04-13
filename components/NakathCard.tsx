"use client";

import { useState } from "react";
import { NakathTime, Lang, siteContent } from "@/lib/nakath";

interface Props {
  nakath: NakathTime;
  lang: Lang;
  index: number;
  isHighlighted?: boolean;
}

const directionArrows: Record<string, string> = {
  East: "→", West: "←", North: "↑", South: "↓",
};

export default function NakathCard({ nakath, lang, index, isHighlighted }: Props) {
  const [expanded, setExpanded] = useState(false);
  const content = siteContent[lang];

  const name = nakath.name[lang];
  const subtitle = nakath.subtitle[lang];
  const desc = nakath.desc[lang];
  const direction = lang === "si" ? nakath.directionSi : lang === "ta" ? nakath.directionTa : nakath.direction;
  const colour = lang === "si" ? nakath.colourSi : lang === "ta" ? nakath.colourTa : nakath.colour;
  const displayDate = lang === "si" ? nakath.displayDateSi : lang === "ta" ? nakath.displayDateTa : nakath.displayDate;

  const delayClass = `delay-${Math.min(index + 1, 8)}`;

  return (
    <div
      className={`nakath-card fade-up ${delayClass} rounded-2xl cursor-pointer select-none`}
      style={{
        WebkitTapHighlightColor: "transparent",
        background: isHighlighted
          ? "linear-gradient(135deg, rgba(255,170,0,0.12), rgba(255,102,51,0.08))"
          : "rgba(255,255,255,0.04)",
        border: isHighlighted
          ? "1px solid rgba(255,170,0,0.4)"
          : "1px solid rgba(255,255,255,0.08)",
        boxShadow: isHighlighted
          ? "0 0 30px rgba(255,170,0,0.12), inset 0 1px 0 rgba(255,255,255,0.05)"
          : "inset 0 1px 0 rgba(255,255,255,0.03)",
      }}
      onClick={() => setExpanded(!expanded)}
    >
      <div className="p-4 sm:p-5">
        {/* Top row */}
        <div className="flex items-start gap-3 sm:gap-4">
          {/* Icon bubble */}
          <div
            className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 text-xl"
            style={{
              background: `${nakath.color}22`,
              border: `1px solid ${nakath.color}44`,
            }}
          >
            {nakath.icon}
          </div>

          {/* Main info */}
          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between gap-2">
              <div>
                <p
                  className="font-display text-base leading-tight mb-0.5"
                  style={{ color: "#FFF8E7" }}
                >
                  {name}
                </p>
                <p className="text-sm" style={{ color: "rgba(255,216,120,0.65)" }}>
                  {subtitle}
                </p>
              </div>
              <span
                className="text-xs px-2 py-0.5 rounded-full flex-shrink-0 mt-0.5"
                style={{
                  background: `${nakath.color}22`,
                  color: "#FFD97A",
                  border: `1px solid ${nakath.color}44`,
                }}
              >
                {displayDate}
              </span>
            </div>
          </div>
        </div>

        {/* Time + details row */}
        <div className="mt-4 flex flex-wrap items-center gap-3">
          <div
            className="font-display text-2xl"
            style={{ color: "#FFD97A" }}
          >
            {nakath.displayTime}
          </div>
          <div className="flex gap-2 flex-wrap">
            <span
              className="text-xs px-2.5 py-1 rounded-full"
              style={{
                background: "rgba(255,255,255,0.06)",
                color: "rgba(255,248,231,0.7)",
                border: "1px solid rgba(255,255,255,0.1)",
              }}
            >
              {directionArrows[nakath.direction] || "•"} {content.direction}: {direction}
            </span>
            <span
              className="text-xs px-2.5 py-1 rounded-full"
              style={{
                background: "rgba(255,255,255,0.06)",
                color: "rgba(255,248,231,0.7)",
                border: "1px solid rgba(255,255,255,0.1)",
              }}
            >
              🎨 {content.colour}: {colour}
            </span>
          </div>
          <span
            className="ml-auto text-xs"
            style={{ color: "rgba(255,216,120,0.4)" }}
          >
            {expanded ? "▲" : "▼"}
          </span>
        </div>

        {/* Expanded description */}
        {expanded && (
          <div
            className="mt-4 pt-4 text-sm leading-relaxed"
            style={{
              color: "rgba(255,248,231,0.65)",
              borderTop: "1px solid rgba(255,255,255,0.07)",
            }}
          >
            {desc}
          </div>
        )}
      </div>
    </div>
  );
}
