import React, { useState } from "react";
import "./StudentProfile.css";

const StudentProfile = () => {
  const [isStudentInfoOpen, setStudentIsInfoOpen] = useState(false);
  const [isStudentCoursesOpen, setStudentIsCoursesOpen] = useState(false);

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
          onClick={() => setStudentIsInfoOpen(!isStudentInfoOpen)}
        >
          <div className="accordion-header">
            <span>My Information</span>
            <span className="arrow">{isStudentInfoOpen ? "▲" : "▼"}</span>
          </div>
          {isStudentInfoOpen && (
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
          onClick={() => setStudentIsCoursesOpen(!isStudentCoursesOpen)}
        >
          <div className="accordion-header">
            <span>MY COURSES</span>
            <span className="arrow">{isStudentCoursesOpen ? "▲" : "▼"}</span>
          </div>
          {isStudentCoursesOpen && (
            <div className="accordion-content">
              <p>Here are the user's courses.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default StudentProfile;