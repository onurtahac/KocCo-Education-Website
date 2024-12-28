import React, { useState, useEffect } from 'react';
import './UserIndex.css';
import { useNavigate } from 'react-router-dom';

function UserIndex() {
  const navigate = useNavigate(); 
  const [advertisements, setAdvertisements] = useState([]);

  useEffect(() => {
    const fetchAdvertisements = async () => {
      try {
        const token = sessionStorage.getItem('token'); // Token'i sessionStorage'den al
        if (!token) {
          throw new Error('Token bulunamadı. Lütfen giriş yapın.');
        }

        const response = await fetch('https://localhost:7222/api/User/get-all-packages', {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${token}`, // Token'i Authorization başlığına ekle
            'Content-Type': 'application/json'
          }
        });

        if (!response.ok) {
          throw new Error('Veriler alınırken bir hata oluştu!');
        }

        const data = await response.json();
        setAdvertisements(data); // Verileri state'e atıyoruz
      } catch (error) {
        console.error('Hata:', error);
      }
    };

    fetchAdvertisements();
  }, []); // Component yüklendiğinde bir kez çalışır

  const handleButtonClick = (ad) => {
    navigate('/coursedetail', { state: ad });
  };

  return (
    <div className='user-body-container'>
      <div className='advertisements-container'>
        {advertisements.map((ad, index) => (
          <div key={index} className='advertisements'>
            <h5>{ad.packageName}</h5>
            <p className='advertisements-price'>{ad.price}</p>
            <p className='advertisements-description'>{ad.description}</p>
            <button onClick={() => handleButtonClick(ad)} className='information-button'>Detail</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default UserIndex;