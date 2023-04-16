import React, { useState } from 'react'
import About from './About'
import Contact from './Contact'
import Home from './Home'
import NavBar from './NavBar'
import Proyects from './Proyects'
import './styles/setUpMenu.css'

const SetUpMenu = () => {

    /* Render Sections */
    const [show, setShow] = useState(0)

    const handleTab = (e) => {
        setShow(e)
    }

    console.log(show)

    /* Switch Button (.container_box efect) */
    const [isToggle, setIsToggle] = useState(true)

    const toggleValue = () => {
        setIsToggle(!isToggle)
    }

    console.log(isToggle)

    return (
        <div className='container_setup' >
            <div className='container_all'>
                <div className={`container_box ${isToggle ? 'open' : 'close'}`} >
                    <header className='box__header' >
                        <NavBar handleTab={handleTab} />
                    </header>

                    <div className='main__card'>
                        <div className="one">
                            <div className="thwo">
                                <div className="three">
                                    <div className="four">
                                        <div className="five">
                                            <div className='six'>
                                                <p>hola</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='main__container'>
                        <div className={show === 1 ? 'home__container' : 'inactive'}>
                            <Home />
                        </div>
                        <div className={show === 2 ? 'about__container' : 'inactive'}>
                            <About />
                        </div>
                        <div className={show === 3 ? 'proyects__container' : 'inactive'}>
                            <Proyects />
                        </div>
                        <div className={show === 4 ? 'contact__container' : 'inactive'}>
                            <Contact />
                        </div>
                    </div>
                </div>
                <div className='options__container'>
                    <label className='switch'>
                        <input
                            type="checkbox"
                            onClick={toggleValue}
                            checked={isToggle}
                        />
                        <span className='slider_nav'></span>
                    </label>
                </div>
            </div>
        </div>
    )
}

export default SetUpMenu