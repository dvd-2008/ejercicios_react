import { NavLink, Outlet } from "react-router-dom";
import { data } from "../data";

const ProductosB = () => {

    const { productosB } = data;

    const estiloPrendido={
        color:'green',
        textDecoration:'none'
    }

    const estiloApagado={
        textDecoration:'none'
    }

    return (
        <main>
            <p className="lead fs-2 text-primary">Total de Productos ofrecidos en la bodega: {productosB.length}</p>
            <section className="row">
                <div className="col col-6">
                    <div className="border border-2 border-primary shadow p-2">
                        {
                            productosB.map((prod) => (
                                <div key={prod.id}>
                                    <p className="lead fs-4 text-primary">
                                        <NavLink to={`/productos-bodega/${prod.id}`}
                                            style={({isActive})=>(isActive?estiloPrendido:estiloApagado)}
                                        >
                                            {prod.nombre}
                                        </NavLink>
                                    </p>
                                </div>
                            ))
                        }
                    </div>
                </div>

                <div className="col col-5">
                    <div className="border border-2 border-primary shadow p-2">
                        <Outlet />
                    </div>
                </div>
            </section>

        </main>
    )
}
export default ProductosB;