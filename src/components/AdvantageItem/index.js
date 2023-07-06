import React from 'react';
import './AdvantageItem.css';

function AdvantageItem({ iconUrl, title, text }) {
  return (
    <>
      <div className='advantage-item'>
        <img src={iconUrl} alt={iconUrl}></img>
        <h3>{title}</h3>
        <p className='color-dark-gray'>{text}</p>
      </div>
    </>
  );
}

export default AdvantageItem;
