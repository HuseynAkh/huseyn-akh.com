// @ts-nocheck
import SkillMap from '../SkillMap/SkillMap';
import './MySkills.scss';
import Resume from '../../img/Resume_Huseyn_Akhundov.pdf';


const Skills = () => {
  return(
    <section id="skills" className='section__skills'>
      <h2 className='section__title'>Top Skills</h2>
      <div className='skillList'>
        <SkillMap />
      </div>

      <p className='resl'>
        <a className='link resume__link' target='_blank' href={Resume} >
          See Resume
        </a>
      </p>
    </section>
  )
  
}


export default Skills;