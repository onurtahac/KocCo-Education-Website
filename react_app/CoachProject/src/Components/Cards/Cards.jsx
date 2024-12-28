import React from 'react';
import './Cards.css';

const Cards = () => {
  const cardData = [
    {
      id: 1,
      quote: 'Hard work beats talent.',
      title: 'Achieve Your Goals',
      description: 'Dedication and effort lead to great success.',
      imgSrc: 'image_url_1'
    },
    {
      id: 2,
      quote: 'Think outside the box.',
      title: 'Creative Solutions',
      description: 'Unlock innovative ideas with fresh perspectives.',
      imgSrc: 'image_url_2'
    },
    {
      id: 3,
      quote: 'United we stand, divided we fall.',
      title: 'Strength in Unity',
      description: 'Teamwork fosters growth and shared accomplishments.',
      imgSrc: 'image_url_3'
    },
    { 
      id: 4,
      quote: 'Sustainability ensures the future.',
      title: 'Go Green',
      description: 'Adopt eco-friendly habits for a better tomorrow.',
      imgSrc: 'image_url_4'
    }
  ];

  return (
    <div className='card-container'>
      {cardData.map(card => (
        <div key={card.id} className='card'>
         <img alt="profile-picture" src="/assets/dzeko.png" />
          <h3>{card.quote}</h3>
          <p className='card-title'>{card.title}</p>
          <p className='card-text'>{card.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Cards;