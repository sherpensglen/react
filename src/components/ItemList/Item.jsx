import React from "react";
import MyButton from "../MyButton/MyButton";
import "./item.css";
import {Link} from "react-router-dom";

function Item({img,alt,caption,price,id}) {
  const urlDetail = `/detail/${id}`;
  return (
    <figure>
    <img src={"../"+img} alt={alt}></img>
						<figcaption>{caption}</figcaption>
						<p className="price">${price},00</p>
              <Link to={urlDetail}>
                <MyButton> Ver más</MyButton>
              </Link>
    </figure>
  );
}

export default Item;
