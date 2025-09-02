import React from 'react';
import './portfolio.css';
import IMG1 from '../../assets/projet1.png';
import IMG2 from '../../assets/projet2.png';
import IMG3 from '../../assets/projet3.png';
import IMG4 from '../../assets/projet4.png';
import IMG5 from '../../assets/projet5.png';
import IMG6 from '../../assets/projet6.png';
import IMG7 from '../../assets/projet7.png';
import IMG8 from '../../assets/projet8.png';
import IMG9 from '../../assets/projet9.png';
import IMG10 from '../../assets/projet10.png';
import IMG11 from '../../assets/projet11.png';
import IMG12 from '../../assets/projet12.png';
import IMG13 from '../../assets/projet13.png';
import IMG14 from '../../assets/projet14.png';
import IMG15 from '../../assets/projet15.png';


const data = [
    {
        id: 1,
        image: IMG1,
        title: 'Master Mind',
        github: 'https://github.com/GuillaumeSere/master-mind',
        demo: 'https://master-mind-60.vercel.app/'
    },
    {
        id: 2,
        image: IMG2,
        title: 'Generateur Mots de Passe',
        github: 'https://github.com/GuillaumeSere/generate-password',
        demo: 'https://guillaumesere.github.io/generate-password/'
    },
    {
        id: 3,
        image: IMG3,
        title: 'Plantes-Water',
        github: 'https://github.com/GuillaumeSere/plantes-water',
        demo: 'https://plantes-water.vercel.app/'
    },
    {
        id: 4,
        image: IMG4,
        title: 'Sudoku',
        github: 'https://github.com/GuillaumeSere/Sudoku',
        demo: 'https://sudoku-60.vercel.app/'
    },
    {
        id: 5,
        image: IMG5,
        title: 'Auto Market',
        github: 'https://github.com/GuillaumeSere/car',
        demo: 'https://auto-markets.vercel.app/'
    },
    {
        id: 6,
        image: IMG6,
        title: 'GEO AIR',
        github: 'https://github.com/GuillaumeSere/GEO-AIR',
        demo: 'https://geo-air.vercel.app/'
    },
    {
        id: 7,
        image: IMG7,
        title: 'Prise Medoc',
        github: 'https://github.com/GuillaumeSere/prise-medoc',
        demo: 'https://prise-medoc.vercel.app/'
    },
    {
        id: 8,
        image: IMG8,
        title: 'React-Country',
        github: 'https://github.com/GuillaumeSere/rest-countries-api',
        demo: 'https://guillaumesere.github.io/rest-countries-api/'
    },
    {
        id: 9,
        image: IMG9,
        title: 'API-Crypto',
        github: 'https://github.com/GuillaumeSere/api-crypto',
        demo: 'https://cours-crypto.vercel.app/'
    },
    {
        id: 10,
        image: IMG10,
        title: 'Sites Story',
        github: 'https://github.com/GuillaumeSere/site-story',
        demo: 'https://site-story.vercel.app/'
    },
    {
        id: 11,
        image: IMG11,
        title: 'QR Generator',
        github: 'https://github.com/GuillaumeSere/qr-code',
        demo: 'https://guillaumesere.github.io/qr-code/'
    },
    {
        id: 12,
        image: IMG12,
        title: 'Digital-Clock',
        github: 'https://github.com/GuillaumeSere/DIGITAL-CLOCK',
        demo: 'https://guillaumesere.github.io/DIGITAL-CLOCK/'
    },
    {
        id: 13,
        image: IMG13,
        title: 'API-SNCF',
        github: 'https://github.com/GuillaumeSere/api-sncf',
        demo: 'https://train-sncf.vercel.app/'
    },
    {
        id: 14,
        image: IMG14,
        title: 'NASA-MEDIA',
        github: 'https://github.com/GuillaumeSere/nasa-media',
        demo: 'https://nasa-media.vercel.app/'
    },
    {
        id: 15,
        image: IMG15,
        title: 'Live-radio',
        github: 'https://github.com/GuillaumeSere/radio-browser',
        demo: 'https://live-radios.vercel.app/'
    },
];

const Portfolio = () => {
    return (
        <section id="portfolio">
            <h2>Portfolio</h2>

            <div className="container portfolio__container">
                {
                    data.map(({ id, image, title, github, demo }) => {
                        return (
                            <article key={id} className="portfolio__item">
                                <div className="portfolio__item-image">
                                    <img src={image} alt={title} />
                                </div>
                                <h3>{title}</h3>
                                <div className="portfolio__item-cta">
                                    <a href={github} className='btn' target="_blank">Github</a>
                                    <a href={demo} className='btn btn-primary' target="_blank">Live Demo</a>
                                </div>
                            </article>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default Portfolio;
