"use client";

import { useEffect, useState } from "react";

function getTime() {
  const now = new Date();
  return {
    h: String(now.getHours()).padStart(2, "0"),
    m: String(now.getMinutes()).padStart(2, "0"),
    s: String(now.getSeconds()).padStart(2, "0"),
  };
}

export default function LiveClock() {
  const [time, setTime] = useState<{ h: string; m: string; s: string } | null>(null);

  useEffect(() => {
    setTime(getTime());

    // Sync to next second boundary
    const msToNextSecond = 1000 - (Date.now() % 1000);
    let intervalId: ReturnType<typeof setInterval>;
    const timeoutId = setTimeout(() => {
      setTime(getTime());
      intervalId = setInterval(() => setTime(getTime()), 1000);
    }, msToNextSecond);

    return () => {
      clearTimeout(timeoutId);
      clearInterval(intervalId);
    };
  }, []);

  if (!time) return null;

  return (
    <div
      className="flex items-center gap-1 font-display"
      style={{ color: "rgba(255,216,120,0.75)", fontSize: "0.85rem", letterSpacing: "0.05em" }}
    >
      <span>{time.h}</span>
      <span style={{ color: "rgba(255,170,0,0.5)", animation: "subtlePulse 1s ease-in-out infinite" }}>:</span>
      <span>{time.m}</span>
      <span style={{ color: "rgba(255,170,0,0.5)", animation: "subtlePulse 1s ease-in-out infinite" }}>:</span>
      <span style={{ color: "rgba(255,216,120,0.55)" }}>{time.s}</span>
    </div>
  );
}
