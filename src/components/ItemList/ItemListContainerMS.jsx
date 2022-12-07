import { useState,useEffect } from "react";
import "./itemlist.css";
import {getItemsXiaomi } from "../../Services/firestore";
import ItemList from "./ItemList";
import Loader from "../Loaders/Loader";

function ItemListContainerMS(){
   const[products,setProducts]= useState(null);

   async function getItemsAsync(){ 
      let celulares = await getItemsXiaomi();
      setProducts(celulares);        
  }
  useEffect(() => { 
    getItemsAsync();
  },[]);

  return (
    <div>
    { products ? <ItemList products={products} /> : <Loader />}
    </div>
  );
}

export default ItemListContainerMS;
