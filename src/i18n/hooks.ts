import { useContext } from "react";
import type { Content } from "../data/content";
import { LanguageContext, type LanguageState } from "./context";
import { LANGUAGES } from "./languages";

function useLanguageState(): LanguageState {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used inside <LanguageProvider>");
  return ctx;
}

/** The content tree in the active language, with English filling any gaps. */
export const useContent = (): Content => useLanguageState().content;

/** The active language, the setter, and whether it is only partly translated. */
export function useLanguage() {
  const { lang, setLang, partial } = useLanguageState();
  return { lang, setLang, partial, languages: LANGUAGES };
}
