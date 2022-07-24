import React from 'react';
import { Tarea } from '../../clases/tarea';
import { v4 as uuidv4 } from 'uuid';
import '../input-tarea/input-tarea.css';
import { AiOutlinePlus } from "react-icons/ai";

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
      <form
        className='formulario-input'
        onSubmit={this.enviarFormulario}>
        <input
          required
          className='tarea-input'
          type='text'
          placeholder='Escribí una Tarea'
          value={this.state.input}
          name='texto'
          onChange={this.cambioInput}
        />
        <button className='tarea-boton'>
          <AiOutlinePlus className='tarea-icono' />
        </button>
      </form>
    )
  }
}

export default InputTarea;
