import "./StyleFunction.css";
import { useState } from "react";
import { Link } from "react-router-dom";

function PayCard() {
  const [monto, setMonto] = useState("");

  const handlePago = async () => {
    if (!monto || monto <= 0) {
      alert("Por favor, ingrese un monto válido para pagar.");
      return;
    }

    // Obtener datos de la tarjeta del localStorage
    const cardData = JSON.parse(localStorage.getItem("card") || "{}");
    
    try {
      const response = await fetch("https://tu-backend-railway.up.railway.app/api/tarjetas/pagar", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          numeroTarjeta: cardData.numeroTarjeta || "987654321",
          monto: parseFloat(monto)
        }),
      });
      
      if (response.ok) {
        const result = await response.json();
        alert(result.mensaje || `Pago de $${monto} realizado correctamente.`);
        setMonto("");
      } else {
        const error = await response.json();
        alert(error.mensaje || "Error al procesar el pago.");
      }
    } catch (error) {
      alert("Error de conexión. Intente nuevamente.");
    }
  };

  return (
    <div className="function-container">
      <div className="function-card">
        <h2 className="function-title">PAGAR TARJETA DE CRÉDITO</h2>

        <input
          type="number"
          className="function-input"
          placeholder="Ingrese monto a pagar"
          value={monto}
          onChange={(e) => setMonto(e.target.value)}
        />

        <button onClick={handlePago} className="function-button">
          Confirmar Pago
        </button>

        <div className="function-footer">
          <Link to="/CardFunction">
            <button className="function-return">Regresar</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default PayCard;