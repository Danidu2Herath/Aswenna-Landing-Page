import { Info } from "lucide-react";
import { COVERAGE_NOTE, useLanguage } from "../i18n";
import "./language.css";

/**
 * Shown when the reader has chosen a language the site is not yet fully
 * translated into, so untranslated English is explained rather than puzzling.
 */
export default function LanguageNotice() {
  const { lang, partial } = useLanguage();
  const note = COVERAGE_NOTE[lang];
  if (!partial || !note) return null;

  return (
    <div className="lang-notice" role="status">
      <div className="container lang-notice__inner">
        <Info size={15} />
        <p lang={lang}>{note}</p>
      </div>
    </div>
  );
}
