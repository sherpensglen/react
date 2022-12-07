
import ItemListContainerMS from "../ItemList/ItemListContainerMS"

export default function Index(){
   
    return(
        <div className="container-fluid d-flex align-items-center justify-content-space-evenly flex-wrap">
    		<div className="col-lg-8">
    			<div id="carouselExampleIndicators" className="carousel slide pb-2" data-bs-ride="carousel">
				  <div className="carousel-indicators">
				    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
				    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
				    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
				  </div>
				  <div className="carousel-inner rounded">
				    <div className="carousel-item active">				    
				      	 <img src="img/publicidad1.png" className="d-block w-100" alt="Imagen de publicidad del mes"/>			     
				    </div>
				    <div className="carousel-item">				     
				        <img src="img/publicidad2.png" className="d-block w-100" alt="Imagen de publicidad del mes"/>
				    </div>
				    <div className="carousel-item">				 
				       <img src="img/publicidad3.png" className="d-block w-100" alt="Imagen de publicidad del mes"/>
				    </div>
				  </div>
				  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
				    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
				    <span className="visually-hidden">Anterior</span>
				  </button>
				  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
				    <span className="carousel-control-next-icon" aria-hidden="true"></span>
				    <span className="visually-hidden">Siguiente</span>
				  </button>
				</div>
                </div>

    		<div className="col-lg-4 px-3 py-2 d-flex align-items-center justify-content-space-evenly flex-column">
    		
    			   <img src="img/publicidad4.png" className="d-block w-100 py-3" alt="Imagen de publicidad del mes"/>
    			
    			  <img src="img/publicidad5.png" className="d-block w-100 py-3" alt="Imagen de publicidad del mes"/>
    			
    	     </div>    		

             <div id="productos" className="container-fluid m-0 px-0 pt-5 pb-1">

		      <img src="img/masVendidos.png" className="d-block w-100" alt="Banner para la seccion de los mas vendidos"/>
              
              <ItemListContainerMS/>
			    
			  </div>  
    	</div>	
    )
}

