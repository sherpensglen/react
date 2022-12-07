import React from "react";
import "./Details.css";

export default function Garantia(){

    return(
      <div className="d-flex align-items-center justify-content-center py-4 my-4 px-1 mx-1 textoDetalles ">
         <div className="contaier-fluid col-md-7 col-sm-12">
   	 	  <div className="d-flex align-items-center justify-content-space-around flex-column ">
	   	 	
			<h1 id="textoImportante" className="fs-2 text-center">Garantía de Productos.</h1>
			<p>
				Garantía de los productos. Los productos publicados en Celkap.com son originales, nuevos (salvo que se especifique una condición diferente) y viajan en caja cerrada tal y como lo entrega el fabricante en nuestros almacenes, una vez abierto el producto y si llegará a encontrar alguna falla debe contactarse en primera instancia a los Centros de Soporte al cliente del fabricante de que se trate, el 80% de las veces se trata de desconocimiento en su funcionamiento y / o configuración, si tiene una falla real puede hacer válida la garantía del fabricante dentro del período de vigencia a través de sus Centros de Servicio
			</p>
   	 		 
   	 		<h5 className=" fw-bold" id="textoImportante">
			   Garantia por defectos de fábrica (mayor a 30 dias)
			</h5>
   	 		  <ul>
   	 		  	   <li>Si observas que tu equipo tiene alguna falla por defecto de fábrica dentro de los 12 meses después de haber recibido tu pedido, envíanos tu equipo.</li>
   	 		  	   <li>El tiempo de respuesta es de 7 a 10 días hábiles ya que se inspeccionará el equipo para validar el defecto de fabricación que nos mencionas por lo que es importante describirnos bien el inconveniente presentado.</li>
   	 		  	   <li>Para poder solicitar tu garantía no es necesario que tengas factura, sólo necesitas tu número de pedido y el correo con el que registraste la compra.</li>
   	 		  </ul>
   	 		  <h5 className=" fw-bold" id="textoImportante">
			   Devolución (equipos nuevos - primeros 30 días)
			 </h5>
   	 		  <ul>
   	 		  	   <li>
                    Si el producto se encuentra nuevo y sellado a partir del momento que lo recibes, cuentas con 30 días naturales para devolver tu producto y recibir tu reembolso o cambio de producto por otro de tu agrado. Deberás cubrir un monto de $150.00 MXN de envío a Celkap por cada producto adquirido por gastos administrativos.
   	 		  	   </li>
   	 		  	   <li>
   	 		  	   	El tiempo de respuesta para la devolucion es de 48 a 72 horas hábiles una vez recibido el producto.
   	 		  	   </li>  
             </ul>	 		  	 
   	 	</div> 
   	 </div>	
   </div>

    )
}