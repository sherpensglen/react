import React from "react";
import { Link } from "react-router-dom";
import "./Details.css";

export default function Somos(){

    return(
      <div className="d-flex align-items-center justify-content-center py-4 my-4 px-1 mx-1 textoDetalles ">
   	    <div className="contaier-fluid col-md-8 col-sm-12">
   	 	  <div className="d-flex align-items-center justify-content-space-around flex-column">
	   	 	<Link className="logo px-0 py-1" to="/">
			  <img src="../img/logo.svg" alt="logo de celkap"/>
			</Link>
			<h1 id="textoImportante" className="fs-2 text-center">Acerca de nosotros</h1>
			<p>
				Somos una tienda en línea mexicana que nació en el 2022, crecimos como proveedores de las plataformas reconocidas, en 2022 lanzamos nuestra página para practicar sin problema con un mejor precio sin algún pago de comisiones por usar otras plataformas.
			</p>
			<p>
				Contamos con una extensa gama de electrónicos nuevos y originales. Encontrarás también equipos con categoría reacondicionados. 
                Envíos a todo México en compras mayores de $1,500 pesos en un tiempo promedio de 3 - 7 días hábiles (esto varia según tu código postal y el producto que elijas). Si deseas elegir la paquetería de tu preferencia lo podrás hacer con un costo adicional. 
			</p>
   	 		<p>
   	 			Buscamos ser la mejor tienda en línea de México manteniéndonos a la vanguardia con los equipos más buscados antes que nadie en el país, en versión global en el caso de celulares.
   	 		</p>
   	 		<p>
   	 			Todos nuestros productos son 100% originales y nuevos con equipos sellados, en cada producto ofrecemos 1 año de garantía por defectos de fabrica directamente con nosotros.
   	 		</p>
   	 		<p>
   	 			A lo largo de estos años hemos logrado crecer a casi 100 colaboradores enfocados a realizar más de 1 millón entregas satisfactoriamente y más de 10,000 seguidores en Facebook.
                 Si tienes dudas puedes contactarnos en alguno de nuestros medios.‍ 
   	 		</p>
   	 		<p id="textoImportante" className="text-decoration-underline">NO CONTAMOS CON TIENDAS FÍSICAS, sólo en línea.</p>
   	 	</div> 
   	 </div>	
  </div>

    )
}