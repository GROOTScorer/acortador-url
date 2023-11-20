import React, { useState } from 'react';
import './Entrar.css';

function Registro() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  async function handleSubmit(event)
  {
    event.preventDefault();
    setMessage('');

    try {
      const response = await fetch('http://localhost:8000/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || 'Error al registrar');
      }

      setMessage('Usuario registrado con éxito');
      setUsername('');
      setPassword('');
    } catch (error) {
      console.error('Error en el registro:', error);
      setMessage(error.message);
    }
  };

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