import { Check, Info, Star } from "lucide-react";
import { useContent } from "../i18n";
import Reveal from "./Reveal";
import SectionHead from "./SectionHead";
import "./pricing.css";

export default function PricingSection() {
  const { pricing } = useContent();
  return (
    <section className="section section--alt" id="pricing">
      <div className="container">
        <SectionHead
          num="13"
          eyebrow={pricing.eyebrow}
          title={pricing.title}
          accent={pricing.accent}
          sub={pricing.sub}
        />

        <div className="pricing__grid">
          {pricing.tiers.map((tier, i) => (
            <Reveal key={tier.tag} delay={i * 90}>
              <article className={`plan${tier.featured ? " plan--featured" : ""}`}>
                {tier.featured ? (
                  <span className="plan__flag"><Star size={12} fill="currentColor" /> Most requested</span>
                ) : null}

                <span className="plan__tag">{tier.tag}</span>
                <h3 className="plan__name">{tier.name}</h3>

                <p className="plan__price">
                  {tier.price}
                  <span>{tier.unit}</span>
                </p>
                <p className="plan__text">{tier.text}</p>

                <ul className="plan__list">
                  {tier.items.map((item) => (
                    <li key={item}>
                      <span className="plan__tick"><Check size={12} strokeWidth={3} /></span>
                      {item}
                    </li>
                  ))}
                </ul>

                <a className={`btn ${tier.featured ? "btn--primary" : "btn--ghost"} plan__btn`} href="#contact">
                  {tier.cta}
                </a>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <p className="pricing__note">
            <Info size={16} /> {pricing.note}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
