import React from "react";

import dataTexto from "./Texto.json"
import Texto from "./Texto"

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      texto: dataTexto
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
