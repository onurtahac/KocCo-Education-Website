import React, { useEffect, useState } from "react";
import "./OldPrograms.css";

function OldPrograms() {
  const [weeks, setWeeks] = useState([]); 
  const [Name, setName] = useState([]); 
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null); 

  useEffect(() => {
    fetch("https://localhost:7222/api/User/get-work-schedules") //  API Düzelt
      .then((response) => {
        if (!response.ok) {
          throw new Error("Veri alınamadı.");
        }
        return response.json();
      })
      .then((data) => {
        setWeeks(data); 
        setLoading(false);
      })
      .then((data) => {
        setName(data); 
        setLoading(false);
      })

      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []); 

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  if (error) {
    return <div className="error">Error: {error}</div>;
  }

  return (
    <main className="OldPrograms">
      <h2>{Name}</h2> 
      {weeks.map((week) => (
        <div className="week-card" key={week.id}>
          <h2>{week.title}</h2>
          <p>{week.description}</p>
          <button>Detail</button>
        </div>
      ))}
    </main>
  );
}

export default OldPrograms;
