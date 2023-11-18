import './Biblioteca.css'
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

  return (
    <>
        <h2 className='bibheader'>URLs Acortadas</h2>
            <div className="table-container">
            {urls.map(url => (
              <section className='card'>
              <p className='shorturl' key={url.shortUrl}><a key={url.shortUrl} href={url.shortUrl}>{url.shortUrl}</a></p>
              <p className='originalurl' key={url.originalUrl}><a key={url.originalUrl} href={url.originalUrl}>{url.originalUrl}</a></p>
            </section>
        ))}
            </div>
    </>
    );
}

export default Biblioteca;