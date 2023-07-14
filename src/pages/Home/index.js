import React from 'react';

import AdvantageItem from '../../components/AdvantageItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons'

import './Home.css';

function Home() {
  return (
    <>
      <div className='section section-first'>
        <div className='baseline'>
          <h1>Votre plateforme pédagogique personnelle</h1>
          <p className='slogan color-dark-gray'>
            Aucun pourcentage des ventes pour l'utilisation du service. Parce que le système vous appartient uniquement. Vous ne payez qu'une seule fois !
          </p>
        </div>
        <div className='advantages'>
          <AdvantageItem
            iconUrl='img/easy-and-fast.png'
            title='Facile et rapide'
            text='Nous intégrons à votre site en quelques heures et absolument gratuitement !'
          />
          <AdvantageItem
            iconUrl='img/sans-encombre.png'
            title='Sans encombre'
            text='Tout le contenu est hébergé sur un serveur enregistré avec vos données.'
          />
          <AdvantageItem
            iconUrl='img/assistance.png'
            title='Assistance permanente'
            text='Le support est maintenu pendant toute la durée de la licence.'
          />
        </div>
      </div>
      <div className='section section-second'>
        <div className='contact-demo'>
          <h1>Vous souhaitez en savoir plus ?</h1>
          <p>
            Laissez nous une demande de démo, et nous vous recontacterons sous deux heures.
          </p>
          <button>Demande de démo &nbsp; <FontAwesomeIcon icon={faArrowAltCircleRight} /></button>
        </div>
        <div className='preview-img'>
          <img src='img/student-dashboard.png' alt='preview dashboard'></img>
        </div>
      </div>
    </>
  );
}

export default Home;
