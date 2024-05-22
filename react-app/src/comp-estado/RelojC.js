import { Component } from "react";

class RelojC extends Component{

    state={
        fecha:new Date()
    }

    actualizaFecha=()=>{
        this.setState({
            fecha:new Date()
        })
    }

    componentDidMount=()=>{
        this.id=setInterval(() => {
            this.actualizaFecha()
        }, 1000);
    }

    componentWillUnmount=()=>{
        clearInterval(this.id)
    }

    render=()=>{
        return(
            <div className="container mt-3">
                <section className="alert alert-warning">
                    <p className="lead fs-4">{this.state.fecha.toLocaleString()}</p>
                </section>    
            </div>
        )
    }
}

export default RelojC;