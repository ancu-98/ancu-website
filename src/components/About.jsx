import React, { useState } from 'react'
import AboutMe from './AboutMe'
import Career from './Career'
import Skills from './Skills'
import './styles/about.css'

const About = () => {

    const [show, setShow] = useState(0)

    const handleTap = (e) => {
        setShow(e)
    }

    return (
        <div className="about_container">
            <div className="card_about">

                <div className='about_main'>
                    <div className='img_main'>
                        <img src="/src/assets/img/perfil-small.jpg" alt="img-profile" />
                    </div>

                    <aside>
                        <div className='about-location'>
                            <img src="/src/assets/img/location.svg" alt="location-icon" />
                            <span>COL</span>
                            <img src="/src/assets/img/colombia.svg" alt="colombia-icon" />
                        </div>
                        <h1>Sebastian Bernal</h1>
                        <p>Hi, I'm Sebastian Bernal and I'm a FullStack Developer </p>
                    </aside>

                    <div className="about_buttons">
                        <button>
                            <img src="/src/assets/img/linkedin.svg" alt="linkedin-icon" />
                        </button>
                        <button>
                            <img src="/src/assets/img/address-card.svg" alt="curriculum-icon" />
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
                <div className={show===1 ? 'card_skills_container' : 'inactive_about'}>
                    <Skills />
                </div>
                <div className={show===2 ? 'card_aboutMe_container' : 'inactive_about'}>
                    <AboutMe />
                </div>
                <div className={show===3 ? 'card_career_container' : 'inactive_about'}>
                    <Career />
                </div>
            </div>
        </div>
    )
}

export default About

