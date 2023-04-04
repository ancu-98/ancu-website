import React, { useEffect, useRef, useState } from 'react'
import './styles/navBar.css'

import homeIcon from '/src/assets/img/home.svg'
import userIcon from '/src/assets/img/user.svg'
import proyectsIcon from '/src/assets/img/briefcase-account.svg'
import emailIcon from '/src/assets/img/mail-flash.svg'

const list = [
    {id: 1, img: homeIcon, title: 'Home'},
    {id: 2, img: userIcon, title: 'About'},
    {id: 3, img: proyectsIcon, title: 'Proyects'},
    {id: 4, img: emailIcon, title: 'Contact'}
]

const NavBar = ({ handleTab }) => {

    const [activeItem, setActiveItem] = useState(null)

    const listRef = useRef([]);

    const handleClick = (item) => {
        setActiveItem(item.id);
        listRef.current.forEach(item => item.classList.toggle('active'));
        item.classList.add('active');
    }

    const updateRefs = (item, index) => {
        listRef.current[index] = item;
    }


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
                    <ul>
                        {
                            list.map((item, index) => (
                                <li
                                    key={item.id}
                                    ref={() => updateRefs(item, index)}
                                    className={item.id === activeItem ? 'active' : ''}
                                    onClick={() => handleClick(item)}
                                >
                                    <a href="#" className='item-li'>
                                        <span className='icon'>
                                            <img src={item.img} alt="logo_item" />
                                        </span>
                                        <span className='text'>{item.title}</span>
                                    </a>
                                </li>
                            ))
                        }
                        <div className='indicator'></div>
                    </ul>
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