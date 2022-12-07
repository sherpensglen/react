import React,{useState} from "react";
import swal from "sweetalert";
import "./FormContact.css"

export default function FormContact(){

    const [data, setData] = useState({ 
        name: "",
        email: "",
        phone: "",
        subject:""
      });
    
      function onInputChange(evt) {
        let nameInput = evt.target.name;
        let value = evt.target.value;
        let newData = {...data}
        newData[nameInput] = value;
        setData(newData)
      }
    
      function Submit(evt) {
        evt.preventDefault();
        swal("se ha registrado con exito!"," se le contactara en breve","success", {
          button: "Aceptar",
        });
      }

    return(
    <div class="fondoContacto">  
        <div class="container-fluid d-flex align-items-center justify-content-center py-5">
           <div class="row rounded p-3 m-2" id="formContainer">
        	 <h1 class="fw-bold ">Contacto</h1>
			 <form id="contact" method="post" action="index.html" onSubmit={Submit}>
			 	<div class="form-group py-2 px-2">
			        <label htmlFor="name">Nombre Completo</label>			      
			        <input type="text" id="name" name="name" placeholder="Tu nombre.." class="form-control" onChange={onInputChange}/>
			    </div>
			    <div class="form-group  py-2 px-2">
			        <label htmlFor="email">Correo Electronico</label>
			        <input type="text" name="email" placeholder="Tu Correo.." class="form-control" onChange={onInputChange}/>
			    </div>
			    <div class="form-group  py-2 px-2">
			        <label htmlFor="phone">Numero de telefono</label>  
			        <input type="text" id="phone" name="phone" placeholder="Tu numero de telefono.." class="form-control" onChange={onInputChange}/>
			    </div>
			    <div class="form-group">
			        <label htmlFor="subject">Asunto</label>		      
			        <textarea id="subject" name="subject" placeholder="Asunto....." class="form-control" onChange={onInputChange}></textarea>
			    </div>
			        <div class="d-flex align-items-center justify-content-center py-3">
				    <button class="btn btn-dark btn-lg botonForm" type="submit" value="Enviar" 
				     disabled={data.name === "" || data.phone === "" || data.email === "" || data.subject ==""}>Contactar</button>
			        </div>      
			  </form>
		  </div>
	    </div>
   </div> 
    )
}