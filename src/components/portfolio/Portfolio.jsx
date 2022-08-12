import React from 'react';
import './portfolio.css';
import IMG1 from '../../assets/projet1.png';
import IMG2 from '../../assets/projet2.png';
import IMG3 from '../../assets/projet3.png';
import IMG4 from '../../assets/projet4.png';
import IMG5 from '../../assets/projet5.png';
import IMG6 from '../../assets/projet6.png';

const data = [
    {
        id: 1,
        image: IMG1,
        title: 'Fisheye',
        github: 'https://github.com/GuillaumeSere/GuillaumeSere_P6_26102021',
        demo: 'https://guillaumesere.github.io/GuillaumeSere_P6_26102021/'
    },
    {
        id: 2,
        image: IMG2,
        title: 'Ohmyfood',
        github: 'https://github.com/GuillaumeSere/GuillaumeSere_03_24092021.github.io',
        demo: 'https://guillaumesere.github.io/GuillaumeSere_03_24092021.github.io/'
    },
    {
        id: 3,
        image: IMG3,
        title: 'Wealth Health',
        github: 'https://github.com/GuillaumeSere/wealth-health',
        demo: 'https://guillaumesere.github.io/wealth-health/'
    },
    {
        id: 4,
        image: IMG4,
        title: 'Kasa',
        github: 'https://github.com/GuillaumeSere/guillaumesere_11_28032022',
        demo: 'https://guillaumesere.github.io/guillaumesere_11_28032022/'
    },
    {
        id: 5,
        image: IMG5,
        title: 'Daily Routine',
        github: 'https://github.com/GuillaumeSere/APP-yoga',
        demo: 'https://guillaumesere.github.io/APP-yoga/'
    },
    {
        id: 6,
        image: IMG6,
        title: 'Les petits plats',
        github: 'https://github.com/GuillaumeSere/GuillaumeSere_P7_21122021',
        demo: 'https://guillaumesere.github.io/GuillaumeSere_P7_21122021/'
    },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>Mes Projets Récent</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
            data.map(({id, image, title, github, demo}) => {
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
