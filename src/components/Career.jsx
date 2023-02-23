import React, { useState } from 'react'
import PlatziCard from './PlatziCard'
import AcademloItem from './AcademloItem';
import './styles/career.css'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import fundamentosLogo from '/src/assets/img/html-css-js.png'
import reactLogo from '/src/assets/img/react.svg'
import nodeLogo from '/src/assets/img/nodejs.svg'

const platzi = [
    {
        id: 1,
        image_url: 'https://static.platzi.com/media/achievements/badge-basicojs-e2ead888-428e-4f55-962c-8894aeaeacda.png',
        curso: 'Curso Básico de JavScript'
    },
    {
        id: 2,
        image_url: 'https://static.platzi.com/media/achievements/badge-css-grid-basico-5a5b5ab7-3cbb-4c7a-a15d-9f2719b56598.png',
        curso: 'Curso de CSS Grid Básico'
    },
    {
        id: 3,
        image_url: 'https://static.platzi.com/media/achievements/badges-html-css-afa64acb-64a4-486d-96a5-f930fbb7ee32.png',
        curso: 'Curso Definitivo de HTML y CSS'
    },
    {
        id: 4,
        image_url: 'https://static.platzi.com/media/achievements/badge-curso-frontend-developer-825407d1-49b1-4c9b-90c4-eee793720ede.png',
        curso: 'Curso de Frontend Developer'
    },
    {
        id: 5,
        image_url: 'https://static.platzi.com/media/achievements/badge-curso-practico-frontend-developer-d28c2eb0-cd3e-4951-bb96-5f1bcab2add5.png',
        curso: 'Curso Practico de Frontend Developer'
    },
    {
        id: 6,
        image_url: 'https://static.platzi.com/media/achievements/badge-ing-basico-a1-fechas-cca042ae-b01f-45aa-bc0f-5469ff035e5a.png',
        curso: 'Curso de Inglés Básico A1: Fechas, Horas y Expresiones Simples'
    },
    {
        id: 7,
        image_url: 'https://static.platzi.com/media/achievements/piezas-basic-english-course-beginners_badge-d884a9b2-fa4c-4821-b268-d4d5d0f10ab5.png',
        curso: 'Curso de Inglés Básico A1 para Principiantes'
    },
    {
        id: 8,
        image_url: 'https://static.platzi.com/media/achievements/piezas-curso-de-ingles-basico-a1-presente-simple-y-vocabulario-comun_badge-caf91072.png',
        curso: 'Curso de Inglés Básico A1: Presente Simple y Vocabulario Común'
    },
    {
        id: 9,
        image_url: 'https://static.platzi.com/media/achievements/piezas-basic-english-course-beginners_badge-4953fa05-f52d-4557-98e5-a64acf9f3827.png',
        curso: 'Curso de Inglés Básico A1: Tus Primeras Conversaciones'
    },
    {
        id: 10,
        image_url: 'https://static.platzi.com/media/achievements/badge-ingles-basico-preguntas-respuestas-2022-f459ccdb-5a48-4073-986c-94fd3bf0676a.webp',
        curso: 'Curso de Inglés Básico A2: Preguntas y Respuestas'
    },
    {
        id: 11,
        image_url: 'https://static.platzi.com/media/achievements/piezas-taller-ingles-principiantes_badge-1-56da5912-2828-48f3-9879-0ab93c1c3d3d.png',
        curso: 'Taller de Inglés Básico A1: Descripciones Personales'
    }
]

const academlo = [
    {
        id: 12,
        image: fundamentosLogo,
        curso: 'Fundamentos de Desarrollo Web',
        description: 'The student obtained the necessary skills to correctly develop the visual part of a responsive website without using libraries/frameworks, as well as adding dynamic content with javascript, working collaboratively with git.'
    },
    {
        id: 34,
        image: reactLogo,
        curso: 'Desarrollo de Aplicaciones Web con React',
        description: 'The student learned to create web applications with React JS, achieving great user interaction using previous knowledge of HTML, CSS and Javascript.'
    },
    {
        id: 56,
        image: nodeLogo,
        curso: 'Backend con Node',
        description: 'The student learned how to build a server-side application with Node and Express from 0 to deployment on a server. They will have the ability to build a Rest API using a relational database, user authentication, security against XSS and CSRF attacks, validate the data received by the server and build custom middlewares with Express.'
    }
]

const Career = () => {

    const [open, setOpen] = useState(false)

    const handleTap = (e) => {
        setOpen(e)
    }

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 2,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear"
    };

    return (
        <div className='career_container'>
            <div className='academlo_container'>
                <div className="academlo_title"><h2>Academlo Bootcamp</h2></div>
                <div className="academlo_card_container">

                    <div className='academlo_card'>
                        <div className="academlo_card_logo">
                            <img src="/src/assets/img/academlo_logo.jpg" alt="logo-academlo" />
                        </div>
                        <div className='academlo_card_title'><h3>FULL STACK DEVELOPER</h3></div>
                        <div className='academlo_card_container_button'>
                            <button className='academlo_card_button' onClick={() => handleTap(!open) }>
                                <img src="/src/assets/img/arrow-down-circle.svg" alt="drop-down-arrow" />
                            </button>
                        </div>
                    </div>
                    <div className={open ? 'active_cert' : 'close_cert'}>
                        {
                            academlo.map(academloItem => (
                                <div className='academlo_certificates' key={academloItem.id}>
                                    <AcademloItem
                                        curso={academloItem.curso}
                                        image={academloItem.image}
                                        description={academloItem.description}
                                    />
                                </div>
                            ))
                        }
                    </div>

                </div>
            </div>
            <div className='slider_platzi_container'>
                <div className='platzi_title'>
                    <img src="" alt="" />
                    <h2>Platzi</h2>
                </div>
                <Slider {...settings}>
                    {
                        platzi.map(platziCard => (
                            <div className='platzi__item' key={platziCard.id}>
                                <PlatziCard
                                    curso={platziCard.curso}
                                    image_url={platziCard.image_url}
                                />
                            </div>
                        ))
                    }
                </Slider>
            </div>
        </div>
    );
}

export default Career