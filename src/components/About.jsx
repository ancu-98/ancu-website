import React from 'react'
import './styles/about.css'

const About = () => {
    return (
        <div className="card">
            <div className='img-container'>
                <div className="card_img">
                    <img src="/src/assets/img/perfil-small.jpg" alt="img-perfil" />
                </div>
            </div>
            <div className="card_info">
                <p className="text_body">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti repellat, consequuntur doloribus voluptate esse iure?</p>
                <p className="text_title">Autor</p>
            </div>
        </div>
    )
}

export default About