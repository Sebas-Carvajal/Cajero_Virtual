import "./CreateAccount.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Cambia Link por useNavigate

function CreateAccount() {
  const [formData, setFormData] = useState({
    nombres: "",
    apellidos: "",
    direccion: "",
    telefono: "",
    correo: "",
    pin: "",
  });

  const navigate = useNavigate(); // Agrega esto

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const API_URL = "https://tu-backend-railway.up.railway.app/api/accounts";
      
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      
      if (response.ok) {
        const result = await response.json();
        console.log("Cuenta creada:", result);
        
        // Navegar a la página de confirmación con el número de cuenta
        navigate("/ConfirmationAccount", { 
          state: { 
            numeroCuenta: result.numeroCuenta
          } 
        });
      } else {
        console.error("Error al crear la cuenta");
        alert("Error al crear la cuenta. Intenta nuevamente.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Error de conexión. Intenta nuevamente.");
    }
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
              required
            />
          </div>

          <div className="create-group">
            <label>Apellidos</label>
            <input
              type="text"
              name="apellidos"
              value={formData.apellidos}
              onChange={handleChange}
              required
            />
          </div>

          <div className="create-group">
            <label>Dirección</label>
            <input
              type="text"
              name="direccion"
              value={formData.direccion}
              onChange={handleChange}
              required
            />
          </div>

          <div className="create-group">
            <label>Teléfono</label>
            <input
              type="text"
              name="telefono"
              value={formData.telefono}
              onChange={handleChange}
              required
            />
          </div>

          <div className="create-group">
            <label>Correo</label>
            <input
              type="email"
              name="correo"
              value={formData.correo}
              onChange={handleChange}
              required
            />
          </div>

          <div className="create-group">
            <label>Pin</label>
            <input
              type="password"
              name="pin"
              value={formData.pin}
              onChange={handleChange}
              required
              minLength="4"
              maxLength="4"
              placeholder="4 dígitos"
            />
          </div>

          <div className="create-button-container">
            {/* REMUEVE el Link y deja solo el button */}
            <button type="submit" className="request-button">
              Crear Cuenta
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreateAccount;