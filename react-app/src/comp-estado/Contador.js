import { Component } from 'react';

class Contador extends Component {

    state = {
        contador: 15,
        nota: 0,
        accion: '',
        contauto: 0,

    }

    incrementarContador = () => {
        this.setState({
            contador: this.state.contador + 1
        })
    }

    decrementarContador = () => {
        this.setState({
            contador: this.state.contador - 1
        })
    }


    aumentaNota = () => {
        this.setState({
            nota: this.state.nota === 20 ? 0 : this.state.nota + 1,
            accion: this.state.nota === 20 ? 'reinicio' : 'Ud aumentando la nota'
        })
    }

    disminuyeNota = () => {
        this.setState({
            nota: this.state.nota === 0 ? 0 : this.state.nota - 1,
            accion: this.state.nota === 0 ? 'reinicio' : 'Ud disminuye la nota'
        })
    }

    actualizaAuto=()=>{
        this.setState({
            contauto:this.state.contauto===5?0:this.state.contauto+1
        })
    }

    componentDidMount=()=>{
        this.id=setInterval(() => {
            this.actualizaAuto();
        }, 1000);
    }

    componentWillUnmount=()=>{
        clearInterval(this.id);
    }

    render = () => {
        return (
            <div className='container'>
                <div className='row'>
                    <p className='lead fs-2 text-primary'>Componente Clase con Estado</p>
                    <div className='col col-3 border border-2 border-primary me-2 mt-3 p-2'>
                        <p className='lead fs-2 text-primary'>Contador: {this.state.contador}</p>
                        <button className='btn btn-primary me-2' onClick={this.incrementarContador}>Incrementar</button>
                        <button className='btn btn-danger' onClick={this.decrementarContador}>Decrementar</button>
                    </div>

                    <div className='col col-4 border border-2 border-primary me-2 mt-3 p-2'>
                        <span className='lead fs-2 text-primary'>Nota: {this.state.nota}</span>
                        <span className='lead fs-4 text-primary'> Accion:{this.state.accion}</span>
                        <hr />
                        <button className='btn btn-info me-2' onClick={this.aumentaNota}>aumenta</button>
                        <button className='btn btn-danger' onClick={this.disminuyeNota}>disminuye</button>
                    </div>

                    <div className='col col-4 border border-2 border-primary me-2 mt-3 p-2'>
                        <p className='lead fs-2 text-primary'>Automatico: {this.state.contauto}</p>
                    </div>

                </div>


            </div>
        )
    }
}
export default Contador;