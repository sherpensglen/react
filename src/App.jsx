import React from "react";
import './App.css';
import ItemListContainer from "./components/ItemList/ItemListContainer";
import NavBar from "./components/NavBar/NavBar";
import Head from "./components/Head/Head";
function App() {

  //const styleH3 = { backgroundColor: "darkred", color: "white" };
  //let titulo = <h3 style={styleH3}>Hola Comisión #34815!🚀</h3>;
  return (
    <>
    <div className="App">
        <Head/>
        <NavBar/>
        
        <ItemListContainer greeting="Telefonos más mas populares"/>
    </div>
    </>
  );
}

export default App;
