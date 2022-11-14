import React from "react";
import "./head.css"
import {Link} from "react-router-dom"

function Head(){
    return(
    <>
    <div className="d-block text-center encabezadoCajagris">
                <p>Si tienes algun problema comunicate al 771556434</p>
            </div> 
            <div className="container-fluid p-3">
                <div className="row d-flex align-itemss-center justify-content-center">
                    <div className="col-lg-8">
                        <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Buscar" aria-label="Buscar"></input>
                            <button className="btn btn-outline-dark">Buscar</button>
                        </form>
                    </div>
                    <div className="col-lg-4 pt-2 regCarro">
                    <Link to="/registro">Acceder o registrarse</Link>
                    <img src="../img/registro.png" alt="Acceder o registrarse"></img>
                    <Link to="/carrito">Mi carrito</Link>
                    <img src="../img/carrito.png" alt="Mi carrito"></img>
                </div>
            </div>
        </div>
     </>
    )
}

export default Head;