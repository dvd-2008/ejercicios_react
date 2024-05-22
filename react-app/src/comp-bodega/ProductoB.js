import { useParams } from "react-router-dom";
import { data } from "../data";

const ProductoB=()=>{

    const {id}=useParams();
    const {productosB}=data;

    const producto =productosB.find((p)=>p.id===Number(id));
    return(
        <div>
           <p className="lead fs-4">Precio S/. {producto.precio}</p>
           <div className="card">
            <div className="card-header bg-primary text-white">
                {producto.nombre}
            </div>
            <div className="card-body">
                <img src={producto.imagen} alt="imagen" className="img-fluid" style={{'width':'50%'}}/>
            </div>
            <div className="card-footer bg-primary text-white">
                Descripcion: {producto.descripcion}
            </div>
           </div>     
        </div>
    )
}
export default ProductoB;