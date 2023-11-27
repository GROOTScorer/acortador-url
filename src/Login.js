import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Entrar.css';

function Login({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  async function handleSubmit(event) {
    event.preventDefault();
    setMessage('');

    try {
      const response = await fetch(`http://localhost:8000/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || 'Error al iniciar sesión');
      }

      onLogin();
      navigate('/');
    } catch (error) {
      setMessage(error.message);
    }
  };

  return (
    <div className='loginContainer'>
      <form onSubmit={handleSubmit}>
        <input type="text" value={username} onChange={e => setUsername(e.target.value)} placeholder="Usuario" />
        <br />
        <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Contraseña" />
        <br />
        <button type="submit">Iniciar sesión</button>
        {message && <p>{message}</p>}
      </form>
    </div>
  );
}

export default Login;