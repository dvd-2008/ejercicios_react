const TablaPlatos = (props) => {

    const {platos}=props;

    return (
        <table className="table table-hover table-dark">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Plato</th>
                    <th>Precio S/.</th>
                </tr>
            </thead>
            <tbody>
                {
                    platos.map((x) => (
                        <tr key={x.id}>
                            <td>{x.id}</td>
                            <td>{x.nombre}</td>
                            <td>{x.precio}</td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    )
}

export default TablaPlatos;