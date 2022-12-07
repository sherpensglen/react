import React, { useContext } from "react";
import { cartContext } from "../../context/cartContext";
import MyButton from "../MyButton/MyButton";

function CartView() {
  const { cart, removeItem } = useContext(cartContext);

  if (cart.length === 0) return <h3>Carrito Vacío</h3>;

  return (
    <div  id="carritocards" className="container-fluid">
      {cart.map((item) => (
        <div className="card mb-3 w-100">
          <div className="row g-0">
           <div className="col-md-3">
             <img src={"../"+item.img} className="img-fluid rounded-start" alt={item.title}/>
            </div>
            <div className="col-md-9">
          <div className="card-body">
            <h5 className="card-title">{item.title}</h5>
            <p className="card-text">Precio:${item.price},00</p>
            <p className="card-text">Cantidad:{item.count}</p>
            <MyButton onClick={() => removeItem(item.id)} >Retirar producto</MyButton>
            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
             </div>
           </div>
          </div>   
        </div>
      ))}
    </div>
  );
}

export default CartView;
