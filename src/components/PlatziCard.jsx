import React from 'react'
import './styles/platziCard.css'

const PlatziCard = ({ curso, image_url, certificate_link }) => {

    return (
        <figure className="platzi__slide">
            <a href={certificate_link} target='_blank'>
                <h3>{curso}</h3>
                <div>
                    <img src={image_url} alt="course-icon" />
                </div>
            </a>
        </figure>
    )
}

export default PlatziCard