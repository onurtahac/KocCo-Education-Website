import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Shared/Navbar/Navbar';
import Footer from './Components/Shared/Footer/Footer';
import Content from './Components/Content/Content';
import About from './Components/Content/About';
import Contact from './Components/Content/Contact';
import UserIndex from './Components/Student/UserIndex/UserIndex';
import CourseDetail from './Components/Student/CourseDetail/CourseDetail';
import Payment from './Components/Student/CourseDetail/Payment';
import StudentProfile from './Components/Student/StudentProfile/StudentProfile';
import CoachProfile from './Components/Coach/CoachProfile/CoachProfile';
import Program from './Components/Coach/CoachProgram/Program';
import Login from './Components/LoginRegister/Login';
import Register from './Components/LoginRegister/Register';

const App = () => {
  return (  
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Content />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/userindex" element={<UserIndex />} />
        <Route path="/coursedetail" element={<CourseDetail />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/studentprofile" element={<StudentProfile />} />
        <Route path="/coachprofile" element={<CoachProfile />} />
        <Route path="/coachprogram" element={<Program />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
