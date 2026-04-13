"use client";

import { useState } from "react";
import { nakathTimes, siteContent, Lang } from "@/lib/nakath";
import Countdown from "@/components/Countdown";
import NakathCard from "@/components/NakathCard";
import OilLamp from "@/components/OilLamp";
import LangSwitcher from "@/components/LangSwitcher";
import FloatingPetals from "@/components/FloatingPetals";

export default function Home() {
  const [lang, setLang] = useState<Lang>("en");
  const content = siteContent[lang];

  return (
    <main className="avurudu-bg lotus-pattern min-h-screen relative">
      <FloatingPetals />

      {/* Content wrapper */}
      <div className="relative z-10 max-w-2xl mx-auto px-4 pb-20">

        {/* ── HEADER ── */}
        <header className="pt-8 pb-6">
          <div className="flex items-center justify-between mb-8">
            {/* Logo / Site name */}
            <div className="flex items-center gap-3">
              <OilLamp size={36} />
              <div>
                <h1 className="font-display text-xl gold-text leading-none">
                  AvuruduNakath
                </h1>
                <p className="text-xs mt-0.5" style={{ color: "rgba(255,216,120,0.5)" }}>
                  2026
                </p>
              </div>
            </div>
            <LangSwitcher current={lang} onChange={setLang} />
          </div>

          {/* Hero */}
          <div className="text-center fade-up">
            {/* Lamp centered */}
            <div className="flex justify-center mb-6">
              <div className="relative">
                <div
                  className="absolute inset-0 rounded-full blur-2xl"
                  style={{ background: "rgba(255,170,0,0.2)", transform: "scale(1.5)" }}
                />
                <OilLamp size={80} />
              </div>
            </div>

            <div className="mb-2">
              <span
                className="inline-block text-xs font-medium tracking-[0.2em] uppercase px-4 py-1.5 rounded-full"
                style={{
                  background: "rgba(255,170,0,0.1)",
                  border: "1px solid rgba(255,170,0,0.25)",
                  color: "rgba(255,216,120,0.8)",
                }}
              >
                Saka 1948
              </span>
            </div>

            <h2
              className="font-display mt-4 mb-2 leading-tight"
              style={{ fontSize: "clamp(1.8rem, 6vw, 3rem)", color: "#FFF8E7" }}
            >
              <span className="gold-text">
                {lang === "si"
                  ? "සිංහල හා දෙමළ"
                  : lang === "ta"
                  ? "சிங்கள & தமிழ்"
                  : "Sinhala & Tamil"}
              </span>
              <br />
              <span style={{ color: "#FFF8E7" }}>
                {lang === "si"
                  ? "අළුත් අවුරුදු 2026"
                  : lang === "ta"
                  ? "புத்தாண்டு 2026"
                  : "New Year 2026"}
              </span>
            </h2>

            <p
              className="text-sm mb-1"
              style={{ color: "rgba(255,248,231,0.5)" }}
            >
              {lang === "si" ? "ඒප්‍රේල් 13–14, 2026" : lang === "ta" ? "ஏப்ரல் 13–14, 2026" : "April 13–14, 2026"}
            </p>

            {/* Sinhala & Tamil script names */}
            <div className="flex items-center justify-center gap-4 mt-3">
              <span className="font-sinhala text-base" style={{ color: "rgba(255,170,0,0.7)" }}>
                සිංහල අළුත් අවුරුදු
              </span>
              <span style={{ color: "rgba(255,255,255,0.2)" }}>·</span>
              <span className="font-tamil text-base" style={{ color: "rgba(255,102,51,0.8)" }}>
                தமிழ் புத்தாண்டு
              </span>
            </div>
          </div>
        </header>

        {/* ── DIVIDER ── */}
        <div className="avurudu-divider my-6 fade-up delay-2" />

        {/* ── COUNTDOWN ── */}
        <section className="mb-8 fade-up delay-3">
          <div
            className="rounded-2xl p-6"
            style={{
              background: "linear-gradient(135deg, rgba(255,170,0,0.1), rgba(255,102,51,0.06))",
              border: "1px solid rgba(255,170,0,0.2)",
              boxShadow: "0 0 40px rgba(255,170,0,0.08)",
            }}
          >
            <Countdown lang={lang} />
          </div>
        </section>

        {/* ── NAKATH TIMES HEADING ── */}
        <div className="mb-5 fade-up delay-4">
          <h3
            className="font-display text-lg"
            style={{ color: "#FFF8E7" }}
          >
            {content.subtitle}
          </h3>
          <p className="text-sm mt-1" style={{ color: "rgba(255,248,231,0.4)" }}>
            {lang === "si"
              ? "කාඩ්පත ස්පර්ශ කරන්න තොරතුරු ලබා ගන්න"
              : lang === "ta"
              ? "விவரங்களுக்கு அட்டையை தொடவும்"
              : "Tap a card to learn more about each ritual"}
          </p>
        </div>

        {/* ── NAKATH CARDS ── */}
        <section className="flex flex-col gap-3">
          {nakathTimes.map((nakath, i) => (
            <NakathCard
              key={nakath.id}
              nakath={nakath}
              lang={lang}
              index={i}
              isHighlighted={nakath.id === "punya"}
            />
          ))}
        </section>

        {/* ── DIVIDER ── */}
        <div className="avurudu-divider my-8" />

        {/* ── TRADITIONAL SYMBOLS ── */}
        <section className="mb-8 fade-up">
          <h3
            className="font-display text-lg mb-4"
            style={{ color: "#FFF8E7" }}
          >
            {lang === "si" ? "සාම්ප්‍රදායික සංකේත" : lang === "ta" ? "பாரம்பரிய சின்னங்கள்" : "Traditional Symbols"}
          </h3>
          <div className="grid grid-cols-2 gap-3">
            {[
              {
                emoji: "🌺",
                en: "Areca flowers",
                si: "පූජා මල්",
                ta: "பூஜை மலர்கள்",
                desc_en: "Offered at the temple for blessings",
                desc_si: "පන්සලේ පූජාවට",
                desc_ta: "கோவிலில் பூஜைக்கு",
              },
              {
                emoji: "🍃",
                en: "Betel leaves",
                si: "බුලත් දල්ල",
                ta: "வெற்றிலை",
                desc_en: "Exchanged as a sign of respect",
                desc_si: "ගෞරවයේ සංකේතය",
                desc_ta: "மரியாதையின் அடையாளம்",
              },
              {
                emoji: "🥛",
                en: "Kiribath",
                si: "කිරිබත්",
                ta: "கிரிபத்",
                desc_en: "Milk rice, first meal of the year",
                desc_si: "නව වර්ෂයේ පළමු ආහාරය",
                desc_ta: "புத்தாண்டின் முதல் உணவு",
              },
              {
                emoji: "🪔",
                en: "Oil lamp",
                si: "ගිතෙල් පහන",
                ta: "எண்ணெய் விளக்கு",
                desc_en: "Symbol of light and prosperity",
                desc_si: "ආලෝකය හා සෞභාග්‍යයේ සංකේතය",
                desc_ta: "ஒளி மற்றும் செழிப்பின் அடையாளம்",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="rounded-xl p-4"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.07)",
                }}
              >
                <div className="text-2xl mb-2">{item.emoji}</div>
                <p
                  className="font-medium text-sm mb-1"
                  style={{ color: "#FFF8E7" }}
                >
                  {lang === "si" ? item.si : lang === "ta" ? item.ta : item.en}
                </p>
                <p className="text-xs" style={{ color: "rgba(255,248,231,0.4)" }}>
                  {lang === "si" ? item.desc_si : lang === "ta" ? item.desc_ta : item.desc_en}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ── FOOTER ── */}
        <footer className="text-center pt-4">
          <div
            className="w-12 h-px mx-auto mb-6"
            style={{ background: "rgba(255,170,0,0.3)" }}
          />
          <div className="flex justify-center mb-4">
            <OilLamp size={32} />
          </div>
          <p
            className="text-sm leading-relaxed max-w-xs mx-auto"
            style={{ color: "rgba(255,248,231,0.4)" }}
          >
            {content.footer}
          </p>
          <p className="text-xs mt-4" style={{ color: "rgba(255,255,255,0.2)" }}>
            © 2026 AvuruduNakath · Sri Lanka
          </p>
        </footer>
      </div>
    </main>
  );
}
