import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Entrar.css';

function Registro({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  async function handleSubmit(event) {
    event.preventDefault();
    setMessage('');

    try {
      const registerResponse = await fetch(`${process.env.REACT_APP_SITEURL}/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (!registerResponse.ok) {
        const data = await registerResponse.json();
        throw new Error(data.error || 'Error al registrar');
      }

      onLogin();
      navigate('/');

    } catch (error) {
      console.error('Error:', error);
      setMessage(error.message);
    }
  }

  return (
    <div className='registerContainer'>
      <form onSubmit={handleSubmit}>
        <input type="text" value={username} onChange={e => setUsername(e.target.value)} placeholder="Usuario" />
        <br />
        <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Contraseña" />
        <br />
        <button type="submit">Registrar</button>
        {message && <p>{message}</p>}
      </form>
    </div>
  );
}

export default Registro;