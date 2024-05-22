import axios from "axios";
import { useState } from "react";

const RegistrarEmpresa = (props) => {

    const { url, onListar } = props;

    const objEmpresa = {
        id: 0,
        nombre: '',
        descripcion: '',
        calificacion: 0
    }
    const [empresa, setEmpresa] = useState(objEmpresa)

    const manejadorControles = (e) => {
        let name = e.target.name;
        let value = e.target.value;

        empresa[name] = value;
        setEmpresa(empresa);

    }

    const manejadorSubmit = (e) => {
        e.preventDefault();
        axios.post(`${url}`, empresa)
        .then(resp=>{
            document.getElementById('form-emp').reset();
            onListar();
        })
    }
    return (
        <section>
            <p className="text-primary lead fs-4">Registro de Empresa </p>
            <form onSubmit={manejadorSubmit} id="form-emp">
                <div className="form-group">
                    <label className="form-label text-primary">Nombre</label>
                    <input type="text" name="nombre" className="form-control" required onChange={manejadorControles} />
                </div>
                <div className="form-group">
                    <label className="form-label text-primary">Descripcion</label>
                    <input type="text" name="descripcion" className="form-control" required onChange={manejadorControles} />
                </div>
                <div className="form-group">
                    <label className="form-label text-primary">Calificacion</label>
                    <input type="text" name="calificacion" className="form-control" required onChange={manejadorControles} />
                </div>
                <div className="form-group">
                    <button className="btn btn-sm btn-primary mt-3">Registrar</button>
                </div>
            </form>
        </section>
    )
}
export default RegistrarEmpresa;