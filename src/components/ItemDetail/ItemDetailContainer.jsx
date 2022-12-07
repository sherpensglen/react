import { useState, useEffect } from "react";
import { getSingleItem } from "../../Services/firestore";
import ItemDetail from "./ItemDetail";
import Loader from "../Loaders/Loader";
 
import { useParams } from "react-router-dom";

function ItemDetailContainer({tipo}) {
  const [product, setProduct] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const { id } = useParams();

  async function getItemsAsync() {
     getSingleItem(id).then( respuesta => {
      setProduct(respuesta);
      setIsLoading(false);
    })
  }

  useEffect(() => {
    getItemsAsync();
  }, []);

  if(isLoading)
  return (<Loader/>);

  return (
    <ItemDetail product={product}/>
  );
}

export default ItemDetailContainer;
