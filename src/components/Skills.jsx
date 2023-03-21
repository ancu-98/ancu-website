import React from 'react'
import Skill from './Skill'
import './styles/skills.css'
import { skills, frontedSkills, backendSkills } from '/src/utils/about.js'

const Skills = () => {

    return (
        <div className='skills__container'>
            <div className='skills__cards'>
                {
                    skills.map(skill_card => (
                        <div className='skills_cards_container' key={skill_card.id} >
                            <Skill
                                skillName={skill_card.skill}
                                img={skill_card.img}
                            />
                        </div>
                    ))
                }
            </div>
            <div className="frontend_skills">
                <h2>Frontend Skills</h2>
                <ul className='skills_list'>
                    <li>{frontedSkills.skill1}</li>
                    <li>{frontedSkills.skill2}</li>
                    <li>{frontedSkills.skill3}</li>
                    <li>{frontedSkills.skill4}</li>
                </ul>
            </div>
            <div className="backend_skills">
                <h2>Backend Skills</h2>
                <ul className='skills_list'>
                    <li>{backendSkills.skill1}</li>
                    <li>{backendSkills.skill2}</li>
                    <li>{backendSkills.skill3}</li>
                    <li>{backendSkills.skill4}</li>
                    <li>{backendSkills.skill5}</li>
                    <li>{backendSkills.skill6}</li>
                    <li>{backendSkills.skill7}</li>
                    <li>{backendSkills.skill8}</li>
                </ul>
            </div>
        </div>
    )
}

export default Skills