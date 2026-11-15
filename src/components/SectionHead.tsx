type Props = {
  num?: string;
  eyebrow: string;
  title: string;
  /** Trailing words rendered in the accent colour. */
  accent?: string;
  sub?: string;
  center?: boolean;
};

export default function SectionHead({ num, eyebrow, title, accent, sub, center = true }: Props) {
  return (
    <div className={`section-head${center ? " section-head--center" : ""}`}>
      <span className="eyebrow">
        {num ? <span className="eyebrow__num">{num}</span> : null}
        {eyebrow}
      </span>
      <h2 className="section-title">
        {title}
        {accent ? <> <span className="accent">{accent}</span></> : null}
      </h2>
      {sub ? <p className="section-sub">{sub}</p> : null}
    </div>
  );
}
