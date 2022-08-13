import React from 'react';
import './testimonials.css';
import AVTR1 from '../../assets/avatar1.png';
import AVTR2 from '../../assets/avatar2.png';
import AVTR3 from '../../assets/avatar3.png';
import AVTR4 from '../../assets/avatar4.png';
import AVTR5 from '../../assets/avatar5.png';

// import Swiper core and required modules
import {  Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
    {
        avatar: AVTR1,
        name: 'Carine Agbefou',
        review: "Assurer la cohérence graphique d'un site web. Utiliser un système de gestion de versions pour le suivi du projet et son hébergement. Mettre en place une structure de navigation pour un site web. Assurer la cohérence graphique d'un site web."
    },
    {
        avatar: AVTR2,
        name: 'Hamza Fahi',
        review: " bonne présentation avec une bonne maîtrise du sujet , je vous souhaite bonne chance pour la suite."
    },
    {
        avatar: AVTR3,
        name: 'Tchouo Feuyan',
        review: "Toutes les fonctionnalités demandées sont implémentées, le code est pertinent et présentable. Le code ne présente pas d'erreurs et de bugs, le dom est généré avec JS et le design correspond à la maquette, le design pattern factory method est utilisé. Le code est commenté, les identificateurs sont claires et explicites, les versions récentes de JS sont utilisées sans caractéristiques dépréciées. Balises sémantiques pertinentes utilisées, balises aria utilisées, site navigable au clavier, test Achecker validé, texte alternatifs pour les images et vidéos afin de garantir l'accessibilité aux lecteurs d'écran."
    },
    {
        avatar: AVTR4,
        name: 'Adetunji Adigun',
        review: "Les données récupérées sont transformées en JSON. Les charts fonctionnels quelle que soit la source de données (mock ou API). Utilisation de la librairie Axios pour récupérer les données de l'API. Les appels API ont été réalisés dans service en dehors des composant React.Le projet est réalisé avec la librairie Recharts. Le project respect la maquette Figma. Le package.json contient les librairies installées. Les informations de configuration et d'exécution du projet sont présentes dans le readme.md. La documentation du projet est en Anglais."
    },
    {
        avatar: AVTR5,
        name: 'Frédéric Lépy',
        review: " Utilisation de Redux avec store action et reducers pour gérer le profil de l'utilisateur. La syntaxe yaml est écrite sans erreur, les routes répondent aux attentes. Utilisation de token jwt pour l'authentification."
    },
]

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Commentaires</h5>
      <h2>Témoignages</h2>
      <div className="triangle3"></div>
      <div className="carre2"></div>

      <Swiper className="container container__testimonials"
        // install Swiper modules
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
       {
        data.map(({avatar, name, review}, index) => {
            return (
                <SwiperSlide key={index} className="testimonial">
                <div className="client__avatar">
                    <img src={avatar}/>
                </div>    
                    <h5 className='client__name'>{name}</h5>   
                    <small className='client__review'>{review}</small>
            </SwiperSlide>
            )
        })
       }
      </Swiper>
    </section>
  )
}

export default Testimonials;
