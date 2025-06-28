import React, { useState } from 'react';
import ProjectGrid from './ProjectGrid';
import type { Project } from '../../types';

interface Props {
  projects: Project[];
}

const ProjectSwitcher: React.FC<Props> = ({ projects }) => {
  const [viewMode, setViewMode] = useState<'carousel' | 'grid'>('carousel');

  return (
    <div className="w-full">
      <div className="flex justify-end mb-4 px-4">
        <button
          onClick={() => setViewMode(viewMode === 'carousel' ? 'grid' : 'carousel')}
          className="bg-primary text-white px-4 py-2 rounded shadow hover:bg-primary/80 transition"
        >
          {viewMode === 'carousel' ? 'Ver como lista' : 'Ver carrusel'}
        </button>
      </div>

      <ProjectGrid projects={projects} />
    </div>
  );
};

export default ProjectSwitcher;
