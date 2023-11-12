import Navegador from './Navegador.js';
import Main from './Main.js';
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
          <Navegador />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/Navegador" element={<Navegador />} />
      </Routes>

    </>
  );
}

export default App;