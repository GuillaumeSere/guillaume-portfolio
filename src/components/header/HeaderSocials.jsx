import React from 'react';
import {BsLinkedin} from 'react-icons/bs';
import {FaGithub} from 'react-icons/fa';
import { FaNpm } from "react-icons/fa";
import mentor from "../../assets/mentor.png";

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
      <a href="https://www.linkedin.com/in/guillaume-s%C3%A9r%C3%A9-2019a7116/" target="_blank" rel="noreferrer" title="Connectez-vous avec moi sur LinkedIn"><BsLinkedin /></a>
      <a href="https://github.com/GuillaumeSere" target="_blank" rel="noreferrer" title="Explorez mes projets sur GitHub"><FaGithub /></a>
      <a href="https://www.npmjs.com/~guillaumesere" target="_blank" rel="noreferrer" title="Visitez mon profil NPM"><FaNpm className='npm' /></a>
      <a href="https://www.frontendmentor.io/profile/GuillaumeSere" target="_blank" rel="noreferrer" title="Visitez mon profil Frontend Mentor"><img src={mentor} className='mentor' alt="" /></a>
    </div>
  )
}

export default HeaderSocials;
