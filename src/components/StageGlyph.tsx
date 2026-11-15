/** A simple drawn glyph for each of the six growth stages. */
export default function StageGlyph({ stage }: { stage: number }) {
  const soil = "var(--primary-200)";
  const stem = "var(--brand-tertiary)";
  const leaf = "var(--tertiary-400)";
  const deep = "var(--brand-primary)";

  return (
    <svg viewBox="0 0 96 96" width="100%" height="100%" aria-hidden focusable="false">
      {/* soil bed */}
      <rect x="10" y="68" width="76" height="18" rx="9" fill={soil} />
      <path d="M14 76h68" stroke="var(--primary-300)" strokeWidth="2" strokeLinecap="round" />

      {stage === 0 && <ellipse cx="48" cy="77" rx="8" ry="6" fill={deep} />}

      {stage === 1 && (
        <>
          <ellipse cx="48" cy="77" rx="8" ry="6" fill={deep} />
          <path d="M48 71v-9" stroke={stem} strokeWidth="4" strokeLinecap="round" />
          <path d="M48 80c-5 3-8 7-9 12M48 80c5 3 8 7 9 12" stroke="var(--primary-400)" strokeWidth="2.5" strokeLinecap="round" />
        </>
      )}

      {stage === 2 && (
        <>
          <path d="M48 76V48" stroke={stem} strokeWidth="4" strokeLinecap="round" />
          <path d="M48 54c-8 0-13-5-13-12 7 0 13 5 13 12Z" fill={leaf} />
          <path d="M48 54c8 0 13-5 13-12-7 0-13 5-13 12Z" fill={stem} />
        </>
      )}

      {stage === 3 && (
        <>
          <path d="M48 76V38" stroke={stem} strokeWidth="5" strokeLinecap="round" />
          <path d="M48 50c-10 0-17-6-17-15 9 0 17 6 17 15Z" fill={leaf} />
          <path d="M48 44c10 0 17-6 17-15-9 0-17 6-17 15Z" fill={stem} />
          <path d="M48 62c-8 0-13-4-13-11 7 0 13 4 13 11Z" fill={leaf} opacity="0.75" />
        </>
      )}

      {stage === 4 && (
        <>
          <path d="M48 76V28" stroke={stem} strokeWidth="5" strokeLinecap="round" />
          <path d="M48 40 32 28M48 52 30 46M48 46 66 34M48 60 68 54" stroke={stem} strokeWidth="3" strokeLinecap="round" />
          <circle cx="29" cy="26" r="9" fill={leaf} />
          <circle cx="27" cy="45" r="8" fill={leaf} opacity="0.85" />
          <circle cx="68" cy="32" r="9" fill={deep} opacity="0.8" />
          <circle cx="70" cy="53" r="7.5" fill={leaf} opacity="0.8" />
        </>
      )}

      {stage === 5 && (
        <>
          <path d="M48 76V22" stroke={deep} strokeWidth="5.5" strokeLinecap="round" />
          <path d="M48 36 28 24M48 50 24 42M48 42 70 28M48 58 72 50" stroke={deep} strokeWidth="3" strokeLinecap="round" />
          <circle cx="25" cy="22" r="11" fill={leaf} />
          <circle cx="21" cy="41" r="9.5" fill={stem} />
          <circle cx="72" cy="25" r="11" fill={stem} />
          <circle cx="75" cy="49" r="9" fill={leaf} />
          <circle cx="48" cy="18" r="10" fill={deep} />
        </>
      )}
    </svg>
  );
}
