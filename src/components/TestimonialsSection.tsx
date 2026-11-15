import { Info, Quote, Star } from "lucide-react";
import { useContent } from "../i18n";
import Reveal from "./Reveal";
import SectionHead from "./SectionHead";
import "./testimonials.css";

export default function TestimonialsSection() {
  const { testimonials } = useContent();
  return (
    <section className="section" id="testimonials">
      <div className="container">
        <SectionHead
          num="16"
          eyebrow={testimonials.eyebrow}
          title={testimonials.title}
          accent={testimonials.accent}
          sub={testimonials.sub}
        />

        <Reveal>
          <p className="quotes__notice">
            <Info size={16} /> {testimonials.placeholderNote}
          </p>
        </Reveal>

        <div className="quotes__grid">
          {testimonials.items.map((item, i) => (
            <Reveal key={item.role} delay={i * 80}>
              <figure className="quote">
                <span className="quote__mark" aria-hidden><Quote size={22} /></span>
                <div className="quote__stars" aria-hidden>
                  {[0, 1, 2, 3, 4].map((n) => (
                    <Star key={n} size={14} />
                  ))}
                </div>
                <blockquote className="quote__text">{item.quote}</blockquote>
                <figcaption className="quote__who">
                  <span className="quote__avatar" aria-hidden />
                  <span>
                    <strong>{item.role}</strong>
                    <em>{item.place}</em>
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
