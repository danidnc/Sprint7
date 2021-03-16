import React from "react";


import styled from "styled-components"
import dataTexto from "./Texto.json"
import Texto from "./Texto"
import Boton from "./Botones"

const ContenedorBotones = styled.div`
    display:flex;
    justify-content:space-between;
    margin:2rem;
`

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      texto: dataTexto,
      idLinea: 0
    }
    this.manejadorClickAnterior = this.manejadorClickAnterior.bind(this)
    this.manejadorClickSiguiente = this.manejadorClickSiguiente.bind(this)
  }

  manejadorClickAnterior() {
    if (this.state.idLinea > 0) {
      this.setState({ idLinea: this.state.idLinea - 1 })
    }
  }

  manejadorClickSiguiente() {
    if (this.state.idLinea < (this.state.texto.length - 1)) {
      this.setState({ idLinea: this.state.idLinea + 1 })
    }
  }

  render() {
    //const lineas = this.state.texto.map(linea => <Texto key={linea} linea={linea} />)
    //console.log(this.state.idLinea)
    return (
      <div>
        <ContenedorBotones>
          <Boton onClick={this.manejadorClickAnterior} title="Linea Anterior" />
          <Boton onClick={this.manejadorClickSiguiente} title="Siguiente Linea" />
        </ContenedorBotones>
        <Texto linea={this.state.texto[this.state.idLinea]} id={this.state.idLinea} texto={this.state.texto} />
      </div>
    )
  }

}


export default App;
