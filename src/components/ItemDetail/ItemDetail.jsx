import QtyCounter from "../QtyCounter/QtyCounter";
import MyButton from "../MyButton/MyButton";
function ItemDetail({product}){
    return(
     <div className="d-flex justify-content-center align-items-center p-2 m-2">
      <div className="card mb-3 py-5 my-5 w-50 ">
        <div className="row g-0">
            <div className="col-md-5">
            <img src={"../"+product.img} className="img-fluid rounded-start" alt={product.title}/>
            </div>
        <div className="col-md-7">
            <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text">{"$"+product.price+",00"}</p>
                <p className="card-text">{product.info}</p>
                <QtyCounter stock={10}/>
            </div>
        </div>
        </div>
       </div>
      </div>
    )
}

export default ItemDetail;