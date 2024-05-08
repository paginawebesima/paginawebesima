import { Link } from "react-router-dom"
export default function NavBar() {
  return (
    <>
        <nav className="header clase2">
            <Link to='/'><img className="" src="LogoEsima.png" alt="Esima" /></Link>
            <Link className="enlace " to='#'>Preincipciones</Link>
            <Link className="enlace " to='#'>Talleres</Link>
            <Link className="enlace " to='#'>Graduaciones</Link>
            <Link className="enlace " to='#'>Administrativos</Link>
            <Link className="enlace" to='#'>Iniciar Sesion</Link>
        </nav>
    </>
  )
}
