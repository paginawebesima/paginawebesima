import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

export default function Page404() {
  return (
    <div>
    <header className="">
        <NavBar />
        <div className="imagen20 clase1">
          <h1></h1>
          <h3 className="texto-principal">Pagina 404 <br/> Esta pagina no existe </h3>
        </div>
    </header>
    <div className="div_boton404">
    <Link className="boton404" to='/'>Volver al inicio</Link>
    </div>
    <Footer/>
    </div>
  )
}
