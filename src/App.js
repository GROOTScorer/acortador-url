import Navegador from './Navegador.js';
import Main from './Main.js';
import Biblioteca from './Biblioteca.js';
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
      </Routes>

    </>
  );
}

export default App;