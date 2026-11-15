import { Info } from "lucide-react";
import { useContent } from "../i18n";
import Icon from "./Icon";
import Reveal from "./Reveal";
import SectionHead from "./SectionHead";
import "./features.css";

export default function FeaturesSection() {
  const { featureGroups } = useContent();
  return (
    <section className="section" id="features">
      <div className="container">
        <SectionHead
          num="09"
          eyebrow={featureGroups.eyebrow}
          title={featureGroups.title}
          accent={featureGroups.accent}
          sub={featureGroups.sub}
        />

        <div className="features__groups">
          {featureGroups.groups.map((group, g) => (
            <Reveal key={group.id} delay={g * 60}>
              <section className="fgroup" aria-labelledby={`fgroup-${group.id}`}>
                <header className="fgroup__head">
                  <span className="fgroup__icon"><Icon name={group.icon} size={22} /></span>
                  <div>
                    <span className="fgroup__label">{group.label}</span>
                    <h3 className="fgroup__title" id={`fgroup-${group.id}`}>{group.title}</h3>
                  </div>
                </header>

                <ul className="fgroup__grid">
                  {group.items.map((item) => (
                    <li className="fitem" key={item.title}>
                      <span className="fitem__icon"><Icon name={item.icon} size={18} /></span>
                      <h4 className="fitem__title">{item.title}</h4>
                      <p className="fitem__text">{item.text}</p>
                    </li>
                  ))}
                </ul>

                <p className="fgroup__note">
                  <Info size={16} /> {group.note}
                </p>
              </section>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
