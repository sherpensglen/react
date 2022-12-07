import { useState,useEffect } from "react";
import "./itemlist.css";
import {getItems,getItemsByCompany } from "../../Services/firestore";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import Loader from "../Loaders/Loader";

function ItemListContainer(){
   const[products,setProducts]= useState(null);
   const { company } = useParams();

   async function getItemsAsync(){
    if(company){
      let celulares = await getItemsByCompany(company);
       setProducts(celulares);  
    }else{
      let celulares = await getItems();
      setProducts(celulares);
      
    };
  }
  useEffect(() => { 
    getItemsAsync();
  },[company]);

  return (
    <div>
    <img src="../img/celulares.png" class="d-block w-100 pb-3 " alt="Banner de la pagina de celkap"/>
    { products ? <ItemList products={products} /> : <Loader />}
    </div>
  );
}

export default ItemListContainer;
