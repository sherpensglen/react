import { createContext, useState } from "react";

export const cartContext = createContext();

export function CartContextProvider({ children }) {

  const [cart, setCart] = useState([]);

  function addToCart(product,count) {
    let foundIndex = cart.findIndex(item => item.id === product.id);
    let existing = alreadyInCart(product.id);
    let newCart = [...cart];

    if (existing) {
      newCart[foundIndex].count += count;
      setCart(newCart);
    } else {
      product.count=count;
      newCart.push(product);
      setCart(newCart);
    }
  }

  function itemsInCart() {
    let total = 0;
    cart.forEach((itemInCart) => (total = total + itemInCart.count));
    return total;
  }

  function clear() {
    let newCart = [];
    setCart(newCart);
  }

  function removeItem(id) {
    let newCart = [...cart];
    newCart = newCart.filter((prod) => prod.id !== id);
    setCart(newCart);
  }

  function priceInCart() {
    let total=0;
    for(const i of cart){
       total = total + i.price * i.count;
    }  
    return total;
  }

  function priceInCartIva(){
    let total=0;
    let iva;
    for(const i of cart){
      iva = i.price*.16;
       total = total + ((i.price+iva) * i.count);
    }  
    return parseInt(total);
  }

  function alreadyInCart(id){
    let existing = cart.find(item => item.id === id);
    return existing;
  }


  return (
    <cartContext.Provider value={{ cart, addToCart, itemsInCart,priceInCartIva,clear,removeItem,priceInCart }}>
      {children}
    </cartContext.Provider>
  );
}
