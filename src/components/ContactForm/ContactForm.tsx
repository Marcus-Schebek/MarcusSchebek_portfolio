import React, { useEffect } from 'react';
import './ContactForm.css'; 
import AOS from 'aos';
import 'aos/dist/aos.css';

const ContactForm: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, 
      easing: 'ease-out', 
    });
  }, []);

  return (
    <div id="contact-form" className="contact-form-container" data-aos="fade-up">
      <form 
        className="contact-form"
        action="https://formsubmit.co/marcusschebek@gmail.com" 
      >
        <div className="form-group">
          <label htmlFor="name">Nome</label>
          <input type="text" id="name" name="name" placeholder="Seu nome" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" placeholder="Seu email" required />
        </div>
        <div className="form-group">
          <label htmlFor="message">Mensagem</label>
          <textarea id="message" name="message" placeholder="Sua mensagem" required></textarea>
        </div>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default ContactForm;
