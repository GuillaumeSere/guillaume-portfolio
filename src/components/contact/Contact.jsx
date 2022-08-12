import React from 'react';
import './contact.css';
import {MdOutlineEmail} from 'react-icons/md';
import {TbBrandLinkedin} from 'react-icons/tb';
import {BsWhatsapp} from 'react-icons/bs';
import { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {

    const form = useRef();
        const sendEmail = (e) => {
            e.preventDefault();
        
            emailjs.sendForm('service_69wivog', 'template_8xb3op5', form.current, 'wXDv_hlzx1MHP--6Y')

            e.target.reset();
          };

  return (
    <section id="contact">
     <h5>Entrer en Contact</h5>
     <h2>Contactez Moi</h2>

     <div className="container contact__container">
        <div className="contact__options">
            <article className="contact__option">
                <MdOutlineEmail className='contact__option-icon' />
                <h4>Email</h4>
                <h5>guillaumesere@hotmail.fr</h5>
                <a href="mailto:guillaumesere@hotmail.fr" target="_blank">Envoyer votre message</a>
            </article>
            <article className="contact__option">
                <TbBrandLinkedin className='contact__option-icon' />
                <h4>Linkedin</h4>
                <h5>Guillaume SERE</h5>
                <a href="https://www.linkedin.com/in/guillaume-s%C3%A9r%C3%A9-2019a7116/" target="_blank">Contactez moi</a>
            </article>
            <article className="contact__option">
                <BsWhatsapp className='contact__option-icon' />
                <h4>WhatsApp</h4>
                <h5>Guillaume SERE</h5>
                <a href="https://wa.me/33660400924" target="_blank">Contactez moi</a>
            </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
            <input type="text" name="name" placeholder="entrer votre nom" required />
            <input type="email" name="email" placeholder="entrer votre email" required />
            <textarea name="message" rows="7" placeholder="entrer votre message" required></textarea>
            <button type="submit" className='btn btn-primary contact'>Envoyer votre message</button>
        </form>
     </div>
    </section>
  )
}

export default Contact;
