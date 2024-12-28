import React from 'react';
import './About.css'; // CSS stilini kullanmak için
import { useNavigate } from 'react-router-dom';

const Content = () => {
  const navigate = useNavigate();

  return (
    <div className="about-div">
      <div className="about-content">
        <h1></h1>
        <p>
          At <strong>KocCo</strong>, we believe that education is a transformative journey that requires personalized attention and expert guidance. Our mission is to connect ambitious students preparing for challenging exams such as <strong>TUS</strong>, <strong>DUS</strong>, <strong>ALES</strong>, <strong>KPSS</strong>, and <strong>YKS</strong> with highly skilled mentors who are passionate about helping them succeed.
        </p>
        <p>
          For <strong>students</strong>, whether you're looking for tailored lessons, strategic advice, or expert consulting, <strong>KocCo</strong> ensures that you are paired with the best possible mentor to meet your individual needs. We offer an intuitive platform that allows students to choose from a wide range of mentors, each bringing unique expertise and years of experience to the table. This ensures a high-quality learning experience, giving you the confidence to face any exam with preparation and skill.
        </p>
        <p>
          But <strong>KocCo</strong> isn’t just about the students—it’s also about our incredible mentors. As a <strong>mentor</strong> on <strong>KocCo</strong>, you have the opportunity to make a real impact in a student's life. Our platform gives you access to a diverse range of motivated students who are eager to learn and succeed. You can set your own schedule, choose the subjects that align with your expertise, and create a unique learning experience for each student.
        </p>
        <p>
          At <strong>KocCo</strong>, we understand that teaching is not just about passing knowledge—it's about inspiring students to reach their full potential. That's why we provide mentors with all the tools they need to succeed, including an easy-to-use platform, flexible teaching options, and a supportive environment. With <strong>KocCo</strong>, mentors can grow their own teaching practice, reach a wider audience, and be part of a community that values education and mentorship.
        </p>
        <p>
          For <strong>students</strong>, our platform offers more than just a way to prepare for exams; it’s a space where you can grow, learn, and thrive. Whether you're preparing for a specific exam or seeking general academic guidance, <strong>KocCo</strong> empowers you to take control of your learning journey. The right mentor can make all the difference, and with <strong>KocCo</strong>, you’ll find the support you need to succeed.
        </p>
        <p>
          For <strong>teachers</strong>, <strong>KocCo</strong> provides an unparalleled opportunity to share your knowledge and make a tangible difference in students’ lives. With the flexibility to choose your teaching hours, courses, and students, you have the freedom to create a rewarding teaching experience. Our platform offers easy access to a wide student base, making it easier than ever to expand your impact.
        </p>
        <p>
          In short, <strong>KocCo</strong> is a dynamic platform designed for both students and mentors, bringing together the best of education, innovation, and mentorship. Join us today—whether as a student eager to achieve your academic goals or as a teacher who is passionate about guiding the next generation of achievers. Together, we can shape the future of education and create success stories that last a lifetime.
        </p>
      </div>
    </div>
  );
};

export default Content;
