import React, { useState, useEffect } from "react";
import "./TestGrades.css";

function TestGrades() {
  const [studentName, setStudentName] = useState(""); 
  const [testResults, setTestResults] = useState([]); 

  useEffect(() => {
    fetch("http://localhost:3001/api/test-results") // Örnek bir API endpoint
      .then((response) => response.json())
      .then((data) => {
        setStudentName(data.name); // Öğrencinin adını al
        setTestResults(data.results); // Test sonuçlarını al
      })
      
  }, []);

  return (
    <main className="test-results">
      <h1>{studentName}</h1> 
      <div className="results-container">
        {testResults.map((result) => (
          <div className="result-card" key={result.id}>
            <div className="test-info">
              <h3>{result.testName}</h3>
              <p>{result.topic}</p>
            </div>
            <div className="test-score">
              <h3>{result.score}</h3>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}

export default TestGrades;
