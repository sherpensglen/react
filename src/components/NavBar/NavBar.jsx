import React from "react";
import "./navbar.css";
import {Link} from "react-router-dom"

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark sticky-top p-0 m-0" id="botonera">
      <div className="container-fluid d-flex align-items-center">
        <Link className="navbar-brand logo  p-0 m-0" to="/">
                  <img className="rounded" src="../img/logo2.svg" alt="Logo de celkap"></img>
          </Link>
          <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
           </button>
				    <div className="collapse navbar-collapse pb-0" id="navbarSupportedContent">
				      <ul className="navbar-nav ms-auto mb-2  mb-lg-0">
				        <li className="nav-item dropdown">
				           <Link className="nav-link dropdown-toggle p-3" role="button" data-bs-toggle="dropdown" aria-expanded="false">Celulares</Link>          
                      <ul className="dropdown-menu">
                        <li><Link className="dropdown-item" to="/Celulares">Todas las marcas</Link></li>
                        <li><Link className="dropdown-item" to="/Celulares/Google">Google</Link></li>
                        <li><Link className="dropdown-item" to="/Celulares/Xiaomi">Xiaomi</Link></li>
                        <li><Link className="dropdown-item" to="/Celulares/Huawei">Huawei</Link></li>
                        <li><Link className="dropdown-item" to="/Celulares/Apple">Apple</Link></li>
                        <li><Link className="dropdown-item" to="/Celulares/Samsung">Samsung</Link></li>
                      </ul>
				        </li>				
				        <li className="nav-item">
				           <Link className="nav-link active p-3" aria-current="page" to="/Contacto">Contacto</Link>
				        </li>
				      </ul>
				    </div>
				  </div>
    </nav>
  );
}

export default NavBar;
