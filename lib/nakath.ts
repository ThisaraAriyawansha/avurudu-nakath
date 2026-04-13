export type Lang = "en" | "si" | "ta";

export interface NakathTime {
  id: string;
  icon: string;
  time: string;        // ISO string in Sri Lanka time
  displayTime: string;
  displayDate: string;
  color: string;
  direction: string;
  directionSi: string;
  directionTa: string;
  colour: string;
  colourSi: string;
  colourTa: string;
  name: { en: string; si: string; ta: string };
  subtitle: { en: string; si: string; ta: string };
  desc: { en: string; si: string; ta: string };
}

export const nakathTimes: NakathTime[] = [
  {
    id: "nonagatha",
    icon: "🌙",
    time: "2026-04-13T14:14:00+05:30",
    displayTime: "2:14 PM",
    displayDate: "April 13",
    color: "#9A5C00",
    direction: "West",
    directionSi: "බස්නාහිර",
    directionTa: "மேற்கு",
    colour: "Silver",
    colourSi: "රිදී",
    colourTa: "வெள்ளி",
    name: { en: "Nonagatha", si: "නොනාගත කාලය", ta: "நோனாகத காலம்" },
    subtitle: {
      en: "Old Year Ends",
      si: "පරණ අවුරුද්ද අවසන් වේ",
      ta: "பழைய ஆண்டு முடிகிறது",
    },
    desc: {
      en: "The old year draws to a close. A period of rest — no work, no eating. Reflect, pray, and prepare the home.",
      si: "පරණ අවුරුද්ද අවසන් වේ. වැඩ නොකළ යුතු, ආහාර නොගත යුතු කාලයකි. ගෙය සකසා ප්‍රාර්ථනා කරන්න.",
      ta: "பழைய ஆண்டு முடிகிறது. வேலை செய்யாத, சாப்பிடாத நேரம். வீட்டை சுத்தப்படுத்தி பிரார்த்தனை செய்யுங்கள்.",
    },
  },
  {
    id: "punya",
    icon: "✨",
    time: "2026-04-13T20:19:00+05:30",
    displayTime: "8:19 PM",
    displayDate: "April 13",
    color: "#0D8880",
    direction: "East",
    directionSi: "නැගෙනහිර",
    directionTa: "கிழக்கு",
    colour: "Gold",
    colourSi: "රන්",
    colourTa: "தங்கம்",
    name: { en: "Punya Kalaya", si: "පුණ්‍ය කාලය", ta: "புண்ணிய காலம்" },
    subtitle: {
      en: "New Year Begins",
      si: "අළුත් අවුරුද්ද උදා වේ",
      ta: "புத்தாண்டு தொடங்குகிறது",
    },
    desc: {
      en: "The most sacred moment — the Sinhala & Tamil New Year officially begins. Light oil lamps, offer betel leaves, and welcome the new year with joy.",
      si: "වඩාත් ශුභ මොහොත — සිංහල හා දෙමළ අළුත් අවුරුද්ද ආරම්භ වේ. ගිතෙල් පහන් දල්වා, බුලත් දල්ලක් පිළිගන්වා, සතුටින් නව වර්ෂය පිළිගන්න.",
      ta: "மிகவும் புனிதமான தருணம் — சிங்கள மற்றும் தமிழ் புத்தாண்டு தொடங்குகிறது. விளக்கேற்றி, வெற்றிலை படைத்து, மகிழ்ச்சியுடன் புத்தாண்டை வரவேற்கலாம்.",
    },
  },
  {
    id: "hearth",
    icon: "🔥",
    time: "2026-04-14T06:14:00+05:30",
    displayTime: "6:14 AM",
    displayDate: "April 14",
    color: "#C23408",
    direction: "East",
    directionSi: "නැගෙනහිර",
    directionTa: "கிழக்கு",
    colour: "Gold",
    colourSi: "රන්",
    colourTa: "தங்கம்",
    name: { en: "Lipa Ganima", si: "ලිප ගැනීම", ta: "அடுப்பு மூட்டல்" },
    subtitle: {
      en: "Light the Hearth",
      si: "ලිප දල්වන්න",
      ta: "சமையல் அடுப்பை மூட்டுதல்",
    },
    desc: {
      en: "Light the cooking hearth facing East wearing Gold-coloured clothes. Cook milk rice (kiribath) as the first dish of the new year.",
      si: "රන් පාට ඇඳුම් ඇඳ නැගෙනහිර දෙසට හැරී ලිප දල්වන්න. නව වර්ෂයේ පළමු ව්‍යංජනය ලෙස කිරිබත් පිසීම සිදු කරන්න.",
      ta: "தங்க நிற ஆடை அணிந்து கிழக்கு நோக்கி அடுப்பை மூட்டுங்கள். புத்தாண்டின் முதல் உணவாக கிரிபத் (பால் சோறு) சமைக்கவும்.",
    },
  },
  {
    id: "meal",
    icon: "🍚",
    time: "2026-04-14T07:19:00+05:30",
    displayTime: "7:19 AM",
    displayDate: "April 14",
    color: "#3E6E0F",
    direction: "North",
    directionSi: "උතුර",
    directionTa: "வடக்கு",
    colour: "White",
    colourSi: "සුදු",
    colourTa: "வெள்ளை",
    name: { en: "Kama Ganima", si: "කෑම ගැනීම", ta: "உண்ணல்" },
    subtitle: {
      en: "First Meal of New Year",
      si: "නව වර්ෂයේ පළමු ආහාරය",
      ta: "புத்தாண்டின் முதல் உணவு",
    },
    desc: {
      en: "Sit facing North wearing White clothes and partake in the first meal — milk rice with jaggery, kokis, and aluwa sweets.",
      si: "සුදු ඇඳුම් ඇඳ උතුරු දෙසට හැරී ඉඳ කිරිබත්, කොකිස්, ආළුව සහ හකුරු සමඟ නව වර්ෂයේ පළමු ආහාරය ලබා ගන්න.",
      ta: "வெள்ளை ஆடை அணிந்து வடக்கு நோக்கி அமர்ந்து, பால் சோறு, கொக்கிஸ், அலுவா மற்றும் வெல்லத்துடன் முதல் உணவை உண்ணுங்கள்.",
    },
  },
  {
    id: "work",
    icon: "💼",
    time: "2026-04-14T08:14:00+05:30",
    displayTime: "8:14 AM",
    displayDate: "April 14",
    color: "#074C8C",
    direction: "East",
    directionSi: "නැගෙනහිර",
    directionTa: "கிழக்கு",
    colour: "Gold",
    colourSi: "රන්",
    colourTa: "தங்கம்",
    name: { en: "Ganu Denu", si: "ගනු දෙනු ආරම්භය", ta: "வியாபாரம் தொடக்கம்" },
    subtitle: {
      en: "First Transactions & Work",
      si: "පළමු ගනු දෙනු",
      ta: "முதல் வர்த்தகம்",
    },
    desc: {
      en: "Begin first transactions and business activities facing East in Gold. Exchange betel leaves and coins to invite prosperity throughout the year.",
      si: "රන් ඇඳුම් ඇඳ නැගෙනහිර දෙසට හැරී ව්‍යාපාරික කටයුතු ආරම්භ කරන්න. සෞභාග්‍ය ලෙස බුලත් දල්ලක් සහ කාසි හුවමාරු කරගන්න.",
      ta: "தங்க ஆடை அணிந்து கிழக்கு நோக்கி வியாபார நடவடிக்கைகளைத் தொடங்குங்கள். செழிப்பை அழைக்க வெற்றிலை மற்றும் நாணயங்கள் பரிமாறிக்கொள்ளுங்கள்.",
    },
  },
  {
    id: "oilbath",
    icon: "🌿",
    time: "2026-04-14T09:24:00+05:30",
    displayTime: "9:24 AM",
    displayDate: "April 14",
    color: "#558B1A",
    direction: "South",
    directionSi: "දකුණ",
    directionTa: "தெற்கு",
    colour: "Green",
    colourSi: "කොළ",
    colourTa: "பச்சை",
    name: { en: "Hisa Thel Gema", si: "හිස තෙල් ගෑම", ta: "எண்ணெய் தேய்த்தல்" },
    subtitle: {
      en: "Auspicious Oil Bath",
      si: "ශුභ තෙල් නෑම",
      ta: "மங்கல எண்ணெய் குளியல்",
    },
    desc: {
      en: "Apply herbal oil infused with Nuga (Ficus) leaves facing South in Green attire. This ritual brings health, longevity, and good fortune for the year.",
      si: "කොළ ඇඳුම් ඇඳ දකුණු දෙසට හැරී නුග කොළ මිශ්‍ර ශාකසාර තෙල් ගා නා ගන්න. මෙය නව වර්ෂය පුරාවට සෞභාග්‍යය, ආරෝග්‍යය ගෙන දේ.",
      ta: "பச்சை ஆடை அணிந்து தெற்கு நோக்கி நுகா இலைகள் கலந்த மூலிகை எண்ணெய் தடவி குளிக்கவும். இது ஆண்டு முழுவதும் ஆரோக்கியம் மற்றும் நல்வாழ்வைத் தரும்.",
    },
  },
];

export const siteContent = {
  en: {
    title: "AvuruduNakath",
    tagline: "Sinhala & Tamil New Year 2026",
    subtitle: "Auspicious Times & Nakath",
    countdownLabel: "Until Punya Kalaya",
    days: "Days",
    hours: "Hours",
    minutes: "Minutes",
    seconds: "Seconds",
    direction: "Direction",
    colour: "Colour",
    newYearPassed: "The New Year has arrived! Subha Aluth Avuruddak Wewa! 🎉",
    footer: "May this New Year bring joy, prosperity, and peace to all Sri Lankan families.",
  },
  si: {
    title: "AvuruduNakath",
    tagline: "සිංහල හා දෙමළ අළුත් අවුරුදු 2026",
    subtitle: "ශුභ නකත් වේලාවන්",
    countdownLabel: "පුණ්‍ය කාලය දක්වා",
    days: "දිනය",
    hours: "පැය",
    minutes: "මිනිත්තු",
    seconds: "තත්පර",
    direction: "දිශාව",
    colour: "වර්ණය",
    newYearPassed: "අළුත් අවුරුද්ද උදා වූයේය! සුභ අළුත් අවුරුද්දක් වේවා! 🎉",
    footer: "මෙම නව වර්ෂය සියලු ශ්‍රී ලාංකීය පවුල්වලට සතුට, සෞභාග්‍යය හා සාමය ගෙන දේවා.",
  },
  ta: {
    title: "AvuruduNakath",
    tagline: "சிங்கள & தமிழ் புத்தாண்டு 2026",
    subtitle: "மங்கல நட்சத்திர நேரங்கள்",
    countdownLabel: "புண்ணிய காலம் வரை",
    days: "நாட்கள்",
    hours: "மணி",
    minutes: "நிமிடம்",
    seconds: "விநாடி",
    direction: "திசை",
    colour: "நிறம்",
    newYearPassed: "புத்தாண்டு வந்துவிட்டது! இனிய தமிழ் புத்தாண்டு நல்வாழ்த்துக்கள்! 🎉",
    footer: "இந்த புத்தாண்டு அனைத்து இலங்கை குடும்பங்களுக்கும் மகிழ்ச்சி, செழிப்பு மற்றும் அமைதி தரட்டும்.",
  },
};
