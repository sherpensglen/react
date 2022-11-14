import React from "react";
import './App.css';
import ItemListContainer from "./components/ItemList/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetail/ItemDetailContainer";
import NavBar from "./components/NavBar/NavBar";
import Head from "./components/Head/Head";
import {BrowserRouter,Routes,Route} from 'react-router-dom';

function App() { 
  return (
    <BrowserRouter>
    <Head/>
    <NavBar/>
    <Routes>
      <Route path="/" element={<ItemListContainer/>} />
      <Route path="/company/:company" element={<ItemListContainer />} />
      <Route path="/detail/:id" element={<ItemDetailContainer />} />
      <Route path="*" element={<h1>Error 404: Está página no existe</h1>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
