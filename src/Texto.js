import React from "react"

import styled from "styled-components"

const LineaParrafo = styled.p`
    background-color:grey;
    color:white;
    margin:2rem 2rem;
    text-align:center;
`

function Texto(props) {
    return (
        <div>
            <LineaParrafo>{props.linea}</LineaParrafo>
        </div>
    )
}


export default Texto