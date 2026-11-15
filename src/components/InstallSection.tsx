import { ArrowRight, Check } from "lucide-react";
import { useContent } from "../i18n";
import Icon from "./Icon";
import Reveal from "./Reveal";
import SectionHead from "./SectionHead";
import "./install.css";

export default function InstallSection() {
  const { install } = useContent();
  return (
    <section className="section" id="install">
      <div className="container">
        <SectionHead
          num="12"
          eyebrow={install.eyebrow}
          title={install.title}
          accent={install.accent}
          sub={install.sub}
        />

        <div className="install__grid">
          {install.devices.map((device, i) => (
            <Reveal key={device.title} delay={i * 90}>
              <article className="device">
                <header className="device__head">
                  <span className="device__icon"><Icon name={device.icon} size={22} /></span>
                  <span className="device__label">{device.label}</span>
                </header>

                <h3 className="device__title">{device.title}</h3>
                <p className="device__text">{device.text}</p>

                <ul className="device__points">
                  {device.points.map((point) => (
                    <li key={point}>
                      <span className="device__tick"><Check size={12} strokeWidth={3} /></span>
                      {point}
                    </li>
                  ))}
                </ul>

                <p className="device__link">
                  <ArrowRight size={15} /> {device.link}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
