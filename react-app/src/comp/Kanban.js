import { data } from "../data";
import Actividades from "./Actividades";

const Kanban=()=>{

    const {actividades}=data;
    let actividadesPorHacer=actividades.filter((a)=>a.avance===0);
    let actividadesConAvance=actividades.filter((x)=>x.avance>0 &&x.avance<=99);
    let actividadesCulminadas=actividades.filter((a)=>a.avance===100);

    actividadesConAvance.sort((a,b)=>a.avance-b.avance);
    //actividadesConAvance.sort((a,b)=>b.avance-a.avance);

    return(
        <main className="container">
            <p className="lead fs-2 text-primary">Total de actividades para el Proyecto: {actividades.length}</p>
            <p className="lead fs-4 text-primary">Total Por Realizar en Proyecto: {actividadesPorHacer.length}</p>
            <p className="lead fs-4 text-primary">Total En ejecucion en Proyecto: {actividadesConAvance.length}</p>
            <p className="lead fs-4 text-primary">Total Culminadas en Proyecto: {actividadesCulminadas.length}</p>
            <hr/>

            <div className="row">
                <div className="col col-4 border border-2 border-primary shadow me-2">
                    <Actividades estatus={actividadesPorHacer} estado="0"/>
                </div>
                <div className="col col-4 border border-2 border-primary shadow me-2">
                    <Actividades estatus={actividadesConAvance} estado="1"/>
                </div>
                <div className="col col-3 border border-2 border-primary shadow me-2">
                    <Actividades estatus={actividadesCulminadas} estado="2"/>
                </div>
            </div>
            
        </main>
    )
}
export default Kanban;
