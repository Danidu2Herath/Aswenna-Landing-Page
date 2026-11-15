import { Check } from "lucide-react";
import { useContent } from "../i18n";
import Reveal from "./Reveal";
import SectionHead from "./SectionHead";
import "./roadmap.css";

export default function RoadmapSection() {
  const { roadmap } = useContent();
  return (
    <section className="section" id="roadmap">
      <div className="container">
        <SectionHead num="15" eyebrow={roadmap.eyebrow} title={roadmap.title} sub={roadmap.sub} />

        <div className="roadmap__legend">
          <span className="chip chip--neutral">{roadmap.scopeLabel}: Phases 01–03</span>
          <span className="chip chip--planned">{roadmap.futureLabel}: Phase 04</span>
        </div>

        <ol className="roadmap__track">
          {roadmap.phases.map((phase, i) => (
            <Reveal as="li" key={phase.n} delay={i * 90} className="roadmap__item">
              <article className={`roadmap__card${phase.scope ? "" : " roadmap__card--future"}`}>
                <span className="roadmap__dot" aria-hidden />
                <header className="roadmap__head">
                  <span className="roadmap__n">{phase.n}</span>
                  <span className={`chip ${phase.scope ? "chip--estimated" : "chip--planned"}`}>{phase.status}</span>
                </header>
                <h3 className="roadmap__name">{phase.name}</h3>
                <ul className="roadmap__items">
                  {phase.items.map((item) => (
                    <li key={item}>
                      <span className="roadmap__tick"><Check size={12} strokeWidth={3} /></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </ol>

        <Reveal>
          <p className="roadmap__note">
            All phases above describe planned and proposed capabilities of the Aswenna project. They
            do not represent deployed commercial operations.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
