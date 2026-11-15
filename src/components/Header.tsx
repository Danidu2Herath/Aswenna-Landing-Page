import { useEffect, useState } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { useContent } from "../i18n";
import LanguageSwitcher from "./LanguageSwitcher";
import LanguageNotice from "./LanguageNotice";
import "./header.css";

export default function Header() {
  const { nav, site, ui } = useContent();
  const [open, setOpen] = useState(false);
  const [stuck, setStuck] = useState(false);

  useEffect(() => {
    const onScroll = () => { setStuck(window.scrollY > 24); };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => { window.removeEventListener("scroll", onScroll); };
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <header className={`header${stuck ? " header--stuck" : ""}`}>
      <LanguageNotice />
      <div className="header__inner container">
        <a className="brand" href="#top" aria-label={`${site.name} home`}>
          <img src="/images/logo-mark.svg" alt="" width={36} height={36} />
          <span className="brand__text">
            <span className="brand__name">{site.name}</span>
            <span className="brand__tag">{site.tagline}</span>
          </span>
        </a>

        <nav className="header__nav" aria-label={ui.primaryNav}>
          <ul>
            {nav.map((item) => (
              <li key={item.href}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="header__actions">
          <LanguageSwitcher />
          <a className="btn btn--primary header__cta" href="#contact">
            {ui.getStarted} <ArrowRight size={16} />
          </a>
          <button
            type="button"
            className="header__burger"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? ui.closeMenu : ui.openMenu}
            onClick={() => { setOpen((v) => !v); }}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      <div id="mobile-nav" className={`mobile-nav${open ? " is-open" : ""}`} hidden={!open}>
        <ul>
          {nav.map((item) => (
            <li key={item.href}>
              <a href={item.href} onClick={() => { setOpen(false); }}>
                {item.label} <ArrowRight size={16} />
              </a>
            </li>
          ))}
        </ul>
        <a className="btn btn--primary btn--lg" href="#contact" onClick={() => { setOpen(false); }}>
          {ui.getStarted}
        </a>
        <LanguageSwitcher variant="stack" />
      </div>
    </header>
  );
}
