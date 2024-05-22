import { useEffect, useState } from "react";
import ListarEmpresas from "./ListarEmpresas";
import RegistrarEmpresa from "./RegistrarEmpresa";
import axios from 'axios';

const GestorEmpresas =()=>{

    const url="http://localhost:3001/empresas";
    const [empresas,setEmpresas]=useState([]);

    const listaEmpresa=()=>{
        axios.get(`${url}`)
        .then(resp=>{
            setEmpresas(
               resp.data
            )
        })
    }
    
    useEffect(()=>{
        listaEmpresa()
    },[])

    const eliminarEmpresa=(empresa)=>{
        let confirmar=window.confirm(`Desea Eliminar la empresa ${empresa.nombre} cuya calificacion ${empresa.calificacion}?`);
        if(confirmar){
            axios.delete(`${url}/${empresa.id}`)
            .then(resp=>{
                listaEmpresa();
            })

        }
    }

    const editarEmpresa =(emp)=>{
        document.getElementById("id").value=emp.id;
        document.getElementById("nombre").value=emp.nombre;
        document.getElementById("descripcion").value=emp.descripcion;
        document.getElementById("calificacion").value=emp.calificacion;
    }
    
    const actualizarEmpresa=(e)=>{
        e.preventDefault();
        let id=document.getElementById("id").value;

        const objEmpresa={
            nombre:document.getElementById("nombre").value,
            descripcion:document.getElementById("descripcion").value,
            calificacion:document.getElementById("calificacion").value
        }

        axios.put(`${url}/${id}`,objEmpresa)
        .then(resp=>{
            listaEmpresa();
        })
    }

    return(
        <main>
            <div className="row">
                <p className="lead fs-2 text-primary">Gestor de Empresas</p>
                <div className="col col-7 border border-2 border-primary shadow m-2 p-2">
                    <ListarEmpresas empresas={empresas} onEliminar={eliminarEmpresa} onEditar={editarEmpresa}/>
                </div>
                <div className="col col-4 border border-2 border-primary shadow m-2 p-2">
                    <RegistrarEmpresa url={url} onListar={listaEmpresa}/>
                </div>
            </div>

            {/* modal */}
            <div className="modal fade" id="modal" tabIndex="-1" aria-hidden="true" data-bs-backdrop="false">
                <div className="modal-dialog">
                    <form onSubmit={actualizarEmpresa}>
                        <div className="modal-content">

                            <div className="modal-header bg-primary text-white">
                                <h5 className="modal-title">Actualizar Empresa</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="close"></button>
                            </div>

                            <div className="modal-body">
                                <div className="form-group">
                                    <input type="hidden" id="id"/>
                                    <label className="lead fs-4 text-primary">Nombre</label>
                                    <input type="text" id="nombre" className="form-control"/>
                                </div>

                                <div className="form-group">
                                    <label className="lead fs-4 text-primary">Descripcion</label>
                                    <input type="text" className="form-control" id="descripcion"/>
                                </div>

                                <div className="form-group">
                                    <label className="lead fs-4 text-primary">Calificacion</label>
                                    <input type="text" className="form-control" id="calificacion"/>
                                </div>

                                <div className="form-group">
                                    <button className="btn btn-sm btn-warning mt-2 mb-2" data-bs-dismiss="modal">Actualizar</button>
                                </div>
                            </div>

                        </div>
                    </form>
                </div>
            </div>


        </main>
    )
}
export default GestorEmpresas;