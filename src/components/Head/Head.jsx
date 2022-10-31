import React from "react";
import "./head.css"

function Head(){
    return(
    <>
    <div class="d-block text-center encabezadoCajagris">
                <p>Si tienes algun problema comunicate al 771556434</p>
            </div> 
            <div class="container-fluid p-3">
                <div class="row d-flex align-items-center justify-content-center">
                    <div class="col-lg-8">
                        <form class="d-flex">
                            <input class="form-control me-2" type="search" placeholder="Buscar" aria-label="Buscar"></input>
                            <button class="btn btn-outline-dark">Buscar</button>
                        </form>
                    </div>
                    <div class="col-lg-4 pt-2 regCarro">
                    <a href="#">Acceder o registrarse</a>
                    <img src="img/registro.png" alt="Acceder o registrarse"></img>
                    <a href="#">Mi carrito</a>
                    <img src="img/carrito.png" alt="Mi carrito"></img>
                </div>
            </div>
        </div>
     </>
    )
}

export default Head;