import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Main.css';

function Main(props) {
  const [shortUrl, setShortUrl] = useState('');
  const [descripcionRecibida, setDescripcionRecibida] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const esUrlValida = (url) => /^https?:\/\//.test(url);

  async function handleSubmit(event)
  {
    event.preventDefault();
    const formData = new FormData(event.target);
    const url = formData.get('url');
    const descripcion = formData.get('descripcion');

    if (!esUrlValida(url)) {
      setErrorMessage('Por favor, ingresa una URL que comience con http:// o https://');
      return;
    }

    try {
      const response = await fetch('http://localhost:8000/createshorturl', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ url, descripcion })
      });

      if (!response.ok) {
        throw new Error('La solicitud falló');
      }

      const data = await response.json();
      setShortUrl(data.shortUrl);
      setDescripcionRecibida(data.descripcion);
      setErrorMessage('');
      event.target.reset();
    } catch (error) {
      console.error('Error al acortar la URL:', error);
      setErrorMessage(error.message);
    }
  };

  function Copiar()
  {
    navigator.clipboard.writeText(shortUrl)
      .then(() => alert("URL copiada al portapapeles: " + shortUrl))
      .catch(err => console.error('Error al copiar al portapapeles:', err));
  };

  return (
    <>
      <div className='Home'>
        <div className="Container">
          <form onSubmit={handleSubmit}>
            <label htmlFor="link">Link:</label>
            <input
              name="url"
              type="text"
              placeholder="Ingresa la URL"
            />
            <br/>
            {errorMessage && <p className="error">{errorMessage}</p>}
            <label htmlFor="descripcion">Descripción:</label>
            <input
              name="descripcion"
              type="text"
              placeholder="Ingresa la descripción"
            />
            <br/>
            {props.isLoggedIn ? <button type="submit">Recortar</button>
            : (
              <>
                <Link to='/Login'><button>Recortar</button></Link>
                <p className='noLog'>No estás logeado. Inicia sesión para recortar.</p>
              </>
            )}
          </form>

          {shortUrl && (
            <>
              <p>URL Acortada: <a href={shortUrl} target="_blank" rel="noopener noreferrer">{shortUrl}</a></p>
              <button onClick={Copiar}>Copiar URL</button>
              <p>Descripción: {descripcionRecibida}</p>
            </>
          )}
        </div>
        <footer>Creado por: Gael De Luca - Joaquín Pocovi - Mateo Villegas - Matías Zaracho</footer>
      </div>
    </>
  );
}

export default Main;