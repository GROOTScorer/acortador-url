import React, { useState, useEffect } from 'react';
import Navegador from './Navegador.js';
import Main from './Main.js';
import Biblioteca from './Biblioteca.js';
import Registro from './Registro.js';
import Login from './Login.js';
import { Routes, Route, Navigate } from "react-router-dom";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    document.title = 'Short-Link';
  }, []);

  function handleLogin()
  {
    setIsLoggedIn(true);
  };

  function handleLogout()
  {
    setIsLoggedIn(false);
  };

  return (
    <>
      <Navegador isLoggedIn={isLoggedIn} onLogout={handleLogout} />
      <Routes>
      <Route path="/" element={<Main isLoggedIn={isLoggedIn} />} />
        {isLoggedIn ? (
          <>
            <Route path="/Biblioteca" element={<Biblioteca />} />
          </>
        ) : (
          <>
            <Route path="/Biblioteca" element={<Navigate to="/Login" />} />
          </>
        )}
        <Route path="/Registro" element={<Registro />} />
        <Route path="/Login" element={<Login onLogin={handleLogin} />} />
      </Routes>
    </>
  );
}

export default App;