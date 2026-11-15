import { ArrowRight, Sprout } from "lucide-react";
import { useContent } from "../i18n";
import Reveal from "./Reveal";
import "./cta.css";

export default function CtaSection() {
  const { cta, site } = useContent();
  return (
    <section className="section cta" id="cta">
      <div className="container">
        <Reveal>
          <div className="cta__panel">
            <img className="cta__photo" src="/images/photos/market-trend.webp" alt="" aria-hidden />
            <div className="cta__veil" aria-hidden />

            <div className="cta__inner">
              <span className="cta__eyebrow">
                <Sprout size={15} /> {site.title}
              </span>
              <h2 className="cta__title">{cta.title}</h2>
              <p className="cta__sub">{cta.sub}</p>

              <div className="cta__actions">
                <a className="btn btn--light btn--lg" href="#platform">
                  {cta.primary} <ArrowRight size={18} />
                </a>
                <a className="btn btn--outline-light btn--lg" href="#top">
                  {cta.secondary}
                </a>
              </div>

              <p className="cta__brand">
                <strong>{site.name.toUpperCase()}</strong> — {site.promise}
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
