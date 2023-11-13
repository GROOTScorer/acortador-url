import Navegador from './Navegador.js';
import Main from './Main.js';
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
      </Routes>

    </>
  );
}

export default App;