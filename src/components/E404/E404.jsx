import React from "react";
import {Link} from "react-router-dom"
import "./E404.css"


 function E404(){
    return(
    <div className="e404 pt-0 m-0 pt-sm-5 mt-sm-5 pt-lg-2 mt-lg-2 ">
        <div class="container-fluid py-5 px-0 m-0 d-flex flex-column align-items-center justify-content-center pt-sm-5 mt-sm-5 ">
           <div class="d-flex align-items-center justify-content-center container-fluid pt-lg-2 mt-lg-2 pt-sm-5 mt-sm-5">
              <div class="textoError px-5 fw-5">Error</div>
              <div class="textoNumero">4</div>
              <i class="letraRotatoria">0</i>
              <div class="textoNumero">4</div>
           </div>
         <div class="msgError pt-3 mt-3 px-0">
            UPS parece que se nos perdio la pagina,
          <p>pero estamos trabajando en ello </p>
        <img src="img/luffy.gif" alt="gif luffy" class="imgGif"/>
        <p class="fs-3 "> Regresa a la pagina principal de Celkap desde
          <Link to="/" class="text-decoration-underline">  aquí</Link>
        </p>
            <p class="fs-3 ">o contactanos desde
            <Link to="/Contacto" class="text-decoration-underline"> aquí</Link>
            </p>
        <img src="img/giphy.gif" alt="gif bemo" class="imgGif2"/>
      </div>
      </div>
    </div>
    );
}

export default E404;