import { Check, X } from "lucide-react";
import { useContent } from "../i18n";
import Reveal from "./Reveal";
import SectionHead from "./SectionHead";
import "./comparison.css";

export default function ComparisonSection() {
  const { comparison } = useContent();
  return (
    <section className="section section--alt" id="approach">
      <div className="container">
        <SectionHead
          num="08"
          eyebrow={comparison.eyebrow}
          title={comparison.title}
          accent={comparison.accent}
          sub={comparison.sub}
        />

        <Reveal>
          <div className="compare">
            <div className="compare__head compare__head--without">
              <span className="compare__badge compare__badge--without"><X size={14} strokeWidth={3} /></span>
              {comparison.withoutLabel}
            </div>
            <div className="compare__head compare__head--with">
              <span className="compare__badge compare__badge--with"><Check size={14} strokeWidth={3} /></span>
              {comparison.withLabel}
            </div>

            {comparison.rows.map((row) => (
              <div className="compare__row" key={row.without}>
                <div className="compare__cell compare__cell--without">
                  <span className="compare__mark compare__mark--without"><X size={13} strokeWidth={3} /></span>
                  <p>
                    {/* Repeated per row so the columns stay labelled once they stack on mobile. */}
                    <span className="compare__inline">{comparison.withoutLabel}</span>
                    {row.without}
                  </p>
                </div>
                <div className="compare__cell compare__cell--with">
                  <span className="compare__mark compare__mark--with"><Check size={13} strokeWidth={3} /></span>
                  <p>
                    <span className="compare__inline">{comparison.withLabel}</span>
                    {row.with}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
