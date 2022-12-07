import React, { useContext } from "react";
import CartView from "./CartView";
import { cartContext } from "../../context/cartContext";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { createOrder, exportArrayToFirestore } from "../../Services/firestore";
import Form from "../Form/Form";


function CartViewContainer(){
    const {priceInCart,cart,priceInCartIva} = useContext(cartContext);
	let navigate = useNavigate();

	function handleExport(){
		exportArrayToFirestore();
	}

	async function handleCheckout(evt,data){		
		const order ={
			buyer:data,
			items:cart,
			total: priceInCart(),
			date: new Date(),
		};
		const orderId =  await createOrder(order);
		navigate(`/thankyou/${orderId}`);

	}
    return(            
	<div>
      <div className="container-fluid pt-1">
		<div className="row d-flex align-items-center justify-content-space-around ">
			<div className="container-fluid pt-5">
				<div className="row d-flex align-items-start justify-content-space-around">
					<div className="d-flex align-items-start justify-content-space-around col-md-8 flex-column">	    
					  <h3 className="text-start pb-1">Carrito de compras</h3>
					   <div className="border-top border-secondary w-100 pb-4"></div>
						<CartView/>
                       <div className="border-bottom border-secondary w-100"></div>
					<div className="container-fluid pt-2">
                        <p className="text-end">Total:${priceInCart()}</p>	
					</div>	
				    </div>					
				    <div className="d-flex align-items-start justify-content-space-around col-md-4 pt-5 mt-5 flex-column">
				    	<div className="card w-100 pb-3 mb-5">		
							  <div className="card-body d-flex align-items-center justify-content-space-around flex-column">
							    <h5 className="card-title">Subtotal(Iva incluido)</h5>
							    <h6 id="TotalIva" className="card-subtitle mb-2 text-muted">${priceInCartIva()}</h6>
							    <p className="card-text">Pueden aplicarse tarifas de importación al finalizar la compra.</p> 
								<Form onSubmit={handleCheckout}/>         
						       </div>
						 </div>	
						 <Link aria-current="page" to="/">
		    			   <img src="../img/publicidad4.png" className="d-block w-100 py-3" alt="Imagen de publicidad del mes"/>
		    			</Link>
		    			<Link aria-current="page" to="/">
		    			  <img src="../img/publicidad5.png" className="d-block w-100 py-3" alt="Imagen de publicidad del mes"/>
		    			</Link>			    	
				    </div>			
				</div>
			</div>
         </div>
	  </div>
    </div>    
    )
}

export default CartViewContainer;