import { about, experience, profile, resume } from "../data";
import { Icon } from "./Icon";

export function About() {
  return (
    <section
      id="about"
      className="section page-container about-section"
      aria-labelledby="about-heading"
    >
      <div className="about-copy">
        <p className="eyebrow">{about.eyebrow}</p>
        <h2 id="about-heading">{about.title}</h2>
        <div className="about-paragraphs">
          {about.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        <ul className="interest-list">
          {about.interests.map((interest) => (
            <li key={interest}>
              <span className="gold-dot" />
              {interest}
            </li>
          ))}
        </ul>
      </div>
      <div className="journey">
        <h3 className="eyebrow">{about.timelineTitle}</h3>
        <ol className="timeline">
          {experience.map((item) => (
            <li key={item.id} className={item.current ? "current" : undefined}>
              <span className="timeline-dot" />
              <span className="timeline-period">{item.period}</span>
              <h4>{item.title}</h4>
              <p className="timeline-organization">{item.organization}</p>
              <p className="timeline-description">{item.description}</p>
            </li>
          ))}
        </ol>
        <div id="resume" className="resume-card">
          <div className="resume-icon">
            <Icon name="file" size={23} />
          </div>
          <div>
            <h3>{resume.title}</h3>
            <p>{resume.description}</p>
            {profile.resumeUrl ? (
              <a
                className="text-link"
                href={profile.resumeUrl}
                target="_blank"
                rel="noreferrer"
              >
                View résumé <Icon name="arrow" size={13} />
              </a>
            ) : (
              <span className="resume-pending">{resume.unavailableText}</span>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
