import { useContent } from "../i18n";
import Icon from "./Icon";
import Reveal from "./Reveal";
import SectionHead from "./SectionHead";
import Phone from "./Phone";
import "./soil.css";

export default function SoilSection() {
  const { soil } = useContent();
  return (
    <section className="section section--band" id="soil">
      <div className="container">
        <SectionHead num="03" eyebrow={soil.eyebrow} title={soil.title} sub={soil.sub} />

        <div className="soil__layout">
          <Reveal className="soil__visual">
            <div className="soil__phone-wrap">
              <Phone
                src="/images/screens/phone-soil.svg"
                alt="Placeholder of the Aswenna soil monitoring screen"
                caption="Soil monitoring — placeholder screen"
              />
            </div>
            <div className="soil__strata" aria-hidden>
              {["Surface", "Root zone", "Sub-soil"].map((layer, i) => (
                <div className="soil__stratum" key={layer} style={{ opacity: 1 - i * 0.22 }}>
                  <span>{layer}</span>
                </div>
              ))}
            </div>
          </Reveal>

          <ul className="soil__list">
            {soil.capabilities.map((cap, i) => (
              <Reveal as="li" key={cap.title} delay={i * 70}>
                <div className="soil__item">
                  <span className="soil__item-icon"><Icon name={cap.icon} /></span>
                  <div>
                    <h3 className="soil__item-title">{cap.title}</h3>
                    <p className="soil__item-text">{cap.text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>

        <Reveal>
          <div className="transparency">
            <div className="transparency__head">
              <h3 className="transparency__title">{soil.transparency.title}</h3>
              <p className="transparency__text">{soil.transparency.text}</p>
            </div>
            <div className="transparency__rows">
              {soil.transparency.rows.map((row) => (
                <div className="transparency__row" key={row.label}>
                  <span className={`chip chip--${row.tone}`}>{row.label}</span>
                  <p>{row.text}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
