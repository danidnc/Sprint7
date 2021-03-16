import React from "react"

import styled from "styled-components"

const LineaParrafo = styled.p`
    background-color:grey;
    color:white;
    margin:2rem 2rem;
    text-align:center;
`
const LineaSeleccionada = styled.p`
background-color:red;
color:white;
margin:2rem 2rem;
text-align:center;
font-size:1.5em;
`

function Texto(props) {

    let lineas = props.texto.map(linea => <LineaParrafo key={linea}>{linea}</LineaParrafo>)

    console.log(props);
    console.log(lineas);
    lineas[props.id] = <LineaSeleccionada key={props.linea}>{props.texto[props.id]}</LineaSeleccionada>
    return (
        <div>
            {lineas}
        </div>
    )
}


export default Texto