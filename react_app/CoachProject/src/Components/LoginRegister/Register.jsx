import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import "./Register.css";

const Register = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [password, setPassword] = useState('');
  const [roles, setRoles] = useState('');
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    setError('');
    setSuccessMessage('');

    try {
      if (!firstName || !lastName || !emailAddress || !password) {
        setError('Tüm alanları doldurmanız gerekiyor.');
        return;
      }
      

      const response = await axios.post('https://localhost:7222/api/Auth/register', {
        firstName: firstName,
        lastName: lastName,
        emailAddress: emailAddress,
        passwordHash: password, 
        roles: roles,
        gender: "Male",
        phoneNumber: "1234567890", 
        skills: "Example Skill"
      });
      

      console.log(response)
      if (response.status === 200 || response.status === 201) {
        setSuccessMessage('Kayıt işlemi başarılı! Giriş sayfasına yönlendiriliyorsunuz.');
        setTimeout(() => navigate('/login'), 2000); // 2 saniye sonra Login sayfasına yönlendirme.
      }
    } catch (err) {
      console.error('Kayıt hatası:', err);
      setError('Kayıt başarısız. Lütfen bilgilerinizi kontrol edin.');
    }
  };

  return (
    <div className='BodyRegister'>
      <form className='RegisterForm' onSubmit={handleRegister}>
        <h2 className='SignUpButton'>Kayıt Ol</h2>
        <div style={{ marginBottom: '15px' }}>
          <label className='LabelRegister'>Ad:</label>
          <input className='RegisterInput'
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="Ad"
            required
            style={{ width: '100%', padding: '10px', margin: '5px 0' }}
          />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label className='LabelRegister'>Soyad:</label>
          <input className='RegisterInput'
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            placeholder="Soyad"
            required
            style={{ width: '100%', padding: '10px', margin: '5px 0' }}
          />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label className='LabelRegister'>Email Adresi:</label>
          <input className='RegisterInput'
            type="email"
            value={emailAddress}
            onChange={(e) => setEmailAddress(e.target.value)}
            placeholder="Email"
            required
            style={{ width: '100%', padding: '10px', margin: '5px 0' }}
          />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label className='LabelRegister'>Şifre:</label>
          <input className='RegisterInput'
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Şifre"
            required
            style={{ width: '100%', padding: '10px', margin: '5px 0' }}
          />
        </div>
        <div className='RadioButtonRegister' style={{ marginBottom: '15px' }}>
          <div style={{ margin: '10px 0' }}>
            <label className='LabelRegister'>
              <input className='RegisterInput'
                type="radio"
                value="User"
                checked={roles === 'User'}
                onChange={(e) => setRoles(e.target.value)}
              />
              Student
            </label>
            <label className='LabelRegister' style={{ marginLeft: '15px' }}>
              <input className='RegisterInput'
                type="radio"
                value="Admin"
                checked={roles === 'Admin'}
                onChange={(e) => setRoles(e.target.value)}
              />
              Coach
            </label>
          </div>
        </div>
        {error && <p className='ErrorPrompt'>{error}</p>}
        {successMessage && <p className='SuccessPrompt'>{successMessage}</p>}
        <button type="submit" className='RegisterButton'>Kayıt Ol</button>
        <a className='LoginRedirect' href="/login">Giriş Yap</a>
      </form>
    </div>
  );
};

export default Register;
