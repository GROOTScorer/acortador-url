import './App.css';
import Navegador from './Navegador';

function App() {
  return (
    <>
    <div className="Container">
    <Navegador />
    <label for="link">Link:</label>
    <input type="text" name="link" id="idlink" />

    <br/>
    
    <button name="Boton1" id="IdBoton1">Recargar</button> <button name="Boton2" id="IdBoton2">Recortar</button>
    <h3>Short-Link</h3>

    <label for="url">URL:</label>
    <input type="text" name="URL" id="idurl" />

    </div>

    </>
  );
}

export default App;
