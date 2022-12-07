import React, {memo} from "react";
import Item from "./Item";

function ItemList({ products}) {
  return (
    <div>
    <section className="masVendidos py-5">
    {products.map((product) => {
        return (
      <Item
        key={product.id}
        id={product.id}
        img={product.img}
        alt={product.title}
        caption={product.title}
        price={product.price}
        stock={product.stock}
        category={product.category}
        discount={product.discount}
      />
      );
      })
      }     
    </section>
  </div>
  );
}

export default memo(ItemList);
