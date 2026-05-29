import { useState, useEffect, useRef } from "react";
import Card from "../components/HizbCard";
import CongratsCard from "../components/CongratsCard";
import Footer from "../components/Footer";
import { translations } from "../uses/translation";
import { ahadith } from "../uses/ahadith";
import { useLang } from "../components/LanguageContext";

const initialAhzab = [
  { id: 1, title: "الفاتحة", completed: false },
  { id: 2, title: "وإذا لقوا", completed: false },
  { id: 3, title: "سيقول السفهاء", completed: false },
  { id: 4, title: "واذكروا الله", completed: false },
  { id: 5, title: "تلك الرسل", completed: false },
  { id: 7, title: "لن تنالوا", completed: false },
  { id: 8, title: "يستبشرون", completed: false },
  { id: 9, title: "والمحصنات", completed: false },
  { id: 10, title: "الله لا إله إلا هو", completed: false },
  { id: 11, title: "لا يحب", completed: false },
  { id: 12, title: "قال رجلان", completed: false },
  { id: 13, title: "لتجدن", completed: false },
  { id: 14, title: "إنما يستجيب", completed: false },
  { id: 15, title: "ولو أننا نزلنا", completed: false },
  { id: 16, title: "المص", completed: false },
  { id: 17, title: "قال الملأ", completed: false },
  { id: 18, title: "وإذ نتقنا", completed: false },
  { id: 19, title: "واعلموا", completed: false },
  { id: 20, title: "إن كثيرًا", completed: false },
  { id: 21, title: "إنما السبيل", completed: false },
  { id: 22, title: "للذين أحسنوا", completed: false },
  { id: 23, title: "وما من دابة", completed: false },
  { id: 24, title: "وإلى مدين", completed: false },
  { id: 25, title: "وما أبرئ", completed: false },
  { id: 26, title: "أفمن يعلم", completed: false },
  { id: 27, title: "الر", completed: false },
  { id: 28, title: "وقال الله", completed: false },
  { id: 29, title: "سبحان", completed: false },
  { id: 30, title: "أولم يروا", completed: false },
  { id: 31, title: "قال ألم أقل", completed: false },
  { id: 32, title: "طه", completed: false },
  { id: 33, title: "اقترب", completed: false },
  { id: 34, title: "يا أيها الناس", completed: false },
  { id: 35, title: "قد أفلح", completed: false },
  { id: 36, title: "لا تتبعوا", completed: false },
  { id: 37, title: "وقال الذين لا يرجون", completed: false },
  { id: 38, title: "قالوا أنؤمن", completed: false },
  { id: 39, title: "فما كان جواب", completed: false },
  { id: 40, title: "ولقد وصلنا", completed: false },
  { id: 41, title: "ولا تجادلوا", completed: false },
  { id: 42, title: "ومن يسلم", completed: false },
  { id: 43, title: "ومن يقنت", completed: false },
  { id: 44, title: "قل من يرزقكم", completed: false },
  { id: 45, title: "وما أنزلنا", completed: false },
  { id: 46, title: "فنبذناه", completed: false },
  { id: 47, title: "فمن أظلم", completed: false },
  { id: 48, title: "ويقوم", completed: false },
  { id: 49, title: "إليه يرد", completed: false },
  { id: 50, title: "قل أولو جئتكم", completed: false },
  { id: 51, title: "ما خلقنا", completed: false },
  { id: 52, title: "لقد رضي", completed: false },
  { id: 53, title: "قال فما خطبكم", completed: false },
  { id: 54, title: "الرحمن", completed: false },
  { id: 55, title: "المجادلة", completed: false },
  { id: 56, title: "الجمعة", completed: false },
  { id: 57, title: "تبارك", completed: false },
  { id: 58, title: "قل أوحي", completed: false },
  { id: 59, title: "عم", completed: false },
  { id: 60, title: "سبح", completed: false },
];

