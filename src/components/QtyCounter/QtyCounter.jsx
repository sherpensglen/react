import React from "react";
import "./QtyCounter.css";
import MyButton from "../MyButton/MyButton";

function QtyCounter(props){

    //estado que modifica la variable counter en el render por funcion
    let [counter,setCounter] = React.useState(1);
    let stock=props.stock;

    function aumentar(){
     if(counter<stock){
        setCounter(counter+1);
        }
    }
    function decrementar(){
      if(counter>1){
        setCounter(counter-1);
        }
      }
    return(
      <div className="d-flex align-items-start justify-content-space-around flex-column">    
        <div className="d-flex align-items-center justify-content-center py-0 my-0">
          <MyButton type="button" onClick={decrementar}>-</MyButton>
          <span className="px-0">{counter}</span>
          <MyButton type="button" onClick={aumentar}>+</MyButton>      
        </div>	
        <MyButton>Agregar al carrito</MyButton> 
      </div>          
    )

}


export default QtyCounter;