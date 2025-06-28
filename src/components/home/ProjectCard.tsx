import React from 'react'
import { ExternalLink, Github } from 'lucide-react'
import type { Project } from '../../types'

interface Props {
  project: Project
}

const ProjectCard: React.FC<Props> = ({ project }) => {
  return (
    <div className="project-card">
      <img
        src={project.image}
        alt={project.title}
        className="project-image"
        loading="lazy"
      />

      <div className="project-content">
        <h3 className="project-title">{project.title}</h3>
        <p className="project-description">{project.description}</p>

        <div className="project-tech">
          {project.tech.map((tech, i) => (
            <span key={i} className="tech-tag">
              {tech}
            </span>
          ))}
        </div>

        <div className="project-buttons">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="project-button"
            >
              <Github className="w-4 h-4" />
              Código
            </a>
          )}
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="project-button"
            >
              <ExternalLink className="w-4 h-4" />
              Ver proyecto
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
