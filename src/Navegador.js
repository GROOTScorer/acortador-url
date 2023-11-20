import { Link } from "react-router-dom";
import React from "react";
import './Navegador.css';

function Navegador({ isLoggedIn, onLogout }) {

  return (
    <div className="Nav">
      <nav>
        <Link to='/'>Short-Link</Link>
        <ul className="navul">
          <li className="crear"><Link to='/Biblioteca'>Biblioteca</Link></li>
          {!isLoggedIn && (
            <>
              <li><Link to='/Registro'>Registrarse</Link></li>
              <li><Link to='/Login'>Login</Link></li>
            </>
          )}
          {isLoggedIn && (
            <li onClick={onLogout}>Cerrar sesión</li>
          )}
          <a href="https://github.com/GROOTScorer/acortador-url"><img alt="" className='github' width="25px" height="25px" title="Repositorio" src="https://cdn-icons-png.flaticon.com/256/25/25231.png"></img></a>
        </ul>
      </nav>
    </div>
  );
}

export default Navegador;