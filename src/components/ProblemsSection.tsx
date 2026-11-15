import { ArrowRight } from "lucide-react";
import { useContent } from "../i18n";
import { isPlaceholder } from "../lib/images";
import Reveal from "./Reveal";
import SectionHead from "./SectionHead";
import "./problems.css";

export default function ProblemsSection() {
  const { problems } = useContent();
  return (
    <section className="section section--alt" id="why">
      <div className="container">
        <SectionHead
          num="02"
          eyebrow={problems.eyebrow}
          title={problems.title}
          accent={problems.accent}
          sub={problems.sub}
        />

        <div className="problems__grid">
          {problems.items.map((item, i) => (
            <Reveal key={item.title} delay={i * 70}>
              <article className="problem">
                <div className="media media--16x9 problem__media">
                  <img src={item.photo} alt={item.alt} loading="lazy" />
                  <span className="problem__tag">{item.tag}</span>
                  {isPlaceholder(item.photo) ? (
                    <span className="placeholder-tag">Image placeholder</span>
                  ) : null}
                </div>
                <div className="problem__body">
                  <h3 className="problem__title">{item.title}</h3>
                  <p className="problem__text">{item.text}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <article className="gap">
            <div className="media gap__media">
              <img src={problems.gap.photo} alt={problems.gap.alt} loading="lazy" />
              <span className="problem__tag">{problems.gap.tag}</span>
              {isPlaceholder(problems.gap.photo) ? (
                <span className="placeholder-tag">Image placeholder</span>
              ) : null}
            </div>
            <div className="gap__body">
              <h3 className="gap__title">{problems.gap.title}</h3>
              <p className="gap__text">{problems.gap.text}</p>
              <p className="gap__note">
                <ArrowRight size={16} /> {problems.gap.note}
              </p>
            </div>
          </article>
        </Reveal>
      </div>
    </section>
  );
}
