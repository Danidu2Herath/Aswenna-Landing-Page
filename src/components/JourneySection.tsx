import { Check } from "lucide-react";
import { useContent } from "../i18n";
import Reveal from "./Reveal";
import SectionHead from "./SectionHead";
import StageGlyph from "./StageGlyph";
import Phone from "./Phone";
import "./journey.css";

export default function JourneySection() {
  const { journey } = useContent();
  return (
    <section className="section" id="journey">
      <div className="container">
        <SectionHead num="04" eyebrow={journey.eyebrow} title={journey.title} sub={journey.sub} />

        <ol className="journey__track">
          {journey.stages.map((stage, i) => (
            <Reveal as="li" key={stage.n} delay={i * 80} className="journey__item">
              <article className="journey__card">
                <span className="journey__num">{stage.n}</span>
                <div className="journey__glyph">
                  <StageGlyph stage={i} />
                </div>
                <h3 className="journey__name">{stage.name}</h3>
                <p className="journey__text">{stage.text}</p>
              </article>
            </Reveal>
          ))}
        </ol>

        <Reveal>
          <div className="journey__adapts">
            <div className="journey__adapts-copy">
              <h3 className="journey__adapts-title">{journey.adapts.title}</h3>
              <p className="journey__adapts-sub">
                Aswenna&apos;s intelligent cultivation calendar re-reads the plot at every stage and
                rewrites what it asks the farmer to do next.
              </p>
              <ul className="journey__adapts-list">
                {journey.adapts.items.map((item) => (
                  <li key={item}>
                    <span className="journey__tick"><Check size={14} strokeWidth={3} /></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <Phone
              className="journey__phone"
              src="/images/screens/phone-calendar.svg"
              alt="Placeholder of the Aswenna cultivation calendar screen"
              caption="Cultivation calendar — placeholder screen"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
