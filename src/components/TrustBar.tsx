import { useContent } from "../i18n";
import Icon from "./Icon";
import "./trustbar.css";

export default function TrustBar() {
  const { trustBar } = useContent();
  return (
    <section className="trustbar" aria-label={trustBar.label}>
      <div className="container trustbar__inner">
        <span className="trustbar__label">{trustBar.label}</span>
        <ul className="trustbar__list">
          {trustBar.items.map((item) => (
            <li key={item.text}>
              <Icon name={item.icon} size={17} />
              {item.text}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
