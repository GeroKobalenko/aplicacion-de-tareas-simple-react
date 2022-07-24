import React from 'react';
import './lista-tareas.css';
import Tarea from '../tarea/tarea';

class ListaTareas extends React.Component {

  constructor(props) {
    super(props);

    this.eliminarTarea = this.eliminarTarea.bind(this);
    this.completarTarea = this.completarTarea.bind(this);
  }

  eliminarTarea(id) {
    let tareasActualizadas = this.props.tareas.filter(tarea => tarea.id !== id);
    this.props.cambioState(tareasActualizadas);
  }

  completarTarea(id) {
    let tareasActualizadas = this.props.tareas.map(tarea => {
      if (tarea.id === id){
        tarea.completada = !tarea.completada;
      }
      return tarea;
    });
    this.props.cambioState(tareasActualizadas);
  }

  render() {
    return (
      <div className='lista-tareas'>
        {
          this.props.tareas.map(tarea =>
            <Tarea
              key={tarea.id}
              tarea={tarea}
              completarTarea={this.completarTarea}
              eliminarTarea={this.eliminarTarea}
            />
          )
        }
      </div>
    )
  }
}

export default ListaTareas;
