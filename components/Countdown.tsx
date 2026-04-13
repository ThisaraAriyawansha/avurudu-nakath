"use client";

import { useEffect, useState } from "react";
import { Lang, siteContent } from "@/lib/nakath";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  passed: boolean;
}

// Punya Kalaya — April 14, 2026 at 9:32 AM Asia/Colombo (UTC+05:30)
const PUNYA_KALAYA = new Date("2026-04-14T09:32:00+05:30");

function calcTimeLeft(): TimeLeft {
  const diff = PUNYA_KALAYA.getTime() - Date.now();
  if (diff <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0, passed: true };
  }
  const totalSecs = Math.floor(diff / 1000);
  return {
    days: Math.floor(totalSecs / 86400),
    hours: Math.floor((totalSecs % 86400) / 3600),
    minutes: Math.floor((totalSecs % 3600) / 60),
    seconds: totalSecs % 60,
    passed: false,
  };
}

function pad(n: number) {
  return String(n).padStart(2, "0");
}

export default function Countdown({ lang }: { lang: Lang }) {
  const [time, setTime] = useState<TimeLeft>(calcTimeLeft);
  const content = siteContent[lang];

  useEffect(() => {
    const id = setInterval(() => setTime(calcTimeLeft()), 1000);
    return () => clearInterval(id);
  }, []);

  if (time.passed) {
    return (
      <div className="text-center py-8 px-4">
        <p className="text-2xl font-display gold-text">{content.newYearPassed}</p>
      </div>
    );
  }

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
        {content.countdownLabel}
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
