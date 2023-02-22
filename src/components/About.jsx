import React from 'react'
import AboutMe from './AboutMe'
import Carrer from './Career'
import Skills from './Skills'
import './styles/about.css'

const About = () => {
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
                        <li> Skills </li>
                        <li> About Me </li>
                        <li> Career </li>
                    </div>
                </div>

            </div>
            <div className='card__content'>
                <Skills />
                <AboutMe />
                <Carrer />
            </div>
        </div>
    )
}

export default About

