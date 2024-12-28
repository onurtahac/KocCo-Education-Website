import React, { useState, useEffect } from 'react';
import './StudentList.css';

function StudentList() {
  const [activeAccordion, setActiveAccordion] = useState(null); // Yalnızca bir akordiyon açık olacak
  const [students, setStudents] = useState([]); // Öğrenci verileri için state
  const [loading, setLoading] = useState(true); // Yüklenme durumu
  const [error, setError] = useState(null); // Hata durumu

  useEffect(() => {
    // API'den verileri çekmek için fetch kullanılıyor
    const fetchStudents = async () => {
      try {
        const response = await fetch(
          'https://localhost:7222/api/User/get-students-by-coach-email?email=kadir%40gmail.com'
        );

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();

        // API'den gelen verileri "students" state'ine atıyoruz
        const studentData = data.map((student, index) => ({
          uniqueKey: `student-${index}`, // Benzersiz key oluşturuluyor
          name: `${student.firstName} ${student.lastName}`,
          details: [
            { id: 1, title: 'Lessons', buttonText: 'View', buttonClass: 'btn-view' },
            { id: 2, title: 'Completed programs', buttonText: 'View', buttonClass: 'btn-view' },
            { id: 3, title: 'Shared Resources', buttonText: 'View', buttonClass: 'btn-view' },
            { id: 4, title: 'Test Grades', buttonText: 'View', buttonClass: 'btn-view' },
          ],
        }));

        setStudents(studentData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchStudents();
  }, []);

  const toggleAccordion = (uniqueKey) => {
    // Eğer tıklanan akordiyon zaten açıksa, kapat. Aksi takdirde sadece o akordiyonu aç.
    setActiveAccordion((prevActiveAccordion) => {
      return prevActiveAccordion === uniqueKey ? null : uniqueKey; // Yalnızca tıklanan akordiyonu aç, diğerlerini kapat
    });
  };

  if (loading) {
    return <div className='loading'>Loading...</div>;
  }

  if (error) {
    return <div className='error'>Error: {error}</div>;
  }

  return (
    <div className='studentList-container'>
      <h1>Student List</h1>
      {students.map((student) => (
        <div key={student.uniqueKey} className='accordion-card'>
          <div className='accordion-header'>
            <h2>{student.name}</h2>
            <button className='list-button' onClick={() => toggleAccordion(student.uniqueKey)}>
              {activeAccordion === student.uniqueKey ? 'Close' : 'Detail'}
            </button>
          </div>
          {activeAccordion === student.uniqueKey && (
            <div className='accordion-content'>
              <div className='card-grid'>
                {student.details.map((detail) => (
                  <div key={detail.id} className='detail-card'>
                    <h3>{detail.title}</h3>
                    <button className={detail.buttonClass}>{detail.buttonText}</button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default StudentList;
