import uniqid from 'uniqid';
import { projects } from '../../portfolio';
import Project from '../Project/Project';
import './ProjectGrid.scss';

const ProjectGrid = () => {
  if (!projects.length) return null

  return (
    <section id='projects' className='section__projects'>
      <h2 className='section__title'>Projects</h2>

      <div className='projects__grid'>
        {projects.map((project) => (
          <Project key={uniqid()} project={project} />
        ))}
      </div>
    </section>
  )
}

export default ProjectGrid;
