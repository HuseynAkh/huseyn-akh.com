//@ts-nocheck
import uniqid from 'uniqid';
import { AiFillGithub } from 'react-icons/ai/';
import { MdLaunch } from 'react-icons/md';
import './Project.scss';


const Project = ({ project }) => (
  <div className='project'>
    
    <img className='picture' src={project.image} />
    <h3>{project.name}</h3>
    <p className='project__description'>{project.description}</p>
    {project.stack && (
      <ul className='project__stack'>
        {project.stack.map((item) => (
          <li key={uniqid()} className='project__stack-item'>
            {item}
          </li>
        ))}
      </ul>
    )}

    

    {project.sourceCode && (
      <a
        target='_blank'
        href={project.sourceCode}
        aria-label='source code'
        className='link link--icon'
      >
        <AiFillGithub size='30' />
      </a>
    )}

    {project.livePreview && (
      <a
        target='_blank'
        href={project.livePreview}
        aria-label='live preview'
        className='link link--icon'
      >
        <MdLaunch size='27'/>
      </a>
    )}
  </div>
)

export default Project;
