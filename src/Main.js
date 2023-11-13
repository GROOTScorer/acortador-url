import './Main.css';

function Main() {
  return (
    <>
    <div className='Home'>
      <div className="Container">
      <label htmlFor="link">Link:</label>
      <input type="text" name="link" id="idlink" />

      <br/>
      
      <button name="Boton1" id="IdBoton1">Recargar</button> <button name="Boton2" id="IdBoton2">Recortar</button>
      <h3>Short-Link</h3>

      <label htmlFor="url">URL:</label>
      <input type="text" name="URL" id="idurl" />

      </div>
      <footer>Creado por: Gael De Luca - Joaquín Pocovi - Mateo Villegas - Matías Zaracho</footer>
    </div>

    </>
  );
}

export default Main;