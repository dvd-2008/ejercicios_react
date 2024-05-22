import { useEffect, useState } from "react";

const RelojF=()=>{

    const [fecha,setFecha]=useState(new Date());

    const actualizaFecha=()=>{

        setFecha(
            fecha=>new Date()
        )
    }

    useEffect(()=>{
     
        const id=setInterval(() => {
        actualizaFecha();
        }, 1000);

        return ()=>clearInterval(id);
    })

    return(
        <div className="container mt-3">
            <section className="alert alert-primary">
                <p className="lead fs-4">Fecha Hook: {fecha.toLocaleString()}</p>
            </section>
        </div>
    )
}
export default RelojF;