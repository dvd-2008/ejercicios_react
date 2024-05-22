import { Link, Route, Routes } from "react-router-dom";
import RelojC from "../comp-estado/RelojC";
import RelojF from "../comp-hooks/RelojF";
import Kanban from "./Kanban";
import PublicaPlatos from "../comp-estado/PublicaPlatos";
import Contador from "../comp-estado/Contador";
import ContadorF from "../comp-hooks/ContadorF";
import AppFA from "../AppFA";
import AppC from "../AppC";
import Home from "./Home";
import ProductosB from "../comp-bodega/ProductosB";
import ProductoB from "../comp-bodega/ProductoB";
import GestorEmpresas from "../comp-axios/GestorEmpresas";
import ContadorUI from "../comp-redux/ContadorUI";
import ProductoBUI from "../comp-redux/ProductoBUI";

const Menu = () => {

    return (
        <header className="container">

            <nav className="navbar navbar-expand-lg bg-primary navbar-dark shadow">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/#">React</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" to="/reloj-clase">Reloj Clase</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" to="/reloj-funcion">Reloj Func</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" to="/kanban-props">Kanban Props</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" to="/publicidad-platos-estado-clase">Platos Clase</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" to="/contador-estado-clase">Contador EClase</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" to="/contador-funcion-hook">Contador FHook</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" to="/componente-main-funcion-props">Comp Funcion</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" to="/componente-main-clase-props">Comp Clase</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" to="/productos-bodega">Bodega</Link>
                            </li>

                            <li class="nav-item dropdown">
                                <a className="nav-link dropdown-toggle active" href="/#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Mas Acciones
                                </a>
                                <ul className="dropdown-menu">
                                    <li>
                                        <Link className="dropdown-item" to="/gestor-empresa-axios">Empresas Axios</Link>
                                    </li>
                                    <li>
                                        <Link className="dropdown-item" to="/contador-redux">Contador Redux</Link>
                                    </li>
                                    <li>
                                        <Link className="dropdown-item" to="/bodega-redux">Bodega Redux</Link>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        {/* rutas */}
        <Routes>
            <Route path="reloj-clase" element={<RelojC/>}/>
            <Route path="reloj-funcion" element={<RelojF/>}/>
            <Route path="kanban-props" element={<Kanban/>}/>
            <Route path="publicidad-platos-estado-clase" element={<PublicaPlatos/>}/>
            <Route path="contador-estado-clase" element={<Contador/>}/>
            <Route path="contador-funcion-hook" element={<ContadorF/>}/>
            <Route path="componente-main-funcion-props" element={<AppFA/>}/>
            <Route path="componente-main-clase-props" element={<AppC/>}/>

            <Route path="productos-bodega" element={<ProductosB/>}>
                <Route path=":id" element={<ProductoB/>}/>
            </Route>

            <Route path="gestor-empresa-axios" element={<GestorEmpresas/>}/>
            <Route path="contador-redux" element={<ContadorUI/>}/>
            <Route path="bodega-redux" element={<ProductoBUI/>}/>

            <Route path="/" element={<Home/>} />
            <Route path="*" element={<p className="alert alert-danger mt-2 lead fs-2">Pagina no encontrada</p>}/>
        </Routes>

        </header>
    )
}

export default Menu;