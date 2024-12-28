import React from 'react';
import './Contact.css'; 
import { useNavigate } from 'react-router-dom';

const Contact = () => {
  const navigate = useNavigate();

  return (
    <div className="contact-div">
      <div className="contact-content">
        <h1>Contact Us</h1>
        <p>We'd love to hear from you! Whether you have a question, feedback, or just want to say hello, feel free to reach out.</p>

        <div className="contact-info">
          <h3>Our Contact Information</h3>
          <ul>
            <li>
              <strong>Email:</strong> support@kocco.com
            </li>
            <li>
              <strong>Fax:</strong> +90 212 345 6789
            </li>
            <li>
              <strong>Phone:</strong> +90 212 987 6543
            </li>
            <li>
              <strong>Address:</strong> KocCo HQ, 123 Innovation Avenue, Istanbul, Turkey
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Contact;