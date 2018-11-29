import React, { Component } from 'react';
import Header from './Componentes/Header';
import AgregarCitas from './Componentes/AgregarCitas';
import ListaCitas from './Componentes/ListaCitas';

class App extends Component {

state = {
  citas: []
}

crearCita = (nuevaCita) => {
  //obtener una copia del state
  const citas = [...this.state.citas, nuevaCita]
  console.log(citas);

  this.setState({
    citas
  });
}

  render() {
    return (
      <div className="container">
        <Header
          titulo={'Turnos pacientes'}
        />
        <div className="row">
          <div className="col-md-6">
            <AgregarCitas
              crearCita={this.crearCita}
            />
          </div>
          <div className="col-md-6">
            <ListaCitas
              citas = {this.state.citas}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
