import "./Login.css";
import { API_BASE_URL } from '../config';
import { useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import axios from "axios";

function LoginCard() {
  const [activeTab, setActiveTab] = useState("ahorros");
  const [numeroCuenta, setNumeroCuenta] = useState("");
  const [pin, setPin] = useState("");
  const [numeroTarjeta, setNumeroTarjeta] = useState("");
  const [cvv, setCvv] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const API_BASE_URL = "https://tu-backend-railway.up.railway.app";

  const handleIngresar = async () => {
    setLoading(true);
    try {
      if (activeTab === "ahorros") {
        if (!numeroCuenta || !pin) {
          alert("Por favor, ingrese número de cuenta y PIN.");
          setLoading(false);
          return;
        }

        
        const response = await axios.post(`${API_BASE_URL}/api/login/cuenta`, {
          numeroCuenta,
          pin,
        });

        // CAMBIO IMPORTANTE: Verificar si la respuesta es exitosa (200-299)
        if (response.status >= 200 && response.status < 300) {
          alert("Inicio de sesión exitoso en cuenta de ahorros");
          navigate("/AccountFunction");
        } else {
          // Mostrar el mensaje de error que viene del backend
          alert(response.data || "Credenciales incorrectas.");
        }

      } else {
        if (!numeroTarjeta || !cvv || !pin) {
          alert("Por favor, ingrese número de tarjeta, CVV y PIN.");
          setLoading(false);
          return;
        }

        const response = await axios.post("http://localhost:8080/api/login/tarjeta", {
          numeroTarjeta,
          cvv,
          pin,
        });

        // CAMBIO IMPORTANTE: Verificar si la respuesta es exitosa (200-299)
        if (response.status >= 200 && response.status < 300) {
          alert("Inicio de sesión exitoso en tarjeta de crédito");
          navigate("/CardFunction");
        } else {
          // Mostrar el mensaje de error que viene del backend
          alert(response.data || "Credenciales incorrectas.");
        }
      }
    } catch (error) {
      console.error("Error al iniciar sesión:", error);
      
      // CAMBIO IMPORTANTE: Mostrar el mensaje específico del error
      if (error.response) {
        // El servidor respondió con un error (401, 404, 500, etc.)
        alert(`Error: ${error.response.data}`);
      } else if (error.request) {
        // No se pudo conectar al servidor
        alert("Error de conexión: No se pudo contactar al servidor.");
      } else {
        // Error en la configuración
        alert("Error: " + error.message);
      }
    } finally {
      setLoading(false);
    }
  };

  
  return (
    <div className="cajero-container">
      <header className="cajero-header">
        <Link to="/" className="title">
          <h1 className="cajero-title">Cajero Virtual</h1>
        </Link>
      </header>

      <main className="cajero-main">
        <div className="cajero-card">
          <h2 className="cajero-subtitle">Bienvenido</h2>
          
          <div className="cajero-tabs">
            <button
              onClick={() => setActiveTab("ahorros")}
              className={
                activeTab === "ahorros"
                  ? "cajero-tab cajero-tab-active"
                  : "cajero-tab cajero-tab-inactive"
              }
            >
              Cuenta<br />Ahorros
            </button>
            <button
              onClick={() => setActiveTab("credito")}
              className={
                activeTab === "credito"
                  ? "cajero-tab cajero-tab-active"
                  : "cajero-tab cajero-tab-inactive"
              }
            >
              Tarjeta<br />Credito
            </button>
          </div>

          <div className="cajero-form">
            {activeTab === "ahorros" ? (
              <>
                <div className="cajero-input-group">
                  <label className="cajero-label">No. Cuenta</label>
                  <input
                    type="text"
                    value={numeroCuenta}
                    onChange={(e) => setNumeroCuenta(e.target.value)}
                    className="cajero-input"
                  />
                </div>

                <div className="cajero-input-group">
                  <label className="cajero-label">Pin</label>
                  <input
                    type="password"
                    value={pin}
                    onChange={(e) => setPin(e.target.value)}
                    className="cajero-input"
                  />
                </div>
              </>
            ) : (
              <>
                <div className="cajero-input-group">
                  <label className="cajero-label">No. Tarjeta</label>
                  <input
                    type="text"
                    value={numeroTarjeta}
                    onChange={(e) => setNumeroTarjeta(e.target.value)}
                    className="cajero-input"
                  />
                </div>

                <div className="cajero-input-group">
                  <label className="cajero-label">CVV</label>
                  <input
                    type="password"
                    value={cvv}
                    onChange={(e) => setCvv(e.target.value)}
                    className="cajero-input"
                  />
                </div>

                <div className="cajero-input-group">
                  <label className="cajero-label">Pin</label>
                  <input
                    type="password"
                    value={pin}
                    onChange={(e) => setPin(e.target.value)}
                    className="cajero-input"
                  />
                </div>
              </>
            )}

            <div className="cajero-button-wrapper">
              <button
                onClick={handleIngresar}
                className="cajero-button"
                disabled={loading}
              >
                {loading ? "Ingresando..." : "Ingresar"}
              </button>
            </div>
          </div>
        </div>

        <div className="cajero-link-wrapper">
          {activeTab === "ahorros" ? (
            <Link to="/CreateAccount" className="cajero-title-link"><p>Crear Cuenta de Ahorros</p></Link>
          ) : (
            <Link to="/CreateCard" className="cajero-title-link"><p>Solicitar Tarjeta de Crédito</p></Link>
          )}
        </div>
      </main>

      <footer className="cajero-footer">
        <p className="cajero-footer-text"></p>
      </footer>
    </div>
  );
}

export default LoginCard;