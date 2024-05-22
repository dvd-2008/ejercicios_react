import { Component } from "react";
import Mensaje from "./comp/Mensaje";

class AppC extends Component{

    render(){
        return(
            <div className="container">
                <p className="lead fs-2 text-primary">Componente tipo clase</p>
                <Mensaje contenido="Practicar Deporte en las mañanas" indestilo="1"/>
                <Mensaje contenido="Leer informacion de lenguajes de programacion" indestilo="1"/>
            </div>
        )
    }
}

export default AppC;