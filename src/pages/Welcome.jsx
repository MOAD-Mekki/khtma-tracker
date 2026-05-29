import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useLang } from "../components/LanguageContext";

const welcomeTranslations = {
  ar: {
    title: "متتبع الختمة",
    description:
      "تابع ختمتك للقرآن الكريم بسهولة — سجّل حفظك جزءاً بجزء أو حزباً بحزب، وشاهد تقدمك حتى تكتمل الختمة.",
    button: "لنبدأ !",
  },
  en: {
    title: "Khatma Tracker",
    description:
      "Track your Quran completion easily — mark your progress hizb by hizb or juz by juz, and watch it grow until the khatma is complete.",
    button: "Let's start !",
  },
};

export default function Welcome() {
  const { lang, toggle } = useLang();
  const t = welcomeTranslations[lang];
  const isAr = lang === "ar";
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div
      dir={isAr ? "rtl" : "ltr"}
      className="font-arabic flex items-center justify-center bg-gradient-to-br from-emerald-50 to-teal-100 min-h-screen w-full relative"
    >
      {/* Language toggle */}
      <button
        onClick={toggle}
        className="fixed top-4 left-4 z-40 bg-white border border-teal-300 text-teal-700 font-sans font-semibold text-sm px-4 py-2 rounded-full shadow-sm hover:bg-teal-50 hover:scale-105 transition-all cursor-pointer"
      >
        {isAr ? "EN" : "ع"}
      </button>

      <div
        className="flex flex-col justify-center items-center border border-teal-200 rounded-2xl w-full max-w-md mx-4 p-8 bg-white/80 backdrop-blur-sm shadow-lg text-center gap-5"
        data-aos="zoom-in"
        data-aos-duration="1000"
      >
        <h1 className="font-arabic text-4xl font-bold text-teal-700">
          {t.title}
        </h1>
        <p className="font-arabic text-lg text-gray-600 leading-relaxed">
          {t.description}
        </p>
        <button
          onClick={() => navigate("/pages")}
          className="mt-2 bg-teal-500 hover:bg-teal-600 text-white font-arabic font-medium py-2.5 px-8 rounded-full text-lg transition-all hover:scale-105 cursor-pointer"
        >
          {t.button}
        </button>
      </div>
    </div>
  );
}
