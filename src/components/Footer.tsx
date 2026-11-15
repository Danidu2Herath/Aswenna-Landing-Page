import { useContent } from "../i18n";
import "./footer.css";

/** Resolved once at module load so the component render stays pure. */
const year = new Date().getFullYear();

export default function Footer() {
  const { footer, site } = useContent();
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <div className="footer__brand">
            <a className="footer__logo" href="#top">
              <img src="/images/logo-mark.svg" alt="" width={40} height={40} />
              <span>
                <strong>{site.name}</strong>
                <em>{site.title}</em>
              </span>
            </a>
            <p className="footer__blurb">{footer.blurb}</p>
            <p className="footer__tagline">{site.tagline}</p>
          </div>

          <nav className="footer__cols" aria-label="Footer">
            {footer.columns.map((col) => (
              <div className="footer__col" key={col.title}>
                <h3>{col.title}</h3>
                <ul>
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <a href={link.href}>{link.label}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        <p className="footer__note">{footer.note}</p>

        <div className="footer__bottom">
          <span>© {year} {site.name}. {site.promise}</span>
          <span className="footer__wordmark" aria-hidden>{site.name}</span>
        </div>
      </div>
    </footer>
  );
}
