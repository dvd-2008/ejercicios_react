import Mensaje from "./comp/Mensaje";
import Platos from "./comp/Platos";
import { data } from "./data";
import './MiEstilo.css';

const AppFA = () => {

    const {platos} =data;

    const miobjetocss={
        'color':'white',
        'backgroundColor':'yellow'
    }

    return (
        <div className="container">

            <p className="lead fs-2 text-primary">Bienvenido al Cap2 React</p>
            <p style={{'fontSize':'60px', 'color':'white', 'backgroundColor':'green'}}>Estilo css</p>
    
            <p className="estilo">Estilo css desde archivo</p>
            <p className="lead fs-4 text-primary">Comp Funcion Revision de jsx</p>
            <p style={miobjetocss}>la frase con el estilo desde un objeto react</p>
            <section>
                <Platos platos={platos} salida="2"/>
            </section>

           <section className="border border-2 border-primary m-2 p-2">
            <Mensaje contenido="Reunion con Gerencia" indestilo="1"/>
            <Mensaje contenido="Revision de proyectos" indestilo="2"/>
            <Mensaje contenido="Renuncia del consultor no hay reemplazado" indestilo="3"/>
           </section>     

        </div>
        
    )
}
export default AppFA;
