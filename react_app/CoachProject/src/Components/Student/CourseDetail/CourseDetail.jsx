import React from 'react';
import { useLocation } from 'react-router-dom';
import './CourseDetail.css';
import { useNavigate } from 'react-router-dom';

function CourseDetail() {
  // useLocation ile yönlendirilmiş veriyi alıyoruz
  const location = useLocation();
  const ad = location.state; // 'state' içinde gönderilen ilan bilgisi

  const navigate = useNavigate(); // useNavigate kullanımı

  const handleButtonClick = (ad) => {
    navigate('/payment',{ state: ad }); // Butona tıklayınca yönlendirme yapılacak rota
  };

  if (!ad) {
    return <div>No course details available.</div>; // Eğer ad bilgisi yoksa hata mesajı göster
  }

  return (
    <div className="course-detail-container">
  <div className="course-detail-card">
    <h3>{ad.packageName}</h3> {/* Sol üstte bold */}
    <p className="course-price">{ad.price} TL</p> {/* Sağ üstte bold ve TL eklendi */}
    <p className="course-description">{ad.description}</p> {/* Ortanın soluna yapışık */}
    <button onClick={() => handleButtonClick(ad)} className="buy-button">
      Buy Course
    </button>
  </div>
</div>
  );
}

export default CourseDetail;
