import React, { useState } from 'react'
import PlatziCard from './PlatziCard'
import AcademloItem from './AcademloItem';
import './styles/career.css'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { platzi, academlo, university } from '../utils/career.js'

const platzi_logo = 'https://static.platzi.com/media/platzi-isotipo@2x.png'

console.log(platzi)

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

                <div className="academlo_title">
                    <h2>Academlo Bootcamp</h2>
                </div>

                <div className="academlo_card_container">

                    <div className='academlo_card'>
                        <div className="academlo_card_logo">
                            <img src="/src/assets/img/academlo_logo.jpg" alt="logo-academlo" />
                        </div>
                        <div className='academlo_card_title'><h3>FULL STACK DEVELOPER</h3></div>
                        <div className='academlo_card_container_button'>
                            <button className='academlo_card_button' onClick={() => handleTap(!open)}>
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
                    <div className='platzi_img'>
                        <img src={platzi_logo} alt="platzi-logo" />
                    </div>
                    <h2>Platzi</h2>
                </div>
                <div className='slider_platzi'>
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
            <div className="university_container">
                <div className='university_logo'>
                    <img src="/src/assets/img/logo_udec.png" alt="logo-udec" />
                </div>
                <ul>
                    <li>Academic program: {university.academic_program}</li>
                    <li>Title to be awarded: {university.title_awared} </li>
                    <li>Level of training: {university.level_training}</li>
                    <li>Type of training: {university.type_training}</li>
                    <li>Metodology: {university.metodology}</li>
                    <li>Estimated duration: {university.duration} </li>
                    <li>Actually location: {university.semester_location}</li>

                </ul>
            </div>
        </div>
    );
}

export default Career