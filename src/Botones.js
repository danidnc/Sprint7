import React from "react"

import styled from "styled-components"

const Boton = styled.button`
    width:50%;
    height:2rem;
`

function Botones(props) {
    return (
        <Boton onClick={props.onClick}>{props.title}</Boton>
    )
}

export default Botones