const initialAjzaa = [
  { id: 1, title: "الجزء الأول", completed: false },
  { id: 2, title: "الجزء الثاني", completed: false },
  { id: 3, title: "الجزء الثالث", completed: false },
  { id: 4, title: "الجزء الرابع", completed: false },
  { id: 5, title: "الجزء الخامس", completed: false },
  { id: 6, title: "الجزء السادس", completed: false },
  { id: 7, title: "الجزء السابع", completed: false },
  { id: 8, title: "الجزء الثامن", completed: false },
  { id: 9, title: "الجزء التاسع", completed: false },
  { id: 10, title: "الجزء العاشر", completed: false },
  { id: 11, title: "الجزء الحادي عشر", completed: false },
  { id: 12, title: "الجزء الثاني عشر", completed: false },
  { id: 13, title: "الجزء الثالث عشر", completed: false },
  { id: 14, title: "الجزء الرابع عشر", completed: false },
  { id: 15, title: "الجزء الخامس عشر", completed: false },
  { id: 16, title: "الجزء السادس عشر", completed: false },
  { id: 17, title: "الجزء السابع عشر", completed: false },
  { id: 18, title: "الجزء الثامن عشر", completed: false },
  { id: 19, title: "الجزء التاسع عشر", completed: false },
  { id: 20, title: "الجزء العشرون", completed: false },
  { id: 21, title: "الجزء الحادي والعشرون", completed: false },
  { id: 22, title: "الجزء الثاني والعشرون", completed: false },
  { id: 23, title: "الجزء الثالث والعشرون", completed: false },
  { id: 24, title: "الجزء الرابع والعشرون", completed: false },
  { id: 25, title: "الجزء الخامس والعشرون", completed: false },
  { id: 26, title: "الجزء السادس والعشرون", completed: false },
  { id: 27, title: "الجزء السابع والعشرون", completed: false },
  { id: 28, title: "الجزء الثامن والعشرون", completed: false },
  { id: 29, title: "الجزء التاسع والعشرون", completed: false },
  { id: 30, title: "الجزء الثلاثون", completed: false },
];

export default function Main() {
  const [ahzab, setAhzab] = useState(initialAhzab);
  const [ajzaa, setAjzaa] = useState(initialAjzaa);
  const [khatmaCount, setKhatmaCount] = useState(0);
  const [showResetModal, setShowResetModal] = useState(false);
  const [viewMode, setViewMode] = useState("hizb");
  const [showCongrats, setShowCongrats] = useState(false);
  const { lang, toggle } = useLang();
  const isAr = lang === "ar";

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("khatmaData"));
    if (saved) {
      setAhzab(saved.ahzab || initialAhzab);
      setAjzaa(saved.ajzaa || initialAjzaa);
      setKhatmaCount(saved.khatmaCount || 0);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(
      "khatmaData",
      JSON.stringify({ ahzab, ajzaa, khatmaCount }),
    );
  }, [ahzab, ajzaa, khatmaCount]);

  function toggleItem(id, type) {
    if (type === "hizb") {
      const updated = ahzab.map((h) =>
        h.id === id ? { ...h, completed: !h.completed } : h,
      );
      setAhzab(updated);
      if (updated.every((h) => h.completed)) {
        setKhatmaCount((c) => c + 1);
        setShowCongrats(true);
      }
    } else {
      const updated = ajzaa.map((j) =>
        j.id === id ? { ...j, completed: !j.completed } : j,
      );
      setAjzaa(updated);
      if (updated.every((j) => j.completed)) {
        setKhatmaCount((c) => c + 1);
        setShowCongrats(true);
      }
    }
  }

  function handleReset() {
    setKhatmaCount(0);
    setAhzab(initialAhzab);
    setAjzaa(initialAjzaa);
    setShowResetModal(false);
  }

  function handleNewKhatma() {
    setAhzab(initialAhzab);
    setAjzaa(initialAjzaa);
    setShowCongrats(false);
  }

  const list = viewMode === "hizb" ? ahzab : ajzaa;

  const t = translations[lang];

  const random = useRef(Math.floor(Math.random() * 9));
  const hadith = ahadith[random.current].content; // used useRef so the value stays conserved on each render

  return (
    <div
      dir={isAr ? "rtl" : "ltr"}
      className="font-arabic overflow-x-hidden flex flex-col gap-5 justify-center items-center bg-linear-to-br from-emerald-50 to-teal-100 max-w-full h-full"
    >
      <button
        onClick={toggle}
        className="fixed top-4 left-4 z-40 bg-white border border-teal-300 text-teal-700 font-sans font-semibold text-sm px-4 py-2 rounded-full shadow-sm hover:bg-teal-50 hover:scale-105 transition-all cursor-pointer"
      >
        {isAr ? "EN" : "ع"}
      </button>
      <header className="flex flex-col gap-5 justify-center items-center mt-10">
        <h1 className="font-arabic text-4xl font-bold text-teal-700 text-center leading-snug">
          <span className="block text-sm font-sans tracking-widest text-teal-400 mb-1">
            {t.pageSubtitle}
          </span>
          {t.pageTitle}
        </h1>
        <div className="w-12 h-1 bg-teal-600 rounded-full" />
        <p
          dir="rtl"
          className="font-arabic text-base text-gray-600 text-center leading-loose max-w-md"
        >
          {hadith}
        </p>
        <div className="bg-white border border-teal-200 rounded-2xl px-10 py-4 text-center shadow-sm">
          <p className="font-arabic text-4xl font-bold text-teal-700 leading-none">
            {khatmaCount}
          </p>
          <p className="font-sans text-xs text-gray-400 mt-1 tracking-wide">
            {t.khatmaCount}
          </p>
        </div>
      </header>

      <section className="flex flex-row gap-3 mt-6">
        <button
          className={`font-arabic font-medium rounded-full text-base px-6 py-2.5 transition-all hover:scale-105 hover:cursor-pointer
      ${
        viewMode === "hizb"
          ? "bg-teal-700 text-white shadow-md"
          : "bg-white text-teal-700 border border-teal-500 hover:bg-teal-50"
      }`}
          onClick={() => setViewMode("hizb")}
        >
          {t.viewByHizb}
        </button>
        <button
          className={`font-arabic font-medium rounded-full text-base px-6 py-2.5 transition-all hover:scale-105 hover:cursor-pointer
      ${
        viewMode === "juz"
          ? "bg-teal-700 text-white shadow-md"
          : "bg-white text-teal-700 border border-teal-500 hover:bg-teal-50"
      }`}
          onClick={() => setViewMode("juz")}
        >
          {t.viewByJuz}
        </button>
      </section>
      <section className="grid grid-cols-3 lg:grid-cols-8 md:grid-cols-5 grid-template-columns: repeat(auto-fill, minmax(130px, 1fr)) justify-around gap-6 my-10">
        {list.map((item) => (
          <Card
            key={item.id}
            {...item}
            onClick={() => toggleItem(item.id, viewMode)}
          />
        ))}
      </section>
      <div className="my-10">
        <button
          className="text-white bg-linear-to-r from-red-400 via-red-500 to-red-600 hover:scale-105 hover:cursor-pointer shadow-lg font-medium rounded-full text-base px-5 py-2.5 transition-transform"
          onClick={() => setShowResetModal(true)}
        >
          {t.reset}
        </button>
      </div>
      <footer></footer>
      {showResetModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl p-8 max-w-sm w-full mx-4 flex flex-col items-center gap-4 shadow-xl text-center">
            <div className="text-4xl">⚠️</div>
            <h2 className="text-xl font-semibold text-gray-800">
              {t.resetConfirmTitle}
            </h2>
            <p className="text-gray-500 text-base leading-relaxed">
              {t.resetConfirmBody}
            </p>
            <div className="flex gap-3 w-full mt-2">
              <button
                className="flex-1 bg-red-500 text-white font-medium py-2.5 rounded-xl hover:bg-red-600 transition-colors"
                onClick={handleReset}
              >
                {t.resetYes}
              </button>
              <button
                className="flex-1 bg-gray-100 text-gray-700 font-medium py-2.5 rounded-xl hover:bg-gray-200 transition-colors"
                onClick={() => setShowResetModal(false)}
              >
                {t.resetCancel}
              </button>
            </div>
          </div>
        </div>
      )}

      {showCongrats && (
        <CongratsCard
          khatmaCount={khatmaCount}
          onNewKhatma={handleNewKhatma}
          t={t}
        />
      )}
    </div>
  );
}
