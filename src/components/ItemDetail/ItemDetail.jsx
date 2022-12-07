import QtyCounter from "../QtyCounter/QtyCounter";
import { useContext } from "react";
import { cartContext } from "../../context/cartContext";
import swal from "sweetalert";



function ItemDetail({product}){
    const {addToCart} = useContext(cartContext); 
    function onAddToCart(counter){
        swal(`Agregaste ${counter} productos al carrito!`,"","success", {
            button: "Aceptar",
          });
         addToCart(product,counter);
       }

    return(
     <div className="d-flex justify-content-center align-items-center p-2 m-2">
      <div className="card mb-3 py-5 my-5 w-50 ">
        <div className="row g-0">
            <div className="col-md-5">
            <img src={"../"+product.img} className="img-fluid rounded-start" alt={product.title}/>
            </div>
        <div className="col-md-7">
            <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text">{"$"+product.price+",00"}</p>
                <p className="card-text">{product.info}</p>
                <QtyCounter onAddToCart={onAddToCart} stock={product.stock}/>
            </div>
        </div>
        </div>
       </div>
      </div>
    )
}

export default ItemDetail;