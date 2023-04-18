import React, { useState } from 'react'
import PlatziCard from './PlatziCard'
import AcademloItem from './AcademloItem';
import './styles/career.css'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { platzi, academlo, university } from '../utils/about.js'
import academloLogo from '/src/assets/img/academlo_logo.jpg'
import arrowDownIcon from '/src/assets/img/arrow-down-circle.svg'
import logoUdec from '/src/assets/img/logo_udec.png'


const Career = () => {

    const [open, setOpen] = useState(false)

    const handleTap = (e) => {
        setOpen(e)
    }

    var settings = {
        dots: true,
        infinite: true,
        speed: 2000,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    const fullstack = 'https://certificates.academlo.com/en/verify/38317332478453'
    const platzi_logo = 'https://static.platzi.com/media/platzi-isotipo@2x.png'

    return (
        <div className='career_container'>
            <div className='academlo_container'>

                <div className="academlo_title">
                    <h2>Academlo Bootcamp</h2>
                </div>

                <div className="academlo_card_container">

                    <div className='academlo_card'>
                        <div className="academlo_card_logo">
                            <img src={academloLogo} alt="logo-academlo" />
                        </div>
                        <a href={fullstack} target='_blank' className='academlo_card_title'><h3>FULL STACK DEVELOPER </h3></a>
                        <div className='academlo_card_container_button'>
                            <button className={`academlo_card_button ${open ? 'open_window': 'close_window'}`} onClick={() => handleTap(!open)}>
                                <img src={arrowDownIcon} alt="drop-down-arrow" />
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
                                        certificate_link={academloItem.certificate_link}
                                    />
                                </div>
                            ))
                        }
                    </div>

                </div>
            </div>
            <div className='slider_platzi_container'>

                <div className='platzi_title'>
                    <div className='platzi_img'>
                        <img src={platzi_logo} alt="platzi-logo" />
                    </div>
                    <h2>Platzi</h2>
                </div>
                <div className='slider_platzi'>
                    <div className='slider_container'>
                        <Slider {...settings}>
                            {
                                platzi.map(platziCard => (
                                    <div className='platzi__item' key={platziCard.id}>
                                        <PlatziCard
                                            curso={platziCard.curso}
                                            image_url={platziCard.image_url}
                                            certificate_link={platziCard.certificate_link}
                                        />
                                    </div>
                                ))
                            }
                        </Slider>
                    </div>
                </div>

            </div>
            <div className="university_card_container">
                <div className="university_card">
                    <div className='university_logo'>
                        <img src={logoUdec} alt="logo-udec" />
                    </div>
                    <ul className='university_list' >
                        <li> <span>Academic program:</span> {university.academic_program}</li>
                        <li> <span>Title to be awarded:</span> {university.title_awared} </li>
                        <li> <span>Level of training:</span> {university.level_training}</li>
                        <li> <span>Type of training:</span> {university.type_training}</li>
                        <li> <span>Metodology:</span> {university.metodology}</li>
                        <li> <span>Estimated duration:</span> {university.duration} </li>
                        <li> <span>Current location:</span> {university.semester_location}</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Career