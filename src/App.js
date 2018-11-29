import React, { Component } from 'react';
import Header from './Componentes/Header';
import AgregarCitas from './Componentes/AgregarCitas';
class App extends Component {

crearCita = () => {
  console.log('desde app');
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
              crearCita={this.AgregarCitas}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
