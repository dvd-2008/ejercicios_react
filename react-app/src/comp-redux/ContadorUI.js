import { useDispatch, useSelector } from "react-redux";
import { decrementar, incrementar } from "./features/contador";
import { useEffect } from "react";

const ContadorUI=()=>{

    const contador=useSelector(state=>state.contador);
    const dispatch =useDispatch();

    const incrementarAuto=()=>{
        dispatch(incrementar());
    }

    useEffect(()=>{
        let id=setInterval(() => {
            incrementarAuto();
        }, 1000);

        return ()=>clearInterval(id);
    })

    return(
        <main className="container">
              <p className="lead fs-2 text-primary">Contador utilizando Redux {contador.value}</p>  
              <button className="btn btn-primary mt-2 me-3" onClick={()=>dispatch(incrementar())}>Incrementar</button>
              <button className="btn btn-danger mt-2" onClick={()=>dispatch(decrementar())}>Decrementar</button>
        </main>
    )
}
export default ContadorUI;