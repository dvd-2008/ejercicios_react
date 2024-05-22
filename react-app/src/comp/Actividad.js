const Actividad = (props) => {

    const {actividad}=props;

    return (
            <>
            <span className="lead fs-4 text-dark">{actividad.actividad}</span>
            <br />
            <span className="lead fs-6 text-dark">Avance: {`${actividad.avance} %   `}Responsable: {actividad.responsable}</span>

            </>
    )
}
export default Actividad;