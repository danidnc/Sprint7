import React from "react";

import lineasTexto from "./Texto.json"
import Texto from "./Texto"

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      texto: lineasTexto
    }
  }
  render() {
    const lineas = this.state.texto.map(linea => <Texto key={linea} linea={linea} />)
    return (
      <div>
        {lineas}
      </div>
    )
  }

}

export default App;
