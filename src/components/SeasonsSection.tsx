import { ArrowRight } from "lucide-react";
import { useContent } from "../i18n";
import Icon from "./Icon";
import Reveal from "./Reveal";
import SectionHead from "./SectionHead";
import "./seasons.css";

export default function SeasonsSection() {
  const { seasons } = useContent();
  return (
    <section className="section" id="seasons">
      <div className="container">
        <SectionHead
          num="05"
          eyebrow={seasons.eyebrow}
          title={seasons.title}
          accent={seasons.accent}
          sub={seasons.sub}
        />

        <ol className="seasons__grid">
          {seasons.stages.map((stage, i) => (
            <Reveal as="li" key={stage.title} delay={i * 80}>
              <article className="season">
                <header className="season__head">
                  <span className="season__icon"><Icon name={stage.icon} /></span>
                  <span className="season__stage">
                    {stage.stage}
                    <em>{stage.when}</em>
                  </span>
                </header>

                <h3 className="season__title">{stage.title}</h3>
                <p className="season__text">{stage.text}</p>

                <div className="season__callout">
                  <strong>{stage.callout.label}</strong>
                  <p>{stage.callout.text}</p>
                </div>

                <a className="season__link" href={stage.href}>
                  {stage.link} <ArrowRight size={15} />
                </a>
              </article>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
