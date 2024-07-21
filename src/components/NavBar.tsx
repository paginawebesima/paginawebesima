import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { useQueryClient } from "react-query";

export default function NavBar() {
  const location = useLocation();
  const [slidebarVisible, setSlidebarVisible] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const closeSlidebar = () => {
    setSlidebarVisible(false);
  };

  useEffect(() => {
    const authToken = localStorage.getItem('AUTH_TOKEN');
    setIsLoggedIn(!!authToken); 

    if (isLoggedIn) {
      closeSlidebar();
    }
  }, [isLoggedIn]);

  const queryClient = useQueryClient()
  const handleLogout = () => {
    localStorage.removeItem('AUTH_TOKEN');
    localStorage.removeItem('USER_ROL');
    queryClient.invalidateQueries({queryKey: ['Usuarios']})
    setIsLoggedIn(false);
  };

  const openSlidebar = () => {
    setSlidebarVisible(true);
  };

  return (
    <>
      <nav className={`header clase2 ${slidebarVisible ? 'hidden' : ''}`}>
        <Link to="/"><img className="logo" src="/LogoEsima.png" alt="Esima" /></Link>
        <Link to="/preinscripciones" className={`enlace ${location.pathname === "/preinscripciones" ? "active" : ""}`}>Preinscripciones</Link>
        <Link to="/talleres" className={`enlace ${location.pathname === "/talleres" ? "active" : ""}`}>Talleres</Link>
        <Link to="/graduaciones" className={`enlace ${location.pathname === "/graduaciones" ? "active" : ""}`}>Clausura</Link>
        <Link to="/administrativos" className={`enlace ${location.pathname === "/administrativos" ? "active" : ""}`}>Administrativos</Link>
        {isLoggedIn ? (
          <Link to="/" className="login" onClick={handleLogout}>Cerrar Sesión</Link>
        ) : (
          <Link to="/login" className={`login ${location.pathname === "/login" ? "active" : ""}`}>Iniciar Sesión</Link>
        )}
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
          {isLoggedIn ? (
            <Link to="/" className="enlace" onClick={handleLogout}>Cerrar Sesión</Link>
          ) : (
            <Link to="/login" className={`enlace ${location.pathname === "/login" ? "active" : ""}`}>Iniciar Sesión</Link>
          )}
        </nav>
      )}
    </>
  );
}
