import React from "react";
import "./QtyCounter.css";





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
        <div className="d-flex align-items-center justify-content-center py-0 my-0">
          <button className="btn btn-light" type="button" onClick={decrementar}>-1</button>
          <span className="px-3">{counter}</span>
          <button className="btn btn btn-light py-0 my-0" type="button" onClick={aumentar}>+1</button>
        
        </div>	        
    )

}


export default QtyCounter;