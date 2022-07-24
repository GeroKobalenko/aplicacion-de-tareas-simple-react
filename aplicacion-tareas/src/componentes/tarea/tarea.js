import React from 'react';
import './tarea.css';
import { AiOutlineCloseCircle } from "react-icons/ai";

class Tarea extends React.Component {

  constructor(props) {
    super(props);

    this.eliminarTarea = this.eliminarTarea.bind(this);
    this.completarTarea = this.completarTarea.bind(this);
  }

  completarTarea() {
    this.props.completarTarea(this.props.tarea.id);
  }

  eliminarTarea() {
    this.props.eliminarTarea(this.props.tarea.id);
  }

  render() {
    return (
      <div className={this.props.tarea.completada ? 'tarea-contenedor completada' : 'tarea-contenedor'}>
        <div
          className='tarea-texto'
          onClick={this.completarTarea}>
          {this.props.tarea.descripcion}
        </div>
        <div
          className='tarea-contenedor-iconos'
          onClick={this.eliminarTarea}>
          <AiOutlineCloseCircle className='tarea-icono' />
        </div>
      </div>
    )
  }
}

export default Tarea;
