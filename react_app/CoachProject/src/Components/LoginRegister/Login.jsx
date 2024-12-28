
  import React, { useState } from 'react';
  import axios from 'axios';
  import { useNavigate } from 'react-router-dom';
  import "./Login.css"




  const Login = () => {
    const [emailAdress, setEmailAdress] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const navigate = useNavigate();

    const handleLogin = async (e) => {
      e.preventDefault(); 
      try {
        const response = await axios.post('https://localhost:7222/api/Auth/login', {
          emailAdress,
          password,
        });

        console.log(response)
        // API'den başarılı bir yanıt aldıysanız
        if (response.data.success) {
          console.log('Giriş başarılı:', response.data.token);
          // Örneğin bir token dönerse bunu localStorage'a kaydedebilirsiniz
          sessionStorage.setItem('token', response.data.token);
          // Kullanıcıyı başka bir sayfaya yönlendirin
          navigate('/userindex');
        }
      } catch (err) {
        console.error('Giriş hatası:', err);
        setError('Giriş başarısız. Lütfen bilgilerinizi kontrol edin.');
      }
    };

    return (
      <div className='BodyLogin'>
        
        <form onSubmit={handleLogin}>
          <div style={{ marginBottom: '15px' }}>
            <label>Email Adresi:</label>
            <input
              type="email"
              value={emailAdress}
              onChange={(e) => setEmailAdress(e.target.value)}
              placeholder="Email"
              required
              style={{ width: '100%', padding: '10px', margin: '5px 0' }}
            />
          </div>
          <div style={{ marginBottom: '15px' }}>
            <label>Şifre:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Şifre"
              required
              className='LoginInput'
            />
          </div>
          {error && <p className='ErrorPrompt'>{error}</p>}
          <button 
            type="submit"
            className='LoginButton'
          >
            Giriş Yap
          </button>
          <a className='RegisterButton' href="Register"> Kayıt Ol</a>
        </form>
      </div>
    );
  };

  export default Login;

  