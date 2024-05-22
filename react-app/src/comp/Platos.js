import Plato from "./Plato";
import TablaPlatos from "./TablaPlatos";

const Platos = (props) => {

    const { platos, salida } = props;

    return (
        <div className="row">
            <div className="col col-4 border border-2 border-primary shadow me-3">
                <p className="lead fs-2">Total de platos: {platos.length}</p>
                <ul>
                    {
                        platos.map((plato) => (
                            <li key={plato.id} className="lead fs-2 text-primary">{plato.nombre}</li>
                        ))
                    }
                </ul>
            </div>

            <div className="col col-7 border border-2 border-primary shadow">
                <p className="lead fs-2 text-primary">Total de platos: {platos.length} 
                 Tipo de Salida: {salida === "1" ? <span>Cards</span> : (salida==="2"?<span>Tabla</span>:<span>Invalido</span>)}
                </p>
                {
                    salida === "1" ?
                        (
                            <div className="row">
                                {
                                    platos.map((plato) => (
                                        <div className="col col-4" key={plato.id}>
                                            <Plato plato={plato} />
                                        </div>
                                    ))
                                }
                            </div>
                        ) :
                        (
                            salida === "2" ? (
                                <TablaPlatos platos={platos} />
                            ) : (<span className="alert alert-danger lead fs-2">No es salida valida, por favor ingrese tipo correcto</span>)

                        )
                }

            </div>
        </div >
    )
}
export default Platos;