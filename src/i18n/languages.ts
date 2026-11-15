export type Lang = "en" | "si" | "ta";

export type LanguageOption = {
  code: Lang;
  /** The language's name in English, for screen readers and the `title`. */
  label: string;
  /** The language's own name, which is what the switcher shows. */
  native: string;
  /** Short code shown in the collapsed switcher button. */
  short: string;
};

export const LANGUAGES: LanguageOption[] = [
  { code: "en", label: "English", native: "English", short: "EN" },
  { code: "si", label: "Sinhala", native: "සිංහල", short: "සිං" },
  { code: "ta", label: "Tamil", native: "தமிழ்", short: "த" },
];

export const DEFAULT_LANG: Lang = "en";
export const STORAGE_KEY = "aswenna.lang";

export const isLang = (value: unknown): value is Lang =>
  typeof value === "string" && LANGUAGES.some((l) => l.code === value);
