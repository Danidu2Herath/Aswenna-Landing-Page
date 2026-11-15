import { useState, type FormEvent } from "react";
import { Check, Send } from "lucide-react";
import { useContent } from "../i18n";
import Reveal from "./Reveal";
import "./contact.css";

export default function ContactSection() {
  const { closing, contact } = useContent();
  const [sent, setSent] = useState(false);
  const f = contact.fields;

  /**
   * There is no backend yet, so the form validates with the browser's own
   * constraints and then shows a confirmation. Wire this to a real endpoint
   * before the site goes live.
   */
  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSent(true);
  };

  return (
    <>
      <section className="closing" aria-labelledby="closing-title">
        <div className="container">
          <h2 className="closing__title" id="closing-title">{closing.title}</h2>
          <p className="closing__sub">{closing.sub}</p>
        </div>
      </section>

      <section className="section contact" id="contact">
        <div className="container">
          <div className="contact__layout">
            <Reveal className="contact__intro">
              <span className="eyebrow">{contact.eyebrow}</span>
              <h2 className="contact__title">{contact.title}</h2>
              <p className="contact__text">{contact.text}</p>
              <p className="contact__note">{contact.note}</p>
            </Reveal>

            <Reveal className="contact__form-wrap" delay={100}>
              {sent ? (
                <div className="contact__sent" role="status">
                  <span className="contact__sent-icon"><Check size={22} strokeWidth={3} /></span>
                  <p>{contact.success}</p>
                  <button type="button" className="btn btn--ghost" onClick={() => { setSent(false); }}>
                    Send another
                  </button>
                </div>
              ) : (
                <form className="contact__form" onSubmit={onSubmit} noValidate={false}>
                  <div className="field">
                    <label htmlFor="firstName">{f.firstName.label} <span aria-hidden>*</span></label>
                    <input id="firstName" name="firstName" type="text" required autoComplete="given-name" placeholder={f.firstName.placeholder} />
                  </div>
                  <div className="field">
                    <label htmlFor="lastName">{f.lastName.label} <span aria-hidden>*</span></label>
                    <input id="lastName" name="lastName" type="text" required autoComplete="family-name" placeholder={f.lastName.placeholder} />
                  </div>
                  <div className="field">
                    <label htmlFor="phone">{f.phone.label} <span aria-hidden>*</span></label>
                    <input id="phone" name="phone" type="tel" required autoComplete="tel" placeholder={f.phone.placeholder} />
                  </div>
                  <div className="field">
                    <label htmlFor="district">{f.district.label} <span aria-hidden>*</span></label>
                    <input id="district" name="district" type="text" required placeholder={f.district.placeholder} />
                  </div>
                  <div className="field field--wide">
                    <label htmlFor="email">{f.email.label}</label>
                    <input id="email" name="email" type="email" autoComplete="email" placeholder={f.email.placeholder} />
                  </div>
                  <div className="field">
                    <label htmlFor="location">{f.location.label}</label>
                    <input id="location" name="location" type="text" placeholder={f.location.placeholder} />
                  </div>
                  <div className="field">
                    <label htmlFor="size">{f.size.label}</label>
                    <div className="field__group">
                      <input id="size" name="size" type="number" min="0" step="0.1" placeholder={f.size.placeholder} />
                      <span className="field__unit">hectares</span>
                    </div>
                  </div>
                  <div className="field field--wide">
                    <label htmlFor="message">{f.message.label}</label>
                    <textarea id="message" name="message" rows={4} placeholder={f.message.placeholder} />
                  </div>

                  <p className="contact__consent">{contact.consent}</p>
                  <button type="submit" className="btn btn--primary btn--lg contact__submit">
                    {contact.submit} <Send size={17} />
                  </button>
                </form>
              )}
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
