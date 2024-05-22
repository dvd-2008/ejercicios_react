const ListarEmpresas = (props) => {

    const { empresas, onEliminar, onEditar } = props;

    return (
        <section>
            <p className="lead fs-4 text-primary">Listado de Empresas: {empresas.length}</p>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>Empresa</th>
                        <th>Descripcion</th>
                        <th>Calificacion</th>
                        <th>Editar</th>
                        <th>Eliminar</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        empresas.map((emp) => (
                            <tr key={emp.id}>
                                <td>{emp.nombre}</td>
                                <td>{emp.descripcion}</td>
                                <td>{emp.calificacion}</td>
                                <td>
                                    <button className="btn btn-sm btn-warning"
                                        data-bs-toggle="modal" data-bs-target="#modal"
                                       onClick={()=>onEditar(emp)} >
                                        Editar
                                    </button>
                                </td>
                                <td>
                                    <button className="btn btn-sm btn-danger" onClick={() => onEliminar(emp)} >Eliminar</button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </section>
    )
}
export default ListarEmpresas;