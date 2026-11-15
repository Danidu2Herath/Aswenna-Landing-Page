import { ArrowRight, ArrowDown, Droplets, CloudRain, Sprout } from "lucide-react";
import { useContent } from "../i18n";
import Phone from "./Phone";
import "./hero.css";

export default function Hero() {
  const { hero, site } = useContent();
  return (
    <section className="hero" id="top">
      <div className="hero__glow" aria-hidden />
      <div className="container hero__inner">
        <span className="hero__badge">
          <span className="hero__badge-tag">{hero.badgeTag}</span>
          {hero.badge}
        </span>

        <h1 className="hero__title">
          {hero.title.map((line, i) => (
            <span className="hero__line" key={line}>
              <span style={{ animationDelay: `${120 + i * 120}ms` }}>{line}</span>
            </span>
          ))}
        </h1>

        <p className="hero__sub">{hero.sub}</p>

        <div className="hero__actions">
          <a className="btn btn--primary btn--lg" href="#platform">
            {hero.primaryCta} <ArrowRight size={18} />
          </a>
          <a className="btn btn--ghost btn--lg" href="#engine">
            <ArrowDown size={18} /> {hero.secondaryCta}
          </a>
        </div>

        <p className="hero__tagline">
          <Sprout size={15} /> {site.name} — {site.promise}
        </p>
      </div>

      <div className="container">
        <div className="hero__showcase">
          <div className="hero__stage">
            <img
              className="hero__photo"
              src="/images/photos/hero-field.webp"
              alt="Cupped hands holding dark soil and a young seedling"
              fetchPriority="high"
            />
            <span className="hero__veil" aria-hidden />

            <Phone
              className="hero__phone"
              src="/images/screens/phone-dashboard.svg"
              alt="Placeholder of the Aswenna farmer dashboard"
            />

            <div className="hero__float hero__float--left">
              <span className="hero__float-icon"><Droplets size={18} /></span>
              <div>
                <strong>{hero.cards[0].value}</strong>
                <span>{hero.cards[0].label}</span>
              </div>
              <span className="chip chip--measured">{hero.cards[0].note}</span>
            </div>

            <div className="hero__float hero__float--right">
              <span className="hero__float-icon hero__float-icon--alt"><CloudRain size={18} /></span>
              <div>
                <strong>{hero.cards[1].value}</strong>
                <span>{hero.cards[1].label}</span>
              </div>
              <span className="chip chip--estimated">{hero.cards[1].note}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
