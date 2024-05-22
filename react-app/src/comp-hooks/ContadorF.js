import { useEffect, useState } from "react";
import { data } from "../data";

const ContadorF = () => {

    const {secciones}=data;

    const [contador, setContador] = useState(20);
    const [seccion, setSeccion] = useState(1);
    const [indice, setIndice]=useState(0);


    const incrementar = () => {
        setContador(
            contador => contador + 1
        )
    }

    const decrementar = () => {
        setContador(
            contador => contador - 1
        )
    }

    const avanzarSeccion=()=>{
        setSeccion(
            seccion=>seccion===4?1:seccion+1
        )
    }

    const retrocederSeccion=()=>{
        setSeccion(
            seccion=>seccion===1?1:seccion-1
        )
    }


    const avanzaIndice=()=>{
        setIndice(
            indice=> indice===secciones.length-1?1:indice+1
        )
    }

    const retrocedeIndice=()=>{
        setIndice(
            indice=>indice===0?0:indice-1
        )
    }


    useEffect(()=>{


      const id=setInterval(() => {
            avanzaIndice();
        }, 2000);

        return ()=>clearInterval(id);

    })

    return (
        <div className="container">
            <p className="lead fs-2 text-primary">Componente Funcion (hook)</p>
            <div className="row">
                <div className="col col-3 border border-2 border-primary shadow mb-2 me-3">
                    <p className="display-6">Contador F: {contador}</p>
                    <button className="btn btn-sm btn-primary me-3 mb-2" onClick={incrementar}>Incrementar</button>
                    <button className="btn btn-sm btn-warning mb-2" onClick={decrementar}>Decrementar</button>
                </div>

                <div className="col col-4 border border-2 border-primary shadow mb-2 me-2">
                    <p className="lead fs-4">Seccion Examen Admision: {seccion}</p>
                    <button className="btn btn-sm btn-primary me-3 mb-2" onClick={avanzarSeccion}>Avanzar</button>
                    <button className="btn btn-sm btn-info mb-2" onClick={retrocederSeccion}>Retroceder</button>
                </div>

                <div className="col col-4 border border-2 border-primary shadow mb-2">
                    <p className="lead fs-4">Seccion Examen Admision (data)</p>
                    <p className="lead fs-4">Parte: {secciones[indice].seccion}</p>
                    <p className="lead fs-4">Duracion: {secciones[indice].tiempo} min</p>
                    <button className="btn btn-sm btn-primary me-3 mb-2" onClick={avanzaIndice}>Avanzar</button>
                    <button className="btn btn-sm btn-info mb-2" onClick={retrocedeIndice}>Retroceder</button>
                </div>
            </div>
        </div>
    )
}
export default ContadorF;