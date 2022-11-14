import { useState,useEffect } from "react";
import Item from "./Item";
import "./itemlist.css";
import getItems from "../../Services/mockService";
import { useParams } from "react-router-dom";

function ItemListContainer(props){
  //use state inicializa el array con []
   const[products,setProducts]= useState([]);
   const { company } = useParams();

   async function getItemsAsync() {
    let celulares = await getItems(company);
    setProducts(celulares);
  }
  useEffect(() => {
    getItemsAsync();
  },[company]);

  return (
  <div>
    <h1 className="pt-2 mt-3">{props.greeting}</h1>
    <section className="masVendidos">
    {products.map((product) => {
        return (
      <Item
        key={product.id}
        id={product.id}
        img={product.img}
        alt={product.title}
        caption={product.title}
        price={product.price}
      />
      );
      })}     
    </section>
  </div>
  );
}

export default ItemListContainer;
