import { Component } from "react";
import { data } from "../data";
const { platos } = data;
const platosM = platos.filter((p) => p.precio < 20);

class PublicaPlatos extends Component {

    state = {
        indice: 0,
        indiceM: 0
    }

    actualizaPlato = () => {
        this.setState({
            indice: this.state.indice === platos.length - 1 ? 0 : this.state.indice + 1
        })
    }

    muestraPlatosPrecioMenor20 = () => {
        this.setState({
            indiceM: this.state.indiceM === platosM.length - 1 ? 0 : this.state.indiceM + 1
        })
    }


    componentDidMount = () => {
        this.id = setInterval(() => {
            this.actualizaPlato();
            this.muestraPlatosPrecioMenor20();
        }, 2000);
    }

    render = () => {

        return (
            <div className="container">
                <div className="row">
                    <div className="col col-3">
                        <main>
                            <p className="lead fs-2 text-primary">Platos ofrecidos:</p>
                            <div className="card text-white shadow">
                                <div className="card-header bg-primary">
                                    Plato: {platos[this.state.indice].nombre}
                                </div>
                                <div className="card-body">
                                    <img src={platos[this.state.indice].imagen} alt="imagen" className="img-fluid" style={{'width':'50%'}} />
                                </div>
                                <div className="card-footer bg-warning">
                                    Precio S/. {platos[this.state.indice].precio}
                                </div>
                            </div>
                        </main>
                    </div>

                    <div className="col col-8">
                        <main>
                            <p className="lead fs-2 text-primary">Platos Costo menor a 20 soles:</p>
                            <div className="card text-white shadow">
                                <div className="card-header bg-primary">
                                    Plato: {platosM[this.state.indiceM].nombre}
                                </div>
                                <div className="card-body">
                                    <img src={platosM[this.state.indiceM].imagen} alt="imagen" className="img-fluid" />
                                </div>
                                <div className="card-footer bg-warning">
                                    Precio S/. {platosM[this.state.indiceM].precio}
                                </div>
                            </div>
                        </main>

                    </div>
                </div>
            </div>
        )
    }
}
export default PublicaPlatos;
