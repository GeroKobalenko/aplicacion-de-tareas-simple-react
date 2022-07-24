import React from 'react';
import './App.css';
import ListaDeTareas from './componentes/lista-tareas/lista-tareas';
import InputTarea from './componentes/input-tarea/input-tarea';

class Application extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      tareas: [],
    }
    this.agregarTarea = this.agregarTarea.bind(this);
    this.cambioStateListaTareas = this.cambioStateListaTareas.bind(this);
  }

  agregarTarea(tarea) {
    let tareaAux = this.state.tareas.find(t => t.descripcion === tarea.descripcion);
    let tareasAux = this.state.tareas;
    if (!tareaAux){
      tareasAux.push(tarea);
    }
    else{
      alert("Ya existe una tarea con el nombre ingresado.")
    }
    this.setState((state) => {
      return {tareas: tareasAux}
    });
  }

  cambioStateListaTareas(tareas){
    this.setState((state) => {
      return {tareas: tareas}
    });
  }

  render() {
    return (
      <div className="aplicacion-tareas">
        <div className="contenedor-titulo">
          <h1>Aplicación de tareas</h1>
        </div>
        <div className="contenedor-lista-tareas">
          <h1>Mis tareas</h1>
          <InputTarea onSubmit={this.agregarTarea} />
          <ListaDeTareas tareas={this.state.tareas} cambioState={this.cambioStateListaTareas}/>
        </div>
      </div>
    )
  }
}

export default Application;
