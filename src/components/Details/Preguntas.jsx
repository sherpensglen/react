import React from "react";
import { Link } from "react-router-dom";
import "./Details.css";

export default function Preguntas(){

    return(
      <div className="d-flex align-items-center justify-content-center py-4 my-4 px-1 mx-1 textoDetalles ">
   	    <div className="contaier-fluid col-md-6 col-sm-12">
   	 	   <div className="d-flex align-items-center justify-content-space-around flex-column ">
	   	    <h1 id="textoImportante" className="fs-2 text-center">Preguntas frecuentes</h1>
			<h5 className=" fw-bold py-3" id="textoImportante">
			   ¿Es seguro comprar en Celkap?
			</h5>
   	 		  <p>
   	 		  	En Tecnowow creamos un espacio seguro para tus compras, por eso te ofrecemos diferentes formas de pago:
   	 		  </p>
   	 		  <ul>
   	 		  	<li>TRANSFERENCIA O DEPÓSITO EN EFECTIVO: Puedes realizar tu pago por medio de un depósito en efectivo o una transferencia electrónica desde cualquier banco a nuestra cuenta en  BBVA.</li>
   	 		  	<li>TARJETA DE CRÉDITO O DÉBITO: Aceptamos Tarjetas de Crédito o Débito VISA y MASTERCARD para realizar tus compras, quien procesa estos pagos es MERCADO PAGO, si tu tienes una cuenta en MERCADO LIBRE, podrás iniciar sesión y pagar en nuestra web, sin capturar ningún numero completo de tarjeta de crédito.  </li>
   	 		  </ul>
   	 		 <h5 className=" fw-bold" id="textoImportante">
			   ¿Cómo puedo registrarme en Celkap?
			</h5>
   	 		  <ul>
   	 		  	   <li>Ingresa un correo válido pues a través de este te llegarán notificaciones e información sobre tu pedido.</li>
   	 		  	   <li>Puedes elegir si recibir tu pedido a tu domicilio o recoger en una sucursal LOL. Para ambos casos necesitas tu código postal.</li>
   	 		  	   <li>Selecciona la paquetería de tu preferencia.</li>
   	 		  </ul>
   	 		  <Link to="/Comprar" className="text-decoration-none py-3"><h5 className=" fw-bold" id="textoImportante">
			   ¿Cómo puedo comprar en Celkap?
			  </h5></Link>
   	 		  <h5 className=" fw-bold" id="textoImportante">¿Todos los productos tienen garantía?</h5>
   	 		  <p>¡Sí! En Celkap todos nuestros productos son completamente nuevos y cuentan con póliza de garantía directamente con el fabricante. Podrás hacer uso de dicha garantía a partir de la fecha que aparece en tu comprobante de compra. La garantía de los productos varía de acuerdo con las políticas de cada fabricante.</p>
   	 	</div>
   	 </div>
  </div>

    )
}