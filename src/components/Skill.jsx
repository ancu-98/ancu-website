import React from 'react'
import './styles/skill.css'

const Skill = ({skillName, img}) => {

    return (
        <div className='skill_item hvr-rectangle-out'>
            <h3>{skillName}</h3>
            <img src={img} alt="skill-icon" />
        </div>
    )
}


export default Skill