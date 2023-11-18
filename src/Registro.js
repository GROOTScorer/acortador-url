import React, { useState } from 'react';
import './Entrar.css';

function Registro() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className='registerContainer'>
      <form onSubmit={handleSubmit}>
        <input type="text" value={username} onChange={e => setUsername(e.target.value)} placeholder="Usuario" />
        <br />
        <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Contraseña" />
        <br />
        <button type="submit">Registrar</button>
      </form>
    </div>
  );
}

export default Registro;