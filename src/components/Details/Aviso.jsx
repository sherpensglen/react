import React from "react";
import "./Details.css";

export default function Aviso(){

    return(
      <div className="d-flex align-items-center justify-content-center p-4 m-4  textoDetalles ">

        <div className="contaier-fluid col-md-7">
                <div className="d-flex align-items-flex-start justify-content-space-around flex-column ">
                    <h1 id="textoImportante" className="fs-2 text-center">Aviso de privacidad</h1>
                    <p>
                        Aviso de privacidad forma parte del sitio web www.celkap.com Sus datos personales serán tratados por Comercializadora celkap S.A. de C.V.
                    </p>
                    <p>
                        Comercializadora celkap S.A. de C.V., está ubicada en Colonia del Alamo,Num 344 CP. 45055 Pachuca,Hidalgo. 
                        Nuestro teléfono es: 771 800 44 55. Nuestro responsable de protección de datos es el Lic. Alvaro kowalsky y se ubica en ese mismo domicilio, puede contactarlo por el siguiente correo electrónico: contacto@alvaroKow.com.mx.
                    </p>
                    <h5 id="textoImportante" className="fw-bold">
                        Datos que solicitamos
                    </h5>
                    <ul>
                        <li>Nombre(Completo)</li>
                        <li>Direccion</li>
                        <li>Telefono(Opcional)</li>
                    </ul>
                    <p>
                        Informacion al registrarse
                    </p>
                    <ul>
                        <li>Nombre(Completo)</li>
                        <li>Correo</li>
                        <li>Genero(Opcional)</li>
                        <li>Fecha de nacimiento</li>
                    </ul>

                    <h5 id="textoImportante"  className="fw-bold">
                        El uso de tecnologías de rastreo en nuestro portal de internet 
                    </h5>
                    <p>Le informamos que en nuestra página de internet utilizamos cookies, web beacons u otras tecnologías, a través de las cuales es posible monitorear su comportamiento como usuario de internet, así como brindarle un mejor servicio y experiencia al navegar en nuestra página. Los datos personales que recabamos a través de estas tecnologías, los utilizaremos para los siguientes fines:</p>
                    <p>Ofrecer productos y servicios más idóneas de acuerdo a sus búsquedas y necesidades</p>
                    <p>Los datos personales que obtenemos de estas tecnologías de rastreo son los siguientes:</p>
                    <ul>
                        <li>Región en la que se encuentra el usuario</li>
                        <li>Tipo de navegador del usuario</li>
                        <li>Tipo de sistema operativo del usuario</li>
                        <li>Búsquedas realizadas por un usuario</li>
                    </ul>
                    <p className="fw-bold">¿Cómo puede conocer los cambios en este aviso de privacidad?</p>
                    <p>El presente aviso de privacidad puede sufrir modificaciones, cambios o actualizaciones derivadas de nuevos requerimientos legales; de nuestras propias necesidades por los productos o servicios que ofrecemos; de nuestras prácticas de privacidad; de cambios en nuestro modelo de negocio, o por otras causas.</p>
                    <p>Nos comprometemos a mantenerlo informado sobre los cambios que pueda sufrir el presente aviso de privacidad, a través de: nuestra pagina web.</p>
                    <p>El procedimiento a través del cual se llevarán a cabo las notificaciones sobre cambios o actualizaciones al presente aviso de privacidad es el siguiente:</p>
                    <p>Consultando el Aviso de Privacidad de nuestra pagina web</p>
                </div> 
            </div>	
   	    
       </div>

    )
}