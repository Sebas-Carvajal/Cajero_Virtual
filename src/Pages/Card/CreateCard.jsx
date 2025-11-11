import "./CreateCard.css";
import { useState } from "react";
import { API_BASE_URL } from '../config';
import { useNavigate } from "react-router-dom";

function RequestCard() {
  const [formData, setFormData] = useState({
    nombres: "",
    apellidos: "",
    direccion: "",
    telefono: "",
    correo: "",
    pin: "",
  });
  
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

const handleSubmit = async (e) => {
  e.preventDefault();
  
  try {
    const response = await fetch(`${API_BASE_URL}/api/tarjetas`, { // ← Verifica esta URL
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    
    if (response.ok) {
      const result = await response.json();
      console.log("Tarjeta creada:", result);
      
      
      navigate("/ConfirmationCard", { 
        state: { 
          numeroTarjeta: result.numeroTarjeta, 
          cvv: result.cvv                       
        } 
      });
    } else {
      console.error("Error al crear tarjeta");
      alert("Error al crear tarjeta. Intenta nuevamente.");
    }
  } catch (error) {
    console.error("Error:", error);
    alert("Error de conexión. Intenta nuevamente.");
  }
};

  return (
    <div className="request-container">
      <div className="request-card">
        <h2 className="request-title">CREAR NUEVA CUENTA</h2>
        <form className="request-form" onSubmit={handleSubmit}>
          <div className="request-group">
            <label>Nombres</label>
            <input
              type="text"
              name="nombres"
              value={formData.nombres}
              onChange={handleChange}
              required
            />
          </div>

          <div className="request-group">
            <label>Apellidos</label>
            <input
              type="text"
              name="apellidos"
              value={formData.apellidos}
              onChange={handleChange}
              required
            />
          </div>

          <div className="request-group">
            <label>Dirección</label>
            <input
              type="text"
              name="direccion"
              value={formData.direccion}
              onChange={handleChange}
              required
            />
          </div>

          <div className="request-group">
            <label>Teléfono</label>
            <input
              type="text"
              name="telefono"
              value={formData.telefono}
              onChange={handleChange}
              required
            />
          </div>

          <div className="request-group">
            <label>Correo electrónico</label>
            <input
              type="email"
              name="correo"
              value={formData.correo}
              onChange={handleChange}
              required
            />
          </div>

          <div className="request-group">
            <label>Pin</label>
            <input
              type="password"
              name="pin"
              value={formData.pin}
              onChange={handleChange}
              required
              minLength="4"
              maxLength="4"
            />
          </div>

          <div className="request-button-container">
            <button type="submit" className="request-button">
              Crear Cuenta
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default RequestCard;