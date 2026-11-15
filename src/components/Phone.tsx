import "./phone.css";

type Props = {
  /** Path to the screen placeholder in /public/images/screens. */
  src: string;
  alt: string;
  className?: string;
  /** Small caption shown under the device. */
  caption?: string;
};

/** A phone bezel wrapped around a placeholder app screen. Swap `src` for a real screenshot later. */
export default function Phone({ src, alt, className = "", caption }: Props) {
  return (
    <figure className={`phone ${className}`.trim()}>
      <div className="phone__frame">
        <span className="phone__notch" aria-hidden />
        <img className="phone__screen" src={src} alt={alt} loading="lazy" />
      </div>
      {caption ? <figcaption className="phone__caption">{caption}</figcaption> : null}
    </figure>
  );
}
