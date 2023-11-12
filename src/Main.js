import { useEffect } from 'react';
import './Main.css';

function Titulo() {
  useEffect(() => {
    document.title = 'Short-Link';
  }, []);
}

function Main() {
  return (
    <>
    <div className="Container">
      <Titulo />
    <label htmlFor="link">Link:</label>
    <input type="text" name="link" id="idlink" />

    <br/>
    
    <button name="Boton1" id="IdBoton1">Recargar</button> <button name="Boton2" id="IdBoton2">Recortar</button>
    <h3>Short-Link</h3>

    <label htmlFor="url">URL:</label>
    <input type="text" name="URL" id="idurl" />

    </div>

    </>
  );
}

export default Main;