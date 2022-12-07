import { useState, useEffect } from "react";
import "./itemlist.css";
import { getSearchItems } from "../../Services/firestore";

import ItemList from "./ItemList";
import Loader from "../Loaders/Loader";

function ItemListContainerSearch() {
  const [products, setProducts] = useState(null);
  const [searchKeyword, setSearchKeyword] = useState("");

  async function getItemsAsync() {
    let respuesta = await getSearchItems(searchKeyword);
    setProducts(respuesta);
  }

  useEffect(() => {
    getItemsAsync();
  }, []);

  function handleSearch(evt) {
    setSearchKeyword(evt.target.value);
  }

  function handleSearchForm(evt) {
    evt.preventDefault();
    getItemsAsync();
  }

  return (
    <div className="catalogo pt-4 px-4">
       <form  onSubmit={handleSearchForm} className="d-flex">
          <input onChange={handleSearch} name="search" className="form-control me-2" type="search" placeholder="Buscar" aria-label="Buscar"></input>
          <button type="submit" className="btn btn-outline-dark">Buscar</button>
       </form>
      {products ? <ItemList products={products} /> : <Loader />}
    </div>
  );
}

export default ItemListContainerSearch;
