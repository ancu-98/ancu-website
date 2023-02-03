import React, { useState } from 'react'
import About from './About'
import Contact from './Contact'
import Home from './Home'
import NavBar from './NavBar'
import OptionsContainer from './OptionsContainer'
import Proyects from './Proyects'
import './styles/setUpMenu.css'

const SetUpMenu = () => {

    const [show, setShow] = useState(0)

    const handleTab = (e) => {
        setShow(e)
    }

    console.log(show)

    return (
        <div className='container_setup' >
            <div className='container_box' >
                <header className='box__header' >
                    <NavBar
                        handleTab={handleTab}
                    />

                </header>
                <main className='main__container'>
                    <div className={ show===1 ? 'home__container': 'inactive'}>
                        <Home />
                    </div>
                    <div className={ show===2 ? 'about__container' : 'inactive'}>
                        <About />
                    </div>
                    <div className={ show===3 ? 'proyects__container' : 'inactive'}>
                        <Proyects />
                    </div>
                    <div className={ show===4 ? 'contact__container' : 'inactive'}>
                        <Contact />
                    </div>
                </main>
            </div>
            <footer className='footer__container'>
                    <OptionsContainer/>
            </footer>
        </div>
    )
}

export default SetUpMenu