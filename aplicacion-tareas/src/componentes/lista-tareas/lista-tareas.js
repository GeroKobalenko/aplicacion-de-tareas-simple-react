import React, { Fragment } from 'react';
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
      if (tarea.id === id) {
        tarea.completada = !tarea.completada;
      }
      return tarea;
    });
    this.props.cambioState(tareasActualizadas);
  }

  render() {

    const { actualizarFiltroTareas, borrarTareas, tareas } = this.props

    return (
      <Fragment>
        <h3 className="text-center">Filtrar por</h3>

        <div className='row'>
          <div className="col-md-4">
            <button
              type="button"
              className="btn btn-info btn-block mt-1"
              onClick={() => actualizarFiltroTareas("todas")}
            >
              Todas
            </button>
          </div>
          <div className="col-md-4">
            <button
              type="button"
              className="btn btn-info btn-block mt-1"
              onClick={() => actualizarFiltroTareas("hechas")}
            >
              Hechas
            </button>
          </div>
          <div className="col-md-4">
            <button
              type="button"
              className="btn btn-info btn-block mt-1"
              onClick={() => actualizarFiltroTareas("por-hacer")}
            >
              Por hacer
            </button>
          </div>
        </div>

        {
          tareas.length === 0 ? '' :
            <ul className="list-group my-5">
              {
                tareas.map(tarea => {
                  return (
                    <Tarea
                      key={tarea.id}
                      tarea={tarea}
                      eliminarTarea={this.eliminarTarea}
                      completarTarea={this.completarTarea}
                    />
                  )
                })
              }
              <div className="row mt-4">
                <div className="col-md-6">
                  <button
                    type="button"
                    className="btn btn-danger btn-block mt-1"
                    onClick={() => borrarTareas('hechas')}
                  >
                    Borrar tareas hechas
                  </button>
                </div>
                <div className="col-md-6">
                  <button
                    type="button"
                    className="btn btn-danger btn-block mt-1"
                    onClick={() => borrarTareas('todas')}
                  >
                    Borrar todo
                  </button>
                </div>
              </div>
            </ul>
        }
      </Fragment>
    )
  }
}

export default ListaTareas;
