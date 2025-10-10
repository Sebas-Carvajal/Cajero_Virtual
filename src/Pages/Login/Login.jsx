import "./Login.css";
import { useState } from "react";
import { Link,useNavigate } from "react-router-dom";

function LoginCard() {
  const [activeTab, setActiveTab] = useState("ahorros");
  const [numeroCuenta, setNumeroCuenta] = useState("");
  const [pin, setPin] = useState("");
  const [numeroTarjeta, setNumeroTarjeta] = useState("");
  const [cvv, setCvv] = useState("");
  const navigate = useNavigate();/*importante para instanciar navigate y navegar entre paginas desde una funcion javascript*/

  const handleIngresar = () => {
    if (activeTab === "ahorros") {
      console.log("Ingresando a cuenta de ahorros:", { numeroCuenta, pin });
       navigate("/AccountFunction");
    } else {
      console.log("Ingresando a tarjeta de crédito:", { numeroTarjeta, cvv, pin });
      navigate("/CardFunction");
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
              <button onClick={handleIngresar} className="cajero-button">
                Ingresar
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
        <p className="cajero-footer-text">           </p>
      </footer>
    </div>
  );
}

export default LoginCard;
