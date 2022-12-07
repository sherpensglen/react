import React, { useState,useContext } from "react";
import { cartContext } from "../../context/cartContext";
import swal from "sweetalert";

export default function Form(props) {
  const {clear,cart} = useContext(cartContext);
  
  const [data, setData] = useState({ 
    name: "",
    email: "",
    phone: ""
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
    props.onSubmit(evt,data);
    swal("se ha completado el pago con exito!","","success", {
      button: "Aceptar",
    });
    clear();
  }

  return (
      <form onSubmit={Submit} >
          <div style={{ display: "flex", marginBottom: 8 }}>
            <label htmlFor="name" style={{  width: "100px",marginRight: 4 }}>Nombre</label>
            <input value={data.name} name="name" type="text" onChange={onInputChange} />
          </div>      

          <div style={{ display: "flex", marginBottom: 8 }}>
            <label htmlFor="email" style={{ width: "100px", marginRight: 4 }}>Email</label>
            <input value={data.email} name="email" type="email" onChange={onInputChange} />
          </div>

          <div style={{ display: "flex", marginBottom: 8 }}>
            <label htmlFor="phone" style={{ width: "100px", marginRight: 4 }}>Teléfono</label>
            <input value={data.phone} name="phone" type="phone" onChange={onInputChange} />
          </div>
          <div className="d-flex align-items-end justify-content-end">
          <button className="btn btn-dark align-end" disabled={data.name === "" || data.phone === "" || data.email === "" || cart.length ==0} type="submit">
            Finalizar Compra </button>
          </div>
        
      </form>
  );
}