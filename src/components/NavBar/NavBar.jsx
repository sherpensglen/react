import React from "react";
import "./navbar.css";

function NavBar() {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark sticky-top p-0 m-0" id="botonera">
      <div class="container-fluid d-flex align-items-center">
        <a class="navbar-brand logo  p-0 m-0" href="index.html">
                  <img class="rounded" src="img/logo2.svg" alt="Logo de celkap"></img>
          </a>
          <button class="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
           </button>
				    <div class="collapse navbar-collapse pb-0" id="navbarSupportedContent">
				      <ul class="navbar-nav ms-auto mb-2  mb-lg-0">
				        <li class="nav-item  ">
				           <a class="nav-link active p-3 " aria-current="page" href="celulares.html">Celulares</a>
				        </li>				
				        <li class="nav-item">
				           <a class="nav-link active p-3" aria-current="page" href="contacto.html">Contacto</a>
				        </li>
				        <li class="nav-item">
				           <a class="nav-link active p-3" aria-current="page" href="404.html">404</a>
				        </li>
				      </ul>
				    </div>
				  </div>
    </nav>
  );
}

export default NavBar;
