import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

export default function NavBar() {
  const location = useLocation();
  const [slidebarVisible, setSlidebarVisible] = useState(false);

  const openSlidebar = () => {
    setSlidebarVisible(true);
  };

  const closeSlidebar = () => {
    setSlidebarVisible(false);
  };

  return (
    <>
      <nav className={`header clase2 ${slidebarVisible ? 'hidden' : ''}`}>
        <Link to="/"><img className="logo" src="/LogoEsima.png" alt="Esima" /></Link>
          <Link to="/preinscripciones" className={`enlace ${location.pathname === "/preinscripciones" ? "active" : ""}`}>Preinscripciones</Link>
          <Link to="/talleres" className={`enlace ${location.pathname === "/talleres" ? "active" : ""}`}>Talleres</Link>
          <Link to="/graduaciones" className={`enlace ${location.pathname === "/graduaciones" ? "active" : ""}`}>Clausura</Link>
          <Link to="/administrativos" className={`enlace ${location.pathname === "/administrativos" ? "active" : ""}`}>Administrativos</Link>
          <Link to="/login" className={`login ${location.pathname === "/login" ? "active" : ""}`}>Iniciar Sesión</Link>
        <div className="slidebar-toggle" onClick={openSlidebar}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="30px"
            viewBox="0 -960 960 960"
            width="30px"
            fill="#ffffff"
          >
            <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
          </svg>
        </div>
      </nav>
      {slidebarVisible && (
        <nav className="slidebar">
          <div className="slidebar-toggle" onClick={closeSlidebar}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="30px"
              viewBox="0 -960 960 960"
              width="30px"
              fill="#ffffff"
            >
              <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
            </svg>
          </div>
          <Link to="/preinscripciones" className={`enlace ${location.pathname === "/preinscripciones" ? "active" : ""}`}>Preinscripciones</Link>
          <Link to="/talleres" className={`enlace ${location.pathname === "/talleres" ? "active" : ""}`}>Talleres</Link>
          <Link to="/graduaciones" className={`enlace ${location.pathname === "/graduaciones" ? "active" : ""}`}>Clausura</Link>
          <Link to="/administrativos" className={`enlace ${location.pathname === "/administrativos" ? "active" : ""}`}>Administrativos</Link>
          <Link to="/login" className={`enlace ${location.pathname === "/login" ? "active" : ""}`}>Iniciar Sesión</Link>
        </nav>
      )}
    </>
  );
}
