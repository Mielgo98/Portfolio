import React from 'react'
import type { Project } from '../../types'
import ProjectCard from './ProjectCard'

interface Props {
  projects: Project[]
}

const ProjectGrid: React.FC<Props> = ({ projects }) => {
  return (
    <div className="project-grid">
      {projects.map((project) => (
        <ProjectCard key={project.title} project={project} />
      ))}
    </div>
  )
}

export default ProjectGrid
