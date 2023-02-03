import React from 'react'
import './styles/proyects.css'

const Proyects = () => {
  return (
    <div className='proyects_container'>

      <div className="center">

        {/* First Card */}
        <div className="card">
          <div className="additional">

            <div className='proyect-card'>
              <div className='proyect-name'>
                Name Proyect
              </div>
              <div className='icon-container'>
                <img className='icon-proyect' src="/src/assets/img/drop.svg" alt="drop-icon" />
              </div>
              <div className="points">
                5,312 Points
              </div>
            </div>

            <div className="more-info">
              <div className="img-container">
                <img className='img-proyect' src="/src/assets/img/matrix.jpg" alt="img-proyect" />
              </div>
              <div className="stats">
                <div>
                  <div className="title">Github</div>
                  <i className='fa fa-trophy'></i>
                  <img src="/src/assets/img/github.svg" alt="github-icon" />
                </div>
                <div>
                  <div className="title">Deploy</div>
                  <i className='fa fa-trophy'></i>
                  <div className="value">27</div>
                </div>
                <div>
                  <div className="title">Docs</div>
                  <i className='fa fa-trophy'></i>
                  <div className="value">123</div>
                </div>
                <div>
                  <div className="title">Type</div>
                  <i className='fa fa-trophy'></i>
                </div>
              </div>
            </div>
          </div>

          <div className='general'>
            <h1> Jane Doe</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a volutpat mauris, at molestie lacus. Nam vestibulum sodales odio ut pulvinar.</p>
            <span className='more'>Mouse over te card for more info</span>
          </div>

        </div>
      </div>

      {/* Second Card */}
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