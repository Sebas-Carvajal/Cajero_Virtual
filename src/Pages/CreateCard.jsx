import "./CreateCard.css";
import { useState } from "react";
import { Link } from "react-router-dom";

function RequestCard() {
  const [formData, setFormData] = useState({
    nombres: "",
    apellidos: "",
    direccion: "",
    telefono: "",
    ingresos: "",
    pin: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Solicitud enviada:", formData);
  };

  return (
    <div className="request-container">
      <div className="request-card">
        <h2 className="request-title">SOLICITAR TARJETA DE CREDITO</h2>
        <form className="request-form" onSubmit={handleSubmit}>
          <div className="request-group">
            <label>Nombres</label>
            <input
              type="text"
              name="nombres"
              value={formData.nombres}
              onChange={handleChange}
            />
          </div>

          <div className="request-group">
            <label>Apellidos</label>
            <input
              type="text"
              name="apellidos"
              value={formData.apellidos}
              onChange={handleChange}
            />
          </div>

          <div className="request-group">
            <label>Dirección</label>
            <input
              type="text"
              name="direccion"
              value={formData.direccion}
              onChange={handleChange}
            />
          </div>

          <div className="request-group">
            <label>Teléfono</label>
            <input
              type="text"
              name="telefono"
              value={formData.telefono}
              onChange={handleChange}
            />
          </div>

          <div className="request-group">
            <label>Ingresos mensuales</label>
            <input
              type="number"
              name="ingresos"
              value={formData.ingresos}
              onChange={handleChange}
            />
          </div>

          <div className="request-group">
            <label>Pin</label>
            <input
              type="password"
              name="pin"
              value={formData.pin}
              onChange={handleChange}
            />
          </div>

          <div className="request-button-container">
            <Link to="/ConfirmationCard" className="cajero-title-link"><button type="submit" className="request-button">
              Enviar
            </button></Link>
            
          </div>
        </form>
      </div>
    </div>
  );
}

export default RequestCard;
