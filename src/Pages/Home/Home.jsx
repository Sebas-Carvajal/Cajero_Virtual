import "./Home.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home-container">
      <header className="home-header">
        <h1 className="home-title">Cajero Virtual</h1>
      </header>

      <main className="home-main">
        <div className="home-card">
          <h2 className="home-welcome">¡Bienvenido!</h2>
          <p className="home-text">
            Bienvenido a tu <strong>Cajero Virtual</strong>.  
            Desde aquí podrás acceder a tus cuentas y tarjetas.
          </p>

          <Link to="/login">
            <button className="home-button">Ir al inicio de sesión</button>
          </Link>
        </div>
      </main>

      <footer className="home-footer">
        <p>© 2025 Cajero Virtual</p>
      </footer>
    </div>
  );
}

export default Home;
