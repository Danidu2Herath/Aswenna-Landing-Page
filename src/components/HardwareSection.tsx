import { useContent } from "../i18n";
import Icon from "./Icon";
import Reveal from "./Reveal";
import SectionHead from "./SectionHead";
import "./hardware.css";

export default function HardwareSection() {
  const { hardware } = useContent();
  return (
    <section className="section section--band" id="hardware">
      <div className="container">
        <SectionHead num="11" eyebrow={hardware.eyebrow} title={hardware.title} sub={hardware.sub} />

        <ul className="hardware__grid">
          {hardware.components.map((c, i) => (
            <Reveal as="li" key={c.name} delay={i * 55}>
              <div className="hardware__chip">
                <span className="hardware__chip-icon"><Icon name={c.icon} size={18} /></span>
                {c.name}
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
