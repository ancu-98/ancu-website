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
              tecnologies={cardProyect.technologies}
            />
          </div>
        ))
      }
    </div>
  )
}

export default Proyects