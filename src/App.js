import React, { Component } from 'react';
import Header from './Componentes/Header';
import AgregarCitas from './Componentes/AgregarCitas';
import ListaCitas from './Componentes/ListaCitas';

class App extends Component {

    state = {
        citas: []
    }


    //LOCAL STORAGE
    componentDidMount() {
            const citasLS = localStorage.getItem('citas');
            if (citasLS) {
                this.setState({
                    citas: JSON.parse(citasLS) //lo convierto nuvamente en objeto
                })
            }
        }
        //local storage solo puede almacenar cadena de texto. se almacena segun el dominio,
    componentDidUpdate() {
        localStorage.setItem(
            'citas',
            JSON.stringify(this.state.citas) //convierte el arreglo en string

        )
    }

    crearCita = (nuevaCita) => {
        //obtener una copia del state
        const citas = [...this.state.citas, nuevaCita]
        console.log(citas);

        this.setState({
            citas
        });
    }
    borrarCita = (id) => {
        //objetener citas del state
        const citasActuales = [...this.state.citas];

        //borrar elemento
        const citas = citasActuales.filter(cita => cita.id !== id);
        //actualizar el state
        this.setState({
            citas
        })
    }
    render() {
        return ( <
            div className = "container" >
            <
            Header titulo = { 'Turnos pacientes' }
            /> <
            div className = "row" >
            <
            div className = "col-md-6" >
            <
            AgregarCitas crearCita = { this.crearCita }
            /> < /
            div > <
            div className = "col-md-6" >
            <
            ListaCitas citas = { this.state.citas }
            borrarCita = { this.borrarCita }
            /> < /
            div > <
            /div> < /
            div >
        );
    }
}

export default App;