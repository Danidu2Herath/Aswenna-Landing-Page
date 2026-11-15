import { createContext } from "react";
import type { Content } from "../data/content";
import type { DeepPartial } from "./merge";
import type { Lang } from "./languages";

/** A translation may fill in any subset of the English content tree. */
export type Translation = DeepPartial<Content>;

export type LanguageState = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  content: Content;
  /** True while the chosen language has only partial coverage. */
  partial: boolean;
};

export const LanguageContext = createContext<LanguageState | null>(null);

/** Shown when a language is still only partly translated. */
export const COVERAGE_NOTE: Record<Lang, string | undefined> = {
  en: undefined,
  si: "මෙම පිටුව තවම සම්පූර්ණයෙන් පරිවර්තනය කර නැත. පරිවර්තනය නොකළ කොටස් ඉංග්‍රීසියෙන් පෙන්වයි.",
  ta: "இந்தப் பக்கம் இன்னும் முழுமையாக மொழிபெயர்க்கப்படவில்லை. மொழிபெயர்க்கப்படாத பகுதிகள் ஆங்கிலத்தில் காட்டப்படும்.",
};
