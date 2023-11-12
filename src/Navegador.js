import { Link } from "react-router-dom";
import React from "react";
import './Navegador.css';

function Navegador() {

  return (
    <div className="Nav">
      <nav>
        <Link to='/'>Short-Link</Link>
        <ul className="navul">
          <li className="crear"><Link to='/'>Contacto</Link></li>

          <a href="https://github.com/GROOTScorer/acortador-url"><img alt="" className='github' width="25px" height="25px" title="Repositorio" src="https://cdn-icons-png.flaticon.com/256/25/25231.png"></img></a>
        </ul>
      </nav>
    </div>
  );
}

export default Navegador;