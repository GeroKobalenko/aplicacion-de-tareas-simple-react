import React from 'react';
import './tarea.css';

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

    const { tarea } = this.props
    return (
      <li className="list-group-item d-flex justify-content-between my-2">
        <h6 className={`mt-1 mb-0 align-middle ${tarea.completada ? 'completed-task' : ''}`}>{tarea.descripcion}</h6>
        <div className="todo-icon">
          <span
            onClick={this.completarTarea}
            className={`mx-2 ${tarea.completada ? 'text-success' : 'text-secondary'}`}
          >
            <i className={`${tarea.completada ? 'far fa-check-square' : 'far fa-square'}`} />
          </span>
          <span
            className="mx-2 text-danger"
            onClick={this.eliminarTarea}
          >
            <i className="fas fa-trash" />
          </span>
        </div>
      </li>
    )
  }
}

export default Tarea;
