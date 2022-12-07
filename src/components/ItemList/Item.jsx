import React from "react";
import MyButton from "../MyButton/MyButton";
import "./item.css";
import {Link} from "react-router-dom";

function Item({img,alt,caption,price,id,stock,discount}) {
  const urlDetail = `/detail/${id}`;
  const stylePrice = {color: discount && "green"};

  return (
    <figure>
    <img src={"../"+img} alt={alt}></img>
						<figcaption>{caption}</figcaption>
						<p style={stylePrice} className="price">${price},00</p>
             {discount && <small>Descuento: {discount}</small>}
             {stock <= 0 && <span>Sin stock disponible</span>}
              <Link to={urlDetail}>
                <MyButton> Ver más</MyButton>
              </Link>
    </figure>
  );
}

export default Item;
