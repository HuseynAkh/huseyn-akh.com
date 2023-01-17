import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai/';
import Resume from '../../img/Resume_Huseyn_Akhundov.pdf';
import './About.scss';

const About = () => {

  return (
    <div className='about'>
      <div className='about name'>
        <h1>
          <span className='about__name'>Huseyn Akhundov</span>
        </h1>
      </div>
      <h3>Software Developer</h3> 

      <div className='about__contact center'>
          <a target='_blank' href={Resume}>
            <span data-type='button' className='btn btn--outline'>
              Resume
            </span>
          </a>

          <a
            target='_blank'
            href="https://github.com/HuseynAkh"
            aria-label='github'
            className='link link--icon'
          >
            <AiFillGithub size='27' />
          </a>
          
          <a
            target='_blank'
            href="https://www.linkedin.com/in/huseyn-akhundov/"
            aria-label='linkedin'
            className='link link--icon'
          >
            <AiFillLinkedin size='27'/>
          </a>
            
      </div>
    </div>
  )
}

export default About;
