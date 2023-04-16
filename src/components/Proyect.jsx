import React from 'react'
import './styles/proyect.css'
import gitHubIcon from '/src/assets/img/github.svg'
import deployIcon from '/src/assets/img/briefcase-upload.svg'
import documentationIcon from '/src/assets/img/card-text.svg'

const Proyect = ({ nameProyect, iconProyect, imgProyect, gitHubLink, deployLink, documentationLink, type, titleDescription, description }) => {
    return (
        <div className="card">
            <div className='proyect-card'>
                <div className='proyect-name'>
                    {nameProyect}
                </div>
                <div className='icon-container'>
                    <img src={iconProyect} alt="icon-proyect" />
                </div>
                <div className="points">
                    Pointer
                </div>
            </div>

            <div className="more-info">
                <div className="img-container">
                    <img src={imgProyect} alt="img-proyect" />
                </div>
                <div className="stats_container">
                    <div>
                        <h3 className="title">Github</h3>
                        <a className='stats_img' href={gitHubLink} target='_blank'>
                            <img src={gitHubIcon} alt="github-icon" />
                        </a>
                    </div>
                    <div>
                        <h3 className="title">Deploy</h3>
                        <a className='stats_img' href={deployLink} target='_blank'>
                            <img src={deployIcon} alt="deploy-icon" />
                        </a>
                    </div>
                    <div>
                        <h3 className="title">Docs</h3>
                        <a className='stats_img' href={documentationLink} target='_blank'>
                            <img src={documentationIcon} alt="doc-icon" />
                        </a>
                    </div>
                    <div>
                        <h3 className="title">Type</h3>
                        <h4>{type}</h4>
                    </div>
                </div>
            </div>

            <div className='general'>
                <h1>{titleDescription}</h1>
                <p>{description}</p>
                <span className='more'>Hover the card for more info</span>
            </div>
        </div>
    )
}

export default Proyect