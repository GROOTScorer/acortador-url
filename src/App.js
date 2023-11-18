import Navegador from './Navegador.js';
import Main from './Main.js';
import Biblioteca from './Biblioteca.js';
import Registro from './Registro.js';
import Login from './Login.js';
import { Routes, Route } from "react-router-dom";
import { useEffect } from 'react';

function Titulo() {
  useEffect(() => {
    document.title = 'Short-Link';
  }, []);
}

function App() {
  return (
    <>
      <Navegador />
      <Titulo />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/Navegador" element={<Navegador />} />
        <Route path="/Biblioteca" element={<Biblioteca />} />
        <Route path='/Registro' element={<Registro />} />
        <Route path='/Login' element={<Login />} />
      </Routes>

    </>
  );
}

export default App;