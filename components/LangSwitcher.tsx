"use client";

import { Lang } from "@/lib/nakath";

interface Props {
  current: Lang;
  onChange: (lang: Lang) => void;
}

const langs: { code: Lang; label: string; native: string }[] = [
  { code: "en", label: "EN", native: "English" },
  { code: "si", label: "සිං", native: "සිංහල" },
  { code: "ta", label: "த", native: "தமிழ்" },
];

export default function LangSwitcher({ current, onChange }: Props) {
  return (
    <div className="flex gap-1.5">
      {langs.map(({ code, label, native }) => (
        <button
          key={code}
          title={native}
          onClick={() => onChange(code)}
          className={`lang-btn px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-200 ${
            current === code ? "active" : ""
          }`}
          style={{
            background: current === code ? "rgba(255,170,0,0.15)" : "rgba(255,255,255,0.05)",
            border: current === code ? "1px solid rgba(255,170,0,0.5)" : "1px solid rgba(255,255,255,0.1)",
            color: current === code ? "#FFD97A" : "rgba(255,248,231,0.5)",
            cursor: "pointer",
          }}
        >
          {label}
        </button>
      ))}
    </div>
  );
}
