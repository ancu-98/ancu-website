import React from 'react'
import './styles/proyects.css'
import allProyects from '../utils/proyects'
import Proyect from './Proyect'

const Proyects = () => {

  return (
    <div className='proyects_container'>
      {
        allProyects.map(cardProyect => (
          <div className="proyects_container_cards" key={cardProyect.id}>
            <Proyect
              nameProyect={cardProyect.name_proyect}
              iconProyect={cardProyect.icon_proyect}
              imgProyect={cardProyect.img_proyect}
              gitHubLink={cardProyect.github_link}
              deployLink={cardProyect.deploy_link}
              documentationLink= {cardProyect.documentation_link}
              type={cardProyect.type}
              titleDescription={cardProyect.title_description}
              description={cardProyect.description}
            />
          </div>
        ))
      }
    </div>
  )
}

export default Proyects










/*
<div className='card__container'>
        <div className='card__blob'></div>
        <span className='card__img'></span>
        <h2>Sebastian<br /><span>Bernal</span></h2>
        <div className='icons__container'>
          <img src="/src/assets/img/github.svg" alt="" />
          <img src="/src/assets/img/play.svg" alt="" />
          <img src="/src/assets/img/zap.svg" alt="" />
        </div>
      </div>
      <div className='card__container'>
        <div className='card__blob'></div>
        <span className='card__img'></span>
        <h2>Sebastian<br /><span>Bernal</span></h2>
        <div className='icons__container'>
          <img src="/src/assets/img/github.svg" alt="" />
          <img src="/src/assets/img/play.svg" alt="" />
          <img src="/src/assets/img/zap.svg" alt="" />
        </div>
      </div>
      <div className='card__container'>
        <div className='card__blob'></div>
        <span className='card__img'></span>
        <h2>Sebastian<br /><span>Bernal</span></h2>
        <div className='icons__container'>
          <img src="/src/assets/img/github.svg" alt="" />
          <img src="/src/assets/img/play.svg" alt="" />
          <img src="/src/assets/img/zap.svg" alt="" />
        </div>
      </div>
      <div className='card__container'>
        <div className='card__blob'></div>
        <span className='card__img'></span>
        <h2>Sebastian<br /><span>Bernal</span></h2>
        <div className='icons__container'>
          <img src="/src/assets/img/github.svg" alt="" />
          <img src="/src/assets/img/play.svg" alt="" />
          <img src="/src/assets/img/zap.svg" alt="" />
        </div>
      </div>
      <div className='card__container'>
        <div className='card__blob'></div>
        <span className='card__img'></span>
        <h2>Sebastian<br /><span>Bernal</span></h2>
        <div className='icons__container'>
          <img src="/src/assets/img/github.svg" alt="" />
          <img src="/src/assets/img/play.svg" alt="" />
          <img src="/src/assets/img/zap.svg" alt="" />
        </div>
      </div>
      <div className='card__container'>
        <div className='card__blob'></div>
        <span className='card__img'></span>
        <h2>Sebastian<br /><span>Bernal</span></h2>
        <div className='icons__container'>
          <img src="/src/assets/img/github.svg" alt="" />
          <img src="/src/assets/img/play.svg" alt="" />
          <img src="/src/assets/img/zap.svg" alt="" />
        </div>
      </div>
*/