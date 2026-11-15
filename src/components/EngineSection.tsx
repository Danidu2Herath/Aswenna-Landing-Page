import { RefreshCw } from "lucide-react";
import { useContent } from "../i18n";
import Icon from "./Icon";
import Reveal from "./Reveal";
import SectionHead from "./SectionHead";
import "./engine.css";

export default function EngineSection() {
  const { engine } = useContent();
  return (
    <section className="section engine" id="engine">
      <div className="container">
        <SectionHead num="07" eyebrow={engine.eyebrow} title={engine.title} sub={engine.sub} />

        <ol className="engine__loop">
          {engine.stages.map((stage, i) => (
            <Reveal as="li" key={stage.name} delay={i * 90} className="engine__item">
              <article className="engine__card">
                <header className="engine__head">
                  <span className="engine__icon"><Icon name={stage.icon} size={22} /></span>
                  <span className="engine__step">Stage {String(i + 1).padStart(2, "0")}</span>
                </header>
                <h3 className="engine__name">{stage.name}</h3>
                <p className="engine__text">{stage.text}</p>
              </article>
              {i < engine.stages.length - 1 ? <span className="engine__arrow" aria-hidden /> : null}
            </Reveal>
          ))}
        </ol>

        <Reveal>
          <p className="engine__loopnote">
            <RefreshCw size={16} /> The loop closes — every action in the field becomes the next
            round of data the platform senses.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
