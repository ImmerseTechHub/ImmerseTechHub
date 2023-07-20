import React, { useState } from 'react';
import './Form.css';


const Form = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    email: '',
    movil: '',
    mensaje: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  return (
    <form id="container">
      <div className="name" >
      <label htmlFor="nombre">Nombre</label>&nbsp;
        <input
          type="text"
          id="nombre"
          name="nombre"
          value={formData.nombre}
          onChange={handleChange}
          required
        />
      </div>
      <div className='surname'>
        <label htmlFor="apellido">Apellido</label>&nbsp;
        <input
          type="text"
          id="apellido"
          name="apellido"
          value={formData.apellido}
          onChange={handleChange}
          required
        />
      </div>
      <div className='mail'>
        <label htmlFor="email">Email</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div className='phone'>
        <label htmlFor="movil">Móvil</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <input
          type="tel"
          id="movil"
          name="movil"
          value={formData.movil}
          onChange={handleChange}
          required
        />
      </div>
      <div className='message'>
        <label htmlFor="mensaje">Mensaje</label>&nbsp;
        <textarea
          id="mensaje"
          name="mensaje"
          value={formData.mensaje}
          onChange={handleChange}
          required
        />
      </div >
      <button className='boton' type="submit" style={{ backgroundColor: '#ff914d', color: 'white' }}>
        Enviar
      </button>
    </form>
  );
};

export default Form;
