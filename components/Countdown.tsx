"use client";

import { useEffect, useState } from "react";
import { Lang, siteContent, nakathTimes, NakathTime } from "@/lib/nakath";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

function getNextNakath(): NakathTime | null {
  const now = Date.now();
  return nakathTimes.find(n => new Date(n.time).getTime() > now) ?? null;
}

function calcTimeLeft(target: Date): TimeLeft {
  const diff = Math.max(0, target.getTime() - Date.now());
  const totalSecs = Math.floor(diff / 1000);
  return {
    days: Math.floor(totalSecs / 86400),
    hours: Math.floor((totalSecs % 86400) / 3600),
    minutes: Math.floor((totalSecs % 3600) / 60),
    seconds: totalSecs % 60,
  };
}

function pad(n: number) {
  return String(n).padStart(2, "0");
}

export default function Countdown({ lang }: { lang: Lang }) {
  const [next, setNext] = useState<NakathTime | null>(getNextNakath);
  const [time, setTime] = useState<TimeLeft>(() =>
    next ? calcTimeLeft(new Date(next.time)) : { days: 0, hours: 0, minutes: 0, seconds: 0 }
  );
  const content = siteContent[lang];

  useEffect(() => {
    const id = setInterval(() => {
      const n = getNextNakath();
      setNext(n);
      if (n) setTime(calcTimeLeft(new Date(n.time)));
    }, 1000);
    return () => clearInterval(id);
  }, []);

  if (!next) {
    return (
      <div className="text-center py-8 px-4">
        <p className="text-2xl font-display gold-text">{content.newYearPassed}</p>
      </div>
    );
  }

  const label =
    lang === "si"
      ? `${next.name.si} සඳහා`
      : lang === "ta"
      ? `${next.name.ta} வரை`
      : `Until ${next.name.en}`;

  const units = [
    { label: content.days, value: time.days },
    { label: content.hours, value: time.hours },
    { label: content.minutes, value: time.minutes },
    { label: content.seconds, value: time.seconds },
  ];

  return (
    <div className="w-full">
      <p className="text-center text-sm font-medium tracking-widest uppercase mb-6"
        style={{ color: "rgba(255,216,120,0.6)" }}>
        {label}
      </p>
      <div className="grid grid-cols-4 gap-3 max-w-lg mx-auto">
        {units.map(({ label, value }) => (
          <div key={label} className="flex flex-col items-center">
            <div
              className="w-full rounded-xl flex items-center justify-center mb-2 relative overflow-hidden"
              style={{
                background: "linear-gradient(135deg, rgba(255,170,0,0.15), rgba(255,102,51,0.08))",
                border: "1px solid rgba(255,170,0,0.25)",
                aspectRatio: "1",
                maxWidth: "90px",
              }}
            >
              {/* Shine */}
              <div className="absolute inset-0 opacity-10"
                style={{ background: "linear-gradient(135deg, white 0%, transparent 50%)" }} />
              <span
                className="font-display countdown-digit relative z-10"
                style={{ fontSize: "clamp(1.4rem, 5vw, 2.2rem)", color: "#FFD97A" }}
              >
                {pad(value)}
              </span>
            </div>
            <span className="text-xs tracking-wider uppercase"
              style={{ color: "rgba(255,216,120,0.5)" }}>
              {label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
