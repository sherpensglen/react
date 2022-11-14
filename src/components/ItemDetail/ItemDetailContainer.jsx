import { useState, useEffect } from "react";
import { getSingleItem } from "../../Services/mockService";
import ItemDetail from "./ItemDetail";

//hook de react router dom, 
import { useParams } from "react-router-dom";

function ItemDetailContainer() {
  const [product, setProduct] = useState([]);
  //const { id } = useParams();
  const url = useParams();  
  const id = url.id;

  async function getItemsAsync() {
    let respuesta = await getSingleItem(id);
    setProduct(respuesta);
  }

  useEffect(() => {
    getItemsAsync();
  }, []);

  return (
    <ItemDetail product={product}/>
  );
}

export default ItemDetailContainer;
