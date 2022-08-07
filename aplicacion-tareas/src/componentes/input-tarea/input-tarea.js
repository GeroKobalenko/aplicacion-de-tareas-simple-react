import React from 'react';
import { Tarea } from '../../clases/tarea';
import { v4 as uuidv4 } from 'uuid';
import '../input-tarea/input-tarea.css';

class InputTarea extends React.Component {

  constructor(props) {

    super(props);
    this.state = {
      input: ''
    };

    this.cambioInput = this.cambioInput.bind(this);
    this.enviarFormulario = this.enviarFormulario.bind(this);

  }

  enviarFormulario(event) {
    event.preventDefault();
    let nuevaTarea = new Tarea(uuidv4(), this.state.input, false);
    this.props.onSubmit(nuevaTarea);

    this.setState({ input: '' });
  }

  cambioInput(event) {
    this.setState({ input: event.target.value });
  }

  render() {
    return (
      <div className='card card-body my-3'>
        <form
          onSubmit={this.enviarFormulario}>
          <div className='input'>
            <input
              required
              className='form-control'
              type='text'
              placeholder='Escribí una Tarea'
              value={this.state.input}
              name='texto'
              onChange={this.cambioInput}
            />
          </div>

          <button type="submit" className='btn btn-block mt-3 btn-info'>
            Agregar tarea
          </button>
        </form>
      </div>
    )
  }
}

export default InputTarea;
