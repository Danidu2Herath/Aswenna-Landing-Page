import { useEffect, useId, useRef, useState } from "react";
import { Check, ChevronDown, Globe } from "lucide-react";
import { useContent, useLanguage } from "../i18n";
import "./language.css";

/**
 * Language picker for English, Sinhala and Tamil.
 *
 * A button that opens a listbox. Each option is written in its own script, so
 * a reader can find their language without reading English first.
 */
export default function LanguageSwitcher({ variant = "bar" }: { variant?: "bar" | "stack" }) {
  const { ui } = useContent();
  const { lang, setLang, languages } = useLanguage();
  const [open, setOpen] = useState(false);
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const listId = useId();

  const current = languages.find((l) => l.code === lang) ?? languages[0];

  useEffect(() => {
    if (!open) return;
    const onDown = (event: MouseEvent) => {
      if (wrapRef.current && !wrapRef.current.contains(event.target as Node)) setOpen(false);
    };
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  // Laid out as a plain row when there is space for it, e.g. the mobile menu.
  if (variant === "stack") {
    return (
      <div className="langstack" role="group" aria-label={ui.chooseLanguage}>
        <span className="langstack__label">
          <Globe size={15} /> {ui.language}
        </span>
        <div className="langstack__options">
          {languages.map((l) => (
            <button
              key={l.code}
              type="button"
              lang={l.code}
              className={`langstack__option${l.code === lang ? " is-active" : ""}`}
              aria-pressed={l.code === lang}
              onClick={() => { setLang(l.code); }}
            >
              {l.native}
            </button>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="lang" ref={wrapRef}>
      <button
        type="button"
        className="lang__button"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={listId}
        aria-label={`${ui.language}: ${current.label}`}
        title={ui.chooseLanguage}
        onClick={() => { setOpen((v) => !v); }}
      >
        <Globe size={16} />
        <span className="lang__code" lang={current.code}>{current.short}</span>
        <ChevronDown size={14} className={open ? "lang__chev is-open" : "lang__chev"} />
      </button>

      {open ? (
        <ul className="lang__list" id={listId} role="listbox" aria-label={ui.chooseLanguage}>
          {languages.map((l) => (
            <li key={l.code} role="none">
              <button
                type="button"
                role="option"
                lang={l.code}
                aria-selected={l.code === lang}
                className={`lang__option${l.code === lang ? " is-active" : ""}`}
                onClick={() => { setLang(l.code); setOpen(false); }}
              >
                <span>{l.native}</span>
                {l.code === lang ? <Check size={15} /> : null}
              </button>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}
