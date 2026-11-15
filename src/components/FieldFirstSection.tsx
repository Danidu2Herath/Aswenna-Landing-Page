import { useContent } from "../i18n";
import Icon from "./Icon";
import Phone from "./Phone";
import Reveal from "./Reveal";
import SectionHead from "./SectionHead";
import "./fieldfirst.css";

export default function FieldFirstSection() {
  const { fieldFirst } = useContent();
  return (
    <section className="section section--band" id="field-first">
      <div className="container">
        <SectionHead
          num="10"
          eyebrow={fieldFirst.eyebrow}
          title={fieldFirst.title}
          accent={fieldFirst.accent}
          sub={fieldFirst.sub}
        />

        <div className="ffirst__layout">
          <ul className="ffirst__list">
            {fieldFirst.items.map((item, i) => (
              <Reveal as="li" key={item.title} delay={i * 80}>
                <div className="ffirst__item">
                  <span className="ffirst__icon"><Icon name={item.icon} /></span>
                  <div>
                    <h3 className="ffirst__title">{item.title}</h3>
                    <p className="ffirst__text">{item.text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </ul>

          <Reveal className="ffirst__visual" delay={120}>
            <Phone
              src={fieldFirst.screen}
              alt="Placeholder of the Aswenna farmer dashboard on a phone"
              caption="Farmer dashboard — placeholder screen"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
