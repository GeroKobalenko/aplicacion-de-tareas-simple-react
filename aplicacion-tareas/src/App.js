import React from 'react';
import ListaDeTareas from './componentes/lista-tareas/lista-tareas';
import InputTarea from './componentes/input-tarea/input-tarea';

class Application extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      tareas: [],
      filtrado: 'todas'
    }

    this.agregarTarea = this.agregarTarea.bind(this);
    this.cambioStateListaTareas = this.cambioStateListaTareas.bind(this);
    this.actualizarFiltroTareas = this.actualizarFiltroTareas.bind(this);
    this.borrarTareas = this.borrarTareas.bind(this);
  }

  agregarTarea(tarea) {
    let tareaAux = this.state.tareas.find(t => t.descripcion === tarea.descripcion);
    let tareasAux = this.state.tareas;
    if (!tareaAux) {
      tareasAux.push(tarea);
    }
    else {
      alert("Ya existe una tarea con el nombre ingresado.")
    }
    this.setState((state) => {
      return { tareas: tareasAux }
    });
  }

  cambioStateListaTareas(tareas) {
    this.setState((state) => {
      return { tareas: tareas }
    });
  }

  actualizarFiltroTareas(filtro) {
    this.setState({
      filtrado: filtro
    });
  }

  borrarTareas(opcion) {
    if (opcion === 'todas') {
      this.setState((state) => {
        return { tareas: [] }
      });
    }
    else if (opcion === 'hechas') {
      let tareasAux = this.state.tareas.filter(item => !item.completada)
      this.setState((state) => {
        return { tareas: tareasAux }
      });
    }
  }

  render() {

    let tareas = []
    if (this.state.filtrado === "todas") {
      tareas = this.state.tareas;
    } else if (this.state.filtrado === "por-hacer") {
      tareas = this.state.tareas.filter(tarea => !tarea.completada);
    } else if (this.state.filtrado === "hechas") {
      tareas = this.state.tareas.filter(tarea => tarea.completada);
    }

    return (
      <div className="container">
        <div className="row">
          <div className='col-10 col-md-8 mx-auto mt-4'>
            <InputTarea onSubmit={this.agregarTarea} />
            <ListaDeTareas
              tareas={tareas}
              borrarTareas={this.borrarTareas}
              actualizarFiltroTareas={this.actualizarFiltroTareas}
              cambioState={this.cambioStateListaTareas} />
          </div>
        </div>
      </div>
    )
  }
}

export default Application;
