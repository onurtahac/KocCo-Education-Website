import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Yönlendirme için useNavigate kullanıldı
import "./CoachProfile.css";

const CoachProfile = () => {
  const [isCoachInfoOpen, setIsCoachInfoOpen] = useState(false);
  const [isCoachCoursesOpen, setIsCoachCoursesOpen] = useState(false);
  const [isCoachIncomeOpen, setIsCoachIncomeOpen] = useState(false);

  const navigate = useNavigate(); // Yönlendirme için navigate kullanıldı

  const userInfo = {
    name: "John",
    surname: "Doe",
    age: 25,
  };

  // MY COURSES tıklandığında yönlendirecek fonksiyon
  const handleCourseClick = () => {
    navigate("/coachprogram"); // Kullanıcıyı '/coachprogram' sayfasına yönlendiriyoruz
  };

  return (
    <div className="profile-container">
      <div className="profile-header">
        <img
          src="https://via.placeholder.com/50" // Profil resmi
          alt="Profile"
          className="profile-picture"
        />
        <h2 className="profile-title">My Profile</h2>
      </div>

      <div className="accordion">
        <div
          className="accordion-item"
          onClick={() => setIsCoachInfoOpen(!isCoachInfoOpen)}
        >
          <div className="accordion-header">
            <span>My Information</span>
            <span className="arrow">{isCoachInfoOpen ? "▲" : "▼"}</span>
          </div>
          {isCoachInfoOpen && (
            <div className="accordion-content">
              <p>
                <strong>Name:</strong> {userInfo.name}
              </p>
              <p>
                <strong>Surname:</strong> {userInfo.surname}
              </p>
              <p>
                <strong>Age:</strong> {userInfo.age}
              </p>
            </div>
          )}
        </div>

        {/* MY COURSES - Sağ ok ve yönlendirme */}
        <div
          className="accordion-item"
          onClick={handleCourseClick} // Yönlendirme tıklama ile yapılacak
        >
          <div className="accordion-header">
            <span>MY COURSES</span>
            <span className="arrow">►</span> {/* Sağ ok */}
          </div>
        </div>

        <div
          className="accordion-item"
          onClick={() => setIsCoachIncomeOpen(!isCoachIncomeOpen)}
        >
          <div className="accordion-header">
            <span>MY INCOME</span>
            <span className="arrow">{isCoachIncomeOpen ? "▲" : "▼"}</span>
          </div>
          {isCoachIncomeOpen && (
            <div className="accordion-content">
              <p>Income</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CoachProfile;
