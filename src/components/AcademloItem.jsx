import React from 'react'
import './styles/academloItem.css'

const AcademloItem = ({ curso, image, description, certificate_link}) => {

  return (
    <div className='academloItems_container'>
      <a href={certificate_link} target='_blank'>
        <div className="academloItem_img">
          <img src={image} alt="academloItem-logo" />
        </div>
        <h3>{curso}</h3>
        <p>{description}</p>
      </a>
    </div>
  )
}

export default AcademloItem