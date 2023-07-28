import React from "react";
const SecondsCounter =(props) =>{    
const segundo = (tiempo, pos) => {
    let segundos = tiempo
    let longitud = String(segundos).length
    let ultimaPosicion = String(segundos)[longitud-pos]
    return ultimaPosicion
}
return (
    <>
        <div className='px-4 pt-2'>
             <div className='row p-3'>
             <div className='col rounded text-white text-center display-5 mx-3 d-flex align-items-center justify-content-center'><i class="far fa-clock"></i></div>
                <div className='col rounded text-white  display-5 mx-3 d-flex align-items-center justify-content-center'><h1>{segundo(props.seconds,6) ? segundo(props.seconds,6) : "0"}</h1></div>
                <div className='col rounded text-white  display-5 mx-3 d-flex align-items-center justify-content-center'><h1>{segundo(props.seconds,5) ? segundo(props.seconds,5) : "0"}</h1></div>
                <div className='col rounded text-white  display-5 mx-3 d-flex align-items-center justify-content-center'><h1>{segundo(props.seconds,4) ? segundo(props.seconds,4) : "0"}</h1></div>
                <div className='col rounded text-white  display-5 mx-3 d-flex align-items-center justify-content-center'><h1>{segundo(props.seconds,3) ? segundo(props.seconds,3) : "0"}</h1></div>
                <div className='col rounded text-white  display-5 mx-3 d-flex align-items-center justify-content-center'><h1>{segundo(props.seconds,2) ? segundo(props.seconds,2) : "0"}</h1></div>
                <div className='col rounded text-white display-5 mx-3 d-flex align-items-center justify-content-center'><h1>{segundo(props.seconds,1)  ? segundo(props.seconds,1) : "0"}</h1></div>
             </div>
        </div>
    </>
)
}

export default SecondsCounter