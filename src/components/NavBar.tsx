import { Link, useLocation } from "react-router-dom"
export default function NavBar() {
  const location = useLocation();
  return (
    <>
      <nav className="header clase2">
        <Link to='/'><img className="logo" src="LogoEsima.png" alt="Esima" /></Link>
        <Link className={`enlace ${location.pathname === '/preinscripciones' ? 'active' : ''}`} to="/preinscripciones">Preinscripciones</Link>
        <Link className={`enlace ${location.pathname === '/talleres' ? 'active' : ''}`} to="/talleres">Talleres</Link>
        <Link className={`enlace ${location.pathname === '/graduaciones' ? 'active' : ''}`} to="/graduaciones">Clausura</Link>
        <Link className={`enlace ${location.pathname === '/administrativos' ? 'active' : ''}`} to="/administrativos">Administrativos</Link>
        <Link className={`enlace ${location.pathname === '/login' ? 'active' : ''}`} to="/login">Iniciar Sesión</Link>
      </nav>
    </>
  )
}
