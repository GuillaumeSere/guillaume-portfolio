import React from 'react';
import './footer.css';
import { SiNpm } from "react-icons/si";
import { ImLinkedin } from "react-icons/im";
import { ImGithub } from "react-icons/im";
import { Player } from '@lottiefiles/react-lottie-player';
import animation from '../../assets/99312-developer-skills.json'

const Footer = () => {
    return (
        <footer>
            <a href="#" className='footer__logo'>
                <Player
                    autoplay
                    loop
                    src={animation}
                    style={{ height: '300px', width: '300px' }}
                >
                </Player>
            </a>
            <div className="triangle4"></div>
            <div className="carre3"></div>

            <ul className='permalinks'>
                <li><a href="#">Home</a></li>
                <li><a href="#about">À propos</a></li>
                <li><a href="#experience">Experience</a></li>
                {/* <li><a href="#serives">Services</a></li>*/}
                <li><a href="#testimonials">Temoignages</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>

            <div className="footer__socials">
                <a href="https://www.npmjs.com/~guillaumesere" target="_blank" title="Visitez mon profil NPM"><SiNpm /></a>
                <a href="https://linkedin.com" target="_blank" title="Connectez-vous avec moi sur LinkedIn"><ImLinkedin /></a>
                <a href="https://github.com/GuillaumeSere" target="_blank" title="Explorez mes projets sur GitHub"><ImGithub /></a>
            </div>

            <div className="footer__copyright">
                <small>&copy; Guillaume SERE</small>
            </div>
        </footer>
    )
}

export default Footer;
