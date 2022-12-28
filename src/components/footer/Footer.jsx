import React from 'react';
import './footer.css';
import { MdComputer } from 'react-icons/md';
import { FaFacebookF } from 'react-icons/fa';
import { TbBrandLinkedin } from 'react-icons/tb';
import { FaTwitter } from 'react-icons/fa';
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
                <a href="https://facebook.com" target="_blank"><FaFacebookF /></a>
                <a href="https://linkedin.com" target="_blank"><TbBrandLinkedin /></a>
                <a href="https://twitter.com" target="_blank"><FaTwitter /></a>
            </div>

            <div className="footer__copyright">
                <small>&copy; Guillaume SERE</small>
            </div>
        </footer>
    )
}

export default Footer;
