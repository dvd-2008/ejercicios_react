import Actividad from "./Actividad";

const Actividades = (props) => {

    const { estatus, estado } = props;

    const evaluaAvanceEstilo=(avance)=>{
        let estilo="alert ";
        if(avance===0){
            estilo+="alert-primary";
        }else if(avance>0 && avance<100){
            estilo +="alert-warning"
        }else if(avance===100){
            estilo +="alert-danger"
        }

        return estilo
    }

    return (
        <div>
            {
                estado === "0" ? (<span className="lead fs-4 text-primary">Por Hacer</span>) :
                    (estado === "1" ? <span className="lead fs-4 text-primary">En ejecucion</span> : <span className="lead fs-4 text-primary">Culminados</span>)

            }
            {
                estatus.map((actividad) => (

                    <div className={evaluaAvanceEstilo(actividad.avance)} key={actividad.id}>
                        <Actividad actividad={actividad}/>
                    </div>
                ))

            }

        </div>
    )
}
export default Actividades;