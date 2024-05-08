import React, { useState } from 'react';
import './contact.css';
import { MdOutlineEmail } from 'react-icons/md';
import { TbBrandLinkedin } from 'react-icons/tb';
import { BsWhatsapp } from 'react-icons/bs';
import { useRef } from 'react';
import emailjs from 'emailjs-com';
import Modal from 'react-modal';

const Contact = () => {

    const [messageSent, setMessageSent] = useState(false);
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_rm0nsn2', 'template_8xb3op5', form.current, '9Wd2D9zfV7aimnGD6')
            .then(
                (response) => {
                    console.log('Email sent successfully:', response);
                    setMessageSent(true); // Définir l'état à true lorsque le message est envoyé avec succès
                    setModalIsOpen(true);
                },
                (error) => {
                    console.error('Failed to send email:', error);
                    setMessageSent(false); // Définir l'état à false en cas d'échec d'envoi du message
                }
            );

        e.target.reset();
    };

    const closeModal = () => {
        setModalIsOpen(false); // Fermer la modal lorsque l'utilisateur clique sur le bouton de fermeture
    };

    return (
        <section id="contact">
            <h2>Contactez Moi</h2>

            <div className="container contact__container">
                <div className="contact__options">
                    <article className="contact__option">
                        <MdOutlineEmail className='contact__option-icon' />
                        <h4>Email</h4>
                        <h5>guillaumesere60@gmail.com</h5>
                        <a href="mailto:guillaumesere60@gmail.com" target="_blank" rel="noreferrer">Envoyer votre message</a>
                    </article>
                    <article className="contact__option">
                        <TbBrandLinkedin className='contact__option-icon' />
                        <h4>Linkedin</h4>
                        <h5>Guillaume SERE</h5>
                        <a href="https://www.linkedin.com/in/guillaume-s%C3%A9r%C3%A9-2019a7116/" target="_blank" rel="noreferrer">Contactez moi</a>
                    </article>
                    <article className="contact__option">
                        <BsWhatsapp className='contact__option-icon' />
                        <h4>WhatsApp</h4>
                        <h5>Guillaume SERE</h5>
                        <a href="https://wa.me/33660400924" target="_blank" rel="noreferrer">Contactez moi</a>
                    </article>
                </div>
                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name="name" placeholder="entrer votre nom" required />
                    <input type="email" name="email" placeholder="entrer votre email" required />
                    <textarea name="message" rows="7" placeholder="entrer votre message" required></textarea>
                    <button type="submit" className='btn btn-primary contact'>Envoyer votre message</button>
                </form>
            </div>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Message Sent Modal"
                className="modal"
            >
                <h2 className='modal-message'>Votre message a été envoyé avec succès !</h2>
                <button className='modal-btn' onClick={closeModal}>X</button>
            </Modal>
        </section>
    )
}

export default Contact;
