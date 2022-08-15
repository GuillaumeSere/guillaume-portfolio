import React from 'react';
import './about.css';
import ME from '../../assets/home-pic.jpg';
import {FaAward} from 'react-icons/fa';
import {FiUsers} from 'react-icons/fi';
import {VscFolderLibrary} from 'react-icons/vsc';

const About = () => {
  return (
    <section id="about">
      <h5>Faire connaissance</h5>
      <h2>À propos</h2>

      <div className="container about__container">
        <div className="about__me">
            <div className="about__me-image">
                <img src={ME} alt="about image" />
            </div>
        </div>

        <div className="about__content">
            <div className="about__cards">
                <article className='about__card'>
                    <FaAward className='about__icon'/>
                    <h5>Experience</h5>
                    <small>+3 ans</small>
                </article>
                <article className='about__card'>
                    <FiUsers className='about__icon'/>
                    <h5>Communauté</h5>
                    <small>+200 Developpeurs</small>
                </article>
                <article className='about__card'>
                    <VscFolderLibrary className='about__icon'/>
                    <h5>Projets</h5>
                    <small>+14 complet</small>
                </article>
            </div>

            <p>
              Concepteur et intégrateur de sites internet.<br/>
              Développer des algorithmes pour résoudre un problème.<br/>  
            Créer des applications web dynamiques
            avec Javascript et React.<br/>
            Mettre en œuvre des test unitaires
            et d’intégration pour débugger le code.<br/>
            Interagir, et modéliser une API.<br/>
            Analyser la performance d'une application web.<br/>
            Assurer l'accessibilité d'un site web.<br/>
            Intégrer du contenu conformément à une maquette.
            </p>

            <a href="#contact" className='btn btn-primary'>Contact</a>
            <div className="triangle2"></div>
        </div>
      </div>
    </section>
  )
}

export default About;
