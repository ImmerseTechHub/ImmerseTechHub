import React, { useState } from 'react';

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
    <form>
      <div>
        <label htmlFor="nombre">Nombre:</label>
        <input
          type="text"
          id="nombre"
          name="nombre"
          value={formData.nombre}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="apellido">Apellido:</label>
        <input
          type="text"
          id="apellido"
          name="apellido"
          value={formData.apellido}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="movil">Móvil:</label>
        <input
          type="tel"
          id="movil"
          name="movil"
          value={formData.movil}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="mensaje">Mensaje:</label>
        <textarea
          id="mensaje"
          name="mensaje"
          value={formData.mensaje}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit" style={{ backgroundColor: 'orange', color: 'white' }}>
        Enviar
      </button>
    </form>
  );
};

export default Form;
