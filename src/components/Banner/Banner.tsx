import React from 'react';
import GithubIcon from '../../assets/github.svg';
import CvIcon from '../../assets/cv.svg';

import './Banner.css';
import ThreeDModel from '../ThreeDModel/ThreeDModel';

const Banner: React.FC = () => {
  const scrollToContactForm = () => {
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
      contactForm.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="Banner-container">
      <aside className="About-Me">
        <div className="Title">
          <p>Olá, eu sou Marcus Schebek e serei o seu novo</p>
          <div className="Dev-wrapper">
            <div className="Dev-text">
              <h1>DESENVOLVEDOR</h1>
            </div>
          </div>
        </div>
        <div className="Apresentation">
          <div className="contact">
            <img src={GithubIcon} alt="github-icon" />
            <img src={CvIcon} alt="cv-icon" />
            <button onClick={scrollToContactForm}>
              Me Contate
            </button>
          </div>
          <p>
            Sou um estudante de Engenharia da Computação e tenho experiência em projetos que você precisa ver!
          </p>
        </div>
      </aside>
      <aside className="ThreeDModel-container">
        <ThreeDModel />
      </aside>
    </div>
  );
};

export default Banner;
