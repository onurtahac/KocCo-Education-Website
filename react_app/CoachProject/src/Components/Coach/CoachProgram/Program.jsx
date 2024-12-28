import React, { useState } from "react";
import "./Program.css";

const Program = () => {
  // Kullanıcı girişi için state
  const [description, setDescription] = useState("");
  const [error, setError] = useState("");

  // Açıklama metnini güncelle
  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  // Onaylama işlemi
  const handleApprove = () => {
    // Giriş doğrulaması (örneğin, boş olamaz ve 150 karakteri geçmemeli)
    if (description.trim() === "") {
      setError("Açıklama kısmı boş olamaz.");
    } else if (description.length > 150) {
      setError("Açıklama 150 karakteri geçemez.");
    } else {
      setError("");
      alert("Açıklama onaylandı!");
    }
  };

  return (
    <div className="container">
      <aside className="sidebar">
        <div className="menu-item">Student List</div>
        <div className="menu-item">Message</div>
        <div className="menu-item">Resources</div>
      </aside>
      <main className="main-content">
        <h1>Umut Hasan Şahin</h1>
        <div className="topics">
          <div className="topic-item">
            <h3>Fonksiyonlar</h3>
            <p>description...</p>
          </div>
          <div className="topic-item">
            <h3>Polinom</h3>
            <p>description...</p>
          </div>
          <div className="topic-item">
            <h3>Türev</h3>
            <p>description...</p>
          </div>
          <div className="topic-item">
            <h3>İntegral</h3>
            <p>description...</p>
          </div>
          <div className="topic-item">
            <h3>Limit</h3>
            <p>description...</p>
          </div>
        </div>
        <div className="description-section">
          <textarea
            value={description}
            onChange={handleDescriptionChange}
            placeholder="Açıklama yazınız..."
            className="description-input"
          ></textarea>
          {error && <p className="error-message">{error}</p>} {/* Hata mesajı */}
          <button onClick={handleApprove} className="approve-button">
            Onayla
          </button>
        </div>
        <button className="finalize-button">Dersi Onayla</button>
      </main>
    </div>
  );
};

export default Program;