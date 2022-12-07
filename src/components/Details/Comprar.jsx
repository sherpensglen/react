import React from "react";
import "./Details.css";
import {Link} from "react-router-dom"

export default function Comprar(){

    return(
      <div className="d-flex align-items-center justify-content-center py-4 my-4 px-1 mx-1 textoDetalles ">
        <div className="contaier-fluid col-md-6 col-sm-12">
   	 	 <div className="d-flex align-items-center justify-content-space-around flex-column ">
	   	 	<Link className="logo px-0 py-3" to="/">
			  <img src="../img/logo.svg" alt="logo de celkap"/>
			</Link>
			<h1 id="textoImportante" className="fs-2 text-center">Como comprar</h1>
			<p>
				A continuación te mostramos los pasos para que puedas comprar en la tienda. Recuerda que no contamos con tiendas físicas, ni entregas en oficina. Sólo tienda en línea.
			</p>
			<h5 className=" fw-bold" id="textoImportante">
			   1.- Agrega tu producto al carrito de compras
			</h5>
   	 		  <ul>
   	 		  	   <li>Selecciona el color, capacidad y piezas a comprar y da click en “AGREGAR AL CARRITO”.</li>
   	 		  	   <li>Confirmar el producto a comprar dando click en “IR A PAGAR”.</li>
   	 		  </ul>
   	 		  <h5 className=" fw-bold" id="textoImportante">
			   2.- Registra tu email, tu nombre y datos de envío
			 </h5>
   	 		  <ul>
   	 		  	   <li>Ingresa un correo válido pues a través de este te llegarán notificaciones e información sobre tu pedido.</li>
   	 		  	   <li>Puedes elegir si recibir tu pedido a tu domicilio o recoger en una sucursal LOL. Para ambos casos necesitas tu código postal.</li>
   	 		  	   <li>Selecciona la paquetería de tu preferencia.</li>
   	 		  </ul>
   	 		  <h5 className=" fw-bold" id="textoImportante">
			   3.- Elige un método de pago
			  </h5>
   	 		  <ul>
   	 		  	   <li>Selecciona uno de nuestros métodos de pago, entre ellos puede ser:</li>
   	 		  	    <ul>
   	 		  	    	<li>Pago con tarjeta de crédito o débito‍</li>
   	 		  	    	<li>Pago con PayPal‍ </li>
   	 		  	    	<li>Pago con Mercado Pago‍ </li>
   	 		  	    	<li>Pago en efectivo‍</li>
   	 		  	    	<li>Oxxo</li>
   	 		  	    </ul>
   	 		  </ul>
   	 		  <p>Estos pagos se verán reflejados en un lapso de 6 horas como máximo y sólo tienes 24 horas para realizar tu pago. No es necesario que nos envíes tu comprobante de pago.</p>
   	 		  <p>Una vez registrado tu pago estarás recibiendo actualizaciones de tu pedido por correo.</p>
   	 		 <h5 className=" fw-bold" id="textoImportante">
			   4.- Confirmación de pago*
			</h5>
   	 		  <ul>
   	 		  	   <li>Una vez realizado tu pago, tu compra comenzará un proceso de verificación con el fin de confirmar que la compra sea reconocida por el propietario de la tarjeta (esto por medio de correo).</li>
   	 		  	   <li>Una vez recibidos, la revisión de documentos puede demorar hasta 48 horas hábiles antes de que se libere tu compra.</li>
   	 		  </ul>
   	 		<h5 className=" fw-bold" id="textoImportante">
			  5.- Recibe tu pedido
			</h5>
   	 		  <ul>
   	 		  	   <li>Todos los envíos están asegurados contra pérdida o robo durante el trayecto de doto a tu domicilio.</li>
   	 		  	   <li>Las paqueterías que usamos son: DHL, Moova, Estafeta, UPS, entre otros.</li>
   	 		  </ul>
   	 	</div>
  
   	 </div>
   	    
       </div>

    )
}