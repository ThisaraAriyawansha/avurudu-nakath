export type Lang = "en" | "si" | "ta";

export interface NakathTime {
  id: string;
  icon: string;
  time: string;        // ISO string in Sri Lanka time (Asia/Colombo, UTC+05:30)
  displayTime: string;
  displayDate: string;
  displayDateSi: string;
  displayDateTa: string;
  displayTimeSi: string;
  displayTimeTa: string;
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
    time: "2026-04-14T03:08:00+05:30",
    displayTime: "3:08 AM – 3:56 PM",
    displayTimeSi: "පෙ.ව. 03:08 – ප.ව. 03:56",
    displayTimeTa: "காலை 03:08 – மாலை 03:56",
    displayDate: "April 14",
    displayDateSi: "අප්‍රේල් 14",
    displayDateTa: "ஏப்ரல் 14",
    color: "#9A5C00",
    direction: "West",
    directionSi: "බස්නාහිර",
    directionTa: "மேற்கு",
    colour: "Silver",
    colourSi: "රිදී",
    colourTa: "வெள்ளி",
    name: { en: "Punya Kalaya", si: "පුණ්‍ය කාලය", ta: "புண்ணிய காலம்" },
    subtitle: {
      en: "Sacred Period (3:08 AM – 3:56 PM)",
      si: "ශුභ නොනාගත කාලය",
      ta: "புனித நோனாகத காலம்",
    },
    desc: {
      en: "The sacred Punya Kalaya period (3:08 AM – 3:56 PM). No work or eating — perform religious activities and reflect in prayer. Prepare the home and await the New Year.",
      si: "ශුභ නොනාගත / පුණ්‍ය කාලය (පෙ.ව. 03:08 සිට ප.ව. 03:56 දක්වා). වැඩ නොකළ යුතු, ආහාර නොගත යුතු කාලයකි. ධාර්මික කටයුතුවල නියැළී, ගෙය සකසා නව වර්ෂය ලැබීමට සූදානම් වන්න.",
      ta: "புனித நோனாகத / புண்ணிய காலம் (காலை 03:08 – மாலை 03:56). வேலை செய்யாத, சாப்பிடாத நேரம். மதச் சடங்குகளில் ஈடுபட்டு வீட்டை தயார் செய்யுங்கள்.",
    },
  },
  {
    id: "punya",
    icon: "✨",
    time: "2026-04-14T09:32:00+05:30",
    displayTime: "9:32 AM",
    displayTimeSi: "පෙ.ව. 09:32",
    displayTimeTa: "காலை 09:32",
    displayDate: "April 14",
    displayDateSi: "අප්‍රේල් 14",
    displayDateTa: "ஏப்ரல் 14",
    color: "#0D8880",
    direction: "South",
    directionSi: "දකුණ",
    directionTa: "தெற்கு",
    colour: "Red",
    colourSi: "රතු",
    colourTa: "சிவப்பு",
    name: { en: "Dawn of New Year", si: "අළුත් අවුරුදු උදාව", ta: "புத்தாண்டு உதயம்" },
    subtitle: {
      en: "Aluth Avurudu Udawa",
      si: "නව වර්ෂය උදා වේ",
      ta: "புத்தாண்டு விடியல்",
    },
    desc: {
      en: "The most sacred moment — the Sinhala & Tamil New Year officially dawns. Face South in Red attire. Light oil lamps, offer betel leaves, and welcome the new year with joy.",
      si: "වඩාත් ශුභ මොහොත — සිංහල හා දෙමළ අළුත් අවුරුදු උදා වේ. රතු ඇඳුම් ඇඳ දකුණු දෙසට හැරී ගිතෙල් පහන් දල්වා, බුලත් දල්ලක් පිළිගන්වා, සතුටින් නව වර්ෂය පිළිගන්න.",
      ta: "மிகவும் புனிதமான தருணம் — சிங்கள மற்றும் தமிழ் புத்தாண்டு உதயமாகிறது. சிவப்பு ஆடை அணிந்து தெற்கு நோக்கி விளக்கேற்றி, வெற்றிலை படைத்து, மகிழ்ச்சியுடன் புத்தாண்டை வரவேற்கலாம்.",
    },
  },
  {
    id: "hearth",
    icon: "🔥",
    time: "2026-04-14T10:51:00+05:30",
    displayTime: "10:51 AM",
    displayTimeSi: "පෙ.ව. 10:51",
    displayTimeTa: "காலை 10:51",
    displayDate: "April 14",
    displayDateSi: "අප්‍රේල් 14",
    displayDateTa: "ஏப்ரல் 14",
    color: "#C23408",
    direction: "South",
    directionSi: "දකුණ",
    directionTa: "தெற்கு",
    colour: "Red",
    colourSi: "රතු",
    colourTa: "சிவப்பு",
    name: { en: "Cooking First Meal", si: "පළමු ආහාර වේල පිසීම", ta: "முதல் உணவு சமைத்தல்" },
    subtitle: {
      en: "Light the Hearth",
      si: "ලිප දල්වීම",
      ta: "சமையல் அடுப்பை மூட்டுதல்",
    },
    desc: {
      en: "Light the cooking hearth facing South wearing Red clothes. Cook milk rice (kiribath) as the first dish of the new year.",
      si: "රතු ඇඳුම් ඇඳ දකුණු දෙසට හැරී ලිප දල්වන්න. නව වර්ෂයේ පළමු ව්‍යංජනය ලෙස කිරිබත් පිසීම සිදු කරන්න.",
      ta: "சிவப்பு ஆடை அணிந்து தெற்கு நோக்கி அடுப்பை மூட்டுங்கள். புத்தாண்டின் முதல் உணவாக கிரிபத் (பால் சோறு) சமைக்கவும்.",
    },
  },
  {
    id: "meal",
    icon: "🍚",
    time: "2026-04-14T12:06:00+05:30",
    displayTime: "12:06 PM",
    displayTimeSi: "දහවල් 12:06",
    displayTimeTa: "மதியம் 12:06",
    displayDate: "April 14",
    displayDateSi: "අප්‍රේල් 14",
    displayDateTa: "ஏப்ரல் 14",
    color: "#3E6E0F",
    direction: "South",
    directionSi: "දකුණ",
    directionTa: "தெற்கு",
    colour: "Red",
    colourSi: "රතු",
    colourTa: "சிவப்பு",
    name: { en: "First Work/Meal", si: "පළමු රැකියාව/ආහාර වේල", ta: "முதல் வேலை/உணவு" },
    subtitle: {
      en: "First Meal, Work & Transactions",
      si: "ආහාර ගැනීම හා ගනු දෙනු",
      ta: "உண்ணல் & வர்த்தகம்",
    },
    desc: {
      en: "Sit facing South wearing Red clothes for the first meal — milk rice with jaggery, kokis, and aluwa. Also commence first work and transactions, exchanging betel leaves and coins for prosperity.",
      si: "රතු ඇඳුම් ඇඳ දකුණු දෙසට හැරී ඉඳ කිරිබත්, කොකිස්, ආළුව සහ හකුරු සමඟ නව වර්ෂයේ පළමු ආහාරය ලබා ගන්න. ව්‍යාපාරික කටයුතු ආරම්භ කර සෞභාග්‍ය ලෙස බුලත් දල්ලක් සහ කාසි හුවමාරු කරගන්න.",
      ta: "சிவப்பு ஆடை அணிந்து தெற்கு நோக்கி அமர்ந்து முதல் உணவை உண்ணுங்கள். வியாபார நடவடிக்கைகளைத் தொடங்கி வெற்றிலை மற்றும் நாணயங்கள் பரிமாறிக்கொள்ளுங்கள்.",
    },
  },
  {
    id: "oilbath",
    icon: "🌿",
    time: "2026-04-15T06:55:00+05:30",
    displayTime: "6:55 AM",
    displayTimeSi: "පෙ.ව. 06:55",
    displayTimeTa: "காலை 06:55",
    displayDate: "April 15",
    displayDateSi: "අප්‍රේල් 15",
    displayDateTa: "ஏப்ரல் 15",
    color: "#558B1A",
    direction: "East",
    directionSi: "නැගෙනහිර",
    directionTa: "கிழக்கு",
    colour: "Green",
    colourSi: "කොළ",
    colourTa: "பச்சை",
    name: { en: "Oil Anointing", si: "තෙල් ආලේප කිරීම", ta: "எண்ணெய் ஆலேபனம்" },
    subtitle: {
      en: "Auspicious Oil Bath",
      si: "ශුභ හිස් තෙල් ගෑම",
      ta: "மங்கல எண்ணெய் குளியல்",
    },
    desc: {
      en: "Apply herbal oil infused with Nuga (Ficus) leaves facing East. This ritual brings health, longevity, and good fortune for the year.",
      si: "නැගෙනහිර දෙසට හැරී නුග කොළ මිශ්‍ර ශාකසාර තෙල් ගා නා ගන්න. මෙය නව වර්ෂය පුරාවට සෞභාග්‍යය, ආරෝග්‍යය ගෙන දේ.",
      ta: "கிழக்கு நோக்கி நுகா இலைகள் கலந்த மூலிகை எண்ணெய் தடவி குளிக்கவும். இது ஆண்டு முழுவதும் ஆரோக்கியம் மற்றும் நல்வாழ்வைத் தரும்.",
    },
  },
  {
    id: "travel",
    icon: "🚶",
    time: "2026-04-20T06:27:00+05:30",
    displayTime: "6:27 AM",
    displayTimeSi: "පෙ.ව. 06:27",
    displayTimeTa: "காலை 06:27",
    displayDate: "April 20",
    displayDateSi: "අප්‍රේල් 20",
    displayDateTa: "ஏப்ரல் 20",
    color: "#5C5C9A",
    direction: "South",
    directionSi: "දකුණ",
    directionTa: "தெற்கு",
    colour: "White",
    colourSi: "සුදු",
    colourTa: "வெள்ளை",
    name: { en: "Setting out for Work", si: "රැකියාවට යාම", ta: "வேலைக்காக புறப்படல்" },
    subtitle: {
      en: "First Journey & Livelihood",
      si: "පළමු ගමන හා රැකිරක්ෂාව",
      ta: "முதல் பயணம் & வாழ்வாதாரம்",
    },
    desc: {
      en: "Set out facing South wearing White clothes. Carry rice and jaggery as offerings. This auspicious journey invites success and prosperity in work throughout the year.",
      si: "සුදු ඇඳුම් ඇඳ දකුණු දෙසට හැරී ගමන් ඇරඹෙන්න. සහල් හා හකුරු රැගෙන යන්න. මෙම ශුභ ගමන නව වර්ෂය පුරාවට රැකිරක්ෂාවේ සාර්ථකත්වය ගෙන දේ.",
      ta: "வெள்ளை ஆடை அணிந்து தெற்கு நோக்கி புறப்படுங்கள். அரிசி மற்றும் வெல்லம் எடுத்துச் செல்லுங்கள். இந்த மங்கல பயணம் ஆண்டு முழுவதும் வேலையில் வெற்றியை தரும்.",
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
    days: "දින",
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
