import './Skill.scss';
import {Icon} from '@iconify/react';

interface SkillProps {
    name: string;
    iconName: string;
    width: number;
    height: number;
    id: string;
}

const Skill = ({ name, iconName, width, height, id}: SkillProps) => {
    return(
        <div className='skill'>
            <Icon icon={iconName} width={width} height={height} id={id} />
            <h3 className='sname'>{name}</h3>
        
        
        </div>
    )
}

export default Skill;