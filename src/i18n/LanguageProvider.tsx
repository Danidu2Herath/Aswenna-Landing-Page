import { useCallback, useEffect, useMemo, useState, type ReactNode } from "react";
import { content as english } from "../data/content";
import { merge } from "./merge";
import { DEFAULT_LANG, isLang, STORAGE_KEY, type Lang } from "./languages";
import { LanguageContext, type LanguageState, type Translation } from "./context";
import { si } from "./si";
import { ta } from "./ta";

const TRANSLATIONS: Record<Lang, Translation | undefined> = {
  en: undefined, // English is the base the others are laid over
  si,
  ta,
};

const readStored = (): Lang => {
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (isLang(stored)) return stored;
  } catch {
    // Private browsing or blocked storage: fall through to the default.
  }
  return DEFAULT_LANG;
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(() =>
    typeof window === "undefined" ? DEFAULT_LANG : readStored(),
  );

  useEffect(() => {
    document.documentElement.lang = lang;
    // All three scripts read left to right; set it explicitly so a
    // right-to-left language could be added later without surprises.
    document.documentElement.dir = "ltr";
  }, [lang]);

  const setLang = useCallback((next: Lang) => {
    setLangState(next);
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // Not being able to remember the choice is not worth failing over.
    }
  }, []);

  const value = useMemo<LanguageState>(() => {
    const translation = TRANSLATIONS[lang];
    return {
      lang,
      setLang,
      content: translation ? merge(english, translation) : english,
      partial: Boolean(translation),
    };
  }, [lang, setLang]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}
