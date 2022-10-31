import React from "react";
import MyButton from "../MyButton/MyButton";
import "./item.css";
import QtyCounter from "./QtyCounter";

function Item({img,alt,caption,price}) {
  return (
    <figure>
    <img src={img} alt={alt}></img>
						<figcaption>{caption}</figcaption>
						<p className="price">${price},00</p>
             <QtyCounter stock={10}/>
            <MyButton> Añadir al carrito</MyButton>
    </figure>
  );
}

export default Item;
