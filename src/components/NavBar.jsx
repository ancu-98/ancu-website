import React from 'react'
import './styles/navBar.css'
import './styles/responsive/tablet.css'
import './styles/responsive/mobile.css'

const NavBar = ({handleTab}) => {

    return (
        <nav className='navBar__container-all'>
            <div className='navBar__container-setup'>
                <button className='button__item' onClick={() => handleTab(1)}>
                    <a href="#" className='item'>
                        <span>Home</span>
                        <img src="/src/assets/img/home.svg" alt="logo_Home" />
                    </a>
                </button>
                <button className='button__item' onClick={() => handleTab(2)} >
                    <a href="#" className='item'>
                        <span >About</span>
                        <img src="/src/assets/img/user.svg" alt="logo_About" />
                    </a>
                </button>
                <button className='button__item proyects' onClick={() => handleTab(3)}>
                    <a href="#" className='item'>
                        <span >Proyects</span>
                        <img src="/src/assets/img/briefcase-account.svg" alt="logo_proyects" />
                    </a>
                </button>
                <button className='button__item' onClick={() => handleTab(4)}>
                    <a href="#" className='item'>
                        <span >Contact</span>
                        <img src="/src/assets/img/mail-flash.svg" alt="logo_contact" />
                    </a>
                </button>
                <label className='switch'>
                    <input type="checkbox" />
                    <span className='slider_nav'></span>
                </label>
            </div>

            <div className='navBar__container-mobile'>
                <div className='navBar__container-button-list' >
                    <button className='button__item-li' onClick={() => handleTab(1)} >
                        <a href="#" className='item-li'>
                            <span className='icon'>
                                <img src="/src/assets/img/home.svg" alt="logo_Home" />
                            </span>
                            <span className='text'>Home</span>
                        </a>
                    </button>
                    <button className='button__item-li' onClick={() => handleTab(2)} >
                        <a href="#" className='item-li'>
                            <span className='icon'>
                                <img src="/src/assets/img/user.svg" alt="logo_About" />
                            </span>
                            <span className='text'>About</span>
                        </a>
                    </button>
                    <button className='button__item-li' onClick={() => handleTab(3)} >
                        <a href="#" className='item-li'>
                            <span className='icon'>
                                <img src="/src/assets/img/briefcase-account.svg" alt="logo_proyects" />
                            </span>
                            <span className='text'>Proyects</span>
                        </a>
                    </button>
                    <button className='button__item-li' onClick={() => handleTab(4)} >
                        <a href="#" className='item-li'>
                            <span className='icon'>
                                <img src="/src/assets/img/mail-flash.svg" alt="logo_contact" />
                            </span>
                            <span className='text'>Contact</span>
                        </a>
                    </button>
                    <label className='switch'>
                        <input type="checkbox" />
                        <span className='slider_nav'></span>
                    </label>
                </div>
            </div>
        </nav>
    )
}

export default NavBar