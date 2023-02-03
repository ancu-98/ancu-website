import React from 'react'
import './styles/home.css'

const Home = () => {

    const frases = [
        "Hi! I'm Ancu_98",
        "I'm from Colombia!",
    ]

    const vistaFrases = (frases) => {
        for (let i = 0; i < frases.length; i++) {
            return frases[i];
        }
    }


    return (
        <div className="container">
            <div className="container_terminal">
                <div className="terminal_toolbar">
                    <div className="butt">
                        <button className="btn btn-color"></button>
                        <button className="btn"></button>
                        <button className="btn"></button>
                    </div>
                    <p className="user">ancu_98@admin: ~</p>
                </div>
                <div className="terminal_body">
                    <div className="terminal_promt">
                        <span className="terminal_user">ancu_98@admin:</span>
                        <span className="terminal_location">~</span>
                        <span className="terminal_bling">$</span>
                        <div className="terminal_efect">
                            <span>{frases}</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='button_scene'>
                <div className='cube'>
                    <div className='side top'>
                        <img className='icon' src="/src/assets/img/github.svg" alt="github-icon" />
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