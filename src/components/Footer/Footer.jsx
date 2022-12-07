import React from "react";
import "./Footer.css";
import {Link} from "react-router-dom";

function Footer(){
    return(
      <footer >
        <div className="container-fluid pb-2">
            <div className="row d-flex align-items-center justify-content-space-evenly ">
                   <div className="col-md-5 d-flex flex-wrap align-items-center justify-content-center py-1 px-4"> 
                    <Link to="/" className="logo"> <img src="../img/logo.svg" alt="logo de Celkap"/></Link>
                     <p className="text-center pt-2">Más productos,secciones exclusivas,las mejores marcas, estratégicamente ubicados en el centro del país, desplazamos con gran velocidad los productos hasta la comodidad de tu hogar.</p>
                        <ul>
                            <li>Teléfono atención: 771 475 07 00 </li>
                            <li>Horario: de Lunes a Viernes de 9:00 a  6pm Sábados de 10:00 a 2:00 pm</li>
                            <li>Email: info@CelKap.mx</li>
                            <li>Dirección: trueno Col. San Cayetano, Pachuca, Hgo. México</li>
                        </ul>      			
                  </div>
                <div className="redesExtras col-md-7">
                       <div className="d-flex flex-wrap align-items-center justify-content-space-around px-1 py-4 redes ">
                            <h5 className="col-lg-6 text-center" >Siguenos en nuestras redes</h5>
                            <div className="col-lg-6 d-flex">
                            <a href="https://facebook.com" target="_blank"><img src="../img/facebook.png" alt="Seguinos en facebook"/></a>
                             <a href="https://twitter.com" target="_blank"><img src="../img/twitter.png" alt="Seguinos en twitter"/></a>
                             <a href="https://instagram.com" target="_blank"><img src="../img/instagram.png" alt="Seguinos en instagram"/></a>
                            </div>
                    </div>
                    <div className="d-flex align-items-center justify-content-space-evenly px-1 py-1">
                        <div className="list-group px-2 list-group-flush">
                            <h5>Quienes somos</h5>
                            <Link to="/Somos" className="list-group-item list-group-item-action ">Quienes somos</Link>
                            <Link to="/Aviso" className="list-group-item list-group-item-action">Aviso de privacidad</Link>
                            <Link to="/Terminos" className="list-group-item list-group-item-action">Terminos y Condiciones</Link>
                        </div>
                        <div className="list-group  px-2 list-group-flush">
                            <h5>Centro de ayuda</h5>
                            <Link to="/Comprar" className="list-group-item list-group-item-action">Como comprar</Link>
                            <Link to="/Garantia" className="list-group-item list-group-item-action">Garantias y devoluciones</Link>
                            <Link to="/Preguntas" className="list-group-item list-group-item-action">Preguntas frecuentes</Link>
                        </div>
                    </div>  	               	
                </div>
            </div>
        </div>
      </footer>

    )
}

export default Footer;