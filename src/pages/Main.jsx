import { useState, useEffect } from "react";
import Card from "../components/HizbCard";
import Footer from "../components/Footer";

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
  { id: 60, title: "سبح", completed: false }
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
  { id: 30, title: "الجزء الثلاثون", completed: false }
];

export default function Main() {
  const [ahzab, setAhzab] = useState(initialAhzab);
  const [ajzaa, setAjzaa] = useState(initialAjzaa);
  const [khatmaCount, setKhatmaCount] = useState(0);
  const [viewMode, setViewMode] = useState("hizb");

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
      JSON.stringify({ ahzab, ajzaa, khatmaCount })
    );
  }, [ahzab, ajzaa, khatmaCount]);

  function toggleItem(id, type) {
    if (type === "hizb") {
      const updated = ahzab.map((h) =>
        h.id === id ? { ...h, completed: !h.completed } : h
      );
      setAhzab(updated);

      if (updated.every((h) => h.completed)) {
        setAhzab(initialAhzab);
        setKhatmaCount((c) => c + 1);
      }
    } else {
      const updated = ajzaa.map((j) =>
        j.id === id ? { ...j, completed: !j.completed } : j
      );
      setAjzaa(updated);

      if (updated.every((j) => j.completed)) {
        setAjzaa(initialAjzaa);
        setKhatmaCount((c) => c + 1);
      }
    }
  }

  const list = viewMode === "hizb" ? ahzab : ajzaa;

  return (
    <div className="flex flex-col gap-5 justify-center items-center bg-linear-to-br from-green-400 to-green-700 max-w-full h-full">
      <header className="flex flex-col gap-5 justify-center items-center mt-10">
        <h1 className="text-4xl">مخطط ختمة القرآن الكريم</h1>
        <p className="w-150 h-full text-xl">
          هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى...
        </p>
        <p className="mt-5 text-lg" >{khatmaCount} عدد الختمات</p>
      </header>

      <section className="flex flex-row justify-between gap-10 mt-10">
        <button className='hover:cursor-pointer text-lg border rounded-2xl px-2.5 py-1' onClick={() => setViewMode("hizb")}>عرض الختمة بالأحزاب</button>
        <button className="hover:cursor-pointer text-lg border rounded-2xl px-2.5 py-1" onClick={() => setViewMode("juz")}>عرض الختمة بالأجزاء</button>
      </section>

      <section className="grid grid-cols-8 justify-around gap-5 my-10">
        {list.map((item) => (
          <Card
            key={item.id}
            {...item}
            onClick={() => toggleItem(item.id, viewMode)}
          />
        ))}
      </section>
      <div><button onClick={() => setKhatmaCount(0)}>تصفير </button></div>
      <footer>
      </footer>
    </div>
  );
}
