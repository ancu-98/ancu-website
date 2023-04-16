import React, { useRef } from 'react'
import './styles/home.css'
import Typed from 'typed.js'
import { useEffect } from 'react';

const Home = () => {

    const el = useRef(null);

    useEffect(() => {
        const typed = new Typed(el.current, {
            strings: ['<i>First</i> sentence.', '&amp; a second sentence.'],
            startDelay: 300,
            typeSpeed: 30,
            backDelay: 150,
            backSpeed: 150,
            smartBackspace: true,
            showCursor: false,
            loop: true
        })

        return () => {
            // Destroy Typed instance during cleanup to stop animation
             typed.destroy();
         };
    });

    return (
        <div className="container">
            <div className="container_terminal">
                <div className="terminal_toolbar">
                    <div className="butt">
                        <button className="btn btn-color"></button>
                        <button className="btn"></button>
                        <button className="btn"></button>
                    </div>
                    <p className="user">ancu_98 website</p>
                </div>
                <div className="terminal_body">
                    <div className="terminal_promt">
                        <span className="terminal_user">ancu_98@admin:</span>
                        <span className="terminal_location">~</span>
                        <span className="terminal_bling">$</span>
                        <div className="terminal_efect">
                            <span ref={el}></span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='button_scene'>
                <div className='cube'>
                    <div className='side top'>
                        <img className='icon' src="/src/assets/img/github1.svg" alt="github-icon" />
                        <img className='icon' src="/src/assets/img/play.svg" alt="play-icon" />
                        <img className='icon' src="/src/assets/img/zap.svg" alt="zap-icon" />
                    </div>
                    <div className='side front'>
                        <img src="/src/assets/img/gamepad.svg" alt="gamepad-icon"/>
                        <span>Share me</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home