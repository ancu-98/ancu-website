import React, { useState } from 'react'
import AboutMe from './AboutMe'
import Career from './Career'
import Skills from './Skills'
import './styles/about.css'
import imgProfile from '/src/assets/img/profile-img.svg'
import imgLocation from '/src/assets/img/location.svg'
import imgColombia from '/src/assets/img/colombia.svg'
import imgLinkedin from '/src/assets/img/linkedin.svg'
import imgCurriculum from '/src/assets/img/address-card.svg'

const About = () => {

    const [show, setShow] = useState(0)

    const handleTap = (e) => {
        setShow(e)
    }

    const linkedIn = 'www.linkedin.com/in/ancu98';

    return (
        <div className="about_container">
            <div className="card_about">

                <div className='about_main'>
                    <div className='img_main hvr-outline-out'>
                        <img src={imgProfile} alt="img-profile" />
                    </div>

                    <aside>
                        <div className='about-location'>
                            <img src={imgLocation} alt="location-icon" />
                            <span>COL</span>
                            <img src={imgColombia} alt="colombia-icon" />
                        </div>
                        <h1>Sebastian Bernal</h1>
                        <p>Hi, I'm Sebastian Bernal - Backend Developer </p>
                    </aside>

                    <div className="about_buttons">
                        <button>
                            <a href={linkedIn} target='_blank'>
                                <img src={imgLinkedin} alt="linkedin-icon"/>
                            </a>
                        </button>
                        <button>
                            <img src={imgCurriculum} alt="curriculum-icon"/>
                        </button>
                    </div>
                </div>
                <div className="about_options">
                    <div className='options'>
                        <button onClick={() => handleTap(1)} > Skills </button>
                        <button onClick={() => handleTap(2)} > About Me </button>
                        <button onClick={() => handleTap(3)} > Career </button>
                    </div>
                </div>
            </div>

            <div className='card__content'>
                <div className={show === 1 ? 'card_skills_container' : 'inactive_about'}>
                    <Skills />
                </div>
                <div className={show === 2 ? 'card_aboutMe_container' : 'inactive_about'}>
                    <AboutMe />
                </div>
                <div className={show === 3 ? 'card_career_container' : 'inactive_about'}>
                    <Career />
                </div>
            </div>
        </div>
    )
}

export default About

