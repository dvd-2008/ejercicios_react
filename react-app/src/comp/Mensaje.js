const Mensaje=(props)=>{

    const {contenido, indestilo}=props;

    const fnColocaEstilo=()=>{
        let estilo=`lead fs-2 `
        switch (indestilo) {
            case "1":{
                estilo+=`bg-primary text-white p-2`
                break;
            }
            case "2":{
                estilo+=`bg-warning text-dark p-3`
                break;
            }
            case "3":{
                estilo+=`bg-danger text-white p-3`
                break;
            }
            default:
                {
                    break;
                }
               
        }
        return estilo;
    }

    return(
        <div>
          <p className={fnColocaEstilo()} >Mensaje: {contenido}</p>   
        </div>
    )
}

export default Mensaje;