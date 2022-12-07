import { useState, useEffect } from "react";
import { useParams } from "react-router-dom"
import { getOrderById } from "../../Services/firestore";
import Loader from "../Loaders/Loader";
import "./Thankyou.css"

function Thankyou(){
    const idOrder = useParams().idOrder;
    const [order, setOrder] = useState(null);
  
    async function getItemsAsync() {
      let respuesta = await getOrderById(idOrder);
      setOrder(respuesta);
    }
    useEffect(() => {
        getItemsAsync();
      },[idOrder]);


    return(
        <div className="container-fluid py-5">
          { order ?             
              <div className="d-flex justify-content-center align-items-center p-2 m-2 flex-column">               
                <div className="card mb-3 py-5 my-5  ">
                  <div className="row g-0">
                      <div className="col-md-5 d-flex align-items-center justify-content-center flex-column">
                        <h3 className="pb-">Gracias por comprar en</h3>
                      <img src="../img/logo.svg" alt="logo de celkap" className="logo pt-1"/>
                      </div>
                  <div className="col-md-7">
                      <div className="card-body d-flex align-items-start justify-content-center flex-column">
                          <h5 className="card-title pb-3"><strong className="pe-2">Orden:</strong>{idOrder}</h5>
                          <p className="card-text"><strong className="pe-2">Nombre del Comprador:</strong>{order.buyer.name}</p>
                          <p className="card-text"><strong className="pe-2">Correo:</strong>{order.buyer.email}</p>
                          <p className="card-text"><strong className="pe-2">Telefono:{order.buyer.phone}</strong></p>                    
                      </div>
                    </div>
                  </div>
                </div>
               <div className="card py-2 my-2">
                <table className="table ">
                  <thead>
                    <tr>
                      <th scope="col">Nombre del Producto</th>
                      <th scope="col">Cantidad</th>
                      <th scope="col">Precio</th>
                    </tr>
                  </thead>
                  <tbody >      
                  {order.items.map((prod)=>{
                        return(
                            <tr key={prod.id}>
                                <td>{prod.title}</td> 
                                <td>{prod.count}</td> 
                                <td>${prod.price}</td> 
                            </tr>
                        )
                    })
                  }
                  <tr>
                    <td></td>
                    <td></td>
                    <td><strong className="px-3">Total de compra:</strong>${order.total}</td>
                  </tr>
                  </tbody> 
                </table>
              </div> 
            <div>

              <div className="card  py-4 my-4 w-100 px-5">
                <h3>Aqui esta tu Id de compra:</h3><h2><strong>{idOrder}</strong></h2>
              </div>

            </div>
         </div> 
                 
         : <Loader />}
        </div>
    )
}

export default Thankyou;