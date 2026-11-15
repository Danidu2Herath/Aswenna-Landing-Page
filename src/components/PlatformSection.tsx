import { useState } from "react";
import { useContent } from "../i18n";
import Reveal from "./Reveal";
import SectionHead from "./SectionHead";
import Phone from "./Phone";
import "./platform.css";

/** The placeholder screen shown for each interface in the list. */
const screenFor = [
  "/images/screens/phone-dashboard.svg",
  "/images/screens/phone-soil.svg",
  "/images/screens/phone-soil.svg",
  "/images/screens/phone-calendar.svg",
  "/images/screens/phone-calendar.svg",
  "/images/screens/phone-diagnosis.svg",
  "/images/screens/phone-market.svg",
  "/images/screens/phone-irrigation.svg",
  "/images/screens/phone-irrigation.svg",
  "/images/screens/phone-dashboard.svg",
];

export default function PlatformSection() {
  const { platform } = useContent();
  const [active, setActive] = useState(0);
  const current = platform.screens[active];

  return (
    <section className="section section--band" id="platform">
      <div className="container">
        <SectionHead num="14" eyebrow={platform.eyebrow} title={platform.title} sub={platform.sub} />

        <div className="platform__layout">
          <Reveal className="platform__list-wrap">
            <ul className="platform__list" role="tablist" aria-label="Platform interfaces">
              {platform.screens.map((screen, i) => (
                <li key={screen.name}>
                  <button
                    type="button"
                    role="tab"
                    id={`platform-tab-${String(i)}`}
                    aria-selected={active === i}
                    aria-controls="platform-preview"
                    className={`platform__item${active === i ? " is-active" : ""}`}
                    onClick={() => { setActive(i); }}
                  >
                    <span className="platform__index">{String(i + 1).padStart(2, "0")}</span>
                    <span className="platform__copy">
                      <strong>{screen.name}</strong>
                      <span>{screen.text}</span>
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal className="platform__preview-wrap" delay={100}>
            <div
              className="platform__preview"
              id="platform-preview"
              role="tabpanel"
              aria-labelledby={`platform-tab-${String(active)}`}
            >
              <div className="platform__preview-head">
                <strong>{current.name}</strong>
                <span className="chip chip--planned">Proposed interface</span>
              </div>
              <Phone
                key={active}
                src={screenFor[active]}
                alt={`Placeholder of the Aswenna ${current.name.toLowerCase()} interface`}
              />
              <p className="platform__preview-note">
                Placeholder screen — swap the image in <code>public/images/screens</code> for a real
                capture when the interface is built.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
