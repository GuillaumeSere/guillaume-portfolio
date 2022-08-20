import React from 'react';
import './experience.css';
import {BsPatchCheckFill} from 'react-icons/bs';
import html from '../../assets/html.png';
import css from '../../assets/css.png';
import javascript from '../../assets/javascript.png';
import react from '../../assets/react.png';
import node from '../../assets/node.png';
import bootstrap from '../../assets/bootstrap.png';
import tailwin from '../../assets/tailwin.png';
import php from '../../assets/php.png';
import mongo from '../../assets/mongo.png';
import npm from '../../assets/npm.png';
import redux from '../../assets/redux.png';
import sass from '../../assets/sass.png';

const Experience = () => {
  return (
    <section id="experience">
      <h5>Qu'elle compétence j'ai</h5>
      <h2>Mon Experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
            <h3>Frontend Developement</h3>
            <div className="experience__content">
                <article className='experience__details'>
                    <img src={html} className="experience__details-icon" />
                    <div>
                    <h4>HTML</h4>
                    <small className='text-light'>Expert</small>
                    </div>
                </article>
                <article className='experience__details'>
                    <img src={css} className="experience__details-icon" />
                    <div>
                    <h4>CSS</h4>
                    <small className='text-light'>Expert</small>
                    </div>
                </article>
                <article className='experience__details'>
                    <img src={javascript} className="experience__details-icon" />
                    <div>
                    <h4>Javascript</h4>
                    <small className='text-light'>Expert</small>
                    </div>
                </article>
                <article className='experience__details'>
                    <img src={bootstrap} className="experience__details-icon" />
                    <div>
                    <h4>Bootstrap</h4>
                    <small className='text-light'>Intermédiaire</small>
                    </div>
                </article>
                <article className='experience__details'>
                    <img src={react} className="experience__details-icon" />
                    <div>
                    <h4>React</h4>
                    <small className='text-light'>Intermédiaire</small>
                    </div>
                </article>
                <article className='experience__details'>
                    <img src={tailwin} className="experience__details-icon" />
                    <div>
                    <h4>Tailwind</h4>
                    <small className='text-light'>Débutant</small>
                    </div>
                </article>
                <article className='experience__details'>
                    <img src={redux} className="experience__details-icon" />
                    <div>
                    <h4>Redux</h4>
                    <small className='text-light'>Débutant</small>
                    </div>
                </article>
                <article className='experience__details'>
                    <img src={sass} className="experience__details-icon" />
                    <div>
                    <h4>Sass</h4>
                    <small className='text-light'>Intermédiaire</small>
                    </div>
                </article>
            </div>
        </div>


        <div className="experience__backend">
        <h3>Backend Developement</h3>
            <div className="experience__content">
                <article className='experience__details'>
                    <img src={node} className="experience__details-icon" />
                    <div>
                    <h4>Node Js</h4>
                    <small className='text-light'>Expert</small>
                    </div>
                </article>
                <article className='experience__details'>
                    <img src={mongo} className="experience__details-icon" />
                   <div>
                   <h4>Mongoo</h4>
                    <small className='text-light'>Intermédiaire</small>
                   </div>
                </article>
                <article className='experience__details'>
                    <img src={php} className="experience__details-icon" />
                    <div>
                    <h4>PHP</h4>
                    <small className='text-light'>Intermédiaire</small>
                    </div>
                </article>
                <article className='experience__details'>
                    <img src={npm} className="experience__details-icon" />
                    <div>
                    <h4>NPM</h4>
                    <small className='text-light'>Intermédiaire</small>
                    </div>
                </article>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Experience;
