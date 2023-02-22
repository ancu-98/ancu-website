import React from 'react'
import './styles/platziCard.css'

const PlatziCard = ({curso, image_url }) => {

    return (
        <figure className="platzi__slide">
            <h3>{curso}</h3>
            <div>
                <img src={image_url} alt="course-icon" />
            </div>
        </figure>
    )
}

export default PlatziCard