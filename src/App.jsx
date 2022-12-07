import React from "react";
import './App.css';
import Index from "./components/Index/Index";
import ItemListContainer from "./components/ItemList/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetail/ItemDetailContainer";
import NavBar from "./components/NavBar/NavBar";
import Head from "./components/Head/Head";
import Footer from "./components/Footer/Footer"
import CartViewContainer from "./components/CartView/CartViewContainer";
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import { CartContextProvider } from "./context/cartContext";
import ItemListContainerSearch from "./components/ItemList/ItemListContainerSearch";
import Thankyou from "./components/Thankyou/Thankyou";
import E404 from "./components/E404/E404";
import FormContact from "./components/FormContact/FormContact";
import Aviso from "./components/Details/Aviso";
import Comprar from "./components/Details/Comprar";
import Garantia from "./components/Details/Garantia";
import Preguntas from "./components/Details/Preguntas";
import Somos from "./components/Details/Somos";
import Terminos from "./components/Details/Terminos";

function App() { 
  return (
    <div className="App">
    <CartContextProvider>
    <BrowserRouter>
    <Head/>
    <NavBar/>
    <Routes>
      <Route path="/" element={<Index/>} />
      <Route path="/Celulares" element={<ItemListContainer/>} />
      <Route path="/Celulares/:company" element={<ItemListContainer/>} />
      <Route path="/Contacto" element={<FormContact/>} />
      <Route path="/thankyou/:idOrder" element={<Thankyou/>}></Route>
      <Route path="/search" element={<ItemListContainerSearch/>} />
      <Route path="/detail/:id" element={<ItemDetailContainer/>} />
      <Route path="/cart" element={<CartViewContainer/>} />
      <Route path="/Aviso" element={<Aviso/>} />
      <Route path="/Comprar" element={<Comprar/>} />
      <Route path="/Garantia" element={<Garantia/>} />
      <Route path="/Preguntas" element={<Preguntas/>} />
      <Route path="/Somos" element={<Somos/>} />
      <Route path="/Terminos" element={<Terminos/>} />
      <Route path="*" element={<E404/>} />
    </Routes>
    <Footer/>
    </BrowserRouter>
    </CartContextProvider>
    </div>
  );
}

export default App;
