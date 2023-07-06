import React from 'react';

import AdvantageItem from '../../components/AdvantageItem';

import './Home.css';

function Home() {
  return (
    <>
      <div className='container'>
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
    </>
  );
}

export default Home;
