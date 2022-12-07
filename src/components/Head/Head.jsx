import React from "react";
import "./head.css"
import {Link} from "react-router-dom"
import { useContext } from "react";
import {cartContext} from "../../context/cartContext"

function Head(){
    const context = useContext(cartContext);
    const url = `/cart/`;
    return(
    <>
    <div className="d-block text-center encabezadoCajagris">
                <p>Si tienes algun problema comunicate al 771556434</p>
            </div> 
            <div className="container-fluid py-1">
                <div className="row d-flex align-itemss-center justify-content-center">
                    <div className="col-lg-8 d-flex align-items-start ">
                    <Link  className="text-decoration-none text-dark ps-3 pe-1 py-3" to="/search">Buscar</Link>
                    <img src="../img/search-outline.svg" style={{height:"55px"}} className="py-2 ps-0" alt="Buscar" />
                    </div>
                    <div className="col-lg-4 py-2 regCarro">
                    <Link to="/registro">Acceder o registrarse</Link>
                    <img src="../img/registro.png" alt="Acceder o registrarse"/>
                    <Link type="button" className="position-relative pb-1"  to={url}>Mi carrito
                        <span id="pillCounter" className="position-absolute top-10 start-100 translate-middle badge rounded-pill bg-danger">{context.itemsInCart()}</span>
                        <img src="../img/carrito.png" alt="Mi carrito" className="py-0"/>
                    </Link>
                </div>
            </div>
        </div>
     </>
    )
}

export default Head;