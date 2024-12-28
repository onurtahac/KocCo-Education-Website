import React from 'react';
import { useLocation } from 'react-router-dom';
import './CourseDetail.css';
import { useNavigate } from 'react-router-dom';
import './Payment.css';

function Payment() {
  // useLocation ile yönlendirilmiş veriyi alıyoruz
  const location = useLocation();
  const ad = location.state; // 'state' içinde gönderilen ilan bilgisi

  const navigate = useNavigate(); // useNavigate kullanımı

  const handleButtonClick = (ad) => {
    navigate('/coursedetail',{ state: ad }); // Butona tıklayınca yönlendirme yapılacak rota
  };

  if (!ad) {
    return <div>No course details available.</div>; // Eğer ad bilgisi yoksa hata mesajı göster
  }

  return (
    <div className="course-detail-container">
      <div className="course-detail-card">
      <form class="payment-form">

        <label for="card-number">Card Number</label>
        <input type="text" id="card-number" name="card-number" placeholder="Card Number" />

        <label for="card-owner">Name Surname</label>
        <input type="text" id="card-owner" name="card-owner" placeholder="Name Surname" />

        <label for="cvv">CVV</label>
        <input type="text" id="cvv" name="cvv" placeholder="CVV" />

        <label for="expiration-date">Expiration Date</label>
        <input type="text" id="expiration-date" name="expiration-date" placeholder="Expiration Date" />

        <div class="kvkk-checkbox">
          <input type="checkbox" id="kvkk" name="kvkk" />
          <label for="kvkk">KVKK</label>
        </div>

      <button className="register-button" type="submit">Register</button>
    </form>
      </div>
    </div>
  );
}

export default Payment;