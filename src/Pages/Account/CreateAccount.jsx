import "./CreateAccount.css";
import { useState } from "react";
import { Link } from "react-router-dom";

function CreateAccount() {
  const [formData, setFormData] = useState({
    nombres: "",
    apellidos: "",
    direccion: "",
    telefono: "",
    correo: "",
    pin: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Datos enviados:", formData);
  };

  return (
    <div className="create-container">
      <div className="create-card">
        <h2 className="create-title">CREAR CUENTA DE AHORROS</h2>
        <form className="create-form" onSubmit={handleSubmit}>
          <div className="create-group">
            <label>Nombres</label>
            <input
              type="text"
              name="nombres"
              value={formData.nombres}
              onChange={handleChange}
            />
          </div>

          <div className="create-group">
            <label>Apellidos</label>
            <input
              type="text"
              name="apellidos"
              value={formData.apellidos}
              onChange={handleChange}
            />
          </div>

          <div className="create-group">
            <label>Dirección</label>
            <input
              type="text"
              name="direccion"
              value={formData.direccion}
              onChange={handleChange}
            />
          </div>

          <div className="create-group">
            <label>Teléfono</label>
            <input
              type="text"
              name="telefono"
              value={formData.telefono}
              onChange={handleChange}
            />
          </div>

          <div className="create-group">
            <label>Correo</label>
            <input
              type="email"
              name="correo"
              value={formData.correo}
              onChange={handleChange}
            />
          </div>

          <div className="create-group">
            <label>Pin</label>
            <input
              type="password"
              name="pin"
              value={formData.pin}
              onChange={handleChange}
            />
          </div>

          <div className="create-button-container">
            <Link to="/ConfirmationAccount" className="cajero-title-link"><button type="submit" className="request-button">
              Enviar
            </button></Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreateAccount;
