import Item from "./Item";
import "./itemlist.css";

function ItemListContainer(props){
  return (
  <div>
    <h1 className="pt-2 mt-3">{props.greeting}</h1>
    <section className="masVendidos">
      <Item
        img="/img/phone1.jpg"
        alt="Poco X3 Pro"
        caption="Poco X3 Pro"
        price={6999}   
      />
      <Item
        img="/img/phone2.jpg"
        alt="Samsung S20"
        caption="Samsung S20"
        price={9339}   
      />
      <Item
        img="/img/phone3.jpg"
        alt="Xiaomi R note 10"
        caption="Xiaomi R note 10"
        price={5999}   
      />
       <Item
        img="/img/phone4.jpg"
        alt="Iphone 12 pro Max"
        caption="Iphone 12 pro Max"
        price={26999}   
      />
    </section>
  </div>
  );
}

export default ItemListContainer;
