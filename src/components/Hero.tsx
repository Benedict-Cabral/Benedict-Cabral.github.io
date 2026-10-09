import { profile } from "../data";
import { Icon } from "./Icon";
import { ModelArtwork } from "./ModelArtwork";

export function Hero({ onLinkedIn }: { onLinkedIn: () => void }) {
  return (
    <section
      id="home"
      className="hero page-container"
      aria-labelledby="hero-heading"
    >
      <div className="hero-content">
        <div className="eyebrow hero-eyebrow">
          <span className="gold-line" />
          {profile.label}
        </div>
        <h1 id="hero-heading">
          {profile.introduction}
          <br />
          <span>
            {profile.name}
            <span className="gold-text">.</span>
          </span>
        </h1>
        <p className="hero-headline">{profile.headline}</p>
        <p className="hero-summary">{profile.summary}</p>
        <div className="hero-actions flex flex-wrap items-center gap-6">
          <a className="button button-dark" href="#projects">
            Explore my projects <Icon name="arrow-down" size={17} />
          </a>
          <div className="social-links flex items-center gap-5">
            <a
              href={profile.githubUrl}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub (opens in a new tab)"
            >
              <Icon name="github" size={20} />
            </a>
            {profile.linkedinUrl ? (
              <a
                href={profile.linkedinUrl}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn (opens in a new tab)"
              >
                <Icon name="linkedin" size={20} />
              </a>
            ) : (
              <button
                onClick={onLinkedIn}
                aria-label="LinkedIn — profile coming soon"
              >
                <Icon name="linkedin" size={20} />
              </button>
            )}
          </div>
        </div>
      </div>
      <ModelArtwork />
      <div className="hero-bottom">
        <span>
          <span className="small-star">✳︎</span> {profile.heroNote}
        </span>
        <a href="#projects" className="scroll-link">
          SCROLL TO EXPLORE <Icon name="arrow-down" size={13} />
        </a>
      </div>
    </section>
  );
}
