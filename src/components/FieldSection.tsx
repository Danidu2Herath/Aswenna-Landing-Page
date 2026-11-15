import { useContent } from "../i18n";
import { isPlaceholder } from "../lib/images";
import Icon from "./Icon";
import Reveal from "./Reveal";
import SectionHead from "./SectionHead";
import "./field.css";

export default function FieldSection() {
  const { field } = useContent();
  return (
    <section className="section section--alt" id="field">
      <div className="container">
        <SectionHead num="06" eyebrow={field.eyebrow} title={field.title} sub={field.sub} />

        <div className="field__grid">
          {field.items.map((item, i) => (
            <Reveal key={item.title} delay={i * 80}>
              <article className="field__card">
                <div className="media media--16x9 field__media">
                  <img src={item.photo} alt={item.alt} loading="lazy" />
                  {isPlaceholder(item.photo) ? (
                    <span className="placeholder-tag">Image placeholder</span>
                  ) : null}
                </div>
                <div className="field__body">
                  <span className="card__icon"><Icon name={item.icon} /></span>
                  <h3 className="card__title">{item.title}</h3>
                  <p className="card__text">{item.text}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
