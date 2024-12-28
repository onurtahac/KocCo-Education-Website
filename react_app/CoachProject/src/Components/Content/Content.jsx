import React from 'react';
import './Content.css';
import Cards from '../Cards/Cards';
import { useNavigate } from 'react-router-dom'; 

const Content = () => {
  const navigate = useNavigate(); 

  const handleButtonClick = () => {
    navigate('/userindex'); 
  };

  return (
    <div className='body-div'>
      <div className='photo'></div>
      <div className='body-cards'>
        <Cards />
      </div>
      <div className='body-missions'>
        <h2>Our Mission</h2>
        <p>
          At KocCO, our mission is to bridge the gap between ambitious students preparing for critical exams like YKS, DUS, TUS, KPSS, and ALES, and experienced mentors eager to share their expertise. We aim to create a supportive and dynamic platform where students can find tailored guidance, and mentors can make a meaningful impact. Our vision is to empower learners with the tools and personalized mentorship they need to succeed, while fostering a community built on trust, growth, and collaboration. At KocCO, we believe that every student deserves the chance to excel, and every mentor has the power to inspire..
        </p>
        <button onClick={handleButtonClick} className="mission-button">
          Go to User Index
        </button>
      </div>
    </div>
  );
};

export default Content;
