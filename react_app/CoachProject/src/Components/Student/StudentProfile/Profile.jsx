import React, { useState } from "react";
import "./Profile.css";

const Profile = () => {
  const [isInfoOpen, setIsInfoOpen] = useState(false);
  const [isCoursesOpen, setIsCoursesOpen] = useState(false);

  // Kullanıcı bilgileri (örnek olarak eklendi)
  const userInfo = {
    name: "John",
    surname: "Doe",
    age: 25,
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
          onClick={() => setIsInfoOpen(!isInfoOpen)}
        >
          <div className="accordion-header">
            <span>My Information</span>
            <span className="arrow">{isInfoOpen ? "▲" : "▼"}</span>
          </div>
          {isInfoOpen && (
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

        <div
          className="accordion-item"
          onClick={() => setIsCoursesOpen(!isCoursesOpen)}
        >
          <div className="accordion-header">
            <span>MY COURSES</span>
            <span className="arrow">{isCoursesOpen ? "▲" : "▼"}</span>
          </div>
          {isCoursesOpen && (
            <div className="accordion-content">
              <p>Here are the user's courses.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;