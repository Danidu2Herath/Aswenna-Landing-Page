import { useState } from "react";
import { Minus, Plus } from "lucide-react";
import { useContent } from "../i18n";
import Reveal from "./Reveal";
import SectionHead from "./SectionHead";
import "./faq.css";

export default function FaqSection() {
  const { faq } = useContent();
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="section section--alt" id="faq">
      <div className="container">
        <SectionHead num="17" eyebrow={faq.eyebrow} title={faq.title} accent={faq.accent} sub={faq.sub} />

        <div className="faq__list">
          {faq.items.map((item, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={item.q} delay={i * 60}>
                <div className={`faq__item${isOpen ? " is-open" : ""}`}>
                  <h3>
                    <button
                      type="button"
                      className="faq__q"
                      aria-expanded={isOpen}
                      aria-controls={`faq-a-${String(i)}`}
                      id={`faq-q-${String(i)}`}
                      onClick={() => { setOpen(isOpen ? null : i); }}
                    >
                      <span>{item.q}</span>
                      <span className="faq__sign" aria-hidden>
                        {isOpen ? <Minus size={17} /> : <Plus size={17} />}
                      </span>
                    </button>
                  </h3>
                  <div
                    className="faq__a"
                    id={`faq-a-${String(i)}`}
                    role="region"
                    aria-labelledby={`faq-q-${String(i)}`}
                    hidden={!isOpen}
                  >
                    <p>{item.a}</p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
