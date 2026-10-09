import { contact, profile } from "../data";
import { Icon } from "./Icon";

export function Contact({ onContact }: { onContact: () => void }) {
  return (
    <section
      id="contact"
      className="contact-section"
      aria-labelledby="contact-heading"
    >
      <div className="page-container contact-inner">
        <div>
          <p className="eyebrow">{contact.eyebrow}</p>
          <h2 id="contact-heading">{contact.title}</h2>
          <p className="contact-description">{contact.description}</p>
        </div>
        <div className="contact-action">
          {profile.email ? (
            <a className="button button-gold" href={`mailto:${profile.email}`}>
              {contact.buttonLabel}
              <Icon name="arrow" size={17} />
            </a>
          ) : (
            <button className="button button-gold" onClick={onContact}>
              {contact.buttonLabel}
              <Icon name="arrow" size={17} />
            </button>
          )}
          <span>IDEAS ARE ALWAYS WELCOME.</span>
        </div>
      </div>
    </section>
  );
}

export function Footer({ onLinkedIn }: { onLinkedIn: () => void }) {
  return (
    <footer className="page-container footer">
      <div className="footer-name">
        <span className="monogram">
          {profile.initials}
          <span>.</span>
        </span>
        <span>
          © {new Date().getFullYear()} {profile.name}
        </span>
      </div>
      <p>{contact.footerNote}</p>
      <div className="footer-links">
        <a href={profile.githubUrl} target="_blank" rel="noreferrer">
          GitHub <Icon name="arrow" size={12} />
        </a>
        {profile.linkedinUrl ? (
          <a href={profile.linkedinUrl} target="_blank" rel="noreferrer">
            LinkedIn <Icon name="arrow" size={12} />
          </a>
        ) : (
          <button onClick={onLinkedIn}>
            LinkedIn <Icon name="arrow" size={12} />
          </button>
        )}
        <a href="#home" className="back-to-top" aria-label="Back to top">
          <Icon
            name="arrow-down"
            size={16}
            style={{ transform: "rotate(180deg)" }}
          />
        </a>
      </div>
    </footer>
  );
}
