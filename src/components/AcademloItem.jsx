import React from 'react'
import './styles/academloItem.css'

const AcademloItem = ({curso, image, description}) => {

  return (
    <div className='academloItems_container'>
      <div className="academloItem_img">
        <img src={image} alt="academloItem-logo" />
      </div>
      <h3>{curso}</h3>
      <p>{description}</p>
    </div>
  )
}

export default AcademloItem