import React from 'react';
import {BsLinkedin} from 'react-icons/bs';
import {FaGithub} from 'react-icons/fa';
import { FaNpm } from "react-icons/fa";

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
      <a href="https://www.linkedin.com/in/guillaume-s%C3%A9r%C3%A9-2019a7116/" target="_blank" title="Connectez-vous avec moi sur LinkedIn"><BsLinkedin /></a>
      <a href="https://github.com/GuillaumeSere" target="_blank" title="Explorez mes projets sur GitHub"><FaGithub /></a>
      <a href="https://www.npmjs.com/~guillaumesere" target="_blank" title="Visitez mon profil NPM"><FaNpm className='npm' /></a>
    </div>
  )
}

export default HeaderSocials;
