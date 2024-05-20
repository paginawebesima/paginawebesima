import { Link } from "react-router-dom"
export default function NavBar() {
  return (
    <>
        <nav className="header clase2">
            <Link to='/'><img className="imagenenlace" src="LogoEsima.png" alt="Esima" /></Link>
            <Link className="enlace " to='/preinscripciones'>Preinscripciones</Link>
            <Link className="enlace " to='/talleres'>Talleres</Link>
            <Link className="enlace " to='/clausura'>Clausura</Link>
            <Link className="enlace " to='/administrativos'>Administrativos</Link>
            <Link className="enlace" to='/login'>Iniciar Sesion</Link>
        </nav>
    </>
  )
}
