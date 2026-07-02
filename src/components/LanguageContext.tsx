import { createContext, useContext, useState } from "react";

interface LangProp {
  children: React.ReactNode
}

interface Context {
  lang: "ar" | "en",
  setLang: (v: "ar" | "en") => void,
  toggle: () => void
}

const LanguageContext = createContext<Context | null>(null);


export function LanguageProvider({ children } : LangProp) {
  const [lang, setLang] = useState<"ar" | "en">("ar");
  const toggle = () => setLang((l) => (l === "ar" ? "en" : "ar"));
  return (
    <LanguageContext.Provider value={{ lang, setLang, toggle }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLang() : Context {
  const conext =  useContext(LanguageContext);

  if (!conext) {
    throw new Error("Error in the context!");
  }

  return conext;
}
