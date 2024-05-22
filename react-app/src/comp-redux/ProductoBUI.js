import { useDispatch, useSelector } from "react-redux";
import { data } from "../data";
import { incrementarIndice } from "./features/prodB";
import { useEffect } from "react";

const ProductoBUI=()=>{

    const indice =useSelector(state=> state.producto_bodega);
    const dispatch =useDispatch();

    const {productosB}=data;

    const incrementoAuto=()=>{
        dispatch(incrementarIndice());

    }

    useEffect(()=>{
        let id=setInterval(() => {
            incrementoAuto()
        }, 3000);
    })
    return(
        <div className="container">
             <p className="lead fs-2 text-primary">Panel con Redux</p>   
             <p className="lead fs-2 text-primary">Total de productos: {productosB.length}</p>   
             <div className="card lead fs-2 text-primary">
                <div className="card-header">
                    Producto: {productosB[indice.value].nombre}
                </div>
                <div className="card-body">
                    <img src={productosB[indice.value].imagen} alt="imagen" className="img-fluid" style={{'width':'40%'}}/>
                </div>
                <div className="card-footer">
                    Precio S/.{productosB[indice.value].precio} 
                </div>
             </div>
        </div>
    )
}
export default ProductoBUI;