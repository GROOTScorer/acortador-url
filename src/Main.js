import React, { useState } from 'react';
import './Main.css';

function Main() {
  const [url, setUrl] = useState('');
  const [shortUrl, setShortUrl] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('http://localhost:8000/createshorturl', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ url }),
      });

      if (!response.ok) {
        throw new Error('La solicitud falló');
      }

      const data = await response.json();
      setShortUrl(data.shortUrl);
    } catch (error) {
      console.error('Error al acortar la URL:', error);
    }
  };


  return (
    <>
    <div className='Home'>
      <div className="Container">
      <form onSubmit={handleSubmit}>
        <label htmlFor="link">Link:</label>
        <input
          type="text"
          placeholder="Ingresa la URL aquí"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
        <br/>
        <button type="submit">Recortar</button>
      </form>

      {shortUrl && (
        <p>
          URL Acortada: <a href={shortUrl} target="_blank" rel="noopener noreferrer">{shortUrl}</a>
        </p>
      )}
      </div>
      <footer>Creado por: Gael De Luca - Joaquín Pocovi - Mateo Villegas - Matías Zaracho</footer>
    </div>

    </>
  );
}

export default Main;