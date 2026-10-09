import { projects, projectsSection } from "../data";
import { Icon } from "./Icon";
import { ProjectArtwork } from "./ProjectArtwork";

export function Projects() {
  return (
    <section
      id="projects"
      className="section projects-section"
      aria-labelledby="projects-heading"
    >
      <div className="page-container">
        <div className="section-heading">
          <div>
            <p className="eyebrow">{projectsSection.eyebrow}</p>
            <h2 id="projects-heading">{projectsSection.title}</h2>
          </div>
          <p className="section-description">{projectsSection.description}</p>
        </div>
        {projects.some((project) => project.isExample) && (
          <p className="examples-note">
            <span className="gold-dot" />
            {projectsSection.exampleNote}
          </p>
        )}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {projects.map((project, index) => (
            <article key={project.id} className="project-card">
              <div className="project-image">
                <ProjectArtwork variant={project.artwork} />
                <span className="project-number">0{index + 1}</span>
                {project.isExample && (
                  <span className="example-badge">EXAMPLE</span>
                )}
              </div>
              <div className="project-body">
                <p className="project-category">{project.category}</p>
                <h3>{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <ul className="tags" aria-label="Technologies">
                  {project.tags.map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>
                <div className="project-footer">
                  {project.sourceUrl ? (
                    <a
                      href={project.sourceUrl}
                      target="_blank"
                      rel="noreferrer"
                    >
                      View source <Icon name="arrow" size={14} />
                    </a>
                  ) : (
                    <span className="source-pending">
                      <Icon name="github" size={15} /> Source coming soon
                    </span>
                  )}
                  <span className="project-footer-line" />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
