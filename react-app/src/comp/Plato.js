import { Component } from "react";

class Plato extends Component {

    render() {
        const {plato}=this.props;
        return (
            <div className="card m-2 shadow">
                <div className="card-header bg-primary text-white">
                    {plato.nombre}
                </div>
                <div className="card-body">
                    S/. {plato.precio}
                </div>
            </div>

        )
    }
}
export default Plato;