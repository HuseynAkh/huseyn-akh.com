import './SkillMap.scss';
import Skill from '../Skill/Skill';

const SkillMap = () => {
    return(
      <>
        <div className='skillz' >
          <Skill name='TypeScript' iconName='logos:typescript-icon' width={60} height={56} id="icon" />
          <Skill name='React' iconName='logos:react' width={60} height={60} id="icon" />
          <Skill name='NodeJS' iconName='logos:nodejs-icon' width={60} height={60} id="icon" />
          <Skill name='Python' iconName='logos:python' width={60} height={60} id="icon" />
          <Skill name='Java' iconName='logos:java' width={60} height={60} id="icon" />
          <Skill name='Solidity' iconName='vscode-icons:file-type-light-solidity' width={60} height={60} id="icon" />
          <Skill name='C' iconName='logos:c' width={60} height={60} id="icon" />
          <Skill name='GNU / Linux' iconName='flat-color-icons:linux' width={60} height={60} id="icon" />
        </div>
      </>
    )
    
  }
  
  
  export default SkillMap;