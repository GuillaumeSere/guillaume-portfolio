import React from 'react';
import CTA from './CTA';
import './header.css';
import ME from '../../assets/profil.jpg';
import HeaderSocials from './HeaderSocials';
import { Player } from '@lottiefiles/react-lottie-player';
import animation from '../../assets/125369-frontend.json';

const Header = () => {
    return (
        <header>
            <div className="container header__container">
                <h5>Bonjour, Je m'appelle</h5>
                <h1>Guillaume SERE</h1>
                <h5 className="text-light">
                    Développeur
                    <Player
                        autoplay
                        loop
                        src={animation}
                        style={{ height: '200px', width: '200px' }}
                    >
                    </Player>
                </h5>
                <div className="triangle"></div>
                <div className="carre"></div>
                <CTA />
                <HeaderSocials />
                <div className="me1">
                    <img className='me' src={ME} alt="me" />
                </div>

                <a href="#contact" className='scroll__down'>Scroll Down</a>
            </div>
        </header>
    )
}

export default Header;
