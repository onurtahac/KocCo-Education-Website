import React, { useState, useEffect } from "react";
import "./SharedDocuments.css";

function SharedDocuments() {
  const [documents, setDocuments] = useState([]);

  // Veritabanından verileri çek
  useEffect(() => {
    fetch("http://localhost:3001/api/documents")
      .then((response) => response.json())
      .then((data) => {
        setDocuments(data); // Verileri state'e aktar
      })
      .catch((error) => {
        console.error("Error fetching documents:", error);
      });
  }, []);

  const handleShareFile = () => {
    alert("File sharing feature coming soon!");
  };

  return (
    <div className="shared-documents">
      <header>
        <h1>Umut Hasan Şahin</h1>
      </header>
      <main>
        <h2>Shared Programs</h2>
        <ul>
          {documents.map((doc) => (
            <li key={doc.id}>
              <a href={`#/${doc.name}`} download>
                {doc.name}
              </a>
            </li>
          ))}
        </ul>
        <button onClick={handleShareFile} className="share-button">
          Share file
        </button>
      </main>
      <footer>
        <div className="footer-content">
          <p>Use cases</p>
          <p>Explore</p>
          <p>Resources</p>
        </div>
      </footer>
    </div>
  );
}

export default SharedDocuments;
