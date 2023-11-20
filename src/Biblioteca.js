import './Biblioteca.css';
import React, { useState, useEffect } from 'react';

function Biblioteca()
{
  const [urls, setUrls] = useState([]);

  useEffect(() => {
    async function fetchLatestUrls() {
      try {
        const response = await fetch('http://localhost:8000/latest-urls');
        if (!response.ok) {
          throw new Error('La solicitud para obtener las últimas URLs falló');
        }
        const data = await response.json();
        setUrls(data);
      } catch (error) {
        console.error('Error:', error);
      }
    }

    fetchLatestUrls();
  }, []);

  async function Copiar(url)
  {
    try {
      await navigator.clipboard.writeText(url);
      alert("URL copiada al portapapeles: " + url);
    } catch (error) {
      console.error('Error al copiar URL:', error);
    }
  };

  return (
    <>
      <h2 className='bibheader'>URLs Acortadas</h2>
      <div className="table-container">
        {urls.map((url, index) => (
          <section className='card' key={index}>
            <p className='shorturl'><a href={url.shortUrl}>{url.shortUrl}</a></p>
            <button onClick={() => Copiar(url.shortUrl)}>Copiar URL</button>
            <p className='originalurl'><a href={url.originalUrl}>{url.originalUrl}</a></p>
            <p className='descripcion'>{url.descripcion}</p>
          </section>
        ))}
      </div>
    </>
  );
}

export default Biblioteca